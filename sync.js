// ── SUPABASE SYNC ─────────────────────────────────────────────────────────────
const SYNC_DEBOUNCE = 3000;
let _db = null;
let _syncTimer = null;
let _pendingEmail = null;
let _session = null;   // session cachée — pas d'appel réseau dans syncDown/syncUp
let _syncing = false;  // verrou anti-doublons

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
  ]);
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function supaInit() {
  if (typeof SUPA_URL === 'undefined' || SUPA_URL.includes('XXXXXXXXXX')) return;
  if (!window.supabase) return;

  _db = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
    auth: { persistSession: true, storageKey: 'pv1-auth' }
  });

  _db.auth.onAuthStateChange((event, session) => {
    _session = session;
    if (session) {
      hideAuthOverlay();
      if (!_syncing) syncDown();
    } else if (event === 'SIGNED_OUT') {
      setSyncDot('offline');
    }
  });

  // Re-sync when the tab becomes visible or the window gets focus
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && _session) syncDown();
  });
  window.addEventListener('focus', () => { if (_session) syncDown(); });

  // Polling toutes les 30 secondes
  setInterval(() => { if (_session) syncDown(); }, 30000);
}

// ── Pull remote → local ───────────────────────────────────────────────────────
async function syncDown() {
  if (!_db || !_session || _syncing) return;
  _syncing = true;
  setSyncDot('syncing');

  try {
    const { data, error } = await withTimeout(
      _db.from('plans')
        .select('data, updated_at')
        .eq('user_id', _session.user.id)
        .maybeSingle(),
      8000
    );

    if (error) { setSyncDot('error'); return; }
    if (!data)  { setSyncDot('ok');    return; }

    const remoteTs = new Date(data.updated_at).getTime();
    const localTs  = st.updatedAt || 0;

    if (remoteTs > localTs) {
      Object.assign(st, data.data);
      save(false);
      rAll();
    }
    setSyncDot('ok');
  } catch (_) {
    setSyncDot('error');
  } finally {
    _syncing = false;
  }
}

// ── Push local → remote ───────────────────────────────────────────────────────
async function syncUp() {
  if (!_db || !_session) return;

  try {
    st.updatedAt = Date.now();
    localStorage.setItem('pv1', JSON.stringify(st));
    const { error } = await withTimeout(
      _db.from('plans').upsert(
        { user_id: _session.user.id, data: st, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      ),
      8000
    );
    setSyncDot(error ? 'error' : 'ok');
  } catch (_) {
    setSyncDot('error');
  }
}

// Called by save() in app.js
function scheduleSyncUp() {
  if (!_db || !_session) return;
  clearTimeout(_syncTimer);
  setSyncDot('pending');
  _syncTimer = setTimeout(syncUp, SYNC_DEBOUNCE);
}

// ── Sync dot ──────────────────────────────────────────────────────────────────
function setSyncDot(state) {
  const el = document.getElementById('sync-dot');
  if (!el) return;
  const cfg = {
    ok:      { c: '#22c55e', t: 'Synchronisé' },
    pending: { c: '#f59e0b', t: 'Sync en cours…' },
    syncing: { c: '#3b82f6', t: 'Téléchargement…' },
    error:   { c: '#ef4444', t: 'Erreur de sync' },
    offline: { c: '#94a3b8', t: 'Hors ligne' },
  };
  const s = cfg[state] || cfg.offline;
  el.style.background = s.c;
  el.title = s.t;
}

// ── Auth overlay ──────────────────────────────────────────────────────────────
function showAuthOverlay() {
  document.getElementById('auth-overlay').classList.add('visible');
}
function hideAuthOverlay() {
  document.getElementById('auth-overlay').classList.remove('visible');
}
function authSkip() {
  hideAuthOverlay();
}

async function authSendOTP() {
  const email = document.getElementById('auth-email').value.trim();
  if (!email || !_db) return;
  const btn = document.getElementById('auth-btn-send');
  btn.disabled = true; btn.textContent = 'Envoi…';
  try {
    const { error } = await _db.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
    if (error) throw error;
    _pendingEmail = email;
    document.getElementById('auth-s1').style.display = 'none';
    document.getElementById('auth-s2').style.display = 'block';
    document.getElementById('auth-sent-to').textContent = email;
  } catch (e) {
    alert('Erreur : ' + e.message);
    btn.disabled = false; btn.textContent = 'Recevoir le code';
  }
}

async function authVerifyOTP() {
  const token = document.getElementById('auth-otp').value.trim();
  if (!token || !_db || !_pendingEmail) return;
  const btn = document.getElementById('auth-btn-verify');
  btn.disabled = true; btn.textContent = 'Vérification…';
  try {
    const { error } = await _db.auth.verifyOtp({ email: _pendingEmail, token, type: 'email' });
    if (error) throw error;
  } catch (_) {
    alert('Code incorrect ou expiré. Réessaie.');
    btn.disabled = false; btn.textContent = 'Se connecter';
  }
}

// ── Settings sync UI ──────────────────────────────────────────────────────────
function updateSyncUI() {
  if (!_db) {
    const el = document.getElementById('sync-settings-status');
    if (el) el.textContent = 'Supabase non configuré (voir config.js)';
    return;
  }
  const user = _session?.user || null;
  const emailEl  = document.getElementById('sync-user-email');
  const logoutEl = document.getElementById('sync-logout-wrap');
  const loginEl  = document.getElementById('sync-login-wrap');
  if (emailEl)  emailEl.textContent   = user ? user.email : 'Non connecté';
  if (logoutEl) logoutEl.style.display = user ? '' : 'none';
  if (loginEl)  loginEl.style.display  = user ? 'none' : '';
}

async function syncLogout() {
  if (!_db) return;
  await _db.auth.signOut();
  _session = null;
  setSyncDot('offline');
  updateSyncUI();
}

function syncLoginAgain() {
  document.getElementById('auth-s1').style.display = '';
  document.getElementById('auth-s2').style.display = 'none';
  document.getElementById('auth-email').value = '';
  showAuthOverlay();
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', supaInit);
