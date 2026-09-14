const pages = ["home", "about", "programs", "practice", "events", "get-involved", "contact"];
const locales = ["en", "zh-CN", "es"];

const copy = {
  en: {
    lang: "English", menu: "Menu", language: "Language", skip: "Skip to content", navigation: "Primary navigation",
    banner: "Proposed student club — not yet approved",
    nav: { home: "Home", about: "About", programs: "Programs", practice: "Practice Access", events: "Events", "get-involved": "Get Involved", contact: "Contact" },
    common: {
      pending: "To be confirmed", proposal: "Proposed", status: "Current status", contact: "hello@tritonpiano.org",
      disclaimer: "This is a proposed independent student club. References to UC San Diego describe its location and do not imply university endorsement or support.",
      approval: "Subject to university approval", learn: "Learn", share: "Share", connect: "Connect"
    },
    home: {
      title: "A place to grow through piano.",
      body: "We hope to build a welcoming piano community at UC San Diego, where students can learn from one another, share music and explore playing together.",
      cta1: "Explore proposed programs", cta2: "Explore ways to participate",
      themes: [
        ["Learn together", "Free peer help focused on repertoire, interpretation and practice habits.", "programs", "View Programs"],
        ["Share the stage", "Informal piano salons for performing, listening and constructive reflection.", "events", "View Events"],
        ["Make connections", "A meeting point for pianists, ensembles and students looking for collaborators.", "get-involved", "View ways to participate"]
      ],
      statusTitle: "Follow the club's current status",
      statusBody: "Registration and launch-readiness updates are maintained on the About page.",
      statusLink: "View organizational status"
    },
    about: {
      title: "A piano community across majors and experience levels.",
      intro: "The proposed club is designed for curious beginners, experienced pianists, listeners and collaborators.",
      mission: "Our purpose", missionBody: "Create a welcoming place where students can practice, ask musical questions, perform in a supportive setting and find people to make music with.",
      valuesTitle: "How we hope to work", values: [["Open doors", "Free membership and room for different goals and experience levels."], ["Useful feedback", "Specific, respectful suggestions that help musicians decide what to practice next."], ["Responsible growth", "Programs launch only after the relevant people, spaces, privacy rules and approvals are ready."]],
      stateTitle: "Organizational status", stateBody: "The club is being organized and has not yet been approved. Principal Members, volunteer pianists and launch timing remain unconfirmed."
    },
    programs: {
      title: "Eight programs, launched in deliberate phases.",
      intro: "This page is the single source for the scope and launch phase of all eight planned programs.",
      subTitle: "Lightweight activities inside the programs", subBody: "Four-hand duet matching, practice partners and unfinished-work sharing will be offered as sub-activities rather than counted as separate programs.",
      practiceLink: "See the detailed Practice Access plan",
      items: [
        ["Free Piano Help Hours", "Scheduled drop-in peer help with fundamentals, repertoire, interpretation and practice methods.", "Launch priority"],
        ["Piano salons, anonymous feedback and AI-organized suggestions", "Informal performances with optional anonymous feedback. AI may organize recurring themes after privacy and consent rules are established.", "Launch priority"],
        ["Open Piano Hours / shared practice time", "Proposed recurring practice blocks for students who need access to a piano, subject to space and university approval.", "Launch priority"],
        ["Ensemble, chamber music and accompaniment collaboration", "Match pianists with ensembles, chamber groups, singers and accompaniment requests.", "Launch priority"],
        ["Pianist talks and masterclasses", "Invite pianists to share musical ideas, practice methods and performance experience when guests and venues are available.", "Later phase"],
        ["Internal competitions and mock auditions", "Create supportive practice settings for auditions and competition repertoire after organizers and procedures are ready.", "Later phase"],
        ["External competition and performance opportunity listings", "Maintain a concise list of relevant opportunities that students can review independently.", "Parallel launch"],
        ["Club-managed optional paid coaching", "Consider an opt-in service only after approval, pricing, tutor compensation, payment and accountability rules are established.", "Later phase"]
      ]
    },
    practice: {
      title: "A practical path to more time at the piano.",
      intro: "This page maintains the access conditions and approval progress for the proposed shared practice pilot at the Conrad Prebys Music Center (CPMC).",
      cardTitle: "Open Piano Hours — pilot concept", cardBody: "We propose shared practice time for students who need a piano. Rooms, supervision, session length and booking arrangements are subject to approval. No access is currently confirmed.",
      facts: [["Rooms", "To be confirmed"], ["Session length", "To be confirmed"], ["Eligibility", "To be confirmed"], ["Schedule", "To be confirmed"]],
      questionsTitle: "What must be resolved", questions: [["Access", "Whether students outside Music courses may participate."], ["Operations", "Rooms, keys, supervision, instrument care and recurring reservations."], ["Costs", "Any space, staffing or instrument-use charges."], ["Event process", "T-RES, waivers and lead times for a pilot or recurring series."]],
      programLink: "View Open Piano Hours in the program plan"
    },
    events: {
      title: "Event calendar",
      intro: "Confirmed dates, venues and participation details will be maintained here.",
      empty: "There are no confirmed events yet. Explore the program plan to see what is being prepared.",
      programsLink: "View the eight planned programs"
    },
    involved: {
      title: "There will be more than one way to take part.",
      intro: "Interested in learning, tutoring, performing or collaborating? Explore the roles below.",
      roles: [["Learner", "Bring repertoire questions, practice challenges or a wish to begin."], ["Peer tutor", "Share focused, constructive help during scheduled sessions."], ["Performer", "Prepare a piece for a future salon and receive optional feedback."], ["Collaborator", "Connect piano with voice, chamber music, orchestra or another student group."]],
      contactLabel: "Contact entry",
      contactTitle: "Questions or ideas?", contactBody: "The Contact page keeps the club's current public channel in one place.", contactLink: "Go to Contact",
      faqTitle: "Frequently asked question", faq: [["Do I need piano experience?", "The proposed community is intended for different experience levels; exact participation arrangements are still being designed."]],
      relatedTitle: "Find related information", related: [["Practice access", "Room and booking updates are maintained on the Practice Access page.", "practice", "View Practice Access"], ["Program rollout", "The Programs page maintains the launch phase of all eight programs.", "programs", "View Programs"], ["Organization status", "Registration updates are maintained on the About page.", "about", "View About"]]
    },
    contactPage: {
      title: "Contact the proposed club.", intro: "Questions about programs, collaboration or helping with the launch are welcome at the public club email.",
      emailLabel: "Public email", emailNote: "Messages are forwarded to the club organizer through Cloudflare Email Routing.",
      topics: [["Programs and piano access", "Ask about planned activities, accessibility needs or future practice access."], ["Performance and collaboration", "Share an ensemble, chamber music, accompaniment or event idea."], ["Help launch the club", "Introduce yourself if you may be interested in organizing, tutoring or volunteering."]]
    }
  },
  "zh-CN": {
    lang: "简体中文", menu: "菜单", language: "语言", skip: "跳至正文", navigation: "主导航",
    banner: "筹建中的学生社团，尚未获批",
    nav: { home: "首页", about: "关于我们", programs: "项目", practice: "练琴资源", events: "活动", "get-involved": "参与我们", contact: "联系我们" },
    common: {
      pending: "待确定", proposal: "拟议项目", status: "当前状态", contact: "hello@tritonpiano.org",
      disclaimer: "本组织是筹建中的独立学生社团；提及 UC San Diego 仅用于说明所在地，不代表校方认可、赞助或支持。",
      approval: "须经校方批准", learn: "学习", share: "分享", connect: "连接"
    },
    home: {
      title: "以琴会友，一起成长。",
      body: "我们希望在 UC San Diego 建立一个友好的钢琴社群，让同学们互相学习、分享音乐，探索合奏的乐趣。",
      cta1: "了解拟议项目", cta2: "了解参与方式",
      themes: [["一起学习", "围绕曲目、音乐处理与练习方法提供免费同伴帮助。", "programs", "查看项目"], ["分享舞台", "举办轻松的钢琴沙龙，鼓励演奏、聆听与建设性交流。", "events", "查看活动"], ["建立连接", "连接钢琴演奏者、学生乐团和寻找合作伙伴的同学。", "get-involved", "查看参与方式"]],
      statusTitle: "查看社团当前状态",
      statusBody: "注册进度与启动条件统一在“关于我们”页面维护。",
      statusLink: "查看组织状态"
    },
    about: {
      title: "面向不同专业与演奏经验的钢琴社群。", intro: "拟议社团希望欢迎初学者、有经验的钢琴演奏者、聆听者及音乐合作伙伴。",
      mission: "我们的目的", missionBody: "建立一个友好的空间，让同学练琴、提出音乐问题、在支持性的环境中演奏，并找到一起做音乐的伙伴。",
      valuesTitle: "我们希望如何运作", values: [["开放参与", "免费入会，并为不同目标和经验水平的同学保留空间。"], ["有效反馈", "提供具体而尊重的建议，帮助演奏者决定下一步如何练习。"], ["稳健发展", "人员、场地、隐私机制和相关批准准备好后，再启动具体项目。"]],
      stateTitle: "组织状态", stateBody: "社团目前处于筹建阶段，尚未获批。主要负责人、志愿钢琴演奏者和启动时间均待确认。"
    },
    programs: {
      title: "八个主要项目，分阶段稳步启动。", intro: "本页集中维护八个项目的内容范围和启动阶段。",
      subTitle: "纳入主要项目的轻量活动", subBody: "四手联弹配对、练习伙伴和未完成作品分享将作为相关项目的子活动开展，不单独计数。",
      practiceLink: "查看练琴资源的详细方案",
      items: [
        ["免费 Piano Help Hours", "通过固定答疑时段，提供钢琴基础、曲目处理、音乐表达与练习方法方面的同伴帮助。", "启动优先"],
        ["钢琴沙龙＋匿名反馈＋AI 建议整理", "举办轻松的演奏与聆听聚会；在明确隐私与同意机制后，自愿收集匿名反馈并由 AI 整理共性建议。", "启动优先"],
        ["Open Piano Hours／共享练琴时段", "为需要钢琴的同学争取定期共享练琴时段，具体场地与使用方式须经校方批准。", "启动优先"],
        ["乐团、室内乐及伴奏合作", "帮助钢琴演奏者与乐团、室内乐组合、歌者及伴奏需求进行配对。", "启动优先"],
        ["钢琴家分享／大师课", "在嘉宾与场地落实后，邀请钢琴家分享音乐理解、练习方法与演出经验。", "后续阶段"],
        ["社团内部比赛／模拟试奏", "在组织人手与流程准备好后，为试奏和比赛曲目提供支持性的实践环境。", "后续阶段"],
        ["外部比赛与演出机会整理", "持续整理适合同学自主了解和报名的比赛、演出及相关音乐机会。", "同步开展"],
        ["社团统一管理的可选付费辅导", "仅在批准、定价、辅导报酬、收款与责任规则明确后，考虑提供自愿参加的服务。", "后续阶段"]
      ]
    },
    practice: {
      title: "让更多同学获得切实的练琴时间。", intro: "本页统一维护 Conrad Prebys Music Center（CPMC）共享练琴试点的使用条件与审批进展。",
      cardTitle: "开放练琴时段——试点设想", cardBody: "我们拟为需要钢琴的同学争取共享练琴时段。琴房、现场监督、单次时长与预约安排均须获得批准，目前尚无已确认的使用权限。",
      facts: [["琴房", "待确定"], ["单次时长", "待确定"], ["参与资格", "待确定"], ["时间安排", "待确定"]],
      questionsTitle: "仍需确认的问题", questions: [["使用资格", "未选修音乐课程的学生能否参加。"], ["实际运营", "琴房、钥匙、现场监督、乐器维护及定期预约。"], ["费用", "是否涉及场地、人员或乐器使用费用。"], ["活动流程", "试点或系列活动所需的 T-RES、豁免与提前申请时间。"]],
      programLink: "查看项目规划中的 Open Piano Hours"
    },
    events: {
      title: "活动日历", intro: "已确认的日期、地点和参与方式统一在本页面维护。",
      empty: "目前没有已确认的活动。你可以先查看项目规划，了解正在筹备的活动类型。",
      programsLink: "查看八个拟议项目"
    },
    involved: {
      title: "我们希望提供多种参与方式。", intro: "想学习、辅导、演奏或合作？请先了解以下参与角色。",
      roles: [["学习者", "带来曲目问题、练习困难，或从零开始的愿望。"], ["同伴辅导者", "在固定时段提供有重点、建设性的帮助。"], ["演奏者", "为未来的沙龙准备曲目，并自愿接受反馈。"], ["合作伙伴", "让钢琴与声乐、室内乐、乐团或其他学生组织连接。"]],
      contactLabel: "联系入口",
      contactTitle: "有问题或想法？", contactBody: "“联系我们”页面会集中维护社团当前的公开联系渠道。", contactLink: "前往联系我们",
      faqTitle: "常见问题", faq: [["需要钢琴经验吗？", "拟议社群希望面向不同经验水平的同学，具体参与安排仍在设计。"]],
      relatedTitle: "查找相关信息", related: [["练琴资源", "琴房与预约进展统一在“练琴资源”页面维护。", "practice", "查看练琴资源"], ["项目启动阶段", "八个项目的启动阶段统一在“项目”页面维护。", "programs", "查看项目"], ["社团注册状态", "注册进展统一在“关于我们”页面维护。", "about", "查看关于我们"]]
    },
    contactPage: {
      title: "联系我们。", intro: "如果你想了解项目、提出合作想法或参与社团筹建，欢迎通过公开邮箱联系我们。",
      emailLabel: "公开邮箱", emailNote: "邮件通过 Cloudflare Email Routing 转发给社团筹备负责人。",
      topics: [["项目与练琴资源", "咨询拟议活动、无障碍需求或未来共享练琴安排。"], ["演出与合作", "提出乐团、室内乐、伴奏或活动合作想法。"], ["参与社团筹建", "如果你愿意协助组织、同伴辅导或志愿工作，可以通过邮件介绍自己。"]]
    }
  },
  es: {
    lang: "Español", menu: "Menú", language: "Idioma", skip: "Saltar al contenido", navigation: "Navegación principal",
    banner: "Club estudiantil propuesto; aún no aprobado",
    nav: { home: "Inicio", about: "Acerca del club", programs: "Programas", practice: "Acceso a la práctica", events: "Eventos", "get-involved": "Participa", contact: "Contacto" },
    common: {
      pending: "Por confirmar", proposal: "Propuesta", status: "Estado actual", contact: "hello@tritonpiano.org",
      disclaimer: "Este es un club estudiantil independiente propuesto. Las referencias a UC San Diego describen su ubicación y no implican respaldo ni apoyo de la universidad.",
      approval: "Sujeto a aprobación universitaria", learn: "Aprender", share: "Compartir", connect: "Conectar"
    },
    home: {
      title: "Un espacio para crecer con el piano.", body: "Queremos crear una comunidad acogedora en UC San Diego para aprender entre estudiantes, compartir música y explorar cómo tocar juntos.",
      cta1: "Explora los programas propuestos", cta2: "Descubre cómo participar",
      themes: [["Aprender juntos", "Apoyo gratuito entre estudiantes sobre repertorio, interpretación y hábitos de práctica.", "programs", "Ver Programas"], ["Compartir el escenario", "Encuentros informales de piano para tocar, escuchar y reflexionar de forma constructiva.", "events", "Ver Eventos"], ["Crear conexiones", "Un punto de encuentro para pianistas, conjuntos y estudiantes que buscan colaboradores.", "get-involved", "Ver formas de participar"]],
      statusTitle: "Consulta el estado actual del club", statusBody: "Las novedades sobre el registro y la preparación se mantienen en la página Acerca del club.",
      statusLink: "Ver el estado de la organización"
    },
    about: {
      title: "Una comunidad de piano para distintas carreras y niveles.", intro: "El club propuesto está pensado para principiantes, pianistas con experiencia, oyentes y colaboradores.",
      mission: "Nuestro propósito", missionBody: "Crear un espacio acogedor para practicar, plantear preguntas musicales, tocar en un ambiente de apoyo y conocer a otras personas con quienes hacer música.",
      valuesTitle: "Cómo esperamos trabajar", values: [["Puertas abiertas", "Membresía gratuita y espacio para diferentes objetivos y niveles de experiencia."], ["Comentarios útiles", "Sugerencias específicas y respetuosas que ayuden a decidir qué practicar después."], ["Crecimiento responsable", "Los programas comenzarán cuando estén listos las personas, los espacios, las reglas de privacidad y las autorizaciones necesarias."]],
      stateTitle: "Estado de la organización", stateBody: "El club está en organización y aún no ha sido aprobado. Los miembros principales, los pianistas voluntarios y la fecha de lanzamiento están por confirmar."
    },
    programs: {
      title: "Ocho programas, puestos en marcha por etapas.", intro: "Esta página es la fuente única sobre el alcance y la fase de lanzamiento de los ocho programas previstos.",
      subTitle: "Actividades ligeras dentro de los programas", subBody: "La búsqueda de parejas para piano a cuatro manos, compañeros de práctica y muestras de obras en proceso serán subactividades, no programas separados.",
      practiceLink: "Ver el plan detallado de acceso a la práctica",
      items: [
        ["Piano Help Hours gratuitos", "Sesiones abiertas de apoyo entre estudiantes sobre fundamentos, repertorio, interpretación y métodos de práctica.", "Prioridad inicial"],
        ["Encuentros de piano, comentarios anónimos y síntesis con IA", "Actuaciones informales con comentarios anónimos opcionales. La IA podrá organizar temas comunes después de definir privacidad y consentimiento.", "Prioridad inicial"],
        ["Open Piano Hours / horario compartido de práctica", "Bloques periódicos propuestos para estudiantes que necesitan acceso a un piano, sujetos a espacio y aprobación universitaria.", "Prioridad inicial"],
        ["Colaboración con conjuntos, música de cámara y acompañamiento", "Conectar pianistas con conjuntos, grupos de cámara, cantantes y solicitudes de acompañamiento.", "Prioridad inicial"],
        ["Charlas de pianistas y clases magistrales", "Invitar a pianistas a compartir ideas musicales, métodos de práctica y experiencia escénica cuando haya invitados y espacios.", "Etapa posterior"],
        ["Concursos internos y audiciones simuladas", "Crear un entorno de práctica constructivo para audiciones y repertorio de concurso cuando estén listos el equipo y los procedimientos.", "Etapa posterior"],
        ["Lista de concursos y oportunidades de actuación externas", "Mantener una lista breve de oportunidades relevantes que cada estudiante pueda revisar por su cuenta.", "En paralelo"],
        ["Tutoría de pago opcional gestionada por el club", "Considerarla solo después de definir aprobación, precios, compensación, pagos y responsabilidades.", "Etapa posterior"]
      ]
    },
    practice: {
      title: "Un camino práctico hacia más tiempo al piano.", intro: "Esta página mantiene las condiciones de acceso y el progreso de aprobación del piloto propuesto en el Conrad Prebys Music Center (CPMC).",
      cardTitle: "Horas abiertas de piano: concepto piloto", cardBody: "Proponemos horarios compartidos de práctica para estudiantes que necesitan un piano. Las salas, la supervisión, la duración y las reservas están sujetas a aprobación. Aún no hay acceso confirmado.",
      facts: [["Salas", "Por confirmar"], ["Duración", "Por confirmar"], ["Elegibilidad", "Por confirmar"], ["Horario", "Por confirmar"]],
      questionsTitle: "Qué debe resolverse", questions: [["Acceso", "Si pueden participar estudiantes que no cursan asignaturas de Música."], ["Operación", "Salas, llaves, supervisión, cuidado del instrumento y reservas recurrentes."], ["Costos", "Posibles cargos por espacios, personal o uso de instrumentos."], ["Proceso de eventos", "T-RES, exenciones y plazos para un piloto o una serie recurrente."]],
      programLink: "Ver Open Piano Hours en el plan de programas"
    },
    events: {
      title: "Calendario de eventos", intro: "Las fechas, los lugares y los detalles de participación confirmados se mantendrán aquí.",
      empty: "Aún no hay eventos confirmados. Consulta el plan de programas para ver qué se está preparando.",
      programsLink: "Ver los ocho programas previstos"
    },
    involved: {
      title: "Habrá más de una forma de participar.", intro: "¿Te interesa aprender, dar tutorías, tocar o colaborar? Explora los roles disponibles.",
      roles: [["Estudiante", "Trae preguntas de repertorio, dificultades de práctica o el deseo de comenzar."], ["Tutor o tutora", "Comparte ayuda específica y constructiva durante sesiones programadas."], ["Intérprete", "Prepara una obra para un futuro encuentro y recibe comentarios opcionales."], ["Colaborador o colaboradora", "Conecta el piano con voz, música de cámara, orquesta u otro grupo estudiantil."]],
      contactLabel: "Acceso de contacto",
      contactTitle: "¿Tienes una pregunta o idea?", contactBody: "La página de Contacto mantiene el canal público actual del club en un solo lugar.", contactLink: "Ir a Contacto",
      faqTitle: "Pregunta frecuente", faq: [["¿Necesito experiencia con el piano?", "La comunidad propuesta está pensada para distintos niveles; los detalles de participación siguen en diseño."]],
      relatedTitle: "Encuentra información relacionada", related: [["Acceso a la práctica", "Las novedades sobre salas y reservas se mantienen en Acceso a la práctica.", "practice", "Ver Acceso a la práctica"], ["Lanzamiento de programas", "La fase de los ocho programas se mantiene en Programas.", "programs", "Ver Programas"], ["Estado de la organización", "Las novedades del registro se mantienen en Acerca del club.", "about", "Ver Acerca del club"]]
    },
    contactPage: {
      title: "Contacta con el club propuesto.", intro: "Escríbenos si tienes preguntas sobre los programas, una idea de colaboración o interés en ayudar con el lanzamiento.",
      emailLabel: "Correo público", emailNote: "Los mensajes se reenvían a la persona organizadora mediante Cloudflare Email Routing.",
      topics: [["Programas y acceso al piano", "Pregunta por las actividades previstas, necesidades de accesibilidad o el futuro acceso para practicar."], ["Actuaciones y colaboración", "Comparte una idea de conjunto, música de cámara, acompañamiento o evento."], ["Ayuda a lanzar el club", "Preséntate si te interesa organizar, dar apoyo entre estudiantes o colaborar como voluntario."]]
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
function entryCardGrid(lang, items) {
  return `<div class="card-grid entry-grid">${items.map((item, i) => `<article class="card entry-card ${i === 0 ? "featured" : ""}"><span class="card-number">0${i + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p><a class="text-link" href="${href(lang, item[2])}">${item[3]}</a></article>`).join("")}</div>`;
}
function intro(c, title, body) {
  return `<section class="page-intro"><div class="page-shell"><h1>${title}</h1><p>${body}</p></div></section>`;
}
function relatedLink(lang, page, label, anchor = "") {
  return `<a class="button-link secondary" href="${href(lang, page)}${anchor}">${label}</a>`;
}

function renderHome(c, lang) {
  const h = c.home;
  return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><h1>${h.title}</h1><p class="lead">${h.body}</p><div class="actions"><a class="button-link" href="${href(lang, "programs")}">${h.cta1}</a><a class="button-link secondary" href="${href(lang, "get-involved")}">${h.cta2}</a></div></div><img class="hero-mark" src="./assets/club-mark.png" alt="" width="420" height="420" /></div></section><section class="page-shell">${entryCardGrid(lang, h.themes)}<div class="status-panel status-summary"><div><p class="eyebrow">${c.common.status}</p><h2>${h.statusTitle}</h2><p>${h.statusBody}</p></div><div class="inline-action">${relatedLink(lang, "about", h.statusLink)}</div></div></section>`;
}

function renderAbout(c) {
  const a = c.about;
  return `${intro(c, a.title, a.intro)}<section class="page-shell"><div class="section-head"><p class="eyebrow">${c.common.learn} · ${c.common.share} · ${c.common.connect}</p><h2>${a.mission}</h2><p>${a.missionBody}</p></div>${cardGrid(a.values)}<div class="status-panel"><div><p class="eyebrow">${c.common.status}</p><h2>${a.stateTitle}</h2></div><div><p>${a.stateBody}</p>${pill(c.common.pending)}</div></div></section>`;
}

function renderPrograms(c) {
  const p = c.programs;
  const lang = params().lang;
  return `${intro(c, p.title, p.intro)}<section class="page-shell"><aside class="subactivity-note"><p class="eyebrow">${p.subTitle}</p><p>${p.subBody}</p></aside><div class="program-list">${p.items.map((item, i) => `<article class="program-row" id="program-${i + 1}"><span class="program-icon">${String(i + 1).padStart(2, "0")}</span><div><h3>${item[0]}</h3><p>${item[1]}</p>${i === 2 ? `<a class="text-link" href="${href(lang, "practice")}">${p.practiceLink}</a>` : ""}</div>${pill(item[2])}</article>`).join("")}</div></section>`;
}

function renderPractice(c, lang) {
  const p = c.practice;
  return `${intro(c, p.title, p.intro)}<section class="page-shell"><div class="practice-visual"><div class="practice-mark"><img src="./assets/club-mark.png" alt="" width="260" height="260" /></div><div class="card featured"><p class="eyebrow">${c.common.proposal}</p><h2>${p.cardTitle}</h2><p>${p.cardBody}</p><div class="facts">${p.facts.map(x => `<div class="fact"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("")}</div><div class="inline-action">${relatedLink(lang, "programs", p.programLink, "#program-3")}</div></div></div><div class="section-head faq"><h2>${p.questionsTitle}</h2></div>${cardGrid(p.questions, c.common.pending)}</section>`;
}

function renderEvents(c, lang) {
  const e = c.events;
  return `${intro(c, e.title, e.intro)}<section class="page-shell"><div class="empty-state"><span class="rest" aria-hidden="true">𝄽</span><h2>${c.common.pending}</h2><p>${e.empty}</p><div class="inline-action">${relatedLink(lang, "programs", e.programsLink)}</div></div></section>`;
}

function renderInvolved(c, lang) {
  const i = c.involved;
  return `${intro(c, i.title, i.intro)}<section class="page-shell"><div class="role-grid">${i.roles.map((x, n) => `<article class="card"><span class="card-number">0${n + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="contact-block"><img src="./assets/discord-mark.png" alt="" width="96" height="96" /><div><p class="eyebrow">${i.contactLabel}</p><h2>${i.contactTitle}</h2><p>${i.contactBody}</p><div class="inline-action">${relatedLink(lang, "contact", i.contactLink)}</div></div></div><div class="faq"><h2>${i.faqTitle}</h2>${i.faq.map(x => `<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("")}</div><section class="related-section"><h2>${i.relatedTitle}</h2>${entryCardGrid(lang, i.related)}</section></section>`;
}

function renderContact(c) {
  const p = c.contactPage;
  return `${intro(c, p.title, p.intro)}<section class="page-shell"><div class="contact-email"><p class="eyebrow">${p.emailLabel}</p><h2><a href="mailto:hello@tritonpiano.org">hello@tritonpiano.org</a></h2><p>${p.emailNote}</p></div>${cardGrid(p.topics)}</section>`;
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
  document.querySelector(".skip-link").textContent = c.skip;
  document.getElementById("site-nav").setAttribute("aria-label", c.navigation);
  document.getElementById("language-select").value = lang;
  document.getElementById("site-nav").innerHTML = pages.map(p => `<a href="${href(lang, p)}" ${p === page ? 'aria-current="page"' : ""}>${c.nav[p]}</a>`).join("");
  const brand = document.querySelector(".brand");
  brand.href = href(lang, "home");
  brand.setAttribute("aria-label", `${c.nav.home} — Piano Club at UC San Diego`);
  const views = { home: renderHome, about: renderAbout, programs: renderPrograms, practice: renderPractice, events: renderEvents, "get-involved": renderInvolved, contact: renderContact };
  document.getElementById("main").innerHTML = views[page](c, lang);
  document.getElementById("footer-disclaimer").textContent = c.common.disclaimer;
  document.getElementById("footer-contact").innerHTML = `<a href="mailto:hello@tritonpiano.org">${c.common.contact}</a>`;
  document.getElementById("site-nav").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

document.getElementById("language-select").addEventListener("change", event => {
  const { page } = params();
  location.href = href(event.target.value, page) + location.hash;
});
document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("site-nav");
  const open = nav.classList.toggle("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
});
render();
