// ── SUPABASE SYNC ─────────────────────────────────────────────────────────────
const SYNC_DEBOUNCE = 3000;
let _db = null;
let _syncTimer = null;
let _pendingEmail = null;

// ── Init ──────────────────────────────────────────────────────────────────────
async function supaInit() {
  if (typeof SUPA_URL === 'undefined' || SUPA_URL.includes('XXXXXXXXXX')) return;
  if (!window.supabase) return;

  _db = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
    auth: { persistSession: true, storageKey: 'pv1-auth' }
  });

  // Auth state changes (login / logout / token refresh)
  _db.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      hideAuthOverlay();
      setSyncDot('syncing');
      await syncDown();
    } else if (event === 'SIGNED_OUT') {
      setSyncDot('offline');
    }
  });

  // Resume existing session
  const { data: { session } } = await _db.auth.getSession();
  if (!session) showAuthOverlay();

  // Re-sync when the tab becomes visible or the window gets focus
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && _db) syncDown();
  });
  window.addEventListener('focus', () => { if (_db) syncDown(); });

  // Polling toutes les 30 secondes (sync cross-device automatique)
  setInterval(() => { if (_db) syncDown(); }, 30000);
}

// ── Pull remote → local ───────────────────────────────────────────────────────
async function syncDown() {
  if (!_db) return;
  const { data: { user } } = await _db.auth.getUser();
  if (!user) return;

  try {
    const { data, error } = await _db.from('plans')
      .select('data, updated_at')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error || !data) { setSyncDot('ok'); return; }

    const remoteTs = new Date(data.updated_at).getTime();
    const localTs  = st.updatedAt || 0;

    if (remoteTs > localTs) {
      Object.assign(st, data.data);
      save(false); // persist locally without re-triggering syncUp
      rAll();
    }
    setSyncDot('ok');
  } catch (_) {
    setSyncDot('error');
  }
}

// ── Push local → remote ───────────────────────────────────────────────────────
async function syncUp() {
  if (!_db) return;
  const { data: { user } } = await _db.auth.getUser();
  if (!user) return;

  try {
    st.updatedAt = Date.now();
    localStorage.setItem('pv1', JSON.stringify(st));
    const { error } = await _db.from('plans').upsert(
      { user_id: user.id, data: st, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
    setSyncDot(error ? 'error' : 'ok');
  } catch (_) {
    setSyncDot('error');
  }
}

// Called by save() in app.js
function scheduleSyncUp() {
  if (!_db) return;
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
    // onAuthStateChange handles the rest
  } catch (_) {
    alert('Code incorrect ou expiré. Réessaie.');
    btn.disabled = false; btn.textContent = 'Se connecter';
  }
}

// ── Settings sync UI ──────────────────────────────────────────────────────────
async function updateSyncUI() {
  if (!_db) {
    const el = document.getElementById('sync-settings-status');
    if (el) el.textContent = 'Supabase non configuré (voir config.js)';
    return;
  }
  const { data: { user } } = await _db.auth.getUser();
  const emailEl  = document.getElementById('sync-user-email');
  const logoutEl = document.getElementById('sync-logout-wrap');
  const loginEl  = document.getElementById('sync-login-wrap');
  if (emailEl)  emailEl.textContent  = user ? user.email : 'Non connecté';
  if (logoutEl) logoutEl.style.display = user ? '' : 'none';
  if (loginEl)  loginEl.style.display  = user ? 'none' : '';
}

async function syncLogout() {
  if (!_db) return;
  await _db.auth.signOut();
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
