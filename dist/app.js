const pages = ['home','about','programs','practice','events','get-involved','contact'];
const legalPages = ['privacy','terms'];
const locales = ['en','zh-CN','es'];
const copy = window.clubCopy;
const clubEmail = 'hello@tritonpiano.org';
const clubPhoneDisplay = '(619) 380-1100';
const clubPhoneHref = 'tel:+16193801100';
const programTopics = ['practice','learn','salon','collaboration','masterclass','audition','opportunities','tutoring'];
const roleTopics = ['learn','peer','perform','collaboration'];
let taglineTimer = 0;
let taglineSwapTimer = 0;
let legalScrollHandler = null;
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
function intro(title,body,taglines=[]) {
  const items=Array.isArray(taglines)&&taglines.length?taglines:[title];
  const rotating=items.length>1;
  return `<section class="page-intro"><div class="page-shell"><h1${rotating?' class="page-tagline" data-rotating-tagline aria-live="off"':''}>${heading(items[0])}</h1><p>${esc(body)}</p></div></section>`;
}
function cardGrid(items) { return `<div class="card-grid">${items.map(x=>`<article class="card"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('')}</div>`; }
function renderHome(c,lang) {
  const h=c.home;
  const firstTagline=(h.taglines||[h.title])[0];
  return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><h1 class="hero-tagline" data-rotating-tagline aria-live="off">${heading(firstTagline)}</h1><p class="lead">${esc(h.body)}</p><div class="actions">${link(lang,'programs',h.cta1,'button-link')}${link(lang,'get-involved',h.cta2,'button-link secondary')}</div></div><div class="hero-art" aria-hidden="true"><img class="hero-mark" src="./assets/club-mark.png" alt="" width="1254" height="1254" fetchpriority="high"></div></div></section><section class="page-shell"><div class="section-head"><h2>${esc(h.exploreTitle)}</h2><p>${esc(h.exploreIntro)}</p></div><div class="entry-grid">${h.themes.map(x=>`<article class="entry-card"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p>${link(lang,x[2],x[3])}</article>`).join('')}</div><div class="status-panel"><div><h2>${esc(h.statusTitle)}</h2><p>${esc(h.statusBody)}</p></div>${link(lang,'about',h.statusLink,'button-link secondary')}</div></section>`;
}
function renderAbout(c,lang) {
  const a=c.about;
  return `${intro(a.title,a.intro)}<section class="page-shell"><div class="section-head about-purpose"><h2>${esc(a.mission)}</h2><p>${esc(a.missionBody)}</p></div><div class="section-head values-head"><h2>${esc(a.valuesTitle)}</h2></div>${cardGrid(a.values)}<div class="status-panel"><div><h2>${esc(a.stateTitle)}</h2><p>${esc(a.stateBody)}</p></div>${pill(c.common.pending)}</div><div class="about-programs"><div><h2>${esc(a.programsTitle)}</h2><p>${esc(a.programsBody)}</p></div>${link(lang,'programs',a.programsLink,'button-link')}</div></section>`;
}
function renderPrograms(c,lang) {
  const p=c.programs;
  return `${intro(p.title,p.intro,p.taglines)}<section class="page-shell"><div class="program-list">${p.items.map((x,i)=>`<article class="program-row" id="program-${i+1}"><span class="program-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><div class="program-heading"><h2>${esc(x[0])}</h2>${pill(x[2])}</div><p>${esc(x[1])}</p><div class="program-links">${i===0?link(lang,'practice',p.practiceLink):''}${link(lang,'contact',p.ask,'text-link',programTopics[i])}</div></div></article>`).join('')}</div><aside class="subactivity-note"><h2>${esc(p.subTitle)}</h2><p>${esc(p.subBody)}</p></aside></section>`;
}
function renderPractice(c,lang) {
  const p=c.practice;
  return `${intro(p.title,p.intro,p.taglines)}<section class="page-shell"><div class="practice-overview"><div><h2>${esc(p.cardTitle)}</h2><p>${esc(p.cardBody)}</p>${link(lang,'contact',p.ask,'button-link','practice')}</div><dl class="facts">${p.facts.map(x=>`<div class="fact"><dt>${esc(x[0])}</dt><dd>${esc(x[1])}</dd></div>`).join('')}</dl></div><div class="section-head"><h2>${esc(p.questionsTitle)}</h2></div><div class="requirements">${p.questions.map(x=>`<article><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('')}</div></section>`;
}
function renderEvents(c,lang) {
  const e=c.events;
  return `${intro(e.title,e.intro,e.taglines)}<section class="page-shell"><div class="empty-state"><span class="rest" aria-hidden="true">𝄽</span><h2>${esc(c.common.pending)}</h2><p>${esc(e.empty)}</p>${link(lang,'programs',e.programsLink,'button-link')}</div></section>`;
}
function renderInvolved(c,lang) {
  const i=c.involved;
  return `${intro(i.title,i.intro)}<section class="page-shell"><div class="role-grid">${i.roles.map((x,n)=>`<article class="card role-card"><h2>${esc(x[0])}</h2><p>${esc(x[1])}</p>${link(lang,'contact',i.roleLinks[n],'text-link',roleTopics[n])}</article>`).join('')}</div><div class="contact-callout"><div><h2>${esc(i.contactTitle)}</h2><p>${esc(i.contactBody)}</p></div>${link(lang,'contact',i.contactLink,'button-link','organize')}</div></section>`;
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
  return `${intro(m.title,m.intro)}<section class="page-shell contact-layout"><div class="contact-address"><div class="contact-methods"><div class="contact-method"><p class="eyebrow">${esc(m.emailLabel)}</p><p class="public-contact">${clubEmail}</p></div><div class="contact-method"><p class="eyebrow">${esc(m.phoneLabel)}</p><a class="public-contact" href="${clubPhoneHref}">${clubPhoneDisplay}</a><p class="contact-note">${esc(m.phoneNote)}</p></div></div><label for="enquiry-topic">${esc(m.topicLabel)}</label><div class="topic-control"><select id="enquiry-topic"><option value="general">${esc(m.general)}</option>${Object.entries(m.topicMessages).map(([k,x])=>`<option value="${k}">${esc(x[0])}</option>`).join('')}</select></div><button class="button-link compose-button" id="open-mail-dialog" type="button">${esc(m.composeButton)}<span aria-hidden="true">→</span></button></div><div class="faq contact-faq"><h2>${esc(m.faqTitle)}</h2><p class="faq-intro">${esc(m.faqIntro)}</p>${m.faq.map(x=>`<details><summary>${esc(x[0])}</summary><p>${esc(x[1])}</p></details>`).join('')}</div><dialog class="mail-dialog" id="mail-dialog" aria-labelledby="mail-dialog-title"><div class="dialog-shell"><button class="dialog-close" type="button" data-close-dialog aria-label="${esc(m.closeDialog)}"><span aria-hidden="true">×</span></button><div class="dialog-head"><p class="eyebrow">${clubEmail}</p><h2 id="mail-dialog-title">${esc(m.providersTitle)}</h2><p>${esc(m.providersIntro)}</p></div><div class="mail-providers"><a id="compose-gmail" class="provider" target="_blank" rel="noopener noreferrer"><span class="provider-monogram" aria-hidden="true">G</span><span><strong>Gmail</strong><small>${esc(m.gmailHint)}</small></span><span aria-hidden="true">↗</span></a><a id="compose-outlook" class="provider" target="_blank" rel="noopener noreferrer"><span class="provider-monogram" aria-hidden="true">O</span><span><strong>Outlook</strong><small>${esc(m.outlookHint)}</small></span><span aria-hidden="true">↗</span></a><a id="compose-mail" class="provider"><span class="provider-monogram" aria-hidden="true">@</span><span><strong>${esc(m.defaultMail)}</strong><small>${esc(m.defaultHint)}</small></span><span aria-hidden="true">↗</span></a></div><p class="review-note">${esc(m.reviewNote)}</p><details class="draft-preview"><summary>${esc(m.preview)}</summary><div class="draft-fields"><label for="draft-to">${esc(m.recipient)}</label><input id="draft-to" readonly><label for="draft-subject">${esc(m.subject)}</label><input id="draft-subject" readonly><label for="draft-body">${esc(m.body)}</label><textarea id="draft-body" rows="9" readonly></textarea><button class="button-link" type="button" data-copy="template">${esc(m.copyTemplate)}</button></div></details><p class="mail-fallback">${esc(m.fallbackNote)}</p><output class="copy-notice" id="copy-notice" aria-live="polite"></output></div></dialog></section>`;
}
function renderLegal(c,lang,page) {
  const l=window.clubLegal[lang][page];
  const tocId=`${page}-contents`;
  return `${intro(l.title,l.intro)}<section class="page-shell legal-layout"><nav class="legal-toc" aria-labelledby="${tocId}"><p class="legal-toc-title" id="${tocId}">${esc(l.contents)}</p><ol>${l.sections.map((s,i)=>`<li><a href="#${page}-${i+1}">${esc(s[0])}</a></li>`).join('')}</ol></nav><div class="legal-copy"><p class="legal-date">${esc(c.footer.updated)}: <time datetime="2026-09-14">2026-09-14</time></p>${l.sections.map((s,i)=>`<section id="${page}-${i+1}" tabindex="-1"><h2>${esc(s[0])}</h2>${s.slice(1).map(p=>`<p>${esc(p)}</p>`).join('')}</section>`).join('')}${page==='privacy'?'<p class="provider-policies"><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy ↗</a></p>':''}${link(lang,'contact',c.footer.contact,'button-link',page==='privacy'?'privacy':'general')}</div></section>`;
}
function stopTaglineRotation() {
  clearInterval(taglineTimer);clearTimeout(taglineSwapTimer);taglineTimer=0;taglineSwapTimer=0;
}
function startTaglineRotation(items) {
  const el=document.querySelector('[data-rotating-tagline]');
  if(!el||!items||items.length<2||window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let index=0;
  taglineTimer=window.setInterval(()=>{
    if(document.hidden||!el.isConnected) return;
    el.classList.add('is-changing');
    taglineSwapTimer=window.setTimeout(()=>{
      if(!el.isConnected) return;
      index=(index+1)%items.length;el.innerHTML=heading(items[index]);el.classList.remove('is-changing');
    },260);
  },4800);
}
function stopLegalTracking() {
  if(legalScrollHandler) window.removeEventListener('scroll',legalScrollHandler);
  legalScrollHandler=null;
}
function startLegalTracking() {
  const toc=document.querySelector('.legal-toc'),sections=[...document.querySelectorAll('.legal-copy>section[id]')];
  if(!toc||!sections.length) return;
  const links=[...toc.querySelectorAll('a[href^="#"]')];
  const setCurrent=id=>links.forEach(a=>{
    if(a.getAttribute('href')==='#'+id) a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
  });
  const update=()=>{
    const guide=window.innerWidth<480?190:130;
    let current=sections[0].id;
    for(const section of sections) if(section.getBoundingClientRect().top<=guide) current=section.id;
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4) current=sections.at(-1).id;
    setCurrent(current);
  };
  for(const a of links) a.addEventListener('click',()=>window.setTimeout(()=>{
    const target=document.getElementById(a.hash.slice(1));if(target) target.focus({preventScroll:true});setCurrent(a.hash.slice(1));
  },0));
  legalScrollHandler=update;window.addEventListener('scroll',legalScrollHandler,{passive:true});update();
  const hashTarget=document.getElementById(location.hash.slice(1));
  if(hashTarget) window.requestAnimationFrame(()=>hashTarget.scrollIntoView());
}
function initMailDialog() {
  const dialog=document.getElementById('mail-dialog'),openButton=document.getElementById('open-mail-dialog');
  if(!dialog||!openButton) return;
  openButton.addEventListener('click',()=>{refreshContact();dialog.showModal();dialog.querySelector('[data-close-dialog]').focus();});
  dialog.querySelector('[data-close-dialog]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{
    if(e.target!==dialog) return;
    const r=dialog.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close();
  });
  dialog.addEventListener('close',()=>openButton.focus());
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
  document.getElementById('draft-to').value=d.recipient;document.getElementById('draft-subject').value=d.subject;document.getElementById('draft-body').value=d.body;
  document.getElementById('copy-notice').textContent='';
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
async function copyMessage() {
  const {lang}=params(),m=copy[lang].contact,d=mailDraft(lang,document.getElementById('enquiry-topic').value);
  const text=`${m.recipient}: ${d.recipient}\r\n${m.subject}: ${d.subject}\r\n\r\n${d.body}`;
  try {await navigator.clipboard.writeText(text);document.getElementById('copy-notice').textContent=m.copied;document.querySelector('[data-copy="template"]').textContent=m.copied;}
  catch {document.querySelector('.draft-preview').open=true;document.getElementById('copy-notice').textContent=m.copyFailed;const field=document.getElementById('draft-body');field.focus();field.select();}
}
function render() {
  const {lang,page,topic}=params(),c=copy[lang];
  stopTaglineRotation();stopLegalTracking();
  document.documentElement.lang=lang;document.documentElement.dataset.page=page;document.title=`${c.nav[page]||c.footer[page]} | Piano Club at UCSD`;
  document.querySelector('meta[name="description"]').content=page==='home'?c.home.body:page==='contact'?c.contact.intro:legalPages.includes(page)?window.clubLegal[lang][page].intro:c[page==='get-involved'?'involved':page].intro;
  document.getElementById('proposal-ribbon').textContent=c.banner;document.getElementById('menu-label').textContent=c.menu;document.getElementById('language-label').textContent=c.language;
  document.querySelector('.skip-link').textContent=c.skip;document.getElementById('site-nav').setAttribute('aria-label',c.navigation);document.getElementById('language-select').value=lang;
  document.getElementById('site-nav').innerHTML=pages.map(p=>`<a href="${esc(href(lang,p,p==='contact'?contextTopic(page):'general'))}" ${p===page?'aria-current="page"':''}>${esc(c.nav[p])}</a>`).join('');
  document.querySelector('.brand').href=href(lang,'home');document.querySelector('.brand').setAttribute('aria-label',c.nav.home+' — Piano Club at UCSD');
  const views={home:renderHome,about:renderAbout,programs:renderPrograms,practice:renderPractice,events:renderEvents,'get-involved':renderInvolved,contact:renderContact};
  document.getElementById('main').innerHTML=legalPages.includes(page)?renderLegal(c,lang,page):views[page](c,lang);
  document.getElementById('footer-disclaimer').textContent=c.common.disclaimer;
  document.getElementById('footer-links').innerHTML=`<a data-contact href="${esc(href(lang,'contact',contextTopic(page)))}">${esc(c.footer.contact)}</a>${legalPages.map(p=>`<a href="${esc(href(lang,p))}" ${p===page?'aria-current="page"':''}>${esc(c.footer[p])}</a>`).join('')}`;
  document.getElementById('footer-links').setAttribute('aria-label',c.footerNavigation);
  document.getElementById('footer-email').href=href(lang,'contact',contextTopic(page));closeMenu();
  if(page==='home') startTaglineRotation(c.home.taglines);
  if(['programs','practice','events'].includes(page)) startTaglineRotation(c[page].taglines);
  if(legalPages.includes(page)) startLegalTracking();
  if(page==='contact') {document.getElementById('enquiry-topic').value=topic;refreshContact();initMailDialog();document.getElementById('enquiry-topic').addEventListener('change',e=>changeTopic(e.target.value));document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',copyMessage));}
}
document.getElementById('language-select').addEventListener('change',e=>{const {page,topic}=params();location.href=href(e.target.value,page,topic)+location.hash;});
document.getElementById('menu-toggle').addEventListener('click',()=>{const open=document.getElementById('site-nav').classList.toggle('open');document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!document.getElementById('site-nav').contains(e.target)&&!document.getElementById('menu-toggle').contains(e.target)) closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeMenu(true);});
document.addEventListener('focusin',e=>{if(!document.querySelector('.site-header').contains(e.target)) closeMenu();});
window.matchMedia('(min-width: 1024px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
window.addEventListener('popstate',render);
render();
