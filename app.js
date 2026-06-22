// ── LEVELS ───────────────────────────────────────────────────────────────────
const LEVELS=[
  {e:"La Recrue",n:"Premier Pas"},{e:"La Recrue",n:"Première Raquette"},{e:"La Recrue",n:"L'Éveil"},
  {e:"La Recrue",n:"Le Débutant Courageux"},{e:"La Recrue",n:"La Promesse"},{e:"La Recrue",n:"Les Premiers Points"},
  {e:"La Recrue",n:"La Volonté"},{e:"La Recrue",n:"Le Souffle"},{e:"La Recrue",n:"La Coordination"},
  {e:"La Recrue",n:"La Recrue Confirmée"},
  {e:"Le Joueur",n:"Le Service"},{e:"Le Joueur",n:"Le Lob"},{e:"Le Joueur",n:"Le Dégagé"},
  {e:"Le Joueur",n:"Le Filet"},{e:"Le Joueur",n:"Les Jambes"},{e:"Le Joueur",n:"Le Smash"},
  {e:"Le Joueur",n:"La Clairvoyance"},{e:"Le Joueur",n:"Le Regard du Court"},{e:"Le Joueur",n:"Le Joueur Régulier"},
  {e:"Le Joueur",n:"Le Joueur Confirmé"},
  {e:"Le Compétiteur",n:"La Première Victoire"},{e:"Le Compétiteur",n:"L'Adrénaline"},{e:"Le Compétiteur",n:"Le Tournoi"},
  {e:"Le Compétiteur",n:"La Préparation"},{e:"Le Compétiteur",n:"La Concentration"},{e:"Le Compétiteur",n:"La Pression"},
  {e:"Le Compétiteur",n:"Le Sang-Froid"},{e:"Le Compétiteur",n:"La Tactique"},{e:"Le Compétiteur",n:"La Constance"},
  {e:"Le Compétiteur",n:"Le Compétiteur Aguerri"},
  {e:"L'Athlète",n:"La Salle"},{e:"L'Athlète",n:"Le Sprint"},{e:"L'Athlète",n:"La Puissance"},
  {e:"L'Athlète",n:"La Mobilité"},{e:"L'Athlète",n:"L'Agilité"},{e:"L'Athlète",n:"L'Explosivité"},
  {e:"L'Athlète",n:"La Récupération"},{e:"L'Athlète",n:"La Nutrition"},{e:"L'Athlète",n:"Le Corps d'Athlète"},
  {e:"L'Athlète",n:"L'Athlète Accompli"},
  {e:"Le Guerrier",n:"Le Mental de Fer"},{e:"Le Guerrier",n:"La Zone"},{e:"Le Guerrier",n:"L'Impassibilité"},
  {e:"Le Guerrier",n:"Le Rebond"},{e:"Le Guerrier",n:"L'Adversité"},{e:"Le Guerrier",n:"La Résilience"},
  {e:"Le Guerrier",n:"La Rage de Vaincre"},{e:"Le Guerrier",n:"Le Point de Rupture"},{e:"Le Guerrier",n:"L'Invincibilité"},
  {e:"Le Guerrier",n:"Le Guerrier du Court"},
  {e:"L'Élite",n:"Le Classement"},{e:"L'Élite",n:"La Régularité Nationale"},{e:"L'Élite",n:"Le Circuit"},
  {e:"L'Élite",n:"Les Têtes de Série"},{e:"L'Élite",n:"La Performance"},{e:"L'Élite",n:"L'Efficacité"},
  {e:"L'Élite",n:"La Lecture du Jeu"},{e:"L'Élite",n:"La Précision Chirurgicale"},{e:"L'Élite",n:"La Constance Nationale"},
  {e:"L'Élite",n:"L'Élite Française"},
  {e:"Le Stratège",n:"La Vision de Jeu"},{e:"Le Stratège",n:"L'Anticipation"},{e:"Le Stratège",n:"Le Jeu de Feintes"},
  {e:"Le Stratège",n:"La Variation"},{e:"Le Stratège",n:"La Déstabilisation"},{e:"Le Stratège",n:"Le Contre-Pied"},
  {e:"Le Stratège",n:"La Maîtrise des Zones"},{e:"Le Stratège",n:"L'Intelligence Tactique"},{e:"Le Stratège",n:"La Lecture de l'Adversaire"},
  {e:"Le Stratège",n:"Le Stratège Accompli"},
  {e:"Le Maître",n:"La Touche de Balle"},{e:"Le Maître",n:"La Signature"},{e:"Le Maître",n:"Le Style"},
  {e:"Le Maître",n:"La Marque"},{e:"Le Maître",n:"La Répétition Parfaite"},{e:"Le Maître",n:"L'Automatisme"},
  {e:"Le Maître",n:"Le Geste Pur"},{e:"Le Maître",n:"La Beauté du Jeu"},{e:"Le Maître",n:"La Perfection Technique"},
  {e:"Le Maître",n:"Le Maître du Court"},
  {e:"La Légende",n:"L'Aura"},{e:"La Légende",n:"Le Respect des Adversaires"},{e:"La Légende",n:"L'Expérience"},
  {e:"La Légende",n:"La Sagesse du Court"},{e:"La Légende",n:"Le Mentor"},{e:"La Légende",n:"Le Modèle"},
  {e:"La Légende",n:"L'Héritage Sportif"},{e:"La Légende",n:"La Référence"},{e:"La Légende",n:"Le Rayonnement"},
  {e:"La Légende",n:"La Légende Vivante"},
  {e:"Le Champion",n:"Le Podium"},{e:"Le Champion",n:"Le Titre"},{e:"Le Champion",n:"La Coupe"},
  {e:"Le Champion",n:"La Médaille"},{e:"Le Champion",n:"L'Exploit"},{e:"Le Champion",n:"La Consécration"},
  {e:"Le Champion",n:"La Gloire"},{e:"Le Champion",n:"Le Nom dans l'Histoire"},{e:"Le Champion",n:"La Fierté"},
  {e:"Le Champion",n:"Le Champion"},
];

// ── DEFAULT HABITS ────────────────────────────────────────────────────────────
// days: 'both' | 'week' | 'weekend'
const DEFAULT_HABS=[
  {id:'reveil',  n:'Réveil correct',   xp:10,w:10,ic:'🌅',days:'both'},
  {id:'nicotine',n:'Zéro nicotine',    xp:25,w:25,ic:'🚭',days:'both'},
  {id:'repas',   n:'4 repas',          xp:15,w:15,ic:'🥗',days:'both'},
  {id:'seance',  n:'Séance de bad',    xp:30,w:30,ic:'🏸',days:'week'},
  {id:'sport',   n:'30 min sport',     xp:20,w:20,ic:'🏃',days:'weekend'},
  {id:'mobilite',n:'Mobilité 10 min',  xp:10,w:10,ic:'🧘',days:'both'},
];
const DEFAULT_HWK=[
  {id:'visu1', n:'Visionnage match 1',      xp:20,w:10,ic:'📹'},
  {id:'visu2', n:'Visionnage match 2',      xp:20,w:10,ic:'📹'},
  {id:'rituel',n:'Rituel du dimanche soir', xp:25,w:10,ic:'🌙'},
];

// ── TROPHIES ──────────────────────────────────────────────────────────────────
const TROPHIES=[
  {id:'nic7',  ic:'💪',n:'7 jours sans nicotine',  d:'La première vraie semaine'},
  {id:'nic30', ic:'💪',n:'30 jours sans nicotine', d:'Un mois de liberté'},
  {id:'nic100',ic:'💪',n:'100 jours sans nicotine',d:'Le changement est permanent'},
  {id:'str3',  ic:'🔥',n:'3 jours de suite',       d:'Le rythme commence'},
  {id:'str7',  ic:'🔥',n:'7 jours de suite',       d:"La discipline s'installe"},
  {id:'str14', ic:'🔥',n:'14 jours de suite',      d:'Deux semaines sans faillir'},
  {id:'str30', ic:'⚡',n:'30 jours de suite',      d:'Un mois parfait'},
  {id:'str60', ic:'⚡',n:'60 jours de suite',      d:'La machine est lancée'},
  {id:'str100',ic:'⚡',n:'100 jours de suite',     d:'Indestructible'},
  {id:'bad10', ic:'🏸',n:'10 séances de bad',      d:'Le travail commence'},
  {id:'bad25', ic:'🏸',n:'25 séances de bad',      d:'La régularité paie'},
  {id:'bad50', ic:'🏸',n:'50 séances de bad',      d:'Mi-chemin vers le sommet'},
  {id:'bad100',ic:'🏸',n:'100 séances de bad',     d:'100 fois sur le court'},
  {id:'mob10', ic:'🧘',n:'10 séances mobilité',    d:'Le corps prend soin de lui'},
  {id:'mob30', ic:'🧘',n:'30 séances mobilité',    d:'La souplesse devient une force'},
  {id:'days10', ic:'📅',n:'10 jours actifs',       d:"La routine s'installe"},
  {id:'days30', ic:'📅',n:'30 jours actifs',       d:'Un mois dans la course'},
  {id:'days100',ic:'📅',n:'100 jours actifs',      d:'Cent jours de construction'},
  {id:'xp500',  ic:'⭐',n:'500 XP accumulés',      d:'Les premiers points comptent'},
  {id:'xp2000', ic:'⭐',n:'2 000 XP accumulés',    d:'La progression est réelle'},
  {id:'xp5000', ic:'⭐',n:'5 000 XP accumulés',    d:'Un capital solide'},
  {id:'xp10000',ic:'⭐',n:'10 000 XP accumulés',   d:"Le sommet de l'iceberg"},
  {id:'lvl5',  ic:'🎯',n:'Niveau 5 atteint',       d:'Premier cap franchi'},
  {id:'lvl10', ic:'⚔️',n:'Niveau 10 atteint',     d:'Le Joueur confirmé'},
  {id:'lvl25', ic:'🏅',n:'Niveau 25 atteint',      d:"Le Compétiteur s'affirme"},
  {id:'lvl50', ic:'👑',n:'Niveau 50 atteint',      d:'Le Guerrier du Court'},
  {id:'wkperf1',ic:'✅',n:'1 semaine parfaite',    d:'100% une semaine entière'},
  {id:'wkperf4',ic:'✅',n:'4 semaines parfaites',  d:'Un mois sans relâche'},
  {id:'bal50', ic:'💰',n:'50 € en cagnotte',       d:'La récompense se construit'},
  {id:'bal200',ic:'💰',n:'200 € en cagnotte',      d:"L'investissement en toi-même"},
  {id:'top50',   ic:'🏸',n:'Top 50 Français',      d:"Dans l'élite nationale",    manual:true},
  {id:'top40',   ic:'🏸',n:'Top 40 Français',      d:'Un pas de plus vers le but', manual:true},
  {id:'top20',   ic:'🏸',n:'Top 20 Français',      d:"L'objectif accompli",        manual:true},
  {id:'tournoi1',ic:'🏆',n:'Premier tournoi S1',   d:'Le baptême du feu',          manual:true},
  {id:'victoire1',ic:'🏆',n:'1ère victoire tournoi',d:'Le goût du succès',         manual:true},
  {id:'bilan4', ic:'📝',n:'4 bilans réalisés',     d:'La réflexion devient habitude'},
  {id:'bilan12',ic:'📝',n:'12 bilans réalisés',    d:'Trois mois de recul'},
  {id:'impact',ic:'🚀',n:'Impact lancé',            d:"L'entrepreneur est né",      manual:true},
  {id:'buy1',  ic:'🎉',n:'Premier plaisir mérité', d:'La récompense bien gagnée'},
];

// ── XP CURVE ─────────────────────────────────────────────────────────────────
function xpToLevel(n){return Math.round(150*Math.pow(n,1.7));}
function cumXP(n){let t=0;for(let i=1;i<=n;i++)t+=xpToLevel(i);return t;}
const CUM=[];for(let i=0;i<=100;i++)CUM[i]=cumXP(i);
function getLvl(totalXP){
  let lv=1;
  while(lv<100&&totalXP>=CUM[lv])lv++;
  const prev=lv>1?CUM[lv-1]:0;
  return{lv,cur:totalXP-prev,need:CUM[lv]-prev,data:LEVELS[lv-1]};
}

// ── STATE ─────────────────────────────────────────────────────────────────────
function defState(){
  return{totalXP:0,streak:0,lastDate:null,days:{},wkHabits:{},balance:0,txs:[],trophies:[],totalDays:0,nicStreak:0,bilans:{},habAll:null,habWK:null,s1End:'2027-06-30',updatedAt:0,tasks:[]};
}
function load(){
  try{
    const s=localStorage.getItem('pv1');if(!s)return defState();
    const saved=JSON.parse(s);const def=defState();
    return{...def,...saved,days:saved.days||{},bilans:saved.bilans||{},txs:saved.txs||[],trophies:saved.trophies||[],tasks:saved.tasks||[]};
  }catch(e){return defState();}
}
function save(sync=true){
  localStorage.setItem('pv1',JSON.stringify(st));
  if(sync&&typeof scheduleSyncUp==='function')scheduleSyncUp();
}
let st=load();

// ── HELPERS ───────────────────────────────────────────────────────────────────
function dk(){return new Date().toISOString().slice(0,10);}
function wk(d){const dt=new Date(d);const j=new Date(dt.getFullYear(),0,1);return dt.getFullYear()+'-'+Math.ceil(((dt-j)/86400000+j.getDay()+1)/7);}
function nextWkKey(){const d=new Date();d.setDate(d.getDate()+7);return wk(d.toISOString().slice(0,10));}
function planningTargetWkKey(){
  const day=new Date().getDay(),d=new Date();
  if(day===0){d.setDate(d.getDate()+1);return wk(d.toISOString().slice(0,10));}
  if(day===1)return wk(dk());
  d.setDate(d.getDate()+7);return wk(d.toISOString().slice(0,10));
}
function isWE(d){const dt=new Date(d+'T12:00:00');return dt.getDay()===0||dt.getDay()===6;}
function getHabAll(){return st.habAll||DEFAULT_HABS;}
function getHabWK(){return st.habWK||DEFAULT_HWK;}
function habs(d){
  const all=getHabAll(),we=isWE(d);
  return all.filter(h=>h.days==='both'||(we?h.days==='weekend':h.days==='week'));
}
function gday(d){if(!st.days[d])st.days[d]={};return st.days[d];}
function getBPW(){
  const dailyW=getHabAll().reduce((s,h)=>{const d=h.days==='both'?7:h.days==='week'?5:2;return s+(h.w||0)*d;},0);
  const weeklyW=getHabWK().reduce((s,h)=>s+(h.w||0),0);
  const mw=dailyW+weeklyW;
  return mw>0?30/mw:0;
}
function getHabEmoji(id){
  const all=[...getHabAll(),...getHabWK()];
  const h=all.find(x=>x.id===id);
  const fallback={reveil:'🌅',nicotine:'🚭',repas:'🥗',seance:'🏸',mobilite:'🧘',sport:'🏃',visu1:'📹',visu2:'📹',rituel:'🌙'};
  return(h&&h.ic)||fallback[id]||'⭐';
}

// ── CALCULATIONS ──────────────────────────────────────────────────────────────
function dayBgt(d){
  const data=st.days[d];if(!data)return 0;
  const bpw=getBPW();
  return habs(d).reduce((s,h)=>s+(data[h.id]?(h.w||0)*bpw:0),0);
}
function dayXP(d){
  const data=st.days[d];if(!data)return 0;
  const hs=habs(d);let xp=0,all=true;
  hs.forEach(h=>{if(data[h.id])xp+=h.xp;else all=false;});
  return all&&hs.length>0?Math.round(xp*1.5):xp;
}
function wkBgt(){
  const dailyBgt=getWkDates().reduce((s,d)=>s+dayBgt(d),0);
  const wkd=st.wkHabits[wk(dk())]||{};
  const bpw=getBPW();
  const weeklyBgt=getHabWK().reduce((s,h)=>s+(wkd[h.id]?(h.w||0)*bpw:0),0);
  return dailyBgt+weeklyBgt;
}
function wkXP(){
  let x=getWkDates().reduce((s,d)=>s+dayXP(d),0);
  const wkd=st.wkHabits[wk(dk())]||{};
  getHabWK().forEach(h=>{if(wkd[h.id])x+=h.xp;});
  return x;
}
function getWkDates(){
  const t=new Date(),day=t.getDay(),mon=new Date(t);
  mon.setDate(t.getDate()-((day+6)%7));
  return Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d.toISOString().slice(0,10);});
}
function avg4WkCompletion(){
  const now=new Date();let done=0,possible=0;
  for(let w=1;w<=4;w++){
    const base=new Date(now);base.setDate(base.getDate()-w*7);
    const day=base.getDay(),mon=new Date(base);mon.setDate(base.getDate()-((day+6)%7));
    const dates=Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d.toISOString().slice(0,10);});
    dates.forEach(date=>{
      const data=st.days[date],hs=habs(date);
      if(hs.length>0){possible+=hs.length;if(data)done+=hs.filter(h=>data[h.id]).length;}
    });
  }
  return possible>0?Math.round(done/possible*100):null;
}
function recalcTotalXP(){
  let total=0;
  Object.keys(st.days).forEach(d=>{total+=dayXP(d);});
  Object.keys(st.wkHabits).forEach(wkKey=>{
    const wkd=st.wkHabits[wkKey];
    getHabWK().forEach(h=>{if(wkd&&wkd[h.id])total+=h.xp;});
  });
  return total;
}

// ── TROPHIES ──────────────────────────────────────────────────────────────────
function checkTrophies(){
  const prev=[...st.trophies];
  const u=id=>{if(!st.trophies.includes(id))st.trophies.push(id);};
  const li=getLvl(st.totalXP);
  if(li.lv>=5)u('lvl5');if(li.lv>=10)u('lvl10');if(li.lv>=25)u('lvl25');if(li.lv>=50)u('lvl50');
  if(st.streak>=3)u('str3');if(st.streak>=7)u('str7');if(st.streak>=14)u('str14');
  if(st.streak>=30)u('str30');if(st.streak>=60)u('str60');if(st.streak>=100)u('str100');
  const ns=getNicStreak();
  if(ns>=7)u('nic7');if(ns>=30)u('nic30');if(ns>=100)u('nic100');
  if(st.totalDays>=10)u('days10');if(st.totalDays>=30)u('days30');if(st.totalDays>=100)u('days100');
  if(st.totalXP>=500)u('xp500');if(st.totalXP>=2000)u('xp2000');
  if(st.totalXP>=5000)u('xp5000');if(st.totalXP>=10000)u('xp10000');
  const allDays=Object.entries(st.days);
  const badCount=allDays.filter(([,d])=>d.seance).length;
  const mobCount=allDays.filter(([,d])=>d.mobilite).length;
  if(badCount>=10)u('bad10');if(badCount>=25)u('bad25');if(badCount>=50)u('bad50');if(badCount>=100)u('bad100');
  if(mobCount>=10)u('mob10');if(mobCount>=30)u('mob30');
  let perfWks=0;
  const now=new Date();
  for(let i=0;i<52;i++){
    const d=new Date(now);d.setDate(d.getDate()-i*7);
    const day=d.getDay(),mon=new Date(d);mon.setDate(d.getDate()-((day+6)%7));
    const wDates=Array.from({length:7},(_,j)=>{const x=new Date(mon);x.setDate(mon.getDate()+j);return x.toISOString().slice(0,10);});
    if(wkCompletion(wDates)>=100)perfWks++;
  }
  if(perfWks>=1)u('wkperf1');if(perfWks>=4)u('wkperf4');
  if(st.balance>=50)u('bal50');if(st.balance>=200)u('bal200');
  const bilanCount=Object.keys(st.bilans||{}).filter(k=>st.bilans[k].bilan&&st.bilans[k].bilan.trim()).length;
  if(bilanCount>=4)u('bilan4');if(bilanCount>=12)u('bilan12');
  if(st.txs.some(t=>t.type==='spend'))u('buy1');
  st.trophies.filter(id=>!prev.includes(id)).forEach((id,i)=>{
    const t=TROPHIES.find(x=>x.id===id);
    if(t)showTrophyToast(t,i*3200);
  });
}
function showTrophyToast(t,delay){
  setTimeout(()=>{
    const el=document.getElementById('trophy-toast');
    el.innerHTML=`<span style="font-size:24px">${t.ic}</span><div><div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#8a6300;margin-bottom:2px">Trophée débloqué !</div><div style="font-size:13px;font-weight:700;color:#6b4c00">${t.n}</div></div>`;
    el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'),2600);
  },delay||0);
}

// ── RENDER — HEADER ───────────────────────────────────────────────────────────
function rHdr(){
  const li=getLvl(st.totalXP);
  document.getElementById('h-lname').textContent=li.data.n;
  document.getElementById('h-era').textContent=li.data.e+' · Niveau '+li.lv;
  document.getElementById('h-streak').textContent=st.streak;
  document.getElementById('h-xp-cur').textContent=li.cur+' XP';
  document.getElementById('h-xp-nxt').textContent='/ '+li.need+' XP';
  document.getElementById('h-xp-bar').style.width=Math.min(100,li.need>0?li.cur/li.need*100:100)+'%';
}

// ── RENDER — TODAY ────────────────────────────────────────────────────────────
function rToday(){
  const key=dk(),data=gday(key),hs=habs(key),we=isWE(key);
  const days=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const months=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const d=new Date();
  document.getElementById('td-date').textContent=days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()];
  document.getElementById('td-type').textContent=we?'Week-end':'Semaine';
  document.getElementById('td-bgt').textContent=dayBgt(key).toFixed(2);
  document.getElementById('td-xp').textContent=dayXP(key);
  const allDone=hs.every(h=>data[h.id]);
  document.getElementById('combo').classList.toggle('show',allDone&&hs.length>0);
  const list=document.getElementById('hlist');list.innerHTML='';
  hs.forEach(h=>{
    const done=!!data[h.id];
    const el=document.createElement('div');el.className='hi'+(done?' done':'');
    el.innerHTML=`<div class="hc"><svg class="ck" viewBox="0 0 12 12"><polyline points="1.5,6 5,9.5 10.5,2.5"/></svg></div><div class="hinfo"><div class="hn">${h.n}</div><div class="hx">+${h.xp} XP</div></div>`;
    el.onclick=()=>tog(h.id);list.appendChild(el);
  });
  const wkKey=wk(key),wkd=st.wkHabits[wkKey]||{};
  const wlist=document.getElementById('wlist');wlist.innerHTML='';
  getHabWK().forEach(h=>{
    const done=!!wkd[h.id];
    const el=document.createElement('div');el.className='hi'+(done?' done':'');
    el.innerHTML=`<div class="hc"><svg class="ck" viewBox="0 0 12 12"><polyline points="1.5,6 5,9.5 10.5,2.5"/></svg></div><div class="hinfo"><div class="hn">${h.n}</div><div class="hx">+${h.xp} XP</div></div>`;
    el.onclick=()=>togWk(h.id);wlist.appendChild(el);
  });
}

// ── SAISON ────────────────────────────────────────────────────────────────────
const S1_END='2027-06-30';
const S1_START='2026-06-15';
const DAY_INITIALS=['L','M','M','J','V','S','D'];
let wkOffset=0;

function rCountdown(){
  const end=new Date((st.s1End||S1_END)+'T12:00:00');
  const start=new Date(S1_START+'T12:00:00');
  const now=new Date();
  const total=Math.round((end-start)/86400000);
  const elapsed=Math.round((now-start)/86400000);
  const remaining=Math.max(0,Math.round((end-now)/86400000));
  const pct=Math.min(100,Math.round(elapsed/total*100));
  document.getElementById('cd-days').textContent=remaining;
  document.getElementById('cd-bar').style.width=pct+'%';
  document.getElementById('cd-pct').textContent=pct+'% de la saison écoulé';
  const m=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  document.getElementById('cd-end-lbl').textContent=end.getDate()+' '+m[end.getMonth()]+' '+end.getFullYear();
}

// ── RENDER — SUIVI ────────────────────────────────────────────────────────────
function getWkDatesOffset(offset){
  const t=new Date();t.setDate(t.getDate()+offset*7);
  const day=t.getDay(),mon=new Date(t);mon.setDate(t.getDate()-((day+6)%7));
  return Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d.toISOString().slice(0,10);});
}
function shiftWk(dir){
  const next=wkOffset+dir;if(next>0)return;
  wkOffset=next;
  document.getElementById('day-detail').style.display='none';
  rSemaine();
}
function showDayDetail(date,el){
  const panel=document.getElementById('day-detail');
  document.querySelectorAll('.dc.selected').forEach(c=>c.classList.remove('selected'));
  if(panel.dataset.date===date&&panel.style.display!=='none'){panel.style.display='none';panel.dataset.date='';return;}
  el.classList.add('selected');
  panel.dataset.date=date;
  _renderDayDetail(date);
  panel.style.display='block';
}
function _renderDayDetail(date){
  const panel=document.getElementById('day-detail');
  const data=st.days[date]||{},hs=habs(date);
  const dt=new Date(date+'T12:00:00');
  const dayNms=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const mths=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const lbl=dayNms[dt.getDay()]+' '+dt.getDate()+' '+mths[dt.getMonth()];
  const xp=dayXP(date),done=hs.filter(h=>data[h.id]).length;
  const isPast=date<dk();
  panel.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
    <span style="font-size:13px;font-weight:700">${lbl}</span>
    <span style="font-size:12px;font-weight:700;color:var(--primary)">${done}/${hs.length} · +${xp} XP</span>
  </div>${hs.map(h=>`<div class="dr-hab${isPast?' dr-hab-past':''}" ${isPast?`onclick="togPast('${h.id}','${date}')"`:''}style="-webkit-tap-highlight-color:transparent">
    <div class="dr-hab-ic">${getHabEmoji(h.id)}</div>
    <div class="dr-hab-name${data[h.id]?' done':''}">${h.n}</div>
    <div class="dr-hab-check" style="color:${data[h.id]?'var(--success)':'var(--muted)'}">${data[h.id]?'✓':'–'}</div>
  </div>`).join('')}${isPast?'<div style="font-size:10px;color:var(--muted);text-align:center;margin:6px 0 2px">Appuie sur une habitude pour la cocher / décocher</div>':''}
  <div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--border)">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:4px">📝 Note</div>
    <textarea id="note-${date}" onblur="saveNote('${date}',this.value)" placeholder="Note pour cette journée..." style="width:100%;border:1px solid var(--border);border-radius:6px;padding:8px;font-size:12px;font-family:inherit;background:var(--bg);color:var(--text);resize:none;min-height:52px;box-sizing:border-box">${esc(data.note||'')}</textarea>
  </div>`;
}
function togPast(id,date){
  if(!st.days[date])st.days[date]={};
  st.days[date][id]=!st.days[date][id];
  st.txs=st.txs.filter(t=>!(t.date===date&&t._d));
  const nb=dayBgt(date);
  if(nb>0.001)st.txs.push({n:'Habitudes',a:nb,type:'earn',date,_d:true});
  st.totalXP=recalcTotalXP();
  st.balance=st.txs.reduce((s,t)=>s+(t.type==='earn'?t.a:-t.a),0);
  recalcStreak();
  checkTrophies();save();
  rHdr();rNicotine();rSemaine();rHeatmap();rTrophees();rCagnotte();
  const panel=document.getElementById('day-detail');
  if(panel.dataset.date===date)_renderDayDetail(date);
}
function recalcStreak(){
  const today=dk();
  let totalDays=0,lastDate=null;
  Object.entries(st.days).forEach(([date,data])=>{
    const hs=habs(date);
    if(hs.length>0&&hs.every(h=>data[h.id])){totalDays++;if(!lastDate||date>lastDate)lastDate=date;}
  });
  st.totalDays=totalDays;st.lastDate=lastDate;
  let streak=0;const d=new Date();
  const tData=st.days[today],tHs=habs(today);
  if(!(tData&&tHs.length>0&&tHs.every(h=>tData[h.id])))d.setDate(d.getDate()-1);
  for(let i=0;i<730;i++){
    const ds=d.toISOString().slice(0,10);
    const data=st.days[ds],hs=habs(ds);
    if(data&&hs.length>0&&hs.every(h=>data[h.id])){streak++;d.setDate(d.getDate()-1);}
    else break;
  }
  st.streak=streak;
}
function saveNote(date,val){
  if(!st.days[date])st.days[date]={};
  st.days[date].note=val.trim();
  save();
}
function rSemaine(){
  rWeekCompare();
  const today=dk();
  const li=getLvl(st.totalXP);
  document.getElementById('s-lvl').textContent=li.lv;
  document.getElementById('s-streak').textContent=st.streak;
  document.getElementById('s-days').textContent=st.totalDays;
  const avg4=avg4WkCompletion();
  const avg4el=document.getElementById('avg4wk');
  if(avg4el)avg4el.textContent=avg4!==null?avg4+'% de complétion (4 dernières semaines)':'Pas encore assez de données';
  document.getElementById('s-xptot').textContent=st.totalXP>999?Math.round(st.totalXP/100)/10+'k':st.totalXP;
  const wkDates=getWkDatesOffset(wkOffset);
  const months2=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'];
  const fd=new Date(wkDates[0]+'T12:00:00'),ld=new Date(wkDates[6]+'T12:00:00');
  const navLbl=wkOffset===0?'Cette semaine':fd.getDate()+' '+months2[fd.getMonth()]+' – '+ld.getDate()+' '+months2[ld.getMonth()]+' '+ld.getFullYear();
  document.getElementById('wk-nav-lbl').textContent=navLbl;
  document.getElementById('wk-next').disabled=wkOffset===0;
  document.getElementById('wk-prev').disabled=false;
  const DAY_SHORT=['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  const grid=document.getElementById('week-grid');grid.innerHTML='';
  wkDates.forEach((d,i)=>{
    const data=st.days[d],hs=habs(d);
    let pct=0;if(data&&hs.length>0)pct=hs.filter(h=>data[h.id]).length/hs.length;
    const dayNum=new Date(d+'T12:00:00').getDate();
    const cell=document.createElement('div');cell.className='dc'+(d===today?' today':'');
    let dc='dd'+(pct>=1?' full':pct>=0.9?' p90':pct>=0.75?' p75':pct>=0.5?' p50':pct>=0.25?' p25':pct>0?' p0':'');
    cell.innerHTML=`<div class="d-name">${DAY_SHORT[i]}</div><div class="d-num">${dayNum}</div><div class="${dc}"></div>`;
    cell.onclick=()=>showDayDetail(d,cell);grid.appendChild(cell);
  });
  const xpPerDay=wkDates.map(d=>dayXP(d));
  const maxXP=Math.max(...xpPerDay,1);
  const wx=xpPerDay.reduce((a,b)=>a+b,0);
  document.getElementById('w-xp-lbl').textContent=wx+' XP'+(wkOffset===0?' cette semaine':'');
  const chart=document.getElementById('xp-chart');chart.innerHTML='';
  const labels=document.getElementById('xp-chart-labels');labels.innerHTML='';
  wkDates.forEach((d,i)=>{
    const xp=xpPerDay[i],pct=Math.round(xp/maxXP*100),isToday=d===today;
    const col=document.createElement('div');col.className='xp-bar-col';
    col.innerHTML=`<div class="xp-bar-val">${xp>0?xp:''}</div><div class="xp-bar-fill${isToday?' today':''}" style="height:${pct}%"></div>`;
    chart.appendChild(col);
    const lbl=document.createElement('div');lbl.className='xp-bar-col';
    lbl.innerHTML=`<div class="xp-bar-lbl">${DAY_INITIALS[i]}</div>`;labels.appendChild(lbl);
  });
  const wb=wkDates.reduce((s,d)=>s+dayBgt(d),0);
  const selWkd=st.wkHabits[wk(wkDates[0])]||{};
  const bpwRef=getBPW();
  const wkHabBgt=getHabWK().reduce((s,h)=>s+(selWkd[h.id]?(h.w||0)*bpwRef:0),0);
  const totalWkBgt=wb+wkHabBgt;
  document.getElementById('w-bgt').textContent=totalWkBgt.toFixed(2)+' €';
  document.getElementById('w-bgt-bar').style.width=Math.min(100,totalWkBgt/30*100)+'%';
  rHabStats();
}
function rHabStats(){
  const el=document.getElementById('hab-stats');if(!el)return;
  const all=getHabAll();
  const stats={};all.forEach(h=>{stats[h.id]={n:h.n,ic:h.ic||'⭐',done:0,possible:0};});
  const now=new Date();
  for(let i=0;i<28;i++){
    const d=new Date(now);d.setDate(d.getDate()-i);
    const date=d.toISOString().slice(0,10);
    const hs=habs(date),data=st.days[date]||{};
    hs.forEach(h=>{if(stats[h.id]){stats[h.id].possible++;if(data[h.id])stats[h.id].done++;}});
  }
  el.innerHTML='';
  const entries=Object.values(stats).filter(s=>s.possible>0);
  if(!entries.length){el.innerHTML='<div style="font-size:12px;color:var(--muted);text-align:center;padding:8px">Pas encore assez de données</div>';return;}
  entries.forEach(s=>{
    const pct=Math.round(s.done/s.possible*100);
    const col=pct>=80?'var(--success)':pct>=50?'var(--gold)':'var(--danger)';
    const div=document.createElement('div');div.style.cssText='margin-bottom:8px';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px"><span style="font-size:12px">${s.ic} ${s.n}</span><span style="font-size:12px;font-weight:700;color:${col}">${pct}%</span></div><div style="background:var(--border);border-radius:3px;height:5px"><div style="width:${pct}%;height:5px;border-radius:3px;background:${col};transition:width .3s"></div></div>`;
    el.appendChild(div);
  });
}

// ── RENDER — TROPHÉES ─────────────────────────────────────────────────────────
function rTrophees(){
  const g=document.getElementById('tgrid');g.innerHTML='';
  TROPHIES.forEach(t=>{
    const un=st.trophies.includes(t.id);
    const c=document.createElement('div');c.className='tc '+(un?'unlocked':'locked');
    c.innerHTML=`<div class="ti">${un?t.ic:'🔒'}</div><div class="tn">${t.n}</div><div class="td">${un?t.d:'???'}</div>`;
    if(t.manual&&!un){c.style.opacity='.7';c.innerHTML+=`<div style="margin-top:8px"><button style="font-size:11px;padding:4px 10px;border:1px solid var(--gold);background:none;border-radius:6px;cursor:pointer;color:#8a6300" onclick="unlockManual('${t.id}')">Débloquer</button></div>`;}
    g.appendChild(c);
  });
}

// ── RENDER — CAGNOTTE ─────────────────────────────────────────────────────────
function rCagnotte(){
  const balCard=document.getElementById('bal-card');
  if(balCard)balCard.style.background=st.balance<0?'var(--danger)':'var(--primary)';
  document.getElementById('bal').textContent=st.balance.toFixed(2);
  document.getElementById('bal-wk').textContent=wkBgt().toFixed(2);
  const canvas=document.getElementById('bgt-chart');
  const ctx=canvas.getContext('2d');
  const W=canvas.offsetWidth||canvas.parentElement.offsetWidth||300;
  const H=80;
  canvas.width=W*window.devicePixelRatio;canvas.height=H*window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
  const sorted=[...st.txs].sort((a,b)=>a.date.localeCompare(b.date));
  let pts=[{d:'Départ',v:0}];let running=0;
  sorted.forEach(t=>{running+=(t.type==='earn'?t.a:-t.a);pts.push({d:t.date,v:running});});
  if(pts.length<2)pts=[{d:'',v:0},{d:'',v:st.balance}];
  const vals=pts.map(p=>p.v);
  const minV=Math.min(...vals,0),maxV=Math.max(...vals,0.01),range=maxV-minV||1;
  const pad={t:10,b:4,l:2,r:2},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b;
  const toX=i=>pad.l+i/(pts.length-1)*cW;
  const toY=v=>pad.t+cH-(v-minV)/range*cH;
  const grad=ctx.createLinearGradient(0,pad.t,0,H);
  grad.addColorStop(0,'rgba(29,158,117,.3)');grad.addColorStop(1,'rgba(29,158,117,0)');
  ctx.beginPath();ctx.moveTo(toX(0),toY(pts[0].v));
  pts.forEach((p,i)=>{if(i>0)ctx.lineTo(toX(i),toY(p.v));});
  ctx.lineTo(toX(pts.length-1),H);ctx.lineTo(toX(0),H);ctx.closePath();
  ctx.fillStyle=grad;ctx.fill();
  ctx.beginPath();ctx.strokeStyle='#1D9E75';ctx.lineWidth=2;ctx.lineJoin='round';
  pts.forEach((p,i)=>{i===0?ctx.moveTo(toX(i),toY(p.v)):ctx.lineTo(toX(i),toY(p.v));});
  ctx.stroke();
  const li=pts.length-1;
  ctx.beginPath();ctx.arc(toX(li),toY(pts[li].v),3,0,Math.PI*2);ctx.fillStyle='#1D9E75';ctx.fill();
  if(minV<0){const y0=toY(0);ctx.beginPath();ctx.strokeStyle='rgba(0,0,0,.1)';ctx.lineWidth=1;ctx.setLineDash([3,3]);ctx.moveTo(pad.l,y0);ctx.lineTo(W-pad.r,y0);ctx.stroke();ctx.setLineDash([]);}
  document.getElementById('bgt-chart-lbl').textContent=pts.length>1?'Max : '+Math.max(...vals).toFixed(2)+' €':'';
  const txEl=document.getElementById('txlist');txEl.innerHTML='';
  if(!st.txs.length){txEl.innerHTML='<div class="empty">Aucune transaction pour l\'instant</div>';return;}
  [...st.txs].reverse().forEach(t=>{
    const d=document.createElement('div');d.className='tx';
    const sign=t.type==='earn'?'+':'-';
    d.innerHTML=`<div><div class="tn2">${t.n}</div><div class="tdt">${t.date}</div></div><div class="ta ${t.type}">${sign}${t.a.toFixed(2)} €</div>`;
    txEl.appendChild(d);
  });
}

// ── RENDER — MISSION ──────────────────────────────────────────────────────────
const DAYS_FR=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
function rMission(){
  if(!st.bilans)return;
  const bilan=st.bilans[wk(dk())];
  const card=document.getElementById('mission-card');
  const md=document.getElementById('mission-day');
  const today=DAYS_FR[new Date().getDay()];
  const text=bilan&&bilan.days&&bilan.days[today];
  if(text){md.textContent=text;card.classList.add('show');}
  else{card.classList.remove('show');}
}

// ── RENDER — BILAN ────────────────────────────────────────────────────────────
const DAYS_ORDER=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
const DAY_LABELS={lundi:'Lundi',mardi:'Mardi',mercredi:'Mercredi',jeudi:'Jeudi',vendredi:'Vendredi',samedi:'Samedi',dimanche:'Dimanche'};
function wkLabel(wkKey){const parts=wkKey.split('-');return parts.length<2?wkKey:'Semaine '+parts[1]+' · '+parts[0];}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function loadBilan(){rBilan();}
function autoResize(el){el.style.height='auto';el.style.height=el.scrollHeight+'px';}
function bindResize(){document.querySelectorAll('.bilan-block textarea').forEach(t=>{t.addEventListener('input',()=>autoResize(t));autoResize(t);});}
function rBilan(){
  if(!st.bilans)st.bilans={};
  const curWk=wk(dk());
  const b=st.bilans[curWk]||{};
  const nxt=st.bilans[planningTargetWkKey()]||{};
  document.getElementById('b-bilan').value=b.bilan||'';
  DAYS_ORDER.forEach(d=>{document.getElementById('b-'+d).value=(nxt.days&&nxt.days[d])||'';});
  const planEl=document.getElementById('bilan-plan-title');
  if(planEl){const day=new Date().getDay();planEl.textContent=day===1?'Planification — cette semaine':'Planification — semaine prochaine';}
  const arch=document.getElementById('arch-list');arch.innerHTML='';
  const keys=Object.keys(st.bilans).filter(k=>k!==curWk&&st.bilans[k].bilan).sort((a,b)=>b.localeCompare(a));
  if(!keys.length)return;
  const title=document.createElement('div');title.className='arch-title';title.textContent='Bilans précédents';arch.appendChild(title);
  keys.forEach(k=>{
    const b=st.bilans[k];
    const dayRows=DAYS_ORDER.filter(d=>b.days&&b.days[d]).map(d=>`<div class="arch-section"><div class="arch-section-title">${DAY_LABELS[d]}</div><div class="arch-section-text">${esc(b.days[d])}</div></div>`).join('');
    const item=document.createElement('div');item.className='arch-item';
    item.innerHTML=`<div class="arch-row" onclick="this.parentElement.classList.toggle('open')"><span class="arch-wk">${wkLabel(k)}</span><span class="arch-chev">▼</span></div><div class="arch-body">${b.bilan?`<div class="arch-section"><div class="arch-section-title">📖 Bilan</div><div class="arch-section-text">${esc(b.bilan)}</div></div>`:''}${dayRows}</div>`;
    arch.appendChild(item);
  });
}
function saveBilan(){
  if(!st.bilans)st.bilans={};
  const curKey=wk(dk()),nxtKey=planningTargetWkKey();
  const days={};DAYS_ORDER.forEach(d=>{days[d]=document.getElementById('b-'+d).value.trim();});
  st.bilans[curKey]={...(st.bilans[curKey]||{}),bilan:document.getElementById('b-bilan').value.trim()};
  st.bilans[nxtKey]={...(st.bilans[nxtKey]||{}),days};
  save();rMission();rBilan();bindResize();
  const toast=document.getElementById('saved-toast');
  toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000);
}

// ── RENDER — NICOTINE ─────────────────────────────────────────────────────────
function getNicStreak(){
  const today=dk();let streak=0;const d=new Date();
  const todayDone=!!(st.days[today]&&st.days[today].nicotine);
  if(!todayDone)d.setDate(d.getDate()-1);
  for(let i=0;i<365;i++){
    const ds=d.toISOString().slice(0,10);
    if(ds>today){d.setDate(d.getDate()-1);continue;}
    if(st.days[ds]&&st.days[ds].nicotine){streak++;d.setDate(d.getDate()-1);}
    else break;
  }
  return streak;
}
function rNicotine(){
  if(!document.getElementById('nic-count'))return;
  const streak=getNicStreak(),today=dk();
  const todayDone=!!(st.days[today]&&st.days[today].nicotine);
  const card=document.getElementById('nic-card');
  const lbl=document.getElementById('nic-label');
  const sub=document.getElementById('nic-sub');
  const cnt=document.getElementById('nic-count');
  const ic=document.getElementById('nic-ic');
  cnt.textContent=streak;
  if(!todayDone&&streak===0){
    card.className='danger';ic.textContent='';lbl.textContent='Zéro nicotine';
    lbl.style.color='#b91c1c';cnt.style.color='#b91c1c';
    sub.textContent="Coche l'habitude pour relancer le streak";
  }else{
    card.className='clean';ic.textContent='';lbl.textContent='Jours sans nicotine';
    lbl.style.color='var(--success)';cnt.style.color='var(--success)';
    sub.textContent=streak===0?'Commence aujourd\'hui':streak>=30?'Incroyable — '+streak+' jours !':streak>=7?'Une semaine tenue !':'Continue comme ça';
  }
  document.getElementById('s-nic').textContent=streak;
}

// ── RENDER — HEATMAP ──────────────────────────────────────────────────────────
function rHeatmap(){
  const today=dk();const todayDate=new Date(today+'T12:00:00');
  const hm=document.getElementById('heatmap');hm.innerHTML='';
  const hmM=document.getElementById('heatmap-months');hmM.innerHTML='';
  const WEEKS=12;const startDate=new Date(todayDate);
  const dayOfWeek=(startDate.getDay()+6)%7;
  startDate.setDate(startDate.getDate()-dayOfWeek-(WEEKS-1)*7);
  const months=['jan','fév','mar','avr','mai','juin','juil','aoû','sep','oct','nov','déc'];
  let lastMonth=-1;
  for(let w=0;w<WEEKS;w++){
    const col=document.createElement('div');col.className='hm-col';
    const lblEl=document.createElement('div');lblEl.className='hm-month-lbl';let lblSet=false;
    for(let d=0;d<7;d++){
      const date=new Date(startDate);date.setDate(startDate.getDate()+w*7+d);
      const dateStr=date.toISOString().slice(0,10);
      if(date.getMonth()!==lastMonth&&!lblSet){lblEl.textContent=months[date.getMonth()];lastMonth=date.getMonth();lblSet=true;}
      const wrap=document.createElement('div');wrap.className='hm-cell-wrap';
      const num=document.createElement('div');num.className='hm-day-num';num.textContent=date.getDate();
      const cell=document.createElement('div');
      if(dateStr>today){cell.className='hm-cell c0';wrap.appendChild(num);wrap.appendChild(cell);col.appendChild(wrap);continue;}
      const data=st.days[dateStr],hs=habs(dateStr);
      let cls='c0';
      if(data&&hs.length>0){
        const pct=hs.filter(h=>data[h.id]).length/hs.length;
        if(pct===0)cls='c1';else if(pct<0.25)cls='c2';else if(pct<0.5)cls='c3';
        else if(pct<0.75)cls='c4';else if(pct<1)cls='c5';else cls='c6';
      }
      cell.className='hm-cell '+cls+(dateStr===today?' today-cell':'');
      wrap.appendChild(num);wrap.appendChild(cell);col.appendChild(wrap);
    }
    hmM.appendChild(lblEl);hm.appendChild(col);
  }
}

// ── RENDER — WEEK COMPARE ────────────────────────────────────────────────────
function getLastWkDates(){
  const t=new Date(),day=t.getDay(),mon=new Date(t);mon.setDate(t.getDate()-((day+6)%7)-7);
  return Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d.toISOString().slice(0,10);});
}
function wkCompletion(dates){
  let done=0,total=0;
  dates.forEach(d=>{const hs=habs(d);const data=st.days[d]||{};total+=hs.length;done+=hs.filter(h=>data[h.id]).length;});
  return total>0?Math.round(done/total*100):0;
}
function rWeekCompare(){
  const curDates=getWkDatesOffset(wkOffset);
  const prevDates=getWkDatesOffset(wkOffset-1);
  const curXP=curDates.reduce((s,d)=>s+dayXP(d),0);
  const prevXP=prevDates.reduce((s,d)=>s+dayXP(d),0);
  const curPct=wkCompletion(curDates),prevPct=wkCompletion(prevDates);
  const titleEl=document.getElementById('wc-title');
  if(titleEl)titleEl.textContent=wkOffset===0?'Cette semaine vs la semaine dernière':'Semaine affichée vs la semaine précédente';
  document.getElementById('wc-xp').textContent=curXP+' XP';
  document.getElementById('wc-pct').textContent=curPct+'%';
  const xpDiff=curXP-prevXP,pctDiff=curPct-prevPct;
  const xpEl=document.getElementById('wc-xp-diff');
  xpEl.textContent=(xpDiff>0?'↑ +':xpDiff<0?'↓ ':'')+Math.abs(xpDiff)+' vs sem. précédente';
  xpEl.className='wc-diff '+(xpDiff>0?'up':xpDiff<0?'down':'eq');
  const pctEl=document.getElementById('wc-pct-diff');
  pctEl.textContent=(pctDiff>0?'↑ +':pctDiff<0?'↓ ':'')+Math.abs(pctDiff)+'% vs sem. précédente';
  pctEl.className='wc-diff '+(pctDiff>0?'up':pctDiff<0?'down':'eq');
}

// ── RENDER — PARAMÈTRES ───────────────────────────────────────────────────────
function rParams(){
  renderHabList('params-habAll',getHabAll(),true);
  renderHabList('params-habWK',getHabWK(),false);
  document.getElementById('p-s1end').value=st.s1End||S1_END;
}
function renderHabList(containerId,habs,hasDays){
  const el=document.getElementById(containerId);if(!el)return;
  el.innerHTML='';
  habs.forEach(h=>{
    const row=document.createElement('div');row.className='hab-edit-row';row.dataset.id=h.id;
    const daysOpts=hasDays?`<select class="hab-edit-days">
      <option value="both"${h.days==='both'?' selected':''}>Sem+WE</option>
      <option value="week"${h.days==='week'?' selected':''}>Semaine</option>
      <option value="weekend"${h.days==='weekend'?' selected':''}>Week-end</option>
    </select>`:'';
    row.innerHTML=`<input class="hab-edit-name" type="text" value="${esc(h.n)}" placeholder="Nom...">
      <div class="hab-edit-meta">
        <label>XP<input class="hab-edit-num" type="number" value="${h.xp}" min="1" max="200"></label>
        <label>€<input class="hab-edit-num" type="number" value="${h.w||0}" min="0" max="200"></label>
        ${daysOpts}
      </div>
      <button class="hab-del-btn" onclick="delHabRow(this)">✕</button>`;
    el.appendChild(row);
  });
}
function addHab(type){
  const newId='h'+Date.now();
  const hasDays=type.toLowerCase()==='all';
  const container=document.getElementById('params-hab'+type);
  const row=document.createElement('div');row.className='hab-edit-row';row.dataset.id=newId;
  row.innerHTML=`<input class="hab-edit-name" type="text" value="" placeholder="Nom de l'habitude">
    <div class="hab-edit-meta">
      <label>XP<input class="hab-edit-num" type="number" value="10" min="1" max="200"></label>
      <label>€<input class="hab-edit-num" type="number" value="10" min="0" max="200"></label>
      ${hasDays?`<select class="hab-edit-days"><option value="both">Sem+WE</option><option value="week">Semaine</option><option value="weekend">Week-end</option></select>`:''}
    </div>
    <button class="hab-del-btn" onclick="delHabRow(this)">✕</button>`;
  container.appendChild(row);
  row.querySelector('.hab-edit-name').focus();
}
function delHabRow(btn){
  if(!confirm('Supprimer cette habitude ?'))return;
  btn.closest('.hab-edit-row').remove();
}
function saveHabs(){
  const readList=(containerId,hasDays)=>{
    return Array.from(document.querySelectorAll('#'+containerId+' .hab-edit-row')).map(row=>{
      const id=row.dataset.id;
      const n=row.querySelector('.hab-edit-name').value.trim();
      const nums=row.querySelectorAll('.hab-edit-num');
      const xp=Math.max(1,parseInt(nums[0]?.value)||10);
      const w=Math.max(0,parseInt(nums[1]?.value)||0);
      const obj={id,n,xp,w};
      if(hasDays){
        obj.days=row.querySelector('.hab-edit-days')?.value||'both';
        const existing=getHabAll().find(h=>h.id===id);
        obj.ic=existing?.ic||'⭐';
      }else{
        const existing=getHabWK().find(h=>h.id===id);
        obj.ic=existing?.ic||'⭐';
      }
      return obj;
    }).filter(h=>h.n);
  };
  const newHabAll=readList('params-habAll',true);
  const newHabWK=readList('params-habWK',false);
  if(!newHabAll.length){alert("La liste d'habitudes ne peut pas être vide.");return;}
  st.habAll=newHabAll;
  st.habWK=newHabWK.length?newHabWK:null;
  st.totalXP=recalcTotalXP();
  save();checkTrophies();rAll();
  const toast=document.getElementById('saved-toast-params');
  if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000);}
}
function saveSeasonEnd(){
  const val=document.getElementById('p-s1end').value;
  if(!val)return;
  st.s1End=val;save();rCountdown();
  const toast=document.getElementById('saved-toast-params');
  if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000);}
}

// ── DATA — EXPORT / IMPORT ───────────────────────────────────────────────────
function exportJSON(){
  const a=document.createElement('a');
  a.href='data:application/json;charset=utf-8,'+encodeURIComponent(JSON.stringify(st,null,2));
  a.download='plan-vie-backup-'+dk()+'.json';a.click();
}
function doImportJSON(input){
  if(!input.files.length)return;
  if(!confirm('Cela va remplacer TOUTES tes données actuelles. Continue ?')){input.value='';return;}
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      st={...defState(),...JSON.parse(e.target.result)};
      save();rAll();
      const toast=document.getElementById('saved-toast-params');
      if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000);}
    }catch{alert("Fichier invalide. Vérifie que c'est bien un export JSON de l'app.");}
  };
  reader.readAsText(input.files[0]);input.value='';
}

// ── TASKS ─────────────────────────────────────────────────────────────────────
function dateBadgeLabel(date){
  const today=dk();const t=new Date();t.setDate(t.getDate()+1);const tom=t.toISOString().slice(0,10);
  if(date===today)return'Aujourd\'hui';
  if(date===tom)return'Demain';
  return date.slice(8,10)+'/'+date.slice(5,7);
}
function dateBadgeClass(date){
  const today=dk();if(date<today)return'overdue';if(date===today)return'today';return'';
}
function rTasks(){
  const list=document.getElementById('task-list');if(!list)return;
  const tasks=st.tasks||[];
  if(!tasks.length){list.innerHTML='<div class="empty">Aucune tâche pour l\'instant</div>';rTodayTasks();return;}
  list.innerHTML='';
  const urgent=tasks.filter(t=>!t.done&&t.urgent);
  const pending=tasks.filter(t=>!t.done&&!t.urgent);
  const done=tasks.filter(t=>t.done);
  const makeItem=t=>{
    const el=document.createElement('div');
    if(t.done){
      el.className='task-item done';
      el.innerHTML=`<div class="task-check" onclick="togTask('${t.id}')"><svg class="ck" viewBox="0 0 12 12"><polyline points="1.5,6 5,9.5 10.5,2.5"/></svg></div><div class="task-text" onclick="togTask('${t.id}')">${esc(t.text)}</div><button class="task-del" onclick="delTask('${t.id}')">✕</button>`;
    }else{
      el.className='task-item'+(t.urgent?' urgent':'');
      const badge=t.date?`<span class="task-date-badge ${dateBadgeClass(t.date)}">${dateBadgeLabel(t.date)}</span>`:'';
      el.innerHTML=`<div class="task-check" onclick="togTask('${t.id}')"><svg class="ck" viewBox="0 0 12 12"><polyline points="1.5,6 5,9.5 10.5,2.5"/></svg></div><div class="task-text" onclick="togTask('${t.id}')">${esc(t.text)}${badge}</div><button class="task-action-btn${t.urgent?' urgent-active':''}" onclick="togUrgent('${t.id}')" title="Urgent">⚡</button><label class="task-action-btn" title="Assigner un jour" style="position:relative"><input type="date" value="${t.date||''}" onchange="setTaskDate('${t.id}',this.value)" style="position:absolute;opacity:0;width:100%;height:100%;top:0;left:0;cursor:pointer">📅</label><button class="task-del" onclick="delTask('${t.id}')">✕</button>`;
    }
    return el;
  };
  [...urgent,...pending].forEach(t=>list.appendChild(makeItem(t)));
  if(done.length){
    const btn=document.createElement('button');btn.className='task-clear-btn';
    btn.textContent='Supprimer les '+done.length+' tâche'+(done.length>1?'s':'')+' terminée'+(done.length>1?'s':'');
    btn.onclick=clearDoneTasks;list.appendChild(btn);
    done.forEach(t=>list.appendChild(makeItem(t)));
  }
  rTodayTasks();
}
function rTodayTasks(){
  const el=document.getElementById('today-tasks');if(!el)return;
  const today=dk();
  const tasks=(st.tasks||[]).filter(t=>!t.done&&t.date===today);
  if(!tasks.length){el.innerHTML='';return;}
  el.innerHTML='<div class="st" style="margin-top:12px">📋 Tâches du jour</div>'+
    tasks.map(t=>`<div class="today-task${t.urgent?' urgent':''}">
      <div class="today-task-check" onclick="togTask('${t.id}')"><svg class="ck" viewBox="0 0 12 12"><polyline points="1.5,6 5,9.5 10.5,2.5"/></svg></div>
      <div class="today-task-text">${esc(t.text)}</div>
      ${t.urgent?'<span class="today-task-urgent">⚡ Urgent</span>':''}
    </div>`).join('');
}
function addTask(){
  const input=document.getElementById('task-input');
  const text=input.value.trim();if(!text)return;
  if(!st.tasks)st.tasks=[];
  st.tasks.push({id:'tk'+Date.now(),text,done:false,urgent:false,date:null});
  input.value='';save();rTasks();
}
function togTask(id){
  const t=(st.tasks||[]).find(x=>x.id===id);
  if(!t)return;
  t.done=!t.done;
  if(t.done){
    st.totalXP+=10;
    st.balance+=0.20;
    st.txs.push({n:t.text,a:0.20,type:'earn',date:dk(),_tk:id});
  }else{
    st.totalXP=Math.max(0,st.totalXP-10);
    st.txs=st.txs.filter(tx=>tx._tk!==id);
    st.balance=st.txs.reduce((s,tx)=>s+(tx.type==='earn'?tx.a:-tx.a),0);
  }
  checkTrophies();save();rTasks();rHdr();rCagnotte();
}
function togUrgent(id){
  const t=(st.tasks||[]).find(x=>x.id===id);
  if(t){t.urgent=!t.urgent;save();rTasks();}
}
function setTaskDate(id,val){
  const t=(st.tasks||[]).find(x=>x.id===id);
  if(t){t.date=val||null;save();rTasks();}
}
function delTask(id){
  st.tasks=(st.tasks||[]).filter(x=>x.id!==id);
  save();rTasks();
}
function clearDoneTasks(){
  st.tasks=(st.tasks||[]).filter(t=>!t.done);
  save();rTasks();
}

// ── RENDER — ALL ──────────────────────────────────────────────────────────────
function rAll(){rHdr();rToday();rNicotine();rCountdown();rSemaine();rHeatmap();rWeekCompare();rTrophees();rCagnotte();rMission();rTasks();}

// ── ACTIONS ───────────────────────────────────────────────────────────────────
function tog(id){
  const key=dk(),data=gday(key),hs=habs(key),h=hs.find(x=>x.id===id);if(!h)return;
  const ob=dayBgt(key),ox=dayXP(key);
  data[id]=!data[id];
  const nb=dayBgt(key),nx=dayXP(key);
  st.balance+=nb-ob;st.totalXP=Math.max(0,st.totalXP+(nx-ox));
  st.txs=st.txs.filter(t=>!(t.date===key&&t._d));
  if(nb>0.001)st.txs.push({n:'Habitudes',a:nb,type:'earn',date:key,_d:true});
  updateStreak();checkTrophies();save();rAll();
}
function togWk(id){
  const key=dk(),wkKey=wk(key);
  if(!st.wkHabits[wkKey])st.wkHabits[wkKey]={};
  const wd=st.wkHabits[wkKey],h=getHabWK().find(x=>x.id===id);if(!h)return;
  const bpw=getBPW();
  const oldBgt=getHabWK().reduce((s,x)=>s+(wd[x.id]?(x.w||0)*bpw:0),0);
  const was=!!wd[id];wd[id]=!was;
  st.totalXP=Math.max(0,st.totalXP+(was?-h.xp:h.xp));
  const newBgt=getHabWK().reduce((s,x)=>s+(wd[x.id]?(x.w||0)*bpw:0),0);
  st.balance+=newBgt-oldBgt;
  st.txs=st.txs.filter(t=>!t._wk||t._wk!==wkKey);
  if(newBgt>0.001)st.txs.push({n:'Habitudes hebdo',a:newBgt,type:'earn',date:key,_wk:wkKey});
  checkTrophies();save();rAll();
}
function updateStreak(){
  const key=dk();if(st.lastDate===key)return;
  const yest=new Date();yest.setDate(yest.getDate()-1);
  const yk=yest.toISOString().slice(0,10);
  const data=st.days[key],hs=habs(key);
  const allDone=data&&hs.every(h=>data[h.id]);
  if(allDone){
    if(st.lastDate===yk)st.streak++;else if(st.lastDate!==key)st.streak=1;
    st.totalDays++;st.lastDate=key;
  }
}
function addPurchase(){
  const n=document.getElementById('pur-n').value.trim();
  const a=parseFloat(document.getElementById('pur-a').value);
  if(!n||isNaN(a)||a<=0){alert('Remplis les deux champs.');return;}
  st.balance-=a;st.txs.push({n,a,type:'spend',date:dk()});
  document.getElementById('pur-n').value='';document.getElementById('pur-a').value='';
  checkTrophies();save();rAll();
}
function unlockManual(id){
  if(!st.trophies.includes(id))st.trophies.push(id);save();rTrophees();
}
function resetAll(){
  if(!confirm('Remettre toutes les données à zéro ?\nCette action est irréversible.'))return;
  if(!confirm('Dernière confirmation — toutes tes données seront effacées.'))return;
  localStorage.removeItem('pv1');st=defState();rAll();
}
function exportCSV(){
  const rows=[['Date','Jour','Habitude','Fait','XP']];
  const dayNms=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  Object.entries(st.days).sort().forEach(([date,data])=>{
    const hs=habs(date);const dt=new Date(date+'T12:00:00');
    hs.forEach(h=>{rows.push([date,dayNms[dt.getDay()],h.n,data[h.id]?'Oui':'Non',data[h.id]?h.xp:0]);});
  });
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,﻿'+encodeURIComponent(csv);
  a.download='plan-vie-export-'+dk()+'.csv';a.click();
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function sv(name,btn){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  btn.classList.add('active');
  if(name==='cagnotte')rCagnotte();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
rAll();
window.addEventListener('resize',()=>{if(document.getElementById('view-cagnotte').classList.contains('active'))rCagnotte();});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
