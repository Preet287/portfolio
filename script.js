'use strict';
const content = window.PORTFOLIO;
const $ = (selector) => document.querySelector(selector);
const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const appendTags = (parent, values, className = 'tag') => values.forEach(value => parent.append(el('span', className, value)));

function renderMetrics() {
  const holder = $('#metrics');
  content.metrics.forEach(item => {
    const card = el('div', 'metric reveal');
    const number = el('p', 'metric-number'); number.append(document.createTextNode(item.value), el('span', '', item.suffix));
    card.append(number, el('p', 'metric-label', item.label)); holder.append(card);
  });
  holder.append(el('p', 'metrics-footnote', '*Performance result reported for the Azure project in the source resume.'));
}
function renderExperience() {
  content.experiences.forEach((job, i) => {
    const card = el('article', 'timeline-entry reveal');
    const rail = el('div', 'timeline-rail'); rail.append(el('span', 'timeline-dot'));
    const body = el('div', 'timeline-content panel');
    const head = el('div', 'experience-head');
    const left = el('div'); left.append(el('p', 'panel-label', job.company), el('h3', '', job.role), el('p', 'location', job.place));
    const right = el('div', 'experience-meta'); right.append(el('span', 'period', job.period), el('span', 'work-type', job.type));
    head.append(left, right);
    const list = el('ul', 'experience-points'); job.bullets.forEach(b => list.append(el('li', '', b)));
    const tags = el('div', 'tag-row'); appendTags(tags, job.tools);
    body.append(head, list, tags); card.append(rail, body); $('#experience-list').append(card);
  });
}
function projectArt(type) {
  const wrap = el('div', `project-art project-art-${type}`);
  if (type === 'rag') {
    wrap.innerHTML = '<div class="rag-document"><span>DOCUMENT / 01</span><i></i><i></i><i class="short"></i></div><div class="rag-route"><span></span><span></span><span></span></div><div class="rag-answer"><span>✳ AI RESPONSE</span><i></i><i class="short"></i></div>';
  } else if (type === 'azure') {
    wrap.innerHTML = '<div class="pipeline-node">RAW<br>DATA</div><div class="pipeline-connector"><i></i><i></i><i></i></div><div class="pipeline-node node-active">ETL<br>ENGINE</div><div class="pipeline-connector"><i></i><i></i><i></i></div><div class="pipeline-node">BI<br>READY</div><div class="pipeline-foot">INGEST → TRANSFORM → SERVE</div>';
  } else {
    wrap.innerHTML = '<div class="automation-chart"><span class="chart-label">FOLLOWER SIGNAL / LIVE</span><div class="bars"><i style="height:31%"></i><i style="height:46%"></i><i style="height:39%"></i><i style="height:70%"></i><i style="height:56%"></i><i style="height:87%"></i><i style="height:100%"></i></div><div class="chart-bottom">API CONNECTED <span>●</span></div></div>';
  }
  return wrap;
}
function renderProjects(filter = 'all') {
  const holder = $('#projects-list'); holder.replaceChildren();
  const chosen = content.projects.filter(p => filter === 'all' || p.category === filter);
  chosen.forEach(project => {
    const card = el('article', 'project-card reveal');
    card.append(projectArt(project.visual));
    const body = el('div', 'project-body');
    const meta = el('div', 'project-meta'); meta.append(el('span', '', project.categoryLabel), el('span', '', project.date));
    body.append(meta, el('h3', '', project.title), el('p', 'project-headline', project.headline), el('p', 'project-description', project.description));
    const tags = el('div', 'tag-row'); appendTags(tags, project.stack.slice(0, 4)); body.append(tags);
    const button = el('button', 'project-open'); button.type = 'button'; button.textContent = 'Explore case study ↗'; button.setAttribute('aria-label', `View case study: ${project.title}`); button.addEventListener('click', () => openProject(project));
    body.append(button); card.append(body); holder.append(card);
  });
  $('#project-counter').textContent = `${String(chosen.length).padStart(2, '0')} / ${String(content.projects.length).padStart(2, '0')} PROJECTS`;
  observeReveals();
}
function renderSkills() {
  content.skillGroups.forEach(group => {
    const card = el('article', 'skill-card panel reveal');
    card.append(el('div', 'skill-icon', group.icon), el('h3', '', group.title));
    const tags = el('div', 'skill-tags'); appendTags(tags, group.skills); card.append(tags); $('#skills-list').append(card);
  });
  content.certifications.forEach(cert => {
    const card = el('div', 'cert-item'); card.append(el('span', 'cert-icon', '✦'));
    const wrap = el('div'); wrap.append(el('strong', '', cert.name), el('span', '', cert.code)); card.append(wrap); $('#certifications-list').append(card);
  });
}
let previousFocus;
function openProject(project) {
  const modal = $('#project-modal'); previousFocus = document.activeElement;
  $('#modal-category').textContent = `${project.categoryLabel} / ${project.date}`;
  $('#modal-title').textContent = project.title; $('#modal-summary').textContent = project.description;
  const list = $('#modal-details'); list.replaceChildren(); project.details.forEach(detail => list.append(el('li', '', detail)));
  const tags = $('#modal-stack'); tags.replaceChildren(); appendTags(tags, project.stack);
  if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
}
function closeProject() { const modal = $('#project-modal'); if (typeof modal.close === 'function') modal.close(); else modal.removeAttribute('open'); previousFocus?.focus(); }
function toast(message) { const node = $('#toast'); node.textContent = message; node.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => node.classList.remove('show'), 3000); }

function observeReveals() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { document.querySelectorAll('.reveal').forEach(n => n.classList.add('visible')); return; }
  if (!window.revealObserver) window.revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); window.revealObserver.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(n => window.revealObserver.observe(n));
}
function setupInteraction() {
  const theme = localStorage.getItem('preet-theme'); if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
  const updateThemeLabel = () => { const light = document.documentElement.dataset.theme === 'light'; $('#theme-icon').textContent = light ? '☾' : '☼'; $('#theme-toggle').setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme'); };
  updateThemeLabel();
  $('#theme-toggle').addEventListener('click', () => { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; localStorage.setItem('preet-theme', next); updateThemeLabel(); });
  const menu = $('#menu-toggle'), links = $('#nav-links');
  const setMenu = open => { links.classList.toggle('nav-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); };
  menu.addEventListener('click', () => setMenu(!links.classList.contains('nav-open')));
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => { if (!event.target.closest('.nav') && links.classList.contains('nav-open')) setMenu(false); });
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); }); button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); renderProjects(button.dataset.filter); }));
  $('#modal-close').addEventListener('click', closeProject);
  $('#project-modal').addEventListener('click', event => { if (event.target === $('#project-modal')) closeProject(); });
  $('#project-modal').addEventListener('close', () => previousFocus?.focus());
  $('#copy-email').addEventListener('click', async () => { try { await navigator.clipboard.writeText('preetpatel287@gmail.com'); toast('Email copied to clipboard'); } catch { toast('Email: preetpatel287@gmail.com'); } });
  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return;
    const name = form.elements.name.value.trim(), email = form.elements.email.value.trim(), message = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`); const body = encodeURIComponent(`Hello Preet,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:preetpatel287@gmail.com?subject=${subject}&body=${body}`; toast('Opening your email app...');
  });
  const updateScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; $('#scroll-progress').style.width = (max > 0 ? scrollY / max * 100 : 0) + '%'; };
  window.addEventListener('scroll', updateScroll, { passive: true }); window.addEventListener('resize', updateScroll); updateScroll();
  $('#year').textContent = new Date().getFullYear();
}
renderMetrics(); renderExperience(); renderProjects(); renderSkills(); setupInteraction(); observeReveals();
