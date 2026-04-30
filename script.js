const header = document.querySelector(".site-header");
const revealNodes = document.querySelectorAll("[data-reveal]");
const writingScroller = document.querySelector("[data-writing-scroller]");
const writingScrollButtons = document.querySelectorAll("[data-writing-scroll]");
const langButtons = document.querySelectorAll("[data-lang-choice]");
const metaDescription = document.querySelector('meta[name="description"]');
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavPanel = document.querySelector(".mobile-nav-panel");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.12,
  },
);

revealNodes.forEach((node) => revealObserver.observe(node));

writingScrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!writingScroller) return;
    const direction = button.dataset.writingScroll === "prev" ? -1 : 1;
    const travel = Math.min(writingScroller.clientWidth * 0.88, 420) * direction;
    writingScroller.scrollBy({ left: travel, behavior: "smooth" });
  });
});

const all = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const setText = (node, value) => {
  if (!node || value === undefined) return;
  node.textContent = value;
};
const setHTML = (node, value) => {
  if (!node || value === undefined) return;
  node.innerHTML = value;
};
const setTexts = (nodes, values) => {
  nodes.forEach((node, index) => {
    if (values[index] === undefined) return;
    node.textContent = values[index];
  });
};
const setHTMLs = (nodes, values) => {
  nodes.forEach((node, index) => {
    if (values[index] === undefined) return;
    node.innerHTML = values[index];
  });
};
const setAttributes = (node, attrs) => {
  if (!node || !attrs) return;
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined) return;
    node.setAttribute(key, value);
  });
};

const sectionValue = document.querySelector("#value");
const sectionFeatured = document.querySelector(".section-featured");
const sectionStructure = document.querySelector("#structure");
const sectionTimeline = document.querySelector(".section-timeline");
const sectionEvolution = document.querySelector("#evolution");
const sectionBooks = document.querySelector("#books");
const sectionFaculty = document.querySelector(".section-faculty");
const sectionAmbassador = document.querySelector(".section-ambassador");
const sectionWriting = document.querySelector(".section-writing-proof");
const sectionOutcomes = document.querySelector("#outcomes");
const sectionApply = document.querySelector("#apply");

const facultyCards = all(".faculty-card");
const programCards = all("#structure .program-card");
const levelPanels = all(".level-panel");
const writingSampleCards = all(".writing-sample-card");
const outcomeCards = all(".outcome-card");

const ui = {
  brand: document.querySelector(".brand"),
  nav: {
    container: document.querySelector(".main-nav"),
    links: all(".main-nav a"),
    mobileLinks: all(".mobile-nav-links a"),
  },
  headerCta: document.querySelector(".header-cta"),
  langSwitcher: document.querySelector(".lang-switcher"),
  mobileNavToggle,
  mobileNavEyebrow: document.querySelector(".mobile-nav-eyebrow"),
  mobileNavCta: document.querySelector(".mobile-nav-cta"),
  hero: {
    proofOverline: document.querySelector(".hero-proof-overline"),
    proofStrong: document.querySelector(".hero-proof strong"),
    proofSub: document.querySelector(".hero-proof-sub"),
    title: document.querySelector(".hero h1"),
    lead: document.querySelector(".hero-lead"),
    actions: all(".hero-actions a"),
    note: document.querySelector(".hero-note"),
    statKickers: all(".hero-stat-kicker"),
    statNums: all(".hero-stat-num"),
    statLabels: all(".hero-stat-label"),
    statNotes: all(".hero-stat-note"),
    panelCaptionLabel: document.querySelector(".panel-caption span"),
    panelCaptionStrong: document.querySelector(".panel-caption strong"),
    panelTag: document.querySelector(".hero-panel-tag"),
    panelQuote: document.querySelector(".hero-panel-quote p"),
    marquee: all(".marquee-track span"),
  },
  value: {
    eyebrow: sectionValue?.querySelector(".section-heading .eyebrow"),
    title: sectionValue?.querySelector(".section-heading h2"),
    lead: sectionValue?.querySelector(".section-heading p"),
    cardTitles: all(".value-card h3", sectionValue),
    cardTexts: all(".value-card p", sectionValue),
  },
  featured: {
    eyebrow: sectionFeatured?.querySelector(".split-copy .eyebrow"),
    title: sectionFeatured?.querySelector(".split-copy h2"),
    lead: sectionFeatured?.querySelector(".lead-paragraph"),
    pointTitles: all(".three-points strong", sectionFeatured),
    pointTexts: all(".three-points span", sectionFeatured),
  },
  structure: {
    eyebrow: sectionStructure?.querySelector(".section-heading .eyebrow"),
    title: sectionStructure?.querySelector(".section-heading h2"),
    lead: sectionStructure?.querySelector(".section-heading p"),
    cardTitles: programCards.map((card) => card.querySelector("h3")),
    cardTexts: programCards.map((card) => card.querySelector("p")),
    cardTags: programCards.map((card) => all(".program-tags span", card)),
  },
  timeline: {
    eyebrow: sectionTimeline?.querySelector(".section-heading .eyebrow"),
    title: sectionTimeline?.querySelector(".section-heading h2"),
    lead: sectionTimeline?.querySelector(".section-heading p"),
    headerStrong: sectionTimeline?.querySelector(".timeline-header strong"),
    headerSpan: sectionTimeline?.querySelector(".timeline-header span"),
    note: sectionTimeline?.querySelector(".timeline-note"),
    metricNumbers: all(".timeline-metrics strong", sectionTimeline),
    metricLabels: all(".timeline-metrics span", sectionTimeline),
    summary: sectionTimeline?.querySelector(".timeline-summary"),
    calloutEyebrow: sectionTimeline?.querySelector(".admissions-callout .eyebrow"),
    calloutTitle: sectionTimeline?.querySelector(".admissions-callout h3"),
    selectionTitles: all(".selection-logic strong", sectionTimeline),
    selectionTexts: all(".selection-logic span", sectionTimeline),
  },
  evolution: {
    eyebrow: sectionEvolution?.querySelector(".section-heading .eyebrow"),
    title: sectionEvolution?.querySelector(".section-heading h2"),
    lead: sectionEvolution?.querySelector(".section-heading p"),
    stages: all(".evolution-stage", sectionEvolution),
    titles: all(".evolution-card h3", sectionEvolution),
    texts: all(".evolution-card p", sectionEvolution),
  },
  books: {
    eyebrow: sectionBooks?.querySelector(".section-heading .eyebrow"),
    title: sectionBooks?.querySelector(".section-heading h2"),
    lead: sectionBooks?.querySelector(".section-heading p"),
    levelTitles: levelPanels.map((panel) => panel.querySelector(".level-header h3")),
    levelTexts: levelPanels.map((panel) => panel.querySelector(".level-header > p")),
    levelTags: levelPanels.map((panel) => panel.querySelector(".level-tag")),
    bookSpans: all(".book-card span", sectionBooks),
  },
  faculty: {
    eyebrow: sectionFaculty?.querySelector(".section-heading .eyebrow"),
    title: sectionFaculty?.querySelector(".section-heading h2"),
    lead: sectionFaculty?.querySelector(".section-heading p"),
    environmentTitles: all(".environment-card strong", sectionFaculty),
    environmentTexts: all(".environment-card span", sectionFaculty),
    roles: facultyCards.map((card) => card.querySelector(".faculty-role")),
    items: facultyCards.map((card) => all("li", card)),
    quotes: all(".quote-card p", sectionFaculty),
    quoteMeta: all(".quote-card span", sectionFaculty),
  },
  ambassador: {
    eyebrow: sectionAmbassador?.querySelector(".eyebrow"),
    title: sectionAmbassador?.querySelector("h2"),
    lead: sectionAmbassador?.querySelector(".lead-paragraph"),
    listTitles: all(".ambassador-list strong", sectionAmbassador),
    listTexts: all(".ambassador-list span", sectionAmbassador),
    largeVideoTitle: sectionAmbassador?.querySelector(".video-card.large strong"),
    largeVideoMeta: sectionAmbassador?.querySelector(".video-card.large small"),
  },
  writing: {
    eyebrow: sectionWriting?.querySelector(".section-heading .eyebrow"),
    title: sectionWriting?.querySelector(".section-heading h2"),
    lead: sectionWriting?.querySelector(".section-heading p"),
    boardTitle: sectionWriting?.querySelector(".writing-proof-note strong"),
    boardText: sectionWriting?.querySelector(".writing-proof-note p"),
    boardBadges: all(".writing-proof-badges span", sectionWriting),
    toolbarTitle: sectionWriting?.querySelector(".writing-sample-toolbar-copy strong"),
    toolbarText: sectionWriting?.querySelector(".writing-sample-toolbar-copy span"),
    scrollButtons: all(".writing-scroll-btn", sectionWriting),
    sampleMetas: writingSampleCards.map((card) => card.querySelector(".writing-sample-meta")),
    sampleTitles: writingSampleCards.map((card) => card.querySelector(".writing-sample-copy strong")),
    sampleTexts: writingSampleCards.map((card) => card.querySelector(".writing-sample-copy p")),
    ctas: all(".writing-sample-cta", sectionWriting),
    previews: all(".writing-sample-preview", sectionWriting),
  },
  outcomes: {
    eyebrow: sectionOutcomes?.querySelector(".section-heading .eyebrow"),
    title: sectionOutcomes?.querySelector(".section-heading h2"),
    lead: sectionOutcomes?.querySelector(".section-heading p"),
    visualTitle: sectionOutcomes?.querySelector(".outcome-visual-note strong"),
    visualText: sectionOutcomes?.querySelector(".outcome-visual-note span"),
    cardTitles: outcomeCards.map((card) => card.querySelector("h3")),
    cardTexts: outcomeCards.map((card) => card.querySelector("p")),
  },
  apply: {
    eyebrow: sectionApply?.querySelector(".apply-copy .eyebrow"),
    title: sectionApply?.querySelector(".apply-copy h2"),
    lead: sectionApply?.querySelector(".apply-copy > p"),
    profileTitle: sectionApply?.querySelector(".apply-profile-title"),
    profileStrong: all(".apply-profile-grid strong", sectionApply),
    profileTexts: all(".apply-profile-grid span", sectionApply),
    stepTitles: all(".apply-steps strong", sectionApply),
    stepTexts: all(".apply-steps span", sectionApply),
    badges: all(".apply-badges span", sectionApply),
    cardMini: sectionApply?.querySelector(".apply-mini"),
    cardTitle: sectionApply?.querySelector(".apply-card-top h3"),
    cardText: sectionApply?.querySelector(".apply-card-top p"),
    cardBottomTitle: sectionApply?.querySelector(".apply-card-bottom strong"),
    cardBottomItems: all(".apply-card-bottom li", sectionApply),
    cardButtons: all(".apply-card-button", sectionApply),
    qr: sectionApply?.querySelector(".qr-frame img"),
  },
  mobileBar: {
    links: all(".mobile-apply-link"),
  },
  footer: {
    strong: document.querySelector(".site-footer strong"),
    text: document.querySelector(".site-footer span"),
    link: document.querySelector(".site-footer a"),
  },
};

const translations = {
  zh: {
    document: {
      lang: "zh-CN",
      title: "BigAcademy 学术精读写作营 2026 第三期",
      description: "BigAcademy 学术精读写作营 2026 第三期：顶尖老师、优秀同伴与专业 AI 协同带领孩子进入更高水平的阅读、写作与思考。",
    },
    header: {
      brandAria: "BigAcademy 首页",
      navAria: "站点导航",
      mobileNavAria: "移动端导航",
      switcherAria: "语言切换",
      nav: ["课程价值", "课程结构", "选书逻辑", "第三期书单", "成果交付", "咨询报名"],
      cta: "预约测评",
      mobileEyebrow: "快速导航",
      menuOpen: "打开导航菜单",
      menuClose: "关闭导航菜单",
      mobileBar: ["书单", "预约测评"],
      backTop: "回到顶部 ↑",
    },
    hero: {
      proofOverline: "第二期全体学员阅读、写作多项指标已经",
      proofStrong: "<span>超越 CTY</span> 同年级 Literacy 课程",
      proofSub: "约等于站上同年龄段前 1% 的阅读写作水平",
      title: "在 AI 时代，<br>真正稀缺的是<br>有人带孩子<br><em>读透一本好书。</em>",
      lead: "BigAcademy 学术精读写作营第三期，由顶尖老师带读，全球优秀同伴共学，专业 AI 持续支撑。2 万+ 文章 / 音频 / 视频资源与 24 小时 AI Tutor，一起托起整个学期的高强度读写升级。",
      actions: ["预约蓝思 / MAP 风格测评", "查看第三期书单"],
      note: "筛选制入营：先做测评，再确认 Level 与 cohort 匹配度。课程面向全球优秀学生，按学力与节奏完成高标准匹配。",
      statKickers: ["阅读强度", "平台底座", "小班直播课", "写作输出", "同伴讨论", "随时答疑"],
      statNums: ["30-40 万+", "2 万+", "18", "3000+", "20+", "24h"],
      statLabels: [
        "深度阅读量",
        "文章 / 音频 / 视频资源",
        "节高级外教直播课",
        "命题写作累计字数",
        "个深度话题的全球优秀同伴集体讨论",
        "AI Tutor 随时答疑",
      ],
      statNotes: [
        "真正拉开阅读理解与文本分析差距的底层训练量。",
        "BigAcademy 平台内容库持续托举孩子的阅读广度与训练密度。",
        "覆盖阅读和写作的高阶核心技能。",
        "人均20轮修改打磨 - 写作能力是“改”出来的！",
        "学习平台持续承接讨论、回应与观点碰撞。",
      ],
      panelLabel: "BigAcademy 阅读体验",
      panelStrong: "精读、训练、反馈在同一系统里完成",
      panelTag: "Term 3 Thesis",
      panelQuote: "老师、同伴与 AI 协同带领孩子进入更高水平的阅读、写作与表达。",
      marquee: [
        "顶尖老师主导",
        "顶尖老师带读",
        "全球优秀同伴共学",
        "独特选书与诠释",
        "Writing Hive",
        "Book Ambassador",
        "2 万+ 平台资源",
        "顶尖老师带读",
        "全球优秀同伴共学",
        "独特选书与诠释",
        "Writing Hive",
        "Book Ambassador",
      ],
    },
    value: {
      eyebrow: "课程价值",
      title: "这是一段被认真设计过的成长经历，<br><em>也是一套真正能拉高孩子标准的课程系统。</em>",
      lead: "第三期最核心的价值，在于有专业的人带着孩子走进真正的好书，在高标准的任务、讨论、写作与表达中，逐步长出更成熟的阅读能力、表达能力和判断力。",
      titles: [
        "顶尖老师全程带读，孩子一路走深",
        "六本好书，构成完整的选书逻辑与诠释路径",
        "任务系统激活老师、同伴与文本",
      ],
      texts: [
        "纯自学门槛极高。绝大多数家庭真正需要的是高水平带领，让孩子一步步进入更深的阅读、更强的写作和更成熟的表达。",
        "第三期的价值落在选书判断、排序逻辑和文本诠释上。每一本书都承担明确任务，每一步推进都有清晰方向。",
        "阅读、讨论、写作、回应、视频表达被设计成一个完整系统。具体的突破时刻无法预设，但结果是可以被设计出来的。",
      ],
    },
    featured: {
      eyebrow: "更高维的学习体验",
      title: "AI 放大学习深度，<br><em>老师决定学习高度。</em>",
      lead: "第三期真正要交付的，是一个更高维度的学习体验：老师负责带读、诠释、拉高标准；同伴负责碰撞观点、形成氛围；AI 负责保证训练频次、个性化路径与反馈一致性。",
      titles: ["顶尖老师", "优秀同伴", "专业 AI Tutor"],
      texts: [
        "把孩子带进一本书的内部，读出结构、主题与表达力量。",
        "让讨论、回应、展示成为真正推动成长的力量。",
        "2 万+ 文章 / 音频 / 视频资源全天开放，24 小时 AI Tutor 随时答疑，把训练、反馈和自学路径真正落到每一天。",
      ],
    },
    structure: {
      eyebrow: "课程结构",
      title: "20 周里，孩子进入一整套读写升级系统，<br><em>每一周都在向上推进。</em>",
      lead: "第三期围绕五大模块同时推进：超级精读、高级外教直播、AI Tutor 个性化阅读训练、Writing Hive、大师级 Book Ambassador 输出。",
      titles: ["超级精读营", "高级外教直播课", "AI Tutor 个性化阅读训练", "Writing Hive", "Book Ambassador"],
      texts: [
        "每个 Level 6 本超级好书，孩子要读懂情节，更要读人物、结构、主题、象征与表达方式。",
        "L1 / L2 共 18 次直播，几乎每周一次。每一节都围绕独特的阅读能力训练、技巧打磨与高标准同伴讨论展开。",
        "BigAcademy 平台提供 2 万+ 篇文章 / 音频 / 视频，配合 24 小时 AI Tutor 随时答疑，让阅读量、词汇量、自学路径与练习密度真正持续发生。",
        "六篇专业设计命题作文，六轮写作训练。孩子会写得完整、清晰、有层次，表达真正站得住。",
        "每读完一本书，每位学生都要录制一段 3-5 分钟视频，把这本书推荐给别人。孩子要带着自己独特的视角、独特的体验和独特的思考，为一本书真正发声。",
      ],
      tags: [
        ["6 本书", "深度讨论", "文本分析"],
        ["18 次", "几乎每周一次", "高标准讨论"],
        ["2 万+ 资源", "24h 答疑", "个性化路径"],
        ["6 篇作文", "6 轮训练", "专业反馈"],
        ["6 次视频录制", "表达训练", "直播展示"],
      ],
    },
    timeline: {
      eyebrow: "课程节奏",
      title: "20 周成长路径清晰推进，<br><em>每一步都有明确目标。</em>",
      lead: "2026 年 7 月 13 日开营，12 月 18 日收官。期间有国庆与感恩节各一周假期，但整个项目推进节奏保持完整。",
      headerStrong: "2026 第三期课程强度",
      headerSpan: "2026.07.13 - 2026.12.18 · 20 周",
      note: "含国庆 / 感恩节各 1 周假期",
      metricNumbers: ["18", "30-40 万+", "3000+", "20"],
      metricLabels: ["节高级外教直播课", "深度阅读量", "6 篇命题作文累计字数", "次学习路径同伴讨论"],
      summary: "另外还包含 6 次 Book Ambassador 视频表达、2 次综合测评，以及贯穿全程的 AI Tutor 个性化训练。",
      calloutEyebrow: "筛选制入营",
      calloutTitle: "高标准共学环境，<br><em>只向通过测评与匹配的学生开放。</em>",
      selectionTitles: ["先测评，再决定是否入营", "按学力与节奏做匹配", "面向全球精英学生群体"],
      selectionTexts: [
        "报名前需要完成蓝思 / MAP 风格测评与沟通。通过测评与匹配后，学生才会进入第三期。",
        "我们会确认学生的阅读基础、表达能力与学习节奏，保证同学之间真正适配、彼此抬升。",
        "这里聚集的是上进、优秀且多元的学生，课程价值不仅来自老师，也来自同伴之间的高密度碰撞。",
      ],
    },
    evolution: {
      eyebrow: "课程演进",
      title: "第三期建立在前两期的持续进化之上，<br><em>课程结构、选书逻辑和成果要求都更成熟。</em>",
      lead: "这套课程的说服力，来自一条越来越清晰的成长路径：从点燃阅读兴趣，到建立读写方法，再到走向更复杂的文本、更成熟的表达与更高要求的公开展示。",
      stages: ["Term 1", "Term 2", "Term 3"],
      titles: ["点燃热爱，建立阅读习惯", "系统精读，读写方法成型", "进入更复杂文本，走向更成熟表达"],
      texts: [
        "第一期更像是入口：让孩子敢读、愿意读、开始对好书建立亲密感。",
        "第二期开始把课程结构、测评、写作和精读方法系统化，孩子开始拥有更清晰的读写框架。",
        "第三期完成了一次明确升级：更有挑战的书、更强的任务体系、更高质量的输出、更明确的公开表达训练。",
      ],
    },
    books: {
      eyebrow: "正式书单",
      title: "第三期正式书单构成一条被设计过的能力曲线，<br><em>每一本到位，每一步都有目标。</em>",
      lead: "每个 Level 都是 6 本超级好书。课程追求读透、读深、读出判断力。孩子要在人物、主题、结构、表达、讨论与写作中，一步步走向更成熟的理解力。",
      levelTags: ["Level 1", "Level 2"],
      levelTitles: ["从文学感受力走向分析能力", "进入更复杂文本与更成熟的认知表达"],
      levelTexts: [
        "孩子开始从“喜欢一本书”升级到“能说出它为什么好，能写出它为什么动人”。",
        "目标直指更成熟的认知、书面表达与公开表达，让孩子向美国顶尖私立初中期待的水平靠近。",
      ],
      bookSpans: [
        "幽默、创伤与英雄叙事",
        "叙述视角、同理心与自由",
        "多重视角与人物复杂度",
        "世界观建构与推理阅读",
        "想象力、失去与情感深度",
        "图文叙事、结构与电影语言",
        "自然、文明与力量秩序",
        "策略、道德与领导力判断",
        "非虚构阅读、历史与 STEM 叙事",
        "全球视角、结构平行与时代感",
        "史诗旅程、古典语言与成长",
        "人物塑造、语言审美与内心世界",
      ],
    },
    faculty: {
      eyebrow: "师资 + 同伴 + 系统",
      title: "真正推动孩子变化的，<br><em>是老师、同伴与系统共同构成的学习环境。</em>",
      lead: "顶尖教研与产品团队、优秀而多元的全球同伴、持续推进的系统任务，一起决定了这门课的高度。",
      environmentTitles: ["顶尖老师", "优秀同伴", "专业 AI 支撑"],
      environmentTexts: [
        "把书读深，把任务做准，把标准拉高。",
        "在讨论、回应与展示中形成真正的学习压力与激励。",
        "让个性化训练、反馈密度和自学路径真正落地。",
      ],
      roles: ["出品", "教研", "产品"],
      items: [
        ["BigAcademy.ai 联合创始人", "北大、哈佛校友", "前联想集团全球副总裁", "前好未来产品事业群总裁"],
        ["10 年+中美顶尖学校教学经验", "美国 BASIS 学校一线教师", "课程与教学设计硕士", "数据驱动教学策略专家"],
        ["BigAcademy.ai 创始人", "前字节跳动教育产品专家", "前好未来集团产品总监", "设计产品用户数超千万"],
      ],
      quotes: [
        "“从前看到长文就想哭，现在能自觉拿起原版书读下去。不仅读懂了故事，更读懂了人物背后的动机。”",
        "“Open Dialogue 环节太棒了！能和伙伴一起讨论、碰撞观点，让我觉得阅读不再是一件孤单的事。”",
        "“以前写作总是挤牙膏，现在能流畅地写出成段的英文，逻辑也更清晰了。这种进步让我很惊喜。”",
        "“从被动完成任务到主动补作业、做 Quiz，我发现自己真正在爱上学习的过程。自驱力就是这样练成的。”",
      ],
    },
    ambassador: {
      eyebrow: "标志性成果",
      title: "每读完一本书，孩子都要站出来，<br><em>为它发声。</em>",
      lead: "Book Ambassador 是第三期最能拉开差距的标志性设计。孩子需要把一本书重新组织成自己的理解，用独特的视角、独特的体验和独特的思考，再面向他人讲出来。",
      titles: [
        "3–5 分钟推荐视频",
        "可扮演书籍推销员 / 编辑 / 评论家 / 教师",
        "老师与同学点评 + 直播课展示",
        "对面试表达与自我展示直接有帮助",
      ],
      texts: [
        "每读完一本书，都必须完成一次公开表达。",
        "鼓励孩子形成真正有立场、有趣味的表达方式。",
        "让视频成为真实的学习成果。",
        "“你最近读过什么书？”本就是学校面试中的高频问题。",
      ],
      largeVideoTitle: "Book Ambassador",
      largeVideoMeta: "好书推荐人 · 3-5 min",
    },
    writing: {
      eyebrow: "学生写作成果",
      title: "真正让人惊艳的，<br><em>是孩子最后写出来的东西。</em>",
      lead: "下面展示的是第二期真实学生作品与 Genius Camp 作文展示区。孩子不只是完成一篇作文，而是在老师带领、反复修改、系统激励与公开展示中，把想法真正写成熟。",
      boardTitle: "Genius Camp 作文展示区",
      boardText: "写作成果被真正陈列、被同伴看见、被老师点亮。作品一旦进入展示区，孩子对文字的标准就会立刻被拉高。",
      boardBadges: ["真实学生作品", "多轮修改打磨", "公开展示与激励"],
      toolbarTitle: "横向滑动浏览真实学生作品",
      toolbarText: "点击卡片在新窗口查看原图，浏览器可继续放大细看。",
      scrollLabels: ["查看上一张作品", "查看下一张作品"],
      sampleMetas: ["Larry · 修改 14 次", "Jeremy · 修改 24 次", "Olivia · 真实学生作品"],
      sampleTitles: ["How important is popularity?", "The Types of People in My School: Broken Down", "\"Blue Jail\" Detainees"],
      sampleTexts: [
        "从校园社交结构切入，写出观点、分类和论证力度。孩子写的已经不是“完成任务”，而是有判断力的文章。",
        "观察、分类、抽象、展开，这些高阶能力都被写进同一篇长文里，完整度和成熟度都很强。",
        "独特隐喻、完整结构和作者视角同时出现。这样的作品一拿出来，家长立刻能看见训练真正产生了结果。",
      ],
      cta: "点击在新窗口查看原图",
      previewAria: [
        "查看作文范本 How important is popularity? 原图",
        "查看作文范本 The Types of People in My School: Broken Down 原图",
        "查看作文范本 Blue Jail Detainees 原图",
      ],
    },
    outcomes: {
      eyebrow: "交付结果",
      title: "我们交付的是看得见的成长结果，<br><em>每一项都能落到作品、数据与表达上。</em>",
      lead: "第三期的设计目标很明确：阅读量、写作质量、思维成熟度、AI 自学能力与公开表达能力，都要被同时拉起来。",
      visualTitle: "BigAcademy 成长仪表盘",
      visualText: "阅读量、测评、能力维度与阶段表现可以被持续看见。",
      titles: ["标化成绩优异", "写作能力突破", "思维表达成熟", "AI 自学能力", "面试与自我表达"],
      texts: [
        "30-40 万+ 深度阅读稳步拉升阅读理解能力，配合 2 次综合测评，更清楚地对标蓝思与 NWEA MAP 风格表现。",
        "6 篇专业设计的命题作文累计完成 3000+ 字，经过多轮训练与修改，帮助孩子真正写出更完整、更成熟的表达。",
        "通过 20 次学习路径同伴讨论与 6 本超级好书的精读，孩子会逐渐形成更成熟的观点、分析与回应能力。",
        "借助平台 2 万+ 文章 / 音频 / 视频与 24 小时 AI Tutor，孩子能沿着学习路径自我管理、自主扩展、持续训练。这是 AI 时代最重要的分水岭能力之一。",
        "六次 Book Ambassador 视频录制，是六次突破镜头、突破表达、突破自我设限的训练机会。优秀作品会被老师挑选在直播课中展示。",
      ],
    },
    apply: {
      eyebrow: "咨询报名",
      title: "如果你希望培养孩子真正精英级的阅读写作能力，<br><em>现在就来聊聊第三期。</em>",
      lead: "第三期适合希望孩子在好书、好老师、好同伴和专业 AI 的合力中真正升级的家庭。",
      profileTitle: "目标学员画像",
      profileStrong: ["G2 - G7", "阅读水平领先同龄至少一个年级", "暑假继续保持深度阅读", "父母每周可陪伴 1-2 次"],
      profileTexts: [
        "适合希望系统提升英文阅读与写作能力的小学生阶段学员。",
        "可先用 MAP 或蓝思成绩自查；我们也提供一次免费的专业在线测评，帮助判断是否匹配第三期。",
        "家庭希望暑期继续拉开差距，不放羊，不中断阅读、写作与思考训练。",
        "课程每周大约需要 3-4 小时工作量，家长能够适度促进孩子按节奏完成学习路径。",
      ],
      stepTitles: ["1. 预约测评", "2. 确认 Level 与匹配度", "3. 获取学习建议"],
      stepTexts: [
        "先做一次在线精准蓝思 / MAP 风格测评。",
        "评估孩子更适合 L1 还是 L2，以及是否适合第三期节奏。",
        "一对一咨询，了解第三期是否是你们家庭真正需要的一次升级。",
      ],
      badges: ["2026.07.13 开营", "筛选制入营", "蓝思 / MAP 风格测评"],
      cardMini: "BigAcademy Inquiry",
      cardTitle: "扫码预约咨询与测评",
      cardText: "领取第三期课程说明、测评建议与报名咨询。",
      cardBottomTitle: "先咨询这三件事",
      cardBottomItems: [
        "孩子现在更适合 Level 1 还是 Level 2。",
        "目前阅读基础是否已经足够进入第三期节奏。",
        "怎样安排暑假读写训练，效率会更高。",
      ],
      cardButtons: ["立即预约测评", "先看第三期书单"],
      qrAlt: "助教二维码",
    },
    footer: {
      strong: "BigAcademy 学术精读写作营 · 2026 第三期",
      text: "帮孩子读得更深，写得更好，思考更成熟。",
      link: "回到顶部 ↑",
    },
  },
  en: {
    document: {
      lang: "en",
      title: "BigAcademy Academic Reading & Writing Camp · Term 3 2026",
      description: "BigAcademy Academic Reading & Writing Camp Term 3: top teachers, outstanding peers, and professional AI working together to raise children's reading, writing, and thinking to a higher level.",
    },
    header: {
      brandAria: "BigAcademy home",
      navAria: "Site navigation",
      mobileNavAria: "Mobile site navigation",
      switcherAria: "Language switcher",
      nav: ["Why It Works", "Program", "Book Logic", "Term 3 Books", "Outcomes", "Apply"],
      cta: "Free Assessment",
      mobileEyebrow: "Quick Navigation",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      mobileBar: ["Books", "Free Assessment"],
      backTop: "Back to top ↑",
    },
    hero: {
      proofOverline: "Across the full Term 2 cohort, reading and writing performance already",
      proofStrong: "<span>outpaces CTY</span> same-grade Literacy",
      proofSub: "roughly equivalent to top 1% reading-and-writing performance among same-age peers",
      title: "In the AI era,<br>what is truly scarce is someone who can help a child<br><em>read a great book all the way through.</em>",
      lead: "Term 3 of the BigAcademy Academic Reading & Writing Camp is led by top teachers, elevated by a global cohort of strong peers, and continuously supported by professional AI. With 20,000+ articles, audio lessons, and videos plus a 24-hour AI Tutor, children sustain high-intensity reading and writing growth across the full term.",
      actions: ["Book a Lexile / MAP-style Assessment", "View the Term 3 Book List"],
      note: "Selective admission: students complete an assessment first, then we confirm level and cohort fit. The camp is built for high-achieving students worldwide and matched carefully by ability and pace.",
      statKickers: ["Reading Load", "Platform Power", "Live Seminar", "Writing Output", "Peer Discussion", "Always On"],
      statNums: ["300k-400k+", "20k+", "18", "3000+", "20+", "24h"],
      statLabels: [
        "words of deep reading",
        "articles, audio lessons, and videos",
        "advanced live classes",
        "cumulative guided writing output",
        "deep-discussion topics with a global cohort",
        "AI Tutor support",
      ],
      statNotes: [
        "The kind of volume that truly separates surface comprehension from real text analysis.",
        "The BigAcademy platform continuously supports breadth, density, and consistency of practice.",
        "Covers the high-level core skills of reading and writing.",
        "An average of 20 revision rounds - writing ability is built through revision.",
        "The learning platform keeps discussion, response, and viewpoint collision alive beyond class.",
      ],
      panelLabel: "BigAcademy Reading Experience",
      panelStrong: "Close reading, practice, and feedback happen in one system",
      panelTag: "Term 3 Thesis",
      panelQuote: "Teachers, peers, and AI work together to move children toward deeper reading, stronger writing, and more mature expression.",
      marquee: [
        "Teacher-led rigor",
        "Top teachers guiding the way",
        "Global elite cohort",
        "Curated books & interpretation",
        "Writing Hive",
        "Book Ambassador",
        "20k+ platform resources",
        "Top teachers guiding the way",
        "Global elite cohort",
        "Curated books & interpretation",
        "Writing Hive",
        "Book Ambassador",
      ],
    },
    value: {
      eyebrow: "Why It Works",
      title: "This is a deliberately designed growth experience,<br><em>and a course system that truly raises a child's standards.</em>",
      lead: "The core value of Term 3 lies in expert adults leading children into genuinely great books. Through high-standard tasks, discussion, writing, and public expression, children grow more mature reading, writing, and judgment.",
      titles: [
        "Top teachers lead the reading, and children keep going deeper",
        "Six great books form a coherent reading logic and interpretation path",
        "The task system activates teacher, peers, and text at once",
      ],
      texts: [
        "Pure self-study has an extremely high bar. What most families actually need is expert guidance that takes a child step by step into deeper reading, stronger writing, and more mature expression.",
        "Term 3 is not a pile of titles. Its value lies in how books are chosen, sequenced, and interpreted. Every book has a specific job, and every step moves in a clear direction.",
        "Reading, discussion, writing, response, and video expression are designed as one connected system. The exact breakthrough moment cannot be predicted, but the result can be intentionally designed.",
      ],
    },
    featured: {
      eyebrow: "A Higher-Dimensional Experience",
      title: "AI amplifies learning depth,<br><em>teachers determine the ceiling.</em>",
      lead: "What Term 3 truly delivers is a higher-dimensional learning experience: teachers lead the reading, interpretation, and standards; peers create friction, atmosphere, and energy; AI ensures practice frequency, personal pathways, and consistent feedback.",
      titles: ["Top teachers", "Strong peers", "Professional AI Tutor"],
      texts: [
        "Children are led inside a book and taught to read structure, theme, and the force of expression.",
        "Discussion, response, and showcase become real engines of growth.",
        "With 20,000+ articles, audio lessons, and videos plus a 24-hour AI Tutor, training, feedback, and self-study pathways happen every single day.",
      ],
    },
    structure: {
      eyebrow: "Program",
      title: "Over 20 weeks, children move through a full reading-and-writing upgrade system,<br><em>with every week pushing upward.</em>",
      lead: "Term 3 advances through five major modules at once: Super Intensive Reading, Advanced Live Seminar, AI Tutor Personalized Reading, Writing Hive, and Book Ambassador output.",
      titles: ["Super Intensive Reading", "Advanced Live Seminar", "AI Tutor Personalized Reading", "Writing Hive", "Book Ambassador"],
      texts: [
        "Each level covers six exceptional books. Children do more than follow plot; they learn to read character, structure, theme, symbolism, and craft.",
        "L1 and L2 together include 18 live sessions, almost weekly. Every class centers on distinctive reading skills, technique sharpening, and high-standard peer discussion.",
        "The BigAcademy platform provides 20,000+ articles, audio lessons, and videos, paired with a 24-hour AI Tutor so reading volume, vocabulary growth, self-study pathways, and practice density keep accumulating.",
        "Six expertly designed prompts. Six rounds of writing practice. Children learn to write with structure, clarity, and real force.",
        "After each book, every student records a 3–5 minute video recommending it to others. Children speak for a book through their own perspective, experience, and thinking.",
      ],
      tags: [
        ["6 books", "close discussion", "text analysis"],
        ["18 sessions", "almost weekly", "high-standard discussion"],
        ["20k+ resources", "24h support", "personalized path"],
        ["6 essays", "6 rounds", "expert feedback"],
        ["6 video recordings", "expression training", "live showcase"],
      ],
    },
    timeline: {
      eyebrow: "Pacing",
      title: "The full 20-week path is clear and deliberate,<br><em>with every step tied to a goal.</em>",
      lead: "The program opens on July 13, 2026 and concludes on December 18. There is one week off for National Day and one week for Thanksgiving, while the overall rhythm remains intact.",
      headerStrong: "2026 Term 3 Program Intensity",
      headerSpan: "July 13 - December 18 · 20 weeks",
      note: "Includes one week off for National Day and one for Thanksgiving",
      metricNumbers: ["18", "300k-400k+", "3000+", "20"],
      metricLabels: ["advanced live classes", "words of deep reading", "cumulative output across 6 guided essays", "peer discussion sessions on the learning path"],
      summary: "The term also includes 6 Book Ambassador video presentations, 2 comprehensive assessments, and continuous AI Tutor training throughout the full program.",
      calloutEyebrow: "Selective Cohort",
      calloutTitle: "A high-standard learning environment,<br><em>open only to students who pass assessment and fit the cohort.</em>",
      selectionTitles: ["Assessment first, admission second", "Matched by ability and pace", "Built for a global elite cohort"],
      selectionTexts: [
        "Before admission, students complete a Lexile / MAP-style assessment and a fit conversation. Only students who pass the match process enter Term 3.",
        "We confirm reading foundation, expressive ability, and learning rhythm so that students truly fit one another and elevate one another.",
        "This cohort brings together ambitious, capable, and diverse students. The value of the camp comes not only from teachers, but from high-density peer collision.",
      ],
    },
    evolution: {
      eyebrow: "Book Logic",
      title: "Term 3 stands on the continued evolution of the first two terms,<br><em>with stronger structure, clearer book logic, and higher output standards.</em>",
      lead: "The persuasiveness of this course comes from a growth path that keeps getting clearer: from igniting a love of reading, to building methods, to entering more complex texts, more mature expression, and higher-stakes public showcase.",
      stages: ["Term 1", "Term 2", "Term 3"],
      titles: ["Ignite love and build reading habits", "Systematic close reading and solid methods", "Enter more complex texts and more mature expression"],
      texts: [
        "Term 1 was an entry point: helping children dare to read, want to read, and develop intimacy with great books.",
        "Term 2 systematized course structure, assessment, writing, and close-reading methods so children began to hold a clearer reading-and-writing framework.",
        "Term 3 is a clear upgrade: harder books, a stronger task system, higher-quality output, and much sharper public-expression training.",
      ],
    },
    books: {
      eyebrow: "Official Book List",
      title: "The Term 3 book list forms a deliberately designed ability curve,<br><em>with every title in place and every step serving a purpose.</em>",
      lead: "Each level includes six exceptional books. The goal is not merely to finish them, but to read deeply, read fully, and read toward judgment. Through character, theme, structure, expression, discussion, and writing, children move toward more mature understanding.",
      levelTags: ["Level 1", "Level 2"],
      levelTitles: ["From literary sensitivity to analytical ability", "Toward more complex texts and more mature intellectual expression"],
      levelTexts: [
        "Children move from simply liking a book to explaining why it works and writing why it moves readers.",
        "The target is more mature cognition, written expression, and public expression, moving children closer to the level expected by top U.S. private middle schools.",
      ],
      bookSpans: [
        "humor, grief, and heroism",
        "point of view, empathy, and freedom",
        "multiple perspectives and character complexity",
        "world-building and inferential reading",
        "imagination, loss, and emotional depth",
        "visual storytelling, structure, and cinematic language",
        "nature, civilization, and hierarchy",
        "strategy, morality, and leadership judgment",
        "nonfiction reading, history, and STEM narrative",
        "global perspective, parallel structure, and historical consciousness",
        "epic quest, classical language, and growth",
        "character craft, language sensibility, and inner life",
      ],
    },
    faculty: {
      eyebrow: "Faculty + Cohort + System",
      title: "What truly changes a child is the environment<br><em>built by teachers, peers, and system together.</em>",
      lead: "A top-tier curriculum and product team, an excellent and diverse global cohort, and continuously advancing system tasks together determine the height of this course.",
      environmentTitles: ["Top teachers", "Strong peers", "Professional AI support"],
      environmentTexts: [
        "Read books more deeply, design tasks more precisely, and keep standards high.",
        "Create real academic pressure and motivation through discussion, response, and showcase.",
        "Make personalized training, feedback density, and self-study pathways actually happen.",
      ],
      roles: ["Leadership", "Curriculum", "Product"],
      items: [
        ["Co-founder of BigAcademy.ai", "Peking University and Harvard alumnus", "Former global VP at Lenovo", "Former president of the product group at TAL"],
        ["10+ years of teaching in top U.S. and China schools", "Frontline teacher at BASIS", "Master's degree in curriculum and instruction", "Specialist in data-driven teaching strategy"],
        ["Founder of BigAcademy.ai", "Former education product expert at ByteDance", "Former product director at TAL", "Built products used by tens of millions"],
      ],
      quotes: [
        "\"I used to panic when I saw long passages. Now I can pick up original books on my own. I don't just understand the story anymore. I understand the motives behind characters too.\"",
        "\"The Open Dialogue sessions are amazing. Discussing and colliding with classmates makes reading feel social instead of lonely.\"",
        "\"Writing used to feel like squeezing toothpaste. Now I can write full English paragraphs smoothly, and my logic is much clearer. That progress really surprised me.\"",
        "\"I went from passively finishing tasks to actively making up work and doing quizzes. That's when I realized I was actually learning to love the process itself. That's how self-drive gets built.\"",
      ],
    },
    ambassador: {
      eyebrow: "Signature Output",
      title: "After each book, children must step forward<br><em>and speak for it.</em>",
      lead: "Book Ambassador is the signature design that separates Term 3. Children must reorganize a book into their own understanding, then speak it out through their own angle, experience, and thinking.",
      titles: [
        "3–5 minute recommendation videos",
        "Students may perform as bookseller, editor, critic, or teacher",
        "Teacher and peer feedback + live-class showcase",
        "Directly useful for interviews and self-presentation",
      ],
      texts: [
        "After every completed book, students must produce one public expression.",
        "The goal is expression with stance, taste, and personality.",
        "The video becomes a real academic product, not a throwaway task.",
        "\"What have you read recently?\" is already one of the most common admissions interview questions.",
      ],
      largeVideoTitle: "Book Ambassador",
      largeVideoMeta: "Book Pitch · 3-5 min",
    },
    writing: {
      eyebrow: "Student Writing Showcase",
      title: "What truly surprises families<br><em>is what children eventually produce on the page.</em>",
      lead: "Below are real student pieces from Term 2 together with the Genius Camp writing showcase. Children do not simply finish an essay. With teacher guidance, repeated revision, system incentives, and public exhibition, their ideas become genuinely mature writing.",
      boardTitle: "Genius Camp Writing Showcase",
      boardText: "Writing products are truly exhibited, seen by peers, and lit up by teachers. The moment a piece enters the showcase, a child's standard for language rises immediately.",
      boardBadges: ["real student work", "multiple rounds of revision", "public showcase and incentives"],
      toolbarTitle: "Swipe sideways to browse real student pieces",
      toolbarText: "Click a card to open the full original image in a new tab and zoom in further there.",
      scrollLabels: ["View previous piece", "View next piece"],
      sampleMetas: ["Larry · Revised 14 times", "Jeremy · Revised 24 times", "Olivia · Real Student Work"],
      sampleTitles: ["How important is popularity?", "The Types of People in My School: Broken Down", "\"Blue Jail\" Detainees"],
      sampleTexts: [
        "The essay enters through the social structure of school life and argues with classification, evidence, and force. This is no longer task completion. It is judgment on the page.",
        "Observation, classification, abstraction, and expansion all live inside one long piece. The completeness and maturity level are striking.",
        "Distinctive metaphor, full structure, and an author's point of view appear at once. When a family sees a piece like this, the training result becomes instantly visible.",
      ],
      cta: "Open full image in a new tab",
      previewAria: [
        "Open the original image for How important is popularity?",
        "Open the original image for The Types of People in My School: Broken Down",
        "Open the original image for Blue Jail Detainees",
      ],
    },
    outcomes: {
      eyebrow: "Outcomes",
      title: "What we deliver is visible growth,<br><em>with every result landing in work, data, and expression.</em>",
      lead: "The design target of Term 3 is clear: reading volume, writing quality, maturity of thinking, AI-powered independent learning, and public expression all rise together.",
      visualTitle: "BigAcademy Growth Dashboard",
      visualText: "Reading volume, assessment, capability dimensions, and stage-by-stage performance remain visible throughout the term.",
      titles: ["Outstanding standardized performance", "Writing breakthrough", "More mature thinking and expression", "AI-powered independent learning", "Interview and self-expression"],
      texts: [
        "300k-400k+ words of deep reading steadily lift comprehension, and 2 comprehensive assessments make Lexile and NWEA MAP-style performance easier to track clearly.",
        "Across 6 expertly designed prompts, children produce 3000+ words and move through multiple rounds of training and revision to write with more completeness and maturity.",
        "Through 20 peer discussion sessions on the learning platform and close reading of 6 exceptional books, children gradually form more mature viewpoints, analysis, and response.",
        "With 20,000+ articles, audio lessons, and videos plus a 24-hour AI Tutor, children can manage themselves, extend independently, and keep training along a clear path. This is one of the key dividing abilities of the AI era.",
        "Six Book Ambassador recordings mean six chances to break through camera fear, expression limits, and self-imposed ceilings. Strong work will be selected for live-class showcase.",
      ],
    },
    apply: {
      eyebrow: "Apply",
      title: "If you want your child to build truly elite reading and writing ability,<br><em>let's talk about Term 3 now.</em>",
      lead: "Term 3 is built for families who want real upward movement through the combined force of great books, great teachers, strong peers, and professional AI.",
      profileTitle: "Who This Is For",
      profileStrong: ["G2 - G7", "Reading at least one grade above age peers", "A summer that keeps deep reading alive", "Parents who can support 1-2 times each week"],
      profileTexts: [
        "Designed for elementary and early middle-grade students who want a systematic rise in English reading and writing.",
        "Families may self-check with MAP or Lexile first. We also provide one free professional online assessment to judge fit for Term 3.",
        "The family wants the summer to keep widening the gap, not go slack, and does not want reading, writing, and thinking to stop.",
        "The course requires roughly 3-4 hours of work per week, and parents can provide light structure so the child stays on pace.",
      ],
      stepTitles: ["1. Book the assessment", "2. Confirm level and fit", "3. Receive tailored advice"],
      stepTexts: [
        "Start with a precise online Lexile / MAP-style assessment.",
        "We evaluate whether the student is a better fit for L1 or L2 and whether the rhythm of Term 3 is the right match.",
        "Get a one-to-one consultation and find out whether Term 3 is the real next upgrade your family needs.",
      ],
      badges: ["Starts 2026.07.13", "Selective admission", "Lexile / MAP-style assessment"],
      cardMini: "BigAcademy Inquiry",
      cardTitle: "Scan to book a consultation and assessment",
      cardText: "Receive the Term 3 overview, assessment advice, and admissions guidance.",
      cardBottomTitle: "Start with these three questions",
      cardBottomItems: [
        "Is your child a better fit for Level 1 or Level 2 right now?",
        "Is the current reading foundation strong enough for the pace of Term 3?",
        "How should summer reading-and-writing practice be arranged for the best return?",
      ],
      cardButtons: ["Book the assessment", "Preview the Term 3 books"],
      qrAlt: "Assistant QR code",
    },
    footer: {
      strong: "BigAcademy Academic Reading & Writing Camp · Term 3 2026",
      text: "Help children read deeper, write stronger, and think with greater maturity.",
      link: "Back to top ↑",
    },
  },
};

const applyLanguage = (lang) => {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = t.document.lang;
  document.body.dataset.lang = lang;
  document.title = t.document.title;
  if (metaDescription) metaDescription.setAttribute("content", t.document.description);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langChoice === lang);
  });

  setAttributes(ui.brand, { "aria-label": t.header.brandAria });
  setAttributes(ui.nav.container, { "aria-label": t.header.navAria });
  setAttributes(document.querySelector(".mobile-nav-links"), { "aria-label": t.header.mobileNavAria });
  setAttributes(ui.langSwitcher, { "aria-label": t.header.switcherAria });
  setTexts(ui.nav.links, t.header.nav);
  setTexts(ui.nav.mobileLinks, t.header.nav);
  setText(ui.headerCta, t.header.cta);
  setText(ui.mobileNavEyebrow, t.header.mobileEyebrow);
  setText(ui.mobileNavCta, t.header.cta);
  setTexts(ui.mobileBar.links, t.header.mobileBar);

  setText(ui.hero.proofOverline, t.hero.proofOverline);
  setHTML(ui.hero.proofStrong, t.hero.proofStrong);
  setText(ui.hero.proofSub, t.hero.proofSub);
  setHTML(ui.hero.title, t.hero.title);
  setText(ui.hero.lead, t.hero.lead);
  setTexts(ui.hero.actions, t.hero.actions);
  setText(ui.hero.note, t.hero.note);
  setTexts(ui.hero.statKickers, t.hero.statKickers);
  setTexts(ui.hero.statNums, t.hero.statNums);
  setTexts(ui.hero.statLabels, t.hero.statLabels);
  ui.hero.statNotes.forEach((node, index) => setText(node, t.hero.statNotes[index] || ""));
  setText(ui.hero.panelCaptionLabel, t.hero.panelLabel);
  setText(ui.hero.panelCaptionStrong, t.hero.panelStrong);
  setText(ui.hero.panelTag, t.hero.panelTag);
  setText(ui.hero.panelQuote, t.hero.panelQuote);
  setTexts(ui.hero.marquee, t.hero.marquee);

  setText(ui.value.eyebrow, t.value.eyebrow);
  setHTML(ui.value.title, t.value.title);
  setText(ui.value.lead, t.value.lead);
  setTexts(ui.value.cardTitles, t.value.titles);
  setTexts(ui.value.cardTexts, t.value.texts);

  setText(ui.featured.eyebrow, t.featured.eyebrow);
  setHTML(ui.featured.title, t.featured.title);
  setText(ui.featured.lead, t.featured.lead);
  setTexts(ui.featured.pointTitles, t.featured.titles);
  setTexts(ui.featured.pointTexts, t.featured.texts);

  setText(ui.structure.eyebrow, t.structure.eyebrow);
  setHTML(ui.structure.title, t.structure.title);
  setText(ui.structure.lead, t.structure.lead);
  setTexts(ui.structure.cardTitles, t.structure.titles);
  setTexts(ui.structure.cardTexts, t.structure.texts);
  ui.structure.cardTags.forEach((tags, index) => setTexts(tags, t.structure.tags[index]));

  setText(ui.timeline.eyebrow, t.timeline.eyebrow);
  setHTML(ui.timeline.title, t.timeline.title);
  setText(ui.timeline.lead, t.timeline.lead);
  setText(ui.timeline.headerStrong, t.timeline.headerStrong);
  setText(ui.timeline.headerSpan, t.timeline.headerSpan);
  setText(ui.timeline.note, t.timeline.note);
  setTexts(ui.timeline.metricNumbers, t.timeline.metricNumbers);
  setTexts(ui.timeline.metricLabels, t.timeline.metricLabels);
  setText(ui.timeline.summary, t.timeline.summary);
  setText(ui.timeline.calloutEyebrow, t.timeline.calloutEyebrow);
  setHTML(ui.timeline.calloutTitle, t.timeline.calloutTitle);
  setTexts(ui.timeline.selectionTitles, t.timeline.selectionTitles);
  setTexts(ui.timeline.selectionTexts, t.timeline.selectionTexts);

  setText(ui.evolution.eyebrow, t.evolution.eyebrow);
  setHTML(ui.evolution.title, t.evolution.title);
  setText(ui.evolution.lead, t.evolution.lead);
  setTexts(ui.evolution.stages, t.evolution.stages);
  setTexts(ui.evolution.titles, t.evolution.titles);
  setTexts(ui.evolution.texts, t.evolution.texts);

  setText(ui.books.eyebrow, t.books.eyebrow);
  setHTML(ui.books.title, t.books.title);
  setText(ui.books.lead, t.books.lead);
  setTexts(ui.books.levelTags, t.books.levelTags);
  setTexts(ui.books.levelTitles, t.books.levelTitles);
  setTexts(ui.books.levelTexts, t.books.levelTexts);
  setTexts(ui.books.bookSpans, t.books.bookSpans);

  setText(ui.faculty.eyebrow, t.faculty.eyebrow);
  setHTML(ui.faculty.title, t.faculty.title);
  setText(ui.faculty.lead, t.faculty.lead);
  setTexts(ui.faculty.environmentTitles, t.faculty.environmentTitles);
  setTexts(ui.faculty.environmentTexts, t.faculty.environmentTexts);
  setTexts(ui.faculty.roles, t.faculty.roles);
  ui.faculty.items.forEach((items, index) => setTexts(items, t.faculty.items[index]));
  setTexts(ui.faculty.quotes, t.faculty.quotes);
  setTexts(ui.faculty.quoteMeta, ["L2 · Easton", "L2 · William Fu", "L1 · Teresa", "L2 · Jeremy"]);

  setText(ui.ambassador.eyebrow, t.ambassador.eyebrow);
  setHTML(ui.ambassador.title, t.ambassador.title);
  setText(ui.ambassador.lead, t.ambassador.lead);
  setTexts(ui.ambassador.listTitles, t.ambassador.titles);
  setTexts(ui.ambassador.listTexts, t.ambassador.texts);
  setText(ui.ambassador.largeVideoTitle, t.ambassador.largeVideoTitle);
  setText(ui.ambassador.largeVideoMeta, t.ambassador.largeVideoMeta);

  setText(ui.writing.eyebrow, t.writing.eyebrow);
  setHTML(ui.writing.title, t.writing.title);
  setText(ui.writing.lead, t.writing.lead);
  setText(ui.writing.boardTitle, t.writing.boardTitle);
  setText(ui.writing.boardText, t.writing.boardText);
  setTexts(ui.writing.boardBadges, t.writing.boardBadges);
  setText(ui.writing.toolbarTitle, t.writing.toolbarTitle);
  setText(ui.writing.toolbarText, t.writing.toolbarText);
  ui.writing.scrollButtons.forEach((button, index) => {
    setAttributes(button, { "aria-label": t.writing.scrollLabels[index] });
  });
  setTexts(ui.writing.sampleMetas, t.writing.sampleMetas);
  setTexts(ui.writing.sampleTitles, t.writing.sampleTitles);
  setTexts(ui.writing.sampleTexts, t.writing.sampleTexts);
  setTexts(ui.writing.ctas, [t.writing.cta, t.writing.cta, t.writing.cta]);
  ui.writing.previews.forEach((preview, index) => {
    setAttributes(preview, {
      "aria-label": t.writing.previewAria[index],
      title: t.writing.previewAria[index],
    });
  });

  setText(ui.outcomes.eyebrow, t.outcomes.eyebrow);
  setHTML(ui.outcomes.title, t.outcomes.title);
  setText(ui.outcomes.lead, t.outcomes.lead);
  setText(ui.outcomes.visualTitle, t.outcomes.visualTitle);
  setText(ui.outcomes.visualText, t.outcomes.visualText);
  setTexts(ui.outcomes.cardTitles, t.outcomes.titles);
  setTexts(ui.outcomes.cardTexts, t.outcomes.texts);

  setText(ui.apply.eyebrow, t.apply.eyebrow);
  setHTML(ui.apply.title, t.apply.title);
  setText(ui.apply.lead, t.apply.lead);
  setText(ui.apply.profileTitle, t.apply.profileTitle);
  setTexts(ui.apply.profileStrong, t.apply.profileStrong);
  setTexts(ui.apply.profileTexts, t.apply.profileTexts);
  setTexts(ui.apply.stepTitles, t.apply.stepTitles);
  setTexts(ui.apply.stepTexts, t.apply.stepTexts);
  setTexts(ui.apply.badges, t.apply.badges);
  setText(ui.apply.cardMini, t.apply.cardMini);
  setText(ui.apply.cardTitle, t.apply.cardTitle);
  setText(ui.apply.cardText, t.apply.cardText);
  setText(ui.apply.cardBottomTitle, t.apply.cardBottomTitle);
  setTexts(ui.apply.cardBottomItems, t.apply.cardBottomItems);
  setTexts(ui.apply.cardButtons, t.apply.cardButtons);
  setAttributes(ui.apply.qr, { alt: t.apply.qrAlt });

  setText(ui.footer.strong, t.footer.strong);
  setText(ui.footer.text, t.footer.text);
  setText(ui.footer.link, t.footer.link);
};

const STORAGE_KEY = "bigacademy-genius-camp-lang";
let currentLanguage = "zh";

const setMobileNavOpen = (open) => {
  const shouldOpen = Boolean(open);
  document.body.classList.toggle("mobile-nav-open", shouldOpen);

  if (mobileNavToggle) {
    const label = translations[currentLanguage]?.header[shouldOpen ? "menuClose" : "menuOpen"];
    mobileNavToggle.setAttribute("aria-expanded", String(shouldOpen));
    if (label) mobileNavToggle.setAttribute("aria-label", label);
  }

  if (mobileNavPanel) {
    mobileNavPanel.setAttribute("aria-hidden", String(!shouldOpen));
  }
};

if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", () => {
    setMobileNavOpen(!document.body.classList.contains("mobile-nav-open"));
  });
}

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => setMobileNavOpen(false));
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("mobile-nav-open")) return;

  const target = event.target;
  if (mobileNavPanel?.contains(target) || mobileNavToggle?.contains(target)) return;
  setMobileNavOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileNavOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 920) setMobileNavOpen(false);
});

const detectLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
  } catch (error) {
    // Ignore storage failures.
  }

  const browserLanguage = (navigator.language || navigator.userLanguage || "").toLowerCase();
  return browserLanguage.startsWith("zh") ? "zh" : "en";
};

const setLanguage = (lang, persist = true) => {
  const safeLang = translations[lang] ? lang : "zh";
  currentLanguage = safeLang;
  applyLanguage(safeLang);
  setMobileNavOpen(document.body.classList.contains("mobile-nav-open"));

  if (!persist) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, safeLang);
  } catch (error) {
    // Ignore storage failures.
  }
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langChoice);
  });
});

setLanguage(detectLanguage(), false);
