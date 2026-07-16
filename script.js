document.documentElement.classList.add("js");

const translations = {
  en: {
    pageTitle: "Private Yoga in The Hague | Raj Sherjeet Singh",
    metaDescription:
      "Private one-to-one and small-group yoga in The Hague with Raj Sherjeet Singh (Slavik), taught in English and Ukrainian.",
    skipLink: "Skip to content",
    brandHome: "Raj Sherjeet Singh — home",
    primaryNav: "Primary navigation",
    languageSwitcher: "Language",
    switchEnglish: "Switch to English",
    switchUkrainian: "Switch to Ukrainian",
    languageChanged: "Language changed to English.",
    menu: "Menu",
    navSessions: "Sessions",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: '<span aria-hidden="true"></span> Yoga in The Hague',
    heroTitle: "A steadier way<br /><em>to move.</em>",
    heroIntro:
      "Private one-to-one and small-group yoga for real bodies and busy lives—taught in English or Ukrainian, with care, clarity, and room to breathe.",
    heroCta: 'Ask about a session <span aria-hidden="true">↗</span>',
    heroExplore: "Explore sessions",
    sessionDetails: "Session details",
    factFormat: "Format",
    factFormatValue: "Private 1:1 · Small groups",
    factLanguages: "Languages",
    factLanguagesValue: "English · Ukrainian",
    factTraining: "Training",
    factTrainingValue: "200-hour TTC · 2026",
    portraitAlt:
      "A stylised portrait of Raj practising Warrior II among the dunes at blue hour",
    alsoKnown: "also known as Slavik",
    portraitNote: "Breathe · Feel · Begin",
    scrollLabel: "Scroll to the sessions section",
    scrollText: "Scroll to explore",
    sessionsEyebrow: '<span aria-hidden="true"></span> Sessions',
    sessionsTitle: "Yoga with both feet<br />on the ground.",
    sessionsLead:
      "Yoga does not need to be a performance. We focus on clear instruction, attentive movement, steady breathing, and options that meet you where you are.",
    sessionsBody:
      "Whether you are beginning or returning to practice, sessions move at a manageable pace—building confidence, body awareness, and steadiness over time.",
    privateTitle: "Private one-to-one",
    privateBody:
      "A session shaped around your experience, mobility, and intentions, with time to ask questions, learn at your own pace, and receive individual guidance.",
    privateMeta: "Personal · Focused · Adaptable",
    groupTitle: "Small-group practice",
    groupBody:
      "Clear, welcoming sessions for small groups, with thoughtful variations so each person can practise at an appropriate pace.",
    groupMeta: "Shared · Grounded · Inclusive",
    aboutEyebrow: '<span aria-hidden="true"></span> About Raj',
    hours: "hours",
    location: "Based in<br />The Hague, NL",
    aboutTitle:
      "Structure brought me to the mat.<br /><em>Curiosity kept me here.</em>",
    aboutBodyOne:
      "I’m Raj Sherjeet Singh—you can also call me Slavik. I’m a software engineer by background, so I understand what long hours at a desk and a busy, analytical mind can do to the body and nervous system.",
    aboutBodyTwo:
      "I’ve practised yoga for five years. In 2026, I completed a 200-hour Yoga Teacher Training at Arhanta Yoga Netherlands. I’m now beginning my teaching journey, offering attentive sessions with clear guidance, thoughtful options, and respect for each student’s pace.",
    credentialTitle: "200-hour Yoga Teacher Training",
    credentialMeta: "Arhanta Yoga Netherlands · 2026",
    principlesLabel: "Practice principles",
    principlesIntro: "A practice built on",
    principleAttention: "Attention",
    principleConsistency: "Consistency",
    principleCuriosity: "Curiosity",
    contactEyebrow: '<span aria-hidden="true"></span> Begin here',
    contactTitle: "Let’s find your<br /><em>way into practice.</em>",
    contactIntro:
      "Tell me what brings you to yoga, your preferred language, and whether you’re interested in a private one-to-one or small-group session. Write in English or Ukrainian—whichever feels more natural. I’ll reply personally so we can find a good next step.",
    emailLabel: "Email",
    showEmail: 'Show email address <i aria-hidden="true">↗</i>',
    phoneLabel: "Phone",
    showPhone: 'Show phone number <i aria-hidden="true">↗</i>',
    privacyNote:
      "No forms, tracking, or cookies. Contact details appear only when you choose to reveal them.",
    backToTop: "Back to top",
    footerTagline: "Yoga in The Hague · English & Ukrainian",
    gratitudeLabel: "Acknowledgement",
    gratitudeText:
      'With gratitude to <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Guru Sri Chinmoy</a> and the <a href="https://www.meditatiedenhaag.com/">Sri Chinmoy Centre Den Haag</a>—continuing sources of inspiration on my journey.',
  },
  uk: {
    pageTitle: "Індивідуальна йога в Гаазі | Радж Шерджіт Сінгх",
    metaDescription:
      "Індивідуальні заняття та йога в малих групах у Гаазі з викладачем Раджем Шерджітом Сінгхом (Славіком) — українською або англійською.",
    skipLink: "Перейти до вмісту",
    brandHome: "Радж Шерджіт Сінгх — на початок сторінки",
    primaryNav: "Основна навігація",
    languageSwitcher: "Мова сайту",
    switchEnglish: "Перемкнути англійською",
    switchUkrainian: "Перемкнути українською",
    languageChanged: "Мову змінено на українську.",
    menu: "Меню",
    navSessions: "Заняття",
    navAbout: "Про мене",
    navContact: "Зв’язатися",
    heroEyebrow: '<span aria-hidden="true"></span> Йога в Гаазі',
    heroTitle: "Рух із відчуттям<br /><em>опори.</em>",
    heroIntro:
      "Індивідуальні заняття та йога в малих групах для різних тіл і насичених буднів — українською або англійською, з турботою, ясністю й простором для дихання.",
    heroCta: 'Запитати про заняття <span aria-hidden="true">↗</span>',
    heroExplore: "Переглянути заняття",
    sessionDetails: "Деталі занять",
    factFormat: "Формат",
    factFormatValue: "Індивідуально · Малі групи",
    factLanguages: "Мови",
    factLanguagesValue: "Українська · Англійська",
    factTraining: "Підготовка",
    factTrainingValue: "200 годин · 2026",
    portraitAlt:
      "Стилізований портрет Раджа у позі Воїна II серед дюн у вечірніх сутінках",
    alsoKnown: "також відомий як Славік",
    portraitNote: "Дихай · Відчувай · Починай",
    scrollLabel: "Перейти до розділу про заняття",
    scrollText: "Дізнатися більше",
    sessionsEyebrow: '<span aria-hidden="true"></span> Заняття',
    sessionsTitle: "Практика з відчуттям<br />землі під ногами.",
    sessionsLead:
      "Йога — не вистава і не змагання. У центрі занять — зрозумілі пояснення, уважний рух, рівне дихання та варіанти практики відповідно до ваших можливостей.",
    sessionsBody:
      "Незалежно від того, чи ви тільки починаєте, чи повертаєтеся до практики, ми рухаємося у комфортному темпі, поступово розвиваючи впевненість, чутливість до тіла та внутрішню стійкість.",
    privateTitle: "Індивідуальне заняття",
    privateBody:
      "Заняття, побудоване навколо вашого досвіду, рухливості та намірів. Є час на запитання, навчання у власному темпі й особисті рекомендації.",
    privateMeta: "Особисто · Уважно · Гнучко",
    groupTitle: "Практика в малій групі",
    groupBody:
      "Зрозумілі та доброзичливі заняття для малих груп із продуманими варіантами вправ, щоб кожна людина могла практикувати у відповідному для себе темпі.",
    groupMeta: "Разом · Усвідомлено · Доступно",
    aboutEyebrow: '<span aria-hidden="true"></span> Про Раджа',
    hours: "годин",
    location: "У Гаазі,<br />Нідерланди",
    aboutTitle:
      "Структура привела мене на килимок.<br /><em>А цікавість допомогла залишитися.</em>",
    aboutBodyOne:
      "Я — Радж Шерджіт Сінгх, але можна просто Славік. За фахом я інженер-програміст, тому добре знаю, як тривала робота за столом і постійне розумове навантаження позначаються на тілі та нервовій системі.",
    aboutBodyTwo:
      "Я практикую йогу вже п’ять років. У 2026 році завершив 200-годинну підготовку викладачів йоги в Arhanta Yoga Netherlands. Тепер я розпочинаю свій викладацький шлях і проводжу уважні заняття зі зрозумілими поясненнями, продуманими варіантами та повагою до темпу кожної людини.",
    credentialTitle: "200-годинна підготовка викладачів йоги",
    credentialMeta: "Arhanta Yoga Netherlands · 2026",
    principlesLabel: "Принципи практики",
    principlesIntro: "Основа практики",
    principleAttention: "Увага",
    principleConsistency: "Послідовність",
    principleCuriosity: "Цікавість",
    contactEyebrow: '<span aria-hidden="true"></span> Почнімо звідси',
    contactTitle: "Знайдімо ваш<br /><em>шлях до практики.</em>",
    contactIntro:
      "Розкажіть, що привело вас до йоги, якою мовою вам зручніше спілкуватися та який формат вас цікавить: індивідуальне заняття чи мала група. Пишіть українською або англійською — так, як вам природніше. Я відповім особисто, і разом ми оберемо добрий наступний крок.",
    emailLabel: "Пошта",
    showEmail: 'Показати адресу <i aria-hidden="true">↗</i>',
    phoneLabel: "Телефон",
    showPhone: 'Показати номер телефону <i aria-hidden="true">↗</i>',
    privacyNote:
      "Без форм, відстеження та файлів cookie. Контактні дані з’являються лише після вашого натискання.",
    backToTop: "На початок сторінки",
    footerTagline: "Йога в Гаазі · Українською та англійською",
    gratitudeLabel: "Подяка",
    gratitudeText:
      'З вдячністю до <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Ґуру Шрі Чінмоя</a> та <a href="https://www.meditatiedenhaag.com/">Центру Шрі Чінмоя в Гаазі</a> — джерел натхнення, що й далі підтримують мене на цьому шляху.',
  },
};

const LANGUAGE_KEY = "kakasan-language";
const languageButtons = document.querySelectorAll("[data-language]");
const languageStatus = document.querySelector("[data-language-status]");
const metaDescription = document.querySelector("[data-meta-description]");

const getSavedLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return savedLanguage && translations[savedLanguage] ? savedLanguage : "en";
  } catch {
    return "en";
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // The switch remains fully functional when browser storage is unavailable.
  }
};

const applyLanguage = (language, { announce = false } = {}) => {
  const resolvedLanguage = translations[language] ? language : "en";
  const copy = translations[resolvedLanguage];

  document.documentElement.lang = resolvedLanguage;
  document.title = copy.pageTitle;
  metaDescription?.setAttribute("content", copy.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === resolvedLanguage;
    const label =
      button.dataset.language === "en" ? copy.switchEnglish : copy.switchUkrainian;
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  });

  saveLanguage(resolvedLanguage);
  if (announce && languageStatus) languageStatus.textContent = copy.languageChanged;
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language, { announce: true });
  });
});

applyLanguage(getSavedLanguage());

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("is-open");
  document.body.style.overflow = "";
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Contact details are assembled only after a visitor asks for them. This is a
// light anti-scraping measure for a static GitHub Pages site, not encryption.
const contactData = {
  email: {
    value: [115, 108, 97, 107, 111, 118, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109],
    prefix: [109, 97, 105, 108, 116, 111, 58],
  },
  phone: {
    value: [43, 51, 49, 54, 49, 55, 49, 53, 52, 54, 56, 52],
    display: [43, 51, 49, 32, 54, 32, 49, 55, 49, 53, 32, 52, 54, 56, 52],
    prefix: [116, 101, 108, 58],
  },
};

const decode = (codes) => String.fromCharCode(...codes);

document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    const kind = button.dataset.contact;
    const entry = contactData[kind];
    const link = document.querySelector(`[data-contact-link="${kind}"]`);

    if (!entry || !link) return;

    const value = decode(entry.value);
    link.textContent = decode(entry.display || entry.value);
    link.href = `${decode(entry.prefix)}${value}`;
    link.hidden = false;
    button.hidden = true;
    link.focus();
  });
});

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
