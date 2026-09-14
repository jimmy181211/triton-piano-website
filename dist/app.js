const pages = ['home','about','programs','practice','events','get-involved','contact'];
const legalPages = ['privacy','terms'];
const locales = ['en','zh-CN','es'];
const copy = window.clubCopy;
const clubEmail = 'hello@tritonpiano.org';
const programTopics = ['learn','salon','practice','collaboration','masterclass','audition','opportunities','tutoring'];
const roleTopics = ['learn','peer','perform','collaboration'];
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const heading = v => esc(v).replace(/\n/g,'<br>');
const topicKey = v => Object.hasOwn(copy.en.contact.topicMessages,v || '') ? v : 'general';
function params() {
  const q = new URLSearchParams(location.search);
  return {lang:locales.includes(q.get('lang'))?q.get('lang'):'en',page:[...pages,...legalPages].includes(q.get('page'))?q.get('page'):'home',topic:topicKey(q.get('topic'))};
}
function href(lang,page,topic='general') {
  const q = new URLSearchParams({lang,page});
  if(page==='contact' && topicKey(topic)!=='general') q.set('topic',topicKey(topic));
  return '?'+q.toString();
}
function contextTopic(page) { return page==='contact'?params().topic:({practice:'practice',events:'salon','get-involved':'organize',privacy:'privacy'}[page]||'general'); }
function link(lang,page,label,classes='text-link',topic='general',anchor='') {
  return `<a class="${classes}" href="${esc(href(lang,page,topic)+anchor)}">${esc(label)}<span aria-hidden="true">↗</span></a>`;
}
function pill(t) { return `<span class="status-pill">${esc(t)}</span>`; }
function intro(title,body) { return `<section class="page-intro"><div class="page-shell"><h1>${heading(title)}</h1><p>${esc(body)}</p></div></section>`; }
function cardGrid(items) { return `<div class="card-grid">${items.map(x=>`<article class="card"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('')}</div>`; }
function renderHome(c,lang) {
  const h=c.home;
  return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><h1>${heading(h.title)}</h1><p class="lead">${esc(h.body)}</p><div class="actions">${link(lang,'programs',h.cta1,'button-link')}${link(lang,'get-involved',h.cta2,'button-link secondary')}</div></div><div class="hero-art" aria-hidden="true"><img class="hero-mark" src="./assets/club-mark.png" alt="" width="1254" height="1254" fetchpriority="high"></div></div></section><section class="page-shell"><div class="section-head"><h2>${esc(h.exploreTitle)}</h2><p>${esc(h.exploreIntro)}</p></div><div class="entry-grid">${h.themes.map(x=>`<article class="entry-card"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p>${link(lang,x[2],x[3])}</article>`).join('')}</div><div class="status-panel"><div><h2>${esc(h.statusTitle)}</h2><p>${esc(h.statusBody)}</p></div>${link(lang,'about',h.statusLink,'button-link secondary')}</div></section>`;
}
function renderAbout(c) {
  const a=c.about;
  return `${intro(a.title,a.intro)}<section class="page-shell"><div class="section-head"><h2>${esc(a.mission)}</h2><p>${esc(a.missionBody)}</p></div>${cardGrid(a.values)}<div class="status-panel"><div><h2>${esc(a.stateTitle)}</h2><p>${esc(a.stateBody)}</p></div>${pill(c.common.pending)}</div></section>`;
}
function renderPrograms(c,lang) {
  const p=c.programs;
  return `${intro(p.title,p.intro)}<section class="page-shell"><div class="program-list">${p.items.map((x,i)=>`<article class="program-row" id="program-${i+1}"><span class="program-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><div class="program-heading"><h2>${esc(x[0])}</h2>${pill(x[2])}</div><p>${esc(x[1])}</p><div class="program-links">${i===2?link(lang,'practice',p.practiceLink):''}${link(lang,'contact',p.ask,'text-link',programTopics[i])}</div></div></article>`).join('')}</div><aside class="subactivity-note"><h2>${esc(p.subTitle)}</h2><p>${esc(p.subBody)}</p></aside></section>`;
}
function renderPractice(c,lang) {
  const p=c.practice;
  return `${intro(p.title,p.intro)}<section class="page-shell"><div class="practice-overview"><div><h2>${esc(p.cardTitle)}</h2><p>${esc(p.cardBody)}</p>${link(lang,'contact',p.ask,'button-link','practice')}</div><dl class="facts">${p.facts.map(x=>`<div class="fact"><dt>${esc(x[0])}</dt><dd>${esc(x[1])}</dd></div>`).join('')}</dl></div><div class="section-head"><h2>${esc(p.questionsTitle)}</h2></div><div class="requirements">${p.questions.map(x=>`<article><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('')}</div></section>`;
}
function renderEvents(c,lang) {
  const e=c.events;
  return `${intro(e.title,e.intro)}<section class="page-shell"><div class="empty-state"><span class="rest" aria-hidden="true">𝄽</span><h2>${esc(c.common.pending)}</h2><p>${esc(e.empty)}</p>${link(lang,'programs',e.programsLink,'button-link')}</div></section>`;
}
function renderInvolved(c,lang) {
  const i=c.involved;
  return `${intro(i.title,i.intro)}<section class="page-shell"><div class="role-grid">${i.roles.map((x,n)=>`<article class="card role-card"><h2>${esc(x[0])}</h2><p>${esc(x[1])}</p>${link(lang,'contact',i.roleLinks[n],'text-link',roleTopics[n])}</article>`).join('')}</div><div class="contact-callout"><div><h2>${esc(i.contactTitle)}</h2><p>${esc(i.contactBody)}</p></div>${link(lang,'contact',i.contactLink,'button-link','organize')}</div><div class="faq"><h2>${esc(i.faqTitle)}</h2>${i.faq.map(x=>`<details><summary>${esc(x[0])}</summary><p>${esc(x[1])}</p></details>`).join('')}</div></section>`;
}
function mailDraft(lang,topic) {
  const c=copy[lang].contact,t=c.topicMessages[topicKey(topic)];
  return {recipient:clubEmail,subject:'Piano Club | '+(t?t[0]:c.general),body:[c.greeting,'',t?t[1]:c.generalMessage,'',c.templateIntro,...(t?t[2]:c.fields)].join('\r\n')};
}
function composeLinks(d) {
  const to=encodeURIComponent(d.recipient),su=encodeURIComponent(d.subject),body=encodeURIComponent(d.body);
  return {gmail:`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`,outlook:`https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${body}`,mail:`mailto:${d.recipient}?subject=${su}&body=${body}`};
}
function renderContact(c) {
  const m=c.contact;
  return `${intro(m.title,m.intro)}<section class="page-shell contact-layout"><div class="contact-address"><p class="eyebrow">${esc(m.emailLabel)}</p><a class="public-email" id="public-email" href="mailto:${clubEmail}">${clubEmail}</a><button class="text-button" type="button" data-copy="email">${esc(m.copyEmail)}</button><label for="enquiry-topic">${esc(m.topicLabel)}</label><div class="topic-control"><select id="enquiry-topic"><option value="general">${esc(m.general)}</option>${Object.entries(m.topicMessages).map(([k,x])=>`<option value="${k}">${esc(x[0])}</option>`).join('')}</select><button class="text-button" id="clear-topic" type="button">${esc(m.reset)}</button></div></div><div class="mail-workspace"><h2>${esc(m.providersTitle)}</h2><div class="mail-providers"><a id="compose-gmail" class="provider" target="_blank" rel="noopener noreferrer"><span class="provider-monogram" aria-hidden="true">G</span><span><strong>Gmail</strong><small>${esc(m.gmailHint)}</small></span><span aria-hidden="true">↗</span></a><a id="compose-outlook" class="provider" target="_blank" rel="noopener noreferrer"><span class="provider-monogram" aria-hidden="true">O</span><span><strong>Outlook</strong><small>${esc(m.outlookHint)}</small></span><span aria-hidden="true">↗</span></a><a id="compose-mail" class="provider"><span class="provider-monogram" aria-hidden="true">@</span><span><strong>${esc(m.defaultMail)}</strong><small>${esc(m.defaultHint)}</small></span><span aria-hidden="true">↗</span></a></div><p class="review-note">${esc(m.reviewNote)}</p><details class="draft-preview"><summary>${esc(m.preview)}</summary><div class="draft-fields"><label for="draft-to">${esc(m.recipient)}</label><input id="draft-to" readonly><label for="draft-subject">${esc(m.subject)}</label><input id="draft-subject" readonly><label for="draft-body">${esc(m.body)}</label><textarea id="draft-body" rows="9" readonly></textarea><button class="button-link" type="button" data-copy="template">${esc(m.copyTemplate)}</button></div></details><p class="mail-fallback">${esc(m.fallbackNote)}</p><output class="copy-notice" id="copy-notice" aria-live="polite"></output></div></section>`;
}
function renderLegal(c,lang,page) {
  const l=window.clubLegal[lang][page];
  return `${intro(l.title,l.intro)}<section class="page-shell legal-layout"><nav class="legal-toc" aria-label="${esc(l.contents)}">${l.sections.map((s,i)=>`<a href="#${page}-${i+1}">${esc(s[0])}</a>`).join('')}</nav><div class="legal-copy"><p class="legal-date">${esc(c.footer.updated)}: <time datetime="2026-09-14">2026-09-14</time></p>${l.sections.map((s,i)=>`<section id="${page}-${i+1}"><h2>${esc(s[0])}</h2>${s.slice(1).map(p=>`<p>${esc(p)}</p>`).join('')}</section>`).join('')}${page==='privacy'?'<p class="provider-policies"><a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy ↗</a><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy ↗</a></p>':''}${link(lang,'contact',c.footer.contact,'button-link',page==='privacy'?'privacy':'general')}</div></section>`;
}
function closeMenu(restore=false) {
  const menu=document.getElementById('site-nav');
  if(!menu.classList.contains('open')) return;
  menu.classList.remove('open');document.getElementById('menu-toggle').setAttribute('aria-expanded','false');
  if(restore) document.getElementById('menu-toggle').focus();
}
function refreshContact() {
  const {lang}=params(),select=document.getElementById('enquiry-topic');
  if(!select) return;
  const d=mailDraft(lang,select.value),links=composeLinks(d);
  for(const n of ['gmail','outlook','mail']) document.getElementById('compose-'+n).href=links[n];
  document.getElementById('public-email').href=links.mail;
  document.getElementById('draft-to').value=d.recipient;document.getElementById('draft-subject').value=d.subject;document.getElementById('draft-body').value=d.body;
  document.getElementById('clear-topic').disabled=select.value==='general';document.getElementById('copy-notice').textContent='';
  document.querySelector('[data-copy="email"]').textContent=copy[lang].contact.copyEmail;
  document.querySelector('[data-copy="template"]').textContent=copy[lang].contact.copyTemplate;
  document.querySelector('#footer-links [data-contact]').href=href(lang,'contact',select.value);
  document.getElementById('footer-email').href=href(lang,'contact',select.value);
  document.querySelector('#site-nav a[aria-current]').href=href(lang,'contact',select.value);
}
function changeTopic(value) {
  const key=topicKey(value),url=new URL(location.href);
  if(key==='general') url.searchParams.delete('topic');else url.searchParams.set('topic',key);
  history.replaceState(null,'',url.pathname+url.search+url.hash);document.getElementById('enquiry-topic').value=key;refreshContact();
}
async function copyMessage(kind) {
  const {lang}=params(),m=copy[lang].contact,d=mailDraft(lang,document.getElementById('enquiry-topic').value);
  const text=kind==='email'?clubEmail:`${m.recipient}: ${d.recipient}\r\n${m.subject}: ${d.subject}\r\n\r\n${d.body}`;
  try {await navigator.clipboard.writeText(text);document.getElementById('copy-notice').textContent=m.copied;document.querySelector('[data-copy="'+kind+'"]').textContent=m.copied;}
  catch {document.querySelector('.draft-preview').open=true;document.getElementById('copy-notice').textContent=m.copyFailed;const field=document.getElementById(kind==='email'?'draft-to':'draft-body');field.focus();field.select();}
}
function render() {
  const {lang,page,topic}=params(),c=copy[lang];
  document.documentElement.lang=lang;document.title=`${c.nav[page]||c.footer[page]} | Piano Club at UC San Diego`;
  document.querySelector('meta[name="description"]').content=page==='home'?c.home.body:page==='contact'?c.contact.intro:legalPages.includes(page)?window.clubLegal[lang][page].intro:c[page==='get-involved'?'involved':page].intro;
  document.getElementById('proposal-ribbon').textContent=c.banner;document.getElementById('menu-label').textContent=c.menu;document.getElementById('language-label').textContent=c.language;
  document.querySelector('.skip-link').textContent=c.skip;document.getElementById('site-nav').setAttribute('aria-label',c.navigation);document.getElementById('language-select').value=lang;
  document.getElementById('site-nav').innerHTML=pages.map(p=>`<a href="${esc(href(lang,p,p==='contact'?contextTopic(page):'general'))}" ${p===page?'aria-current="page"':''}>${esc(c.nav[p])}</a>`).join('');
  document.querySelector('.brand').href=href(lang,'home');document.querySelector('.brand').setAttribute('aria-label',c.nav.home+' — Piano Club at UC San Diego');
  const views={home:renderHome,about:renderAbout,programs:renderPrograms,practice:renderPractice,events:renderEvents,'get-involved':renderInvolved,contact:renderContact};
  document.getElementById('main').innerHTML=legalPages.includes(page)?renderLegal(c,lang,page):views[page](c,lang);
  document.getElementById('footer-disclaimer').textContent=c.common.disclaimer;
  document.getElementById('footer-links').innerHTML=`<a data-contact href="${esc(href(lang,'contact',contextTopic(page)))}">${esc(c.footer.contact)}</a>${legalPages.map(p=>`<a href="${esc(href(lang,p))}" ${p===page?'aria-current="page"':''}>${esc(c.footer[p])}</a>`).join('')}`;
  document.getElementById('footer-links').setAttribute('aria-label',c.navigation);
  document.getElementById('footer-email').href=href(lang,'contact',contextTopic(page));closeMenu();
  if(page==='contact') {document.getElementById('enquiry-topic').value=topic;refreshContact();document.getElementById('enquiry-topic').addEventListener('change',e=>changeTopic(e.target.value));document.getElementById('clear-topic').addEventListener('click',()=>changeTopic('general'));document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',()=>copyMessage(b.dataset.copy)));}
}
document.getElementById('language-select').addEventListener('change',e=>{const {page,topic}=params();location.href=href(e.target.value,page,topic)+location.hash;});
document.getElementById('menu-toggle').addEventListener('click',()=>{const open=document.getElementById('site-nav').classList.toggle('open');document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!document.getElementById('site-nav').contains(e.target)&&!document.getElementById('menu-toggle').contains(e.target)) closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeMenu(true);});
document.addEventListener('focusin',e=>{if(!document.querySelector('.site-header').contains(e.target)) closeMenu();});
window.matchMedia('(min-width: 1024px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
window.addEventListener('popstate',render);
render();
