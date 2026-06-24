const translations = {
  zh: {
    brandName: "傅嘉寅",
    navWork: "WORK",
    navServices: "SKILLS",
    navAbout: "EXPERIENCE",
    navContact: "CONTACT",
    heroEyebrow: "Film Editor / Post Production / Shanghai",
    heroTitle: "VIDEO EDITOR / 傅嘉寅",
    heroText: "4 年视频剪辑经验，熟悉科普类长视频、人物访谈与电商广告信息流短视频制作。",
    heroPrimary: "查看作品",
    heroSecondary: "联系我",
    statOneValue: "4年",
    statOneLabel: "视频剪辑经验",
    statTwoValue: "200条/月",
    statTwoLabel: "短视频产出",
    statThreeValue: "100%",
    statThreeLabel: "按时交付率",
    heroReelLabel: "SHOWREEL SLOT",
    heroReelTitle: "Performance Ads / Science Programs",
    introKicker: "个人优势",
    introTitle: "长期深耕科普、访谈和广告短视频的剪辑执行者。",
    introText: "曾负责《新闻课堂》节目全流程剪辑，也在电商行业剪辑广告信息流视频，具备素材采集、剪辑、调色、特效、输出和基础平面设计能力。",
    playButton: "播放作品",
    videoOneClient: "傅嘉寅 / 面试视频",
    videoOneTag: "SHOWREEL / 2K",
    videoOneTitle: "视频剪辑面试作品集",
    servicesKicker: "专业技能",
    serviceOneTitle: "剪辑软件",
    serviceOneText: "熟练使用 Premiere Pro、After Effects、DaVinci Resolve 等剪辑与后期软件。",
    serviceTwoTitle: "内容类型",
    serviceTwoText: "擅长新闻类、科普类节目剪辑，熟悉短视频内容传播逻辑。",
    serviceThreeTitle: "全流程制作",
    serviceThreeText: "具备素材采集、剪辑、调色、特效、输出和基础平面设计能力。",
    aboutKicker: "工作经历",
    aboutTitle: "4 年剪辑经验，目标城市上海，期望薪资 10-11K。",
    timelineOneTitle: "新绎（上海）文化传播有限公司 · 视频制作",
    timelineOneText: "负责三个品牌的短视频剪辑，按要求添加后期效果，每月产出约 200 条，并承担部分视频脚本产出。",
    timelineTwoTitle: "上海育桂文化科技有限公司 · 视频剪辑",
    timelineTwoText: "负责《新闻课堂》76-150 期全流程剪辑，平均每周完成 2 期 20 分钟节目，按时交付率 100%。",
    contactKicker: "联系方式",
    contactTitle: "可沟通视频剪辑、广告信息流与科普节目后期岗位。",
    contactNote: "男，27 岁，4 年工作经验；期望城市：上海。",
    footerText: "© 2026 傅嘉寅。视频剪辑作品集。",
    footerBack: "回到顶部",
    posterAltBrand: "傅嘉寅 FJ 视频剪辑个人标识",
    missingVideo: "视频文件暂未放入对应目录，请先替换占位文件路径。"
  },
  en: {
    brandName: "Fu Jiayin",
    navWork: "Work",
    navServices: "Services",
    navAbout: "Experience",
    navContact: "Contact",
    heroEyebrow: "Video Editing / Science Programs / Performance Ads",
    heroTitle: "VIDEO EDITOR / FU JIAYIN",
    heroText: "Video editor with 4 years of experience across science long-form programs, interviews, and e-commerce performance ad shorts.",
    heroPrimary: "View Work",
    heroSecondary: "Contact Me",
    statOneValue: "4 yrs",
    statOneLabel: "Editing experience",
    statTwoValue: "200/mo",
    statTwoLabel: "Short-form output",
    statThreeValue: "100%",
    statThreeLabel: "On-time delivery",
    heroReelLabel: "Target role",
    heroReelTitle: "Video Editor / Shanghai",
    introKicker: "Profile",
    introTitle: "A hands-on editor focused on science programs, interviews, and performance ad shorts.",
    introText: "Experienced in full-process editing for News Classroom and current e-commerce performance ad videos, with skills in footage collection, editing, color, effects, export, and basic graphic design.",
    playButton: "Play Work",
    videoOneClient: "Fu Jiayin / Interview Reel",
    videoOneTag: "Showreel / 2K",
    videoOneTitle: "Video Editing Interview Showreel",
    servicesKicker: "Skills",
    serviceOneTitle: "Editing Software",
    serviceOneText: "Proficient in Premiere Pro, After Effects, DaVinci Resolve, and other editing/post-production tools.",
    serviceTwoTitle: "Content Types",
    serviceTwoText: "Strong in news and science program editing, with a practical understanding of short-form distribution logic.",
    serviceThreeTitle: "Full Production Flow",
    serviceThreeText: "Able to handle footage collection, editing, color, effects, export, and basic graphic design tasks.",
    aboutKicker: "Experience",
    aboutTitle: "4 years of editing experience, targeting Shanghai roles at 10-11K.",
    timelineOneTitle: "Xinyi (Shanghai) Culture Communication Co., Ltd. · Video Production",
    timelineOneText: "Edits short videos for three brands, adds post-production effects as required, produces around 200 videos per month, and supports video script writing.",
    timelineTwoTitle: "Shanghai Yugui Culture Technology Co., Ltd. · Video Editor",
    timelineTwoText: "Handled full-process editing for News Classroom episodes 76-150, delivering two 20-minute episodes per week on average with a 100% on-time delivery rate.",
    contactKicker: "Contact",
    contactTitle: "Available for video editing, performance ad, and science program post-production roles.",
    contactNote: "Male, 27, with 4 years of work experience. Target city: Shanghai.",
    footerText: "© 2026 Fu Jiayin. Video editing portfolio.",
    footerBack: "Back to top",
    posterAltBrand: "Fu Jiayin FJ video editing personal logo",
    missingVideo: "The video file is not in place yet. Replace the placeholder path before publishing."
  }
};

const html = document.documentElement;
const languageToggle = document.querySelector("[data-language-toggle]");
const currentLanguageLabel = document.querySelector("[data-current-language]");

let activeLanguage = localStorage.getItem("portfolio-language") || "zh";

function applyLanguage(language) {
  activeLanguage = language;
  const dictionary = translations[language];

  html.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "傅嘉寅 | 视频剪辑作品集" : "Fu Jiayin | Video Editing Portfolio";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[key] || "";
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    node.alt = dictionary[key] || "";
  });

  currentLanguageLabel.textContent = language === "zh" ? "EN" : "中";
  languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("portfolio-language", language);
}

languageToggle.addEventListener("click", () => {
  applyLanguage(activeLanguage === "zh" ? "en" : "zh");
});

document.querySelectorAll("[data-video-play]").forEach((button) => {
  const shell = button.closest(".video-shell");
  const video = shell.querySelector("video");
  const status = shell.querySelector(".video-status");

  button.addEventListener("click", async () => {
    status.textContent = "";

    if (!video.querySelector("source")) {
      const source = document.createElement("source");
      source.src = video.dataset.videoSrc;
      source.type = "video/mp4";
      video.append(source);
      video.load();
    }

    button.classList.add("is-hidden");

    try {
      await video.play();
    } catch {
      status.textContent = translations[activeLanguage].missingVideo;
    }
  });

  video.addEventListener("error", () => {
    button.classList.remove("is-hidden");
    status.textContent = video.dataset[activeLanguage === "zh" ? "missingMessageZh" : "missingMessageEn"];
  });
});

function setupVideoProtection() {
  document.querySelectorAll("video").forEach((video) => {
    video.controlsList?.add("nodownload");
    video.controlsList?.add("noplaybackrate");
    video.controlsList?.add("noremoteplayback");
    video.disablePictureInPicture = true;
    video.disableRemotePlayback = true;
    video.addEventListener("contextmenu", (event) => event.preventDefault());
  });
}

function setupVideoCardReveal() {
  const cards = document.querySelectorAll(".video-card");

  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("scroll-effects-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        const delay = Number.parseInt(entry.target.style.getPropertyValue("--reveal-delay"), 10) || 0;

        window.setTimeout(() => {
          entry.target.style.setProperty("--reveal-delay", "0ms");
        }, delay + 760);

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.24,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  cards.forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${index * 90}ms`);
    observer.observe(card);
  });
}

applyLanguage(activeLanguage);
setupVideoProtection();
setupVideoCardReveal();
