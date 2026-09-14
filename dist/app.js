const pages = ["home", "about", "programs", "practice", "events", "get-involved"];
const locales = ["en", "zh-CN", "es"];

const copy = {
  en: {
    lang: "English", menu: "Menu", language: "Language", eyebrow: "A proposed student community",
    banner: "Proposed student club — not yet approved",
    nav: { home: "Home", about: "About", programs: "Programs", practice: "Practice Access", events: "Events", "get-involved": "Get Involved" },
    common: {
      pending: "To be confirmed", proposal: "Proposed", status: "Current status", contact: "Contact channel: To be confirmed",
      disclaimer: "This website describes a proposed student club. It does not represent an approved organization or an official UC San Diego program.",
      approval: "Subject to university approval", learn: "Learn", share: "Share", connect: "Connect"
    },
    home: {
      title: "A place to grow through piano.",
      body: "We hope to build a welcoming piano community at UC San Diego, where students can learn from one another, share music and explore playing together.",
      cta1: "Explore proposed programs", cta2: "Explore ways to participate",
      themes: [
        ["Learn together", "Free peer help focused on repertoire, interpretation and practice habits."],
        ["Share the stage", "Informal piano salons for performing, listening and constructive reflection."],
        ["Make connections", "A meeting point for pianists, ensembles and students looking for collaborators."]
      ],
      statusTitle: "Built honestly from the beginning",
      statusBody: "Registration, rooms, organizers and participation channels are still being confirmed. The site shows the intended structure without presenting proposals as active services.",
      statusItems: [["Registration", "In progress"], ["Shared piano access", "Permission requested"], ["Events and Discord", "Not yet launched"]]
    },
    about: {
      title: "A piano community across majors and experience levels.",
      intro: "The proposed club is designed for curious beginners, experienced pianists, listeners and collaborators.",
      mission: "Our purpose", missionBody: "Create a welcoming place where students can practice, ask musical questions, perform in a supportive setting and find people to make music with.",
      valuesTitle: "How we hope to work", values: [["Open doors", "Free membership and room for different goals and experience levels."], ["Useful feedback", "Specific, respectful suggestions that help musicians decide what to practice next."], ["Responsible growth", "Programs launch only after the relevant people, spaces, privacy rules and approvals are ready."]],
      stateTitle: "Organizational status", stateBody: "The club is being organized and has not yet been approved. Principal Members, volunteer pianists and launch timing remain unconfirmed."
    },
    programs: {
      title: "Programs designed around learning, performing and access.",
      intro: "These are proposed program directions. Availability, schedules and participation details will be published only after confirmation.",
      items: [
        ["Free peer tutoring", "Scheduled peer help with piano fundamentals, repertoire, interpretation and practice methods. Tutors, matching and timing are not yet confirmed."],
        ["Piano salons", "Informal gatherings to perform and listen. Optional anonymous feedback with an AI-generated summary is being explored; privacy and consent rules must be established first."],
        ["Shared practice access", "A proposed recurring CPMC practice block for students who need an instrument. No rooms, pianos or booking rights are confirmed."],
        ["Ensemble connections", "Help pianists find singers, instrumentalists and student ensembles for collaboration. No partnerships or rehearsals are confirmed."],
        ["Guest artists & opportunities", "Future possibilities include talks, masterclasses, practice auditions, internal competitions and information about external opportunities."],
        ["Optional paid tutoring", "A separate club-administered service may be considered. It is not offered now, and approval, fees, tutor compensation and payment rules are unresolved."]
      ]
    },
    practice: {
      title: "A practical path to more time at the piano.",
      intro: "Shared practice access at the Conrad Prebys Music Center (CPMC) is a proposal subject to university and department approval.",
      cardTitle: "Open Piano Hours — pilot concept", cardBody: "A supervised two-hour block using one or two approved rooms, with members reserving individual 30-minute practice slots. The exact model will change to match department rules.",
      facts: [["Rooms", "One or two, if approved"], ["Session length", "30-minute proposal"], ["Eligibility", "To be confirmed"], ["Schedule", "To be confirmed"]],
      questionsTitle: "What must be resolved", questions: [["Access", "Whether students outside Music courses may participate."], ["Operations", "Rooms, keys, supervision, instrument care and recurring reservations."], ["Costs", "Any space, staffing or instrument-use charges."], ["Event process", "T-RES, waivers and lead times for a pilot or recurring series."]]
    },
    events: {
      title: "Events will appear here when they are real.",
      intro: "No dates, venues or participation details are confirmed yet.",
      empty: "No events are confirmed yet. Dates, venues and participation details will be published when confirmed.",
      formatsTitle: "Formats under consideration", formats: [["Weekly peer-help hours", "A consistent place to bring questions about music and practice."], ["Piano salons", "A low-pressure performance and listening gathering."], ["Collaborations & masterclasses", "Future sessions with ensembles or guest musicians when arrangements are confirmed."]]
    },
    involved: {
      title: "There will be more than one way to take part.",
      intro: "Interested in learning, tutoring, performing or collaborating? Contact and sign-up channels are not yet confirmed.",
      roles: [["Learner", "Bring repertoire questions, practice challenges or a wish to begin."], ["Peer tutor", "Share focused, constructive help during scheduled sessions."], ["Performer", "Prepare a piece for a future salon and receive optional feedback."], ["Collaborator", "Connect piano with voice, chamber music, orchestra or another student group."]],
      contactTitle: "Discord and public contact", contactBody: "The server, public inbox and interest form are being prepared. Verified links will appear here after ownership and privacy details are confirmed.",
      faqTitle: "Frequently asked questions", faq: [["Do I need piano experience?", "The proposed community is intended for different experience levels; exact participation arrangements are still being designed."], ["Can I reserve a CPMC piano through the club?", "Not yet. Access has been requested, but no room or booking permission is confirmed."], ["Is tutoring available now?", "No. Free peer help and optional paid tutoring are proposals, not active services."], ["Is this an official UC San Diego program?", "No. It is a proposed independent student organization and is not yet approved."]]
    }
  },
  "zh-CN": {
    lang: "简体中文", menu: "菜单", language: "语言", eyebrow: "筹建中的学生社群",
    banner: "筹建中的学生社团，尚未获批",
    nav: { home: "首页", about: "关于我们", programs: "项目", practice: "练琴资源", events: "活动", "get-involved": "参与我们" },
    common: {
      pending: "待确定", proposal: "拟议项目", status: "当前状态", contact: "联系方式：待确定",
      disclaimer: "本网站介绍的是拟筹建的学生社团，不代表已获批准的组织或 UC San Diego 官方项目。",
      approval: "须经校方批准", learn: "学习", share: "分享", connect: "连接"
    },
    home: {
      title: "以琴会友，一起成长。",
      body: "我们希望在 UC San Diego 建立一个友好的钢琴社群，让同学们互相学习、分享音乐，探索合奏的乐趣。",
      cta1: "了解拟议项目", cta2: "了解参与方式",
      themes: [["一起学习", "围绕曲目、音乐处理与练习方法提供免费同伴帮助。"], ["分享舞台", "举办轻松的钢琴沙龙，鼓励演奏、聆听与建设性交流。"], ["建立连接", "连接钢琴演奏者、学生乐团和寻找合作伙伴的同学。"]],
      statusTitle: "从筹建阶段如实呈现",
      statusBody: "注册、场地、组织者和参与渠道仍在确认中。网站展示我们计划建立的结构，不会把提议写成已经开放的服务。",
      statusItems: [["社团注册", "正在办理"], ["共享练琴", "已提出许可询问"], ["活动与 Discord", "尚未开放"]]
    },
    about: {
      title: "面向不同专业与演奏经验的钢琴社群。", intro: "拟议社团希望欢迎初学者、有经验的钢琴演奏者、聆听者及音乐合作伙伴。",
      mission: "我们的目的", missionBody: "建立一个友好的空间，让同学练琴、提出音乐问题、在支持性的环境中演奏，并找到一起做音乐的伙伴。",
      valuesTitle: "我们希望如何运作", values: [["开放参与", "免费入会，并为不同目标和经验水平的同学保留空间。"], ["有效反馈", "提供具体而尊重的建议，帮助演奏者决定下一步如何练习。"], ["稳健发展", "人员、场地、隐私机制和相关批准准备好后，再启动具体项目。"]],
      stateTitle: "组织状态", stateBody: "社团目前处于筹建阶段，尚未获批。主要负责人、志愿钢琴演奏者和启动时间均待确认。"
    },
    programs: {
      title: "围绕学习、演奏与练琴资源设计的项目。", intro: "以下均为拟议方向。只有在确认后，我们才会公布是否开放、具体时间与参与方式。",
      items: [["免费同伴辅导", "拟安排钢琴基础、曲目、音乐处理与练习方法的同伴帮助。辅导人员、匹配方式和时间尚未确定。"], ["钢琴沙龙", "拟举办轻松的演奏与聆听聚会，并探索自愿匿名反馈及 AI 总结；须先明确隐私与同意机制。"], ["共享练琴资源", "拟争取 CPMC 固定练琴时段，帮助需要乐器的同学。琴房、钢琴及预约权限均未确认。"], ["乐团与合奏连接", "帮助钢琴演奏者联系歌者、器乐演奏者与学生乐团。目前尚无已确认的合作方或排练。"], ["嘉宾与比赛机会", "未来可探索讲座、大师课、模拟试奏、内部比赛和校外音乐机会信息。"], ["可选付费辅导", "可另行考虑由社团统一管理的服务。目前尚未提供，批准、费用、辅导报酬和收款规则均未解决。"]]
    },
    practice: {
      title: "让更多同学获得切实的练琴时间。", intro: "Conrad Prebys Music Center（CPMC）共享练琴资源目前仅为提议，须经学校及音乐系批准。",
      cardTitle: "开放练琴时段——试点设想", cardBody: "由负责人监督两个小时，在获批的一至两个琴房内，为成员安排每人 30 分钟的独立练琴时段。最终方案会按音乐系规定调整。",
      facts: [["琴房", "如获批准，拟使用一至两个"], ["单次时长", "拟定 30 分钟"], ["参与资格", "待确定"], ["时间安排", "待确定"]],
      questionsTitle: "仍需确认的问题", questions: [["使用资格", "未选修音乐课程的学生能否参加。"], ["实际运营", "琴房、钥匙、现场监督、乐器维护及定期预约。"], ["费用", "是否涉及场地、人员或乐器使用费用。"], ["活动流程", "试点或系列活动所需的 T-RES、豁免与提前申请时间。"]]
    },
    events: {
      title: "活动确认后，我们会在这里公布。", intro: "目前尚无已确认的日期、地点或参与方式。",
      empty: "目前尚无已确认的活动。日期、地点及参与方式将在确认后公布。",
      formatsTitle: "正在考虑的形式", formats: [["每周同伴辅导", "在固定时段讨论音乐与练习问题。"], ["钢琴沙龙", "提供轻松、低压力的演奏与聆听机会。"], ["合作与大师课", "条件成熟后，与乐团或受邀音乐家开展活动。"]]
    },
    involved: {
      title: "我们希望提供多种参与方式。", intro: "想学习、辅导、演奏或合作？联系方式与报名渠道尚未确定。",
      roles: [["学习者", "带来曲目问题、练习困难，或从零开始的愿望。"], ["同伴辅导者", "在固定时段提供有重点、建设性的帮助。"], ["演奏者", "为未来的沙龙准备曲目，并自愿接受反馈。"], ["合作伙伴", "让钢琴与声乐、室内乐、乐团或其他学生组织连接。"]],
      contactTitle: "Discord 与公开联系方式", contactBody: "Discord、公开邮箱和兴趣表单正在准备中。确认所有权和隐私说明后，这里才会提供经过验证的链接。",
      faqTitle: "常见问题", faq: [["需要钢琴经验吗？", "拟议社群希望面向不同经验水平的同学，具体参与安排仍在设计。"], ["现在能通过社团预约 CPMC 琴房吗？", "还不能。我们已询问使用许可，但尚无琴房或预约权获批。"], ["现在有辅导服务吗？", "没有。免费同伴帮助和可选付费辅导目前均为提议。"], ["这是 UC San Diego 官方项目吗？", "不是。它是拟成立的独立学生组织，目前尚未获批。"]]
    }
  },
  es: {
    lang: "Español", menu: "Menú", language: "Idioma", eyebrow: "Una comunidad estudiantil propuesta",
    banner: "Club estudiantil propuesto; aún no aprobado",
    nav: { home: "Inicio", about: "Acerca del club", programs: "Programas", practice: "Acceso a la práctica", events: "Eventos", "get-involved": "Participa" },
    common: {
      pending: "Por confirmar", proposal: "Propuesta", status: "Estado actual", contact: "Canal de contacto: Por confirmar",
      disclaimer: "Este sitio presenta un club estudiantil propuesto. No representa una organización aprobada ni un programa oficial de UC San Diego.",
      approval: "Sujeto a aprobación universitaria", learn: "Aprender", share: "Compartir", connect: "Conectar"
    },
    home: {
      title: "Un espacio para crecer con el piano.", body: "Queremos crear una comunidad acogedora en UC San Diego para aprender entre estudiantes, compartir música y explorar cómo tocar juntos.",
      cta1: "Explora los programas propuestos", cta2: "Descubre cómo participar",
      themes: [["Aprender juntos", "Apoyo gratuito entre estudiantes sobre repertorio, interpretación y hábitos de práctica."], ["Compartir el escenario", "Encuentros informales de piano para tocar, escuchar y reflexionar de forma constructiva."], ["Crear conexiones", "Un punto de encuentro para pianistas, conjuntos y estudiantes que buscan colaboradores."]],
      statusTitle: "Transparencia desde el principio", statusBody: "El registro, los espacios, los organizadores y los canales de participación siguen pendientes. El sitio muestra la estructura prevista sin presentar propuestas como servicios activos.",
      statusItems: [["Registro", "En proceso"], ["Acceso compartido al piano", "Permiso solicitado"], ["Eventos y Discord", "Aún no disponibles"]]
    },
    about: {
      title: "Una comunidad de piano para distintas carreras y niveles.", intro: "El club propuesto está pensado para principiantes, pianistas con experiencia, oyentes y colaboradores.",
      mission: "Nuestro propósito", missionBody: "Crear un espacio acogedor para practicar, plantear preguntas musicales, tocar en un ambiente de apoyo y conocer a otras personas con quienes hacer música.",
      valuesTitle: "Cómo esperamos trabajar", values: [["Puertas abiertas", "Membresía gratuita y espacio para diferentes objetivos y niveles de experiencia."], ["Comentarios útiles", "Sugerencias específicas y respetuosas que ayuden a decidir qué practicar después."], ["Crecimiento responsable", "Los programas comenzarán cuando estén listos las personas, los espacios, las reglas de privacidad y las autorizaciones necesarias."]],
      stateTitle: "Estado de la organización", stateBody: "El club está en organización y aún no ha sido aprobado. Los miembros principales, los pianistas voluntarios y la fecha de lanzamiento están por confirmar."
    },
    programs: {
      title: "Programas centrados en aprender, tocar y acceder a un piano.", intro: "Estas son líneas de trabajo propuestas. La disponibilidad, los horarios y los detalles se publicarán únicamente cuando estén confirmados.",
      items: [["Tutoría gratuita entre estudiantes", "Apoyo programado sobre fundamentos, repertorio, interpretación y métodos de práctica. Los tutores, las asignaciones y los horarios están por confirmar."], ["Encuentros de piano", "Reuniones informales para tocar y escuchar. Se estudian comentarios anónimos opcionales con resumen de IA; antes deben definirse la privacidad y el consentimiento."], ["Acceso compartido para practicar", "Un bloque recurrente propuesto en CPMC para estudiantes que necesitan un instrumento. No se han confirmado salas, pianos ni derechos de reserva."], ["Conexiones con conjuntos", "Ayudar a pianistas a conocer cantantes, instrumentistas y conjuntos estudiantiles. No hay colaboraciones ni ensayos confirmados."], ["Artistas invitados y oportunidades", "En el futuro podrían explorarse charlas, clases magistrales, audiciones de práctica, concursos internos e información sobre oportunidades externas."], ["Tutoría de pago opcional", "Podría considerarse un servicio separado administrado por el club. Actualmente no se ofrece; faltan aprobación, tarifas, compensación y reglas de pago."]]
    },
    practice: {
      title: "Un camino práctico hacia más tiempo al piano.", intro: "El acceso compartido para practicar en el Conrad Prebys Music Center (CPMC) es una propuesta sujeta a aprobación de la universidad y del departamento.",
      cardTitle: "Horas abiertas de piano: concepto piloto", cardBody: "Un bloque supervisado de dos horas en una o dos salas aprobadas, con reservas individuales de 30 minutos. El modelo se adaptará a las normas del departamento.",
      facts: [["Salas", "Una o dos, si se aprueba"], ["Duración", "Propuesta de 30 minutos"], ["Elegibilidad", "Por confirmar"], ["Horario", "Por confirmar"]],
      questionsTitle: "Qué debe resolverse", questions: [["Acceso", "Si pueden participar estudiantes que no cursan asignaturas de Música."], ["Operación", "Salas, llaves, supervisión, cuidado del instrumento y reservas recurrentes."], ["Costos", "Posibles cargos por espacios, personal o uso de instrumentos."], ["Proceso de eventos", "T-RES, exenciones y plazos para un piloto o una serie recurrente."]]
    },
    events: {
      title: "Los eventos aparecerán aquí cuando sean reales.", intro: "Aún no hay fechas, lugares ni formas de participación confirmados.",
      empty: "Aún no hay eventos confirmados. Las fechas, los lugares y los detalles de participación se publicarán cuando se confirmen.",
      formatsTitle: "Formatos en consideración", formats: [["Tutoría semanal entre estudiantes", "Un horario constante para preguntas sobre música y práctica."], ["Encuentros de piano", "Una reunión de interpretación y escucha con poca presión."], ["Colaboraciones y clases magistrales", "Futuras sesiones con conjuntos o músicos invitados cuando existan acuerdos confirmados."]]
    },
    involved: {
      title: "Habrá más de una forma de participar.", intro: "¿Te interesa aprender, dar tutorías, tocar o colaborar? Los canales de contacto e inscripción aún no están confirmados.",
      roles: [["Estudiante", "Trae preguntas de repertorio, dificultades de práctica o el deseo de comenzar."], ["Tutor o tutora", "Comparte ayuda específica y constructiva durante sesiones programadas."], ["Intérprete", "Prepara una obra para un futuro encuentro y recibe comentarios opcionales."], ["Colaborador o colaboradora", "Conecta el piano con voz, música de cámara, orquesta u otro grupo estudiantil."]],
      contactTitle: "Discord y contacto público", contactBody: "El servidor, el buzón público y el formulario de interés están en preparación. Los enlaces verificados aparecerán aquí después de confirmar la propiedad y los detalles de privacidad.",
      faqTitle: "Preguntas frecuentes", faq: [["¿Necesito experiencia con el piano?", "La comunidad propuesta está pensada para distintos niveles; los detalles de participación siguen en diseño."], ["¿Puedo reservar un piano de CPMC a través del club?", "Todavía no. Se ha solicitado orientación, pero no hay permiso confirmado para salas o reservas."], ["¿Ya hay tutoría disponible?", "No. Tanto la ayuda gratuita como la tutoría de pago opcional son propuestas, no servicios activos."], ["¿Es un programa oficial de UC San Diego?", "No. Es una organización estudiantil independiente propuesta y aún no está aprobada."]]
    }
  }
};

function params() {
  const q = new URLSearchParams(location.search);
  const lang = locales.includes(q.get("lang")) ? q.get("lang") : "en";
  const page = pages.includes(q.get("page")) ? q.get("page") : "home";
  return { lang, page };
}

function href(lang, page) { return `?lang=${encodeURIComponent(lang)}&page=${encodeURIComponent(page)}`; }
function pill(t) { return `<span class="status-pill">${t}</span>`; }
function cardGrid(items, status) {
  return `<div class="card-grid">${items.map((item, i) => `<article class="card ${i === 0 ? "featured" : ""}"><span class="card-number">0${i + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p>${status ? pill(status) : ""}</article>`).join("")}</div>`;
}
function intro(c, title, body) {
  return `<section class="page-intro"><div class="page-shell"><p class="eyebrow">${c.eyebrow}</p><h1>${title}</h1><p>${body}</p></div></section>`;
}

function renderHome(c, lang) {
  const h = c.home;
  return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">${c.eyebrow}</p><h1>${h.title}</h1><p class="lead">${h.body}</p><div class="actions"><a class="button-link" href="${href(lang, "programs")}">${h.cta1}</a><a class="button-link secondary" href="${href(lang, "get-involved")}">${h.cta2}</a></div></div><img class="hero-mark" src="./assets/club-mark.png" alt="" width="420" height="420" /></div></section><section class="page-shell">${cardGrid(h.themes)}<div class="status-panel"><div><p class="eyebrow">${c.common.status}</p><h2>${h.statusTitle}</h2><p>${h.statusBody}</p></div><ul class="status-list">${h.statusItems.map(x => `<li>${x[0]} <strong>${x[1]}</strong></li>`).join("")}</ul></div></section>`;
}

function renderAbout(c) {
  const a = c.about;
  return `${intro(c, a.title, a.intro)}<section class="page-shell"><div class="section-head"><p class="eyebrow">${c.common.learn} · ${c.common.share} · ${c.common.connect}</p><h2>${a.mission}</h2><p>${a.missionBody}</p></div>${cardGrid(a.values)}<div class="status-panel"><div><p class="eyebrow">${c.common.status}</p><h2>${a.stateTitle}</h2></div><div><p>${a.stateBody}</p>${pill(c.common.pending)}</div></div></section>`;
}

function renderPrograms(c) {
  const p = c.programs;
  return `${intro(c, p.title, p.intro)}<section class="page-shell"><div class="program-list">${p.items.map((item, i) => `<article class="program-row"><span class="program-icon">${String(i + 1).padStart(2, "0")}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div>${pill(i === 5 ? c.common.approval : c.common.pending)}</article>`).join("")}</div></section>`;
}

function renderPractice(c) {
  const p = c.practice;
  return `${intro(c, p.title, p.intro)}<section class="page-shell"><div class="practice-visual"><div class="practice-mark"><img src="./assets/discord-mark.png" alt="" width="260" height="260" /></div><div class="card featured"><p class="eyebrow">${c.common.proposal}</p><h2>${p.cardTitle}</h2><p>${p.cardBody}</p><div class="facts">${p.facts.map(x => `<div class="fact"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("")}</div></div></div><div class="section-head faq"><h2>${p.questionsTitle}</h2></div>${cardGrid(p.questions, c.common.pending)}</section>`;
}

function renderEvents(c) {
  const e = c.events;
  return `${intro(c, e.title, e.intro)}<section class="page-shell"><div class="empty-state"><span class="rest" aria-hidden="true">𝄽</span><h2>${c.common.pending}</h2><p>${e.empty}</p></div><div class="section-head faq"><h2>${e.formatsTitle}</h2></div>${cardGrid(e.formats, c.common.proposal)}</section>`;
}

function renderInvolved(c) {
  const i = c.involved;
  return `${intro(c, i.title, i.intro)}<section class="page-shell"><div class="role-grid">${i.roles.map((x, n) => `<article class="card"><span class="card-number">0${n + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="contact-block"><img src="./assets/discord-mark.png" alt="" width="96" height="96" /><div><p class="eyebrow">${c.common.pending}</p><h2>${i.contactTitle}</h2><p>${i.contactBody}</p></div></div><div class="faq"><h2>${i.faqTitle}</h2>${i.faq.map(x => `<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("")}</div></section>`;
}

function render() {
  const { lang, page } = params();
  const c = copy[lang];
  document.documentElement.lang = lang;
  document.title = `${c.nav[page]} | Piano Club at UC San Diego`;
  document.querySelector('meta[name="description"]').content = page === "home" ? c.home.body : c.common.disclaimer;
  document.getElementById("proposal-ribbon").textContent = c.banner;
  document.getElementById("menu-label").textContent = c.menu;
  document.getElementById("language-label").textContent = c.language;
  document.getElementById("language-select").value = lang;
  document.getElementById("site-nav").innerHTML = pages.map(p => `<a href="${href(lang, p)}" ${p === page ? 'aria-current="page"' : ""}>${c.nav[p]}</a>`).join("");
  const brand = document.querySelector(".brand");
  brand.href = href(lang, "home");
  brand.setAttribute("aria-label", `${c.nav.home} — Piano Club at UC San Diego`);
  const views = { home: renderHome, about: renderAbout, programs: renderPrograms, practice: renderPractice, events: renderEvents, "get-involved": renderInvolved };
  document.getElementById("main").innerHTML = views[page](c, lang);
  document.getElementById("footer-disclaimer").textContent = c.common.disclaimer;
  document.getElementById("footer-contact").textContent = c.common.contact;
  document.getElementById("footer-status").textContent = c.banner;
  document.getElementById("site-nav").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

document.getElementById("language-select").addEventListener("change", event => {
  const { page } = params();
  location.href = href(event.target.value, page);
});
document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("site-nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
});
render();
