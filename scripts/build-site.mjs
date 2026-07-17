import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://kakasan.nl";
const measurementId = "G-NZ9WMGEK0Q";
const updated = "2026-07-17";

const routes = {
  en: "/",
  uk: "/uk/",
  ru: "/ru/",
  nl: "/nl/",
};

const privacyRoutes = {
  en: "/privacy.html",
  uk: "/uk/privacy.html",
  ru: "/ru/privacy.html",
  nl: "/nl/privacy.html",
};

const languageLabels = {
  en: { short: "EN", name: "English" },
  uk: { short: "УКР", name: "Українська" },
  ru: { short: "RU", name: "Русский" },
  nl: { short: "NL", name: "Nederlands" },
};

const locales = {
  en: {
    lang: "en",
    ogLocale: "en_US",
    title: "Private Yoga Lessons in The Hague | English & Ukrainian",
    description:
      "Private one-to-one and small-group yoga lessons in The Hague with Raj Sherjeet Singh, taught in English or Ukrainian with clear, attentive guidance.",
    menu: "Menu",
    navSessions: "Sessions",
    navAbout: "About",
    navContact: "Contact",
    primaryNav: "Primary navigation",
    languageNav: "Choose language",
    brandHome: "Raj Sherjeet Singh — home",
    skip: "Skip to content",
    heroEyebrow: "Private yoga lessons in The Hague",
    heroTitle: "A steadier way<br /><em>to move.</em>",
    heroIntro:
      "Private one-to-one and small-group yoga for real bodies and busy lives—taught in English or Ukrainian, with care, clarity, and room to breathe.",
    languageNote: "Lessons and personal communication are available in English or Ukrainian.",
    heroCta: "Ask about a session",
    heroExplore: "Explore sessions",
    factFormat: "Format",
    factFormatValue: "Private 1:1 · Small groups",
    factLanguages: "Teaching languages",
    factLanguagesValue: "English · Ukrainian",
    factTraining: "Training",
    factTrainingValue: "200-hour TTC · 2026",
    sessionDetails: "Session details",
    portraitAlt: "Raj practising Warrior II among the dunes near The Hague at blue hour",
    alsoKnown: "also known as Slavik",
    portraitNote: "Breathe · Feel · Begin",
    scrollLabel: "Scroll to the sessions section",
    scrollText: "Scroll to explore",
    sessionsEyebrow: "Yoga sessions",
    sessionsTitle: "Yoga with both feet<br />on the ground.",
    sessionsLead:
      "Yoga does not need to be a performance. We focus on clear instruction, attentive movement, steady breathing, and options that meet you where you are.",
    sessionsBody:
      "Whether you are beginning or returning to practice, sessions move at a manageable pace—building confidence, body awareness, and steadiness over time.",
    privateTitle: "Private one-to-one",
    privateBody:
      "A yoga lesson shaped around your experience, mobility, and intentions, with time to ask questions, learn at your own pace, and receive individual guidance.",
    privateMeta: "Personal · Focused · Adaptable",
    groupTitle: "Small-group practice",
    groupBody:
      "Clear, welcoming yoga lessons for small groups, with thoughtful variations so each person can practise at an appropriate pace.",
    groupMeta: "Shared · Grounded · Inclusive",
    aboutEyebrow: "About Raj",
    hours: "hours",
    location: "Based in<br />The Hague, NL",
    aboutTitle: "Structure brought me to the mat.<br /><em>Curiosity kept me here.</em>",
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
    contactEyebrow: "Begin here",
    contactTitle: "Let’s find your<br /><em>way into practice.</em>",
    contactIntro:
      "Tell me what brings you to yoga, your preferred language, and whether you’re interested in a private one-to-one or small-group lesson in The Hague. Write in English or Ukrainian—whichever feels more natural. I’ll reply personally so we can find a good next step.",
    email: "Email",
    showEmail: "Show email address",
    phone: "Phone",
    showPhone: "Show phone number",
    noscript: "Please enable JavaScript to reveal contact details.",
    privacyNote: "No forms. Optional analytics is loaded only after you give permission.",
    backToTop: "Back to top",
    footerTagline: "Yoga in The Hague · English & Ukrainian",
    gratitudeLabel: "Acknowledgement",
    gratitude:
      'With gratitude to <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Guru Sri Chinmoy</a> and the <a href="https://www.meditatiedenhaag.com/">Sri Chinmoy Centre Den Haag</a>—continuing sources of inspiration on my journey.',
    privacyLink: "Privacy",
    analyticsSettings: "Analytics settings",
    consentEyebrow: "Your privacy",
    consentTitle: "Help improve Kakasan?",
    consentText:
      "With your permission, Google Analytics measures page views, language choices, and contact reveals. Google may process device, browser, approximate location, and interaction data. Nothing is sent before you allow it.",
    consentDetails: "Read privacy details",
    consentDecline: "Decline",
    consentAccept: "Allow analytics",
    consentLabel: "Analytics consent",
    schemaServiceName: "Private and small-group yoga lessons in The Hague",
    schemaServiceType: "Yoga instruction in English and Ukrainian",
    privacyTitle: "Privacy & Analytics | Kakasan",
    privacyDescription: "How Kakasan handles language preferences, contact details, and optional Google Analytics.",
    privacyHeading: "Privacy & analytics",
    privacyIntro:
      "Kakasan is designed to collect as little data as possible. Google Analytics is optional and remains disabled until you actively allow it.",
    privacyUpdated: "Last updated: 17 July 2026",
    privacyChoiceTitle: "Your choice comes first",
    privacyChoice:
      "The Google tag is not requested and no analytics data is sent before you select “Allow analytics”. Declining does not limit access to any part of the website.",
    privacyMeasureTitle: "What analytics may measure",
    privacyMeasure:
      "After consent, Google Analytics 4 may process the page URL, referrer, approximate location, device and browser information, and interactions such as language changes or revealing a contact method. Kakasan does not send your email address, telephone number, message content, or other contact details to Analytics.",
    privacyStorageTitle: "Storage and advertising",
    privacyStorage:
      "Google Analytics may set first-party cookies such as _ga after consent. Advertising storage, advertising user data, and advertising personalization stay denied. Google Signals and ad-personalization features are disabled in the tag configuration.",
    privacyControlTitle: "Change or withdraw consent",
    privacyControl:
      "Use “Analytics settings” below at any time. Withdrawing consent disables further measurement and removes Kakasan’s Google Analytics cookies where the browser permits it. Your preference is stored locally in this browser.",
    privacyControllerTitle: "Controller and contact",
    privacyController:
      "The site is operated by Raj Sherjeet Singh in The Hague. For a privacy question, use the contact options on the main website. Google processes analytics data under its own terms and privacy policy.",
    googlePrivacy: "Google Privacy Policy",
    googleAnalyticsInfo: "How Google safeguards Analytics data",
    returnToSite: "Return to Kakasan",
  },
  uk: {
    lang: "uk",
    ogLocale: "uk_UA",
    title: "Заняття йогою в Гаазі українською | Kakasan",
    description:
      "Індивідуальні заняття йогою та практика в малих групах у Гаазі з Раджем Шерджітом Сінгхом — українською або англійською.",
    menu: "Меню",
    navSessions: "Заняття",
    navAbout: "Про мене",
    navContact: "Зв’язатися",
    primaryNav: "Основна навігація",
    languageNav: "Обрати мову",
    brandHome: "Радж Шерджіт Сінгх — на початок сторінки",
    skip: "Перейти до вмісту",
    heroEyebrow: "Заняття йогою в Гаазі",
    heroTitle: "Рух із відчуттям<br /><em>опори.</em>",
    heroIntro:
      "Індивідуальні заняття та йога в малих групах для різних тіл і насичених буднів — українською або англійською, з турботою, ясністю й простором для дихання.",
    languageNote: "Заняття та особисте спілкування доступні українською або англійською.",
    heroCta: "Запитати про заняття",
    heroExplore: "Переглянути заняття",
    factFormat: "Формат",
    factFormatValue: "Індивідуально · Малі групи",
    factLanguages: "Мови занять",
    factLanguagesValue: "Українська · Англійська",
    factTraining: "Підготовка",
    factTrainingValue: "200 годин · 2026",
    sessionDetails: "Деталі занять",
    portraitAlt: "Радж у позі Воїна II серед дюн поблизу Гааги у вечірніх сутінках",
    alsoKnown: "також відомий як Славік",
    portraitNote: "Дихай · Відчувай · Починай",
    scrollLabel: "Перейти до розділу про заняття",
    scrollText: "Дізнатися більше",
    sessionsEyebrow: "Заняття йогою",
    sessionsTitle: "Практика з відчуттям<br />землі під ногами.",
    sessionsLead:
      "Йога — не вистава і не змагання. У центрі занять — зрозумілі пояснення, уважний рух, рівне дихання та варіанти практики відповідно до ваших можливостей.",
    sessionsBody:
      "Незалежно від того, чи ви тільки починаєте, чи повертаєтеся до практики, ми рухаємося у комфортному темпі, поступово розвиваючи впевненість, чутливість до тіла та внутрішню стійкість.",
    privateTitle: "Індивідуальне заняття",
    privateBody:
      "Заняття йогою, побудоване навколо вашого досвіду, рухливості та намірів. Є час на запитання, навчання у власному темпі й особисті рекомендації.",
    privateMeta: "Особисто · Уважно · Гнучко",
    groupTitle: "Практика в малій групі",
    groupBody:
      "Зрозумілі та доброзичливі заняття для малих груп із продуманими варіантами вправ, щоб кожна людина могла практикувати у відповідному для себе темпі.",
    groupMeta: "Разом · Усвідомлено · Доступно",
    aboutEyebrow: "Про Раджа",
    hours: "годин",
    location: "У Гаазі,<br />Нідерланди",
    aboutTitle: "Структура привела мене на килимок.<br /><em>А цікавість допомогла залишитися.</em>",
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
    contactEyebrow: "Почнімо звідси",
    contactTitle: "Знайдімо ваш<br /><em>шлях до практики.</em>",
    contactIntro:
      "Розкажіть, що привело вас до йоги, якою мовою вам зручніше спілкуватися та який формат занять у Гаазі вас цікавить: індивідуальний чи мала група. Пишіть українською або англійською — так, як вам природніше. Я відповім особисто, і разом ми оберемо добрий наступний крок.",
    email: "Пошта",
    showEmail: "Показати адресу",
    phone: "Телефон",
    showPhone: "Показати номер телефону",
    noscript: "Увімкніть JavaScript, щоб побачити контактні дані.",
    privacyNote: "Без форм. Необов’язкова аналітика завантажується лише з вашого дозволу.",
    backToTop: "На початок сторінки",
    footerTagline: "Йога в Гаазі · Українською та англійською",
    gratitudeLabel: "Подяка",
    gratitude:
      'З вдячністю до <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Ґуру Шрі Чінмоя</a> та <a href="https://www.meditatiedenhaag.com/">Центру Шрі Чінмоя в Гаазі</a> — джерел натхнення, що й далі підтримують мене на цьому шляху.',
    privacyLink: "Конфіденційність",
    analyticsSettings: "Налаштування аналітики",
    consentEyebrow: "Ваша приватність",
    consentTitle: "Допоможете покращити Kakasan?",
    consentText:
      "З вашого дозволу Google Analytics вимірюватиме перегляди сторінок, вибір мови та відкриття контактів. Google може обробляти дані про пристрій, браузер, приблизне місцезнаходження та взаємодії. До вашої згоди нічого не надсилається.",
    consentDetails: "Докладніше про конфіденційність",
    consentDecline: "Відхилити",
    consentAccept: "Дозволити аналітику",
    consentLabel: "Згода на аналітику",
    schemaServiceName: "Індивідуальні заняття та йога в малих групах у Гаазі",
    schemaServiceType: "Заняття йогою українською та англійською",
    privacyTitle: "Конфіденційність і аналітика | Kakasan",
    privacyDescription: "Як Kakasan обробляє мовні налаштування, контактні дані та необов’язкову аналітику Google.",
    privacyHeading: "Конфіденційність і аналітика",
    privacyIntro:
      "Kakasan створено так, щоб збирати якомога менше даних. Google Analytics є необов’язковим і залишається вимкненим, доки ви самі його не дозволите.",
    privacyUpdated: "Оновлено: 17 липня 2026 року",
    privacyChoiceTitle: "Насамперед — ваш вибір",
    privacyChoice:
      "Google-тег не завантажується й аналітичні дані не надсилаються, доки ви не натиснете «Дозволити аналітику». Відмова не обмежує жодної функції сайту.",
    privacyMeasureTitle: "Що може вимірювати аналітика",
    privacyMeasure:
      "Після згоди Google Analytics 4 може обробляти адресу сторінки, джерело переходу, приблизне місцезнаходження, дані про пристрій і браузер, а також взаємодії — наприклад, зміну мови чи відкриття способу зв’язку. Kakasan не передає в Analytics вашу електронну адресу, номер телефону, текст повідомлень або інші контактні дані.",
    privacyStorageTitle: "Зберігання та реклама",
    privacyStorage:
      "Після згоди Google Analytics може встановлювати власні файли cookie, зокрема _ga. Зберігання рекламних даних, передавання даних користувача для реклами та персоналізація реклами залишаються забороненими. Google Signals і функції рекламної персоналізації вимкнені в налаштуваннях тегу.",
    privacyControlTitle: "Змінити або відкликати згоду",
    privacyControl:
      "Скористайтеся кнопкою «Налаштування аналітики» нижче в будь-який момент. Після відкликання згоди подальше вимірювання припиняється, а файли cookie Google Analytics для Kakasan видаляються, якщо це дозволяє браузер. Ваш вибір зберігається локально в цьому браузері.",
    privacyControllerTitle: "Власник сайту та зв’язок",
    privacyController:
      "Сайт веде Радж Шерджіт Сінгх у Гаазі. Із питаннями про приватність звертайтеся через контакти на головній сторінці. Google обробляє аналітичні дані відповідно до власних умов і політики конфіденційності.",
    googlePrivacy: "Політика конфіденційності Google",
    googleAnalyticsInfo: "Як Google захищає дані Analytics",
    returnToSite: "Повернутися до Kakasan",
  },
  ru: {
    lang: "ru",
    ogLocale: "ru_RU",
    title: "Йога в Гааге для русскоязычных | Kakasan",
    description:
      "Индивидуальные занятия йогой и практика в небольших группах в Гааге. Информация на русском; занятия проходят на английском или украинском.",
    menu: "Меню",
    navSessions: "Занятия",
    navAbout: "Обо мне",
    navContact: "Связаться",
    primaryNav: "Основная навигация",
    languageNav: "Выбрать язык",
    brandHome: "Радж Шерджит Сингх — в начало страницы",
    skip: "Перейти к содержанию",
    heroEyebrow: "Йога в Гааге · информация на русском",
    heroTitle: "Двигаться<br /><em>с опорой.</em>",
    heroIntro:
      "Индивидуальные занятия и йога в небольших группах для разных тел и насыщенной жизни — на английском или украинском, с заботой, ясностью и пространством для дыхания.",
    languageNote: "Эта страница — на русском. Занятия и личное общение проходят на английском или украинском.",
    heroCta: "Узнать о занятии",
    heroExplore: "Посмотреть занятия",
    factFormat: "Формат",
    factFormatValue: "Индивидуально · Малые группы",
    factLanguages: "Языки занятий",
    factLanguagesValue: "Английский · Украинский",
    factTraining: "Подготовка",
    factTrainingValue: "200 часов · 2026",
    sessionDetails: "Информация о занятиях",
    portraitAlt: "Радж в позе Воина II среди дюн недалеко от Гааги в вечерних сумерках",
    alsoKnown: "также известен как Славик",
    portraitNote: "Дыши · Чувствуй · Начинай",
    scrollLabel: "Перейти к разделу о занятиях",
    scrollText: "Узнать больше",
    sessionsEyebrow: "Занятия йогой",
    sessionsTitle: "Практика с ощущением<br />земли под ногами.",
    sessionsLead:
      "Йога — не выступление и не соревнование. В центре занятий — понятные объяснения, внимательное движение, ровное дыхание и варианты практики, подходящие именно вам.",
    sessionsBody:
      "Независимо от того, начинаете ли вы или возвращаетесь к практике, мы двигаемся в комфортном темпе, постепенно развивая уверенность, чувствительность к телу и внутреннюю устойчивость.",
    privateTitle: "Индивидуальное занятие",
    privateBody:
      "Занятие йогой, выстроенное вокруг вашего опыта, подвижности и намерений. Есть время для вопросов, обучения в собственном темпе и индивидуальных рекомендаций.",
    privateMeta: "Лично · Внимательно · Гибко",
    groupTitle: "Практика в небольшой группе",
    groupBody:
      "Понятные и доброжелательные занятия для небольших групп с продуманными вариантами упражнений, чтобы каждый мог практиковать в подходящем темпе.",
    groupMeta: "Вместе · Осознанно · Доступно",
    aboutEyebrow: "О Радже",
    hours: "часов",
    location: "В Гааге,<br />Нидерланды",
    aboutTitle: "Структура привела меня на коврик.<br /><em>Любопытство помогло остаться.</em>",
    aboutBodyOne:
      "Я — Радж Шерджит Сингх, но можно просто Славик. По профессии я инженер-программист, поэтому хорошо знаю, как долгие часы за столом и постоянная умственная нагрузка отражаются на теле и нервной системе.",
    aboutBodyTwo:
      "Я практикую йогу уже пять лет. В 2026 году я завершил 200-часовой курс подготовки преподавателей йоги в Arhanta Yoga Netherlands. Сейчас я начинаю преподавательский путь и провожу внимательные занятия с понятными объяснениями, продуманными вариантами и уважением к темпу каждого человека.",
    credentialTitle: "200-часовая подготовка преподавателей йоги",
    credentialMeta: "Arhanta Yoga Netherlands · 2026",
    principlesLabel: "Принципы практики",
    principlesIntro: "Основа практики",
    principleAttention: "Внимание",
    principleConsistency: "Постоянство",
    principleCuriosity: "Любопытство",
    contactEyebrow: "Начнём здесь",
    contactTitle: "Найдём ваш<br /><em>путь к практике.</em>",
    contactIntro:
      "Расскажите, что привело вас к йоге и какой формат занятий в Гааге вас интересует: индивидуальный или небольшая группа. Пишите на английском или украинском — как вам удобнее. Я отвечу лично, и вместе мы выберем хороший следующий шаг.",
    email: "Почта",
    showEmail: "Показать адрес",
    phone: "Телефон",
    showPhone: "Показать номер телефона",
    noscript: "Включите JavaScript, чтобы увидеть контактные данные.",
    privacyNote: "Без форм. Необязательная аналитика загружается только с вашего разрешения.",
    backToTop: "В начало страницы",
    footerTagline: "Йога в Гааге · На английском и украинском",
    gratitudeLabel: "Благодарность",
    gratitude:
      'С благодарностью <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Гуру Шри Чинмою</a> и <a href="https://www.meditatiedenhaag.com/">Центру Шри Чинмоя в Гааге</a> — неизменным источникам вдохновения на моём пути.',
    privacyLink: "Конфиденциальность",
    analyticsSettings: "Настройки аналитики",
    consentEyebrow: "Ваша конфиденциальность",
    consentTitle: "Поможете улучшить Kakasan?",
    consentText:
      "С вашего разрешения Google Analytics будет измерять просмотры страниц, выбор языка и открытие контактов. Google может обрабатывать данные об устройстве, браузере, примерном местоположении и взаимодействиях. До вашего согласия ничего не отправляется.",
    consentDetails: "Подробнее о конфиденциальности",
    consentDecline: "Отклонить",
    consentAccept: "Разрешить аналитику",
    consentLabel: "Согласие на аналитику",
    schemaServiceName: "Индивидуальные занятия и йога в небольших группах в Гааге",
    schemaServiceType: "Занятия йогой на английском и украинском",
    privacyTitle: "Конфиденциальность и аналитика | Kakasan",
    privacyDescription: "Как Kakasan обрабатывает языковые настройки, контактные данные и необязательную Google Analytics.",
    privacyHeading: "Конфиденциальность и аналитика",
    privacyIntro:
      "Kakasan устроен так, чтобы собирать как можно меньше данных. Google Analytics необязательна и остаётся отключённой, пока вы сами её не разрешите.",
    privacyUpdated: "Обновлено: 17 июля 2026 года",
    privacyChoiceTitle: "Сначала — ваш выбор",
    privacyChoice:
      "Google-тег не загружается и аналитические данные не отправляются, пока вы не нажмёте «Разрешить аналитику». Отказ не ограничивает доступ ни к одной функции сайта.",
    privacyMeasureTitle: "Что может измерять аналитика",
    privacyMeasure:
      "После согласия Google Analytics 4 может обрабатывать адрес страницы, источник перехода, примерное местоположение, сведения об устройстве и браузере, а также взаимодействия — например, смену языка или открытие способа связи. Kakasan не передаёт в Analytics ваш электронный адрес, номер телефона, содержание сообщений или другие контактные данные.",
    privacyStorageTitle: "Хранение данных и реклама",
    privacyStorage:
      "После согласия Google Analytics может устанавливать собственные файлы cookie, включая _ga. Хранение рекламных данных, передача пользовательских данных для рекламы и персонализация рекламы остаются запрещёнными. Google Signals и функции рекламной персонализации отключены в настройках тега.",
    privacyControlTitle: "Изменить или отозвать согласие",
    privacyControl:
      "В любой момент нажмите «Настройки аналитики» ниже. После отзыва согласия дальнейшие измерения прекращаются, а файлы cookie Google Analytics для Kakasan удаляются, если это позволяет браузер. Ваш выбор хранится локально в этом браузере.",
    privacyControllerTitle: "Владелец сайта и связь",
    privacyController:
      "Сайт ведёт Радж Шерджит Сингх в Гааге. С вопросами о конфиденциальности обращайтесь через контакты на главной странице. Google обрабатывает аналитические данные согласно собственным условиям и политике конфиденциальности.",
    googlePrivacy: "Политика конфиденциальности Google",
    googleAnalyticsInfo: "Как Google защищает данные Analytics",
    returnToSite: "Вернуться на Kakasan",
  },
  nl: {
    lang: "nl",
    ogLocale: "nl_NL",
    title: "Yogalessen in Den Haag in Engels of Oekraïens | Kakasan",
    description:
      "Privé-yogalessen en yoga in kleine groepen in Den Haag met Raj Sherjeet Singh, gegeven in het Engels of Oekraïens met rustige, duidelijke begeleiding.",
    menu: "Menu",
    navSessions: "Lessen",
    navAbout: "Over mij",
    navContact: "Contact",
    primaryNav: "Hoofdnavigatie",
    languageNav: "Kies een taal",
    brandHome: "Raj Sherjeet Singh — beginpagina",
    skip: "Ga naar de inhoud",
    heroEyebrow: "Privé-yogalessen in Den Haag",
    heroTitle: "Rustiger<br /><em>bewegen.</em>",
    heroIntro:
      "Privé-yoga en lessen in kleine groepen voor echte lichamen en drukke levens—gegeven in het Engels of Oekraïens, met aandacht, duidelijkheid en ruimte om te ademen.",
    languageNote: "Deze pagina is in het Nederlands; de lessen en persoonlijke communicatie zijn in het Engels of Oekraïens.",
    heroCta: "Vraag naar een les",
    heroExplore: "Bekijk de lessen",
    factFormat: "Vorm",
    factFormatValue: "Privé 1-op-1 · Kleine groepen",
    factLanguages: "Talen van de les",
    factLanguagesValue: "Engels · Oekraïens",
    factTraining: "Opleiding",
    factTrainingValue: "200 uur · 2026",
    sessionDetails: "Informatie over de lessen",
    portraitAlt: "Raj beoefent Krijger II tussen de duinen bij Den Haag in de avondschemering",
    alsoKnown: "ook bekend als Slavik",
    portraitNote: "Adem · Voel · Begin",
    scrollLabel: "Ga naar het gedeelte over de yogalessen",
    scrollText: "Meer ontdekken",
    sessionsEyebrow: "Yogalessen",
    sessionsTitle: "Yoga met beide voeten<br />op de grond.",
    sessionsLead:
      "Yoga hoeft geen prestatie te zijn. De aandacht ligt op heldere uitleg, bewust bewegen, rustig ademen en variaties die aansluiten bij waar jij nu bent.",
    sessionsBody:
      "Of je nu begint of je beoefening weer oppakt, de lessen verlopen in een haalbaar tempo. Zo groeien vertrouwen, lichaamsbewustzijn en stabiliteit stap voor stap.",
    privateTitle: "Privéles één-op-één",
    privateBody:
      "Een yogales afgestemd op je ervaring, mobiliteit en intenties, met tijd voor vragen, leren in je eigen tempo en persoonlijke begeleiding.",
    privateMeta: "Persoonlijk · Gericht · Aanpasbaar",
    groupTitle: "Yoga in een kleine groep",
    groupBody:
      "Heldere, gastvrije lessen voor kleine groepen, met doordachte variaties zodat iedereen in een passend tempo kan oefenen.",
    groupMeta: "Samen · Geaard · Inclusief",
    aboutEyebrow: "Over Raj",
    hours: "uur",
    location: "In Den Haag,<br />Nederland",
    aboutTitle: "Structuur bracht me naar de mat.<br /><em>Nieuwsgierigheid hield me hier.</em>",
    aboutBodyOne:
      "Ik ben Raj Sherjeet Singh—je mag me ook Slavik noemen. Van oorsprong ben ik software-engineer, dus ik weet wat lange uren achter een bureau en een druk, analytisch hoofd met het lichaam en zenuwstelsel kunnen doen.",
    aboutBodyTwo:
      "Ik beoefen al vijf jaar yoga. In 2026 voltooide ik de 200-uurs Yoga Teacher Training bij Arhanta Yoga Netherlands. Nu begin ik aan mijn pad als docent en bied ik aandachtige lessen met heldere begeleiding, doordachte opties en respect voor ieders tempo.",
    credentialTitle: "200-uurs Yoga Teacher Training",
    credentialMeta: "Arhanta Yoga Netherlands · 2026",
    principlesLabel: "Principes van de beoefening",
    principlesIntro: "Gebouwd op",
    principleAttention: "Aandacht",
    principleConsistency: "Regelmaat",
    principleCuriosity: "Nieuwsgierigheid",
    contactEyebrow: "Begin hier",
    contactTitle: "Vind jouw<br /><em>weg naar de mat.</em>",
    contactIntro:
      "Vertel wat je naar yoga brengt en of je in Den Haag interesse hebt in een privéles of een kleine groep. Schrijf in het Engels of Oekraïens—wat voor jou het natuurlijkst voelt. Ik antwoord persoonlijk, zodat we samen een goede volgende stap kunnen vinden.",
    email: "E-mail",
    showEmail: "Toon e-mailadres",
    phone: "Telefoon",
    showPhone: "Toon telefoonnummer",
    noscript: "Schakel JavaScript in om de contactgegevens te bekijken.",
    privacyNote: "Geen formulieren. Optionele analytics wordt alleen met jouw toestemming geladen.",
    backToTop: "Terug naar boven",
    footerTagline: "Yoga in Den Haag · Engels & Oekraïens",
    gratitudeLabel: "Dankwoord",
    gratitude:
      'Met dankbaarheid aan <a href="https://www.meditatiedenhaag.com/sri-chinmoy/">Guru Sri Chinmoy</a> en het <a href="https://www.meditatiedenhaag.com/">Sri Chinmoy Centre Den Haag</a>—blijvende bronnen van inspiratie op mijn pad.',
    privacyLink: "Privacy",
    analyticsSettings: "Analytics-instellingen",
    consentEyebrow: "Jouw privacy",
    consentTitle: "Help je Kakasan verbeteren?",
    consentText:
      "Met jouw toestemming meet Google Analytics paginaweergaven, taalkeuzes en het tonen van contactopties. Google kan gegevens over apparaat, browser, globale locatie en interacties verwerken. Vóór jouw toestemming wordt niets verzonden.",
    consentDetails: "Lees de privacy-informatie",
    consentDecline: "Weigeren",
    consentAccept: "Analytics toestaan",
    consentLabel: "Toestemming voor analytics",
    schemaServiceName: "Privé-yogalessen en yoga in kleine groepen in Den Haag",
    schemaServiceType: "Yogales in het Engels en Oekraïens",
    privacyTitle: "Privacy & analytics | Kakasan",
    privacyDescription: "Hoe Kakasan omgaat met taalvoorkeuren, contactgegevens en optionele Google Analytics.",
    privacyHeading: "Privacy & analytics",
    privacyIntro:
      "Kakasan is ontworpen om zo weinig mogelijk gegevens te verzamelen. Google Analytics is optioneel en blijft uitgeschakeld totdat je er zelf toestemming voor geeft.",
    privacyUpdated: "Laatst bijgewerkt: 17 juli 2026",
    privacyChoiceTitle: "Jouw keuze staat voorop",
    privacyChoice:
      "De Google-tag wordt niet opgevraagd en er worden geen analyticsgegevens verzonden voordat je ‘Analytics toestaan’ kiest. Weigeren beperkt geen enkel onderdeel van de website.",
    privacyMeasureTitle: "Wat analytics kan meten",
    privacyMeasure:
      "Na toestemming kan Google Analytics 4 de pagina-URL, verwijzer, globale locatie, apparaat- en browserinformatie en interacties verwerken, zoals het wisselen van taal of het tonen van een contactmethode. Kakasan stuurt je e-mailadres, telefoonnummer, berichtinhoud of andere contactgegevens niet naar Analytics.",
    privacyStorageTitle: "Opslag en advertenties",
    privacyStorage:
      "Na toestemming kan Google Analytics eigen cookies plaatsen, zoals _ga. Advertentieopslag, advertentiegebruikersgegevens en advertentiepersonalisatie blijven geweigerd. Google Signals en functies voor advertentiepersonalisatie zijn in de tagconfiguratie uitgeschakeld.",
    privacyControlTitle: "Toestemming wijzigen of intrekken",
    privacyControl:
      "Gebruik hieronder op elk moment ‘Analytics-instellingen’. Na intrekking stopt verdere meting en verwijdert Kakasan de Google Analytics-cookies waar de browser dat toestaat. Je keuze wordt lokaal in deze browser bewaard.",
    privacyControllerTitle: "Beheerder en contact",
    privacyController:
      "De website wordt beheerd door Raj Sherjeet Singh in Den Haag. Gebruik voor privacyvragen de contactopties op de hoofdwebsite. Google verwerkt analyticsgegevens onder zijn eigen voorwaarden en privacybeleid.",
    googlePrivacy: "Privacybeleid van Google",
    googleAnalyticsInfo: "Hoe Google Analytics-gegevens beschermt",
    returnToSite: "Terug naar Kakasan",
  },
};

const alternateLinks = () =>
  Object.entries(routes)
    .map(([language, route]) => `    <link rel="alternate" hreflang="${language}" href="${siteUrl}${route}" />`)
    .concat(`    <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`)
    .join("\n");

const languageSwitcher = (current, privacy = false) => {
  const routeMap = privacy ? privacyRoutes : routes;
  return Object.entries(languageLabels)
    .map(([language, label]) => {
      const currentAttribute = language === current ? ' aria-current="page"' : "";
      return `<a href="${routeMap[language]}" hreflang="${language}" lang="${language}" aria-label="${label.name}"${currentAttribute}>${label.short}</a>`;
    })
    .join('<span aria-hidden="true"></span>');
};

const structuredData = (copy, canonical) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Kakasan",
      inLanguage: ["en", "uk", "ru", "nl"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#raj-sherjeet-singh`,
      name: "Raj Sherjeet Singh",
      alternateName: "Slavik",
      jobTitle: "Yoga teacher",
      url: `${siteUrl}/#about`,
      image: `${siteUrl}/assets/raj-warrior-ii-sivananda.jpg`,
      knowsLanguage: ["English", "Ukrainian"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "200-hour Yoga Teacher Training",
        credentialCategory: "Yoga teacher training",
        recognizedBy: { "@type": "Organization", name: "Arhanta Yoga Netherlands" },
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#yoga-lessons`,
      name: copy.schemaServiceName,
      serviceType: copy.schemaServiceType,
      description: copy.description,
      url: canonical,
      inLanguage: copy.lang,
      provider: { "@id": `${siteUrl}/#raj-sherjeet-singh` },
      areaServed: { "@type": "City", name: "The Hague", alternateName: "Den Haag" },
      availableLanguage: ["English", "Ukrainian"],
      audience: { "@type": "Audience", audienceType: "Adults interested in yoga" },
    },
  ],
});

const consentBanner = (copy) => `
    <section class="consent-banner" role="dialog" aria-modal="false" aria-labelledby="consent-title" aria-label="${copy.consentLabel}" data-consent-banner hidden>
      <div class="consent-banner__copy">
        <p class="eyebrow"><span aria-hidden="true"></span> ${copy.consentEyebrow}</p>
        <h2 id="consent-title">${copy.consentTitle}</h2>
        <p>${copy.consentText}</p>
        <a href="${privacyRoutes[copy.lang]}">${copy.consentDetails}</a>
      </div>
      <div class="consent-banner__actions">
        <button class="button button--quiet" type="button" data-consent-decline>${copy.consentDecline}</button>
        <button class="button button--primary" type="button" data-consent-accept>${copy.consentAccept}</button>
      </div>
    </section>`;

const renderPage = (copy) => {
  const canonical = `${siteUrl}${routes[copy.lang]}`;
  const schema = JSON.stringify(structuredData(copy, canonical), null, 2).replaceAll("<", "\\u003c");
  const alternateOgLocales = Object.values(locales)
    .filter((locale) => locale.lang !== copy.lang)
    .map((locale) => `    <meta property="og:locale:alternate" content="${locale.ogLocale}" />`)
    .join("\n");

  return `<!doctype html>
<html lang="${copy.lang}" data-locale="${copy.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${copy.title}</title>
    <meta name="description" content="${copy.description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#0d1110" />
    <meta name="color-scheme" content="dark" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com; style-src 'self'; script-src 'self' https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests" />
    <link rel="canonical" href="${canonical}" />
${alternateLinks()}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Kakasan" />
    <meta property="og:title" content="${copy.title}" />
    <meta property="og:description" content="${copy.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:locale" content="${copy.ogLocale}" />
${alternateOgLocales}
    <meta property="og:image" content="${siteUrl}/assets/raj-warrior-ii-sivananda.jpg" />
    <meta property="og:image:width" content="1003" />
    <meta property="og:image:height" content="1568" />
    <meta property="og:image:alt" content="${copy.portraitAlt}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${copy.title}" />
    <meta name="twitter:description" content="${copy.description}" />
    <meta name="twitter:image" content="${siteUrl}/assets/raj-warrior-ii-sivananda.jpg" />
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="preload" href="/assets/raj-warrior-ii-sivananda.jpg" as="image" fetchpriority="high" />
    <link rel="stylesheet" href="/styles.css" />
    <script type="application/ld+json">
${schema}
    </script>
    <script src="/script.js" defer></script>
  </head>
  <body>
    <!-- Generated by scripts/build-site.mjs. -->
    <a class="skip-link" href="#main">${copy.skip}</a>
    <header class="site-header" data-header>
      <a class="brand" href="${routes[copy.lang]}#top" aria-label="${copy.brandHome}"><span>R</span><i aria-hidden="true"></i><span>S</span></a>
      <div class="header-actions">
        <nav class="site-nav" id="site-nav" aria-label="${copy.primaryNav}" data-nav>
          <a href="#sessions">${copy.navSessions}</a>
          <a href="#about">${copy.navAbout}</a>
          <a href="#contact">${copy.navContact}</a>
        </nav>
        <nav class="language-switcher" aria-label="${copy.languageNav}" data-language-switcher>${languageSwitcher(copy.lang)}</nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
          <span class="menu-toggle__label">${copy.menu}</span>
          <span class="menu-toggle__icon" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </header>

    <main id="main">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero__glow" aria-hidden="true"></div>
        <div class="hero__copy" data-reveal>
          <p class="eyebrow"><span aria-hidden="true"></span> ${copy.heroEyebrow}</p>
          <h1 id="hero-title">${copy.heroTitle}</h1>
          <p class="hero__intro">${copy.heroIntro}</p>
          <p class="hero__language-note">${copy.languageNote}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#contact">${copy.heroCta} <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="#sessions">${copy.heroExplore}</a>
          </div>
          <dl class="hero__facts" aria-label="${copy.sessionDetails}">
            <div><dt>${copy.factFormat}</dt><dd>${copy.factFormatValue}</dd></div>
            <div><dt>${copy.factLanguages}</dt><dd>${copy.factLanguagesValue}</dd></div>
            <div><dt>${copy.factTraining}</dt><dd>${copy.factTrainingValue}</dd></div>
          </dl>
        </div>
        <figure class="hero__portrait" data-reveal data-delay="1">
          <div class="portrait-frame">
            <img src="/assets/raj-warrior-ii-sivananda.jpg" width="1003" height="1568" alt="${copy.portraitAlt}" fetchpriority="high" />
            <div class="portrait-frame__line" aria-hidden="true"></div>
            <figcaption><span>Raj Sherjeet Singh</span><span>${copy.alsoKnown}</span></figcaption>
          </div>
          <p class="portrait-note" aria-hidden="true">${copy.portraitNote}</p>
        </figure>
        <a class="hero__scroll" href="#sessions" aria-label="${copy.scrollLabel}"><span aria-hidden="true"></span><b>${copy.scrollText}</b></a>
      </section>

      <section class="practice section" id="sessions" aria-labelledby="sessions-title">
        <div class="section-heading" data-reveal>
          <p class="eyebrow"><span aria-hidden="true"></span> ${copy.sessionsEyebrow}</p>
          <h2 id="sessions-title">${copy.sessionsTitle}</h2>
        </div>
        <div class="practice__intro" data-reveal><p class="lead">${copy.sessionsLead}</p><p>${copy.sessionsBody}</p></div>
        <div class="offerings">
          <article class="offering" data-reveal>
            <p class="offering__number">01</p><div><h3>${copy.privateTitle}</h3><p>${copy.privateBody}</p><p class="offering__meta">${copy.privateMeta}</p></div><span class="offering__mark" aria-hidden="true">↗</span>
          </article>
          <article class="offering" data-reveal data-delay="1">
            <p class="offering__number">02</p><div><h3>${copy.groupTitle}</h3><p>${copy.groupBody}</p><p class="offering__meta">${copy.groupMeta}</p></div><span class="offering__mark" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section class="about section" id="about" aria-labelledby="about-title">
        <div class="about__aside" data-reveal>
          <p class="eyebrow"><span aria-hidden="true"></span> ${copy.aboutEyebrow}</p>
          <div class="seal" aria-hidden="true"><span>200</span><small>${copy.hours}</small></div>
          <p class="about__location">${copy.location}</p>
        </div>
        <div class="about__copy" data-reveal data-delay="1">
          <h2 id="about-title">${copy.aboutTitle}</h2>
          <div class="about__columns"><p>${copy.aboutBodyOne}</p><p>${copy.aboutBodyTwo}</p></div>
          <div class="credential">
            <div class="credential__icon" aria-hidden="true"><svg viewBox="0 0 48 48" role="img"><circle cx="24" cy="24" r="22"></circle><path d="M15 25.5 21 31l12-14"></path></svg></div>
            <div><p>${copy.credentialTitle}</p><span>${copy.credentialMeta}</span></div>
          </div>
        </div>
      </section>

      <section class="principles" aria-label="${copy.principlesLabel}">
        <div class="principles__inner">
          <p class="principles__label">${copy.principlesIntro}</p>
          <div class="principle" data-reveal><span>01</span><p>${copy.principleAttention}</p><i aria-hidden="true"></i></div>
          <div class="principle" data-reveal data-delay="1"><span>02</span><p>${copy.principleConsistency}</p><i aria-hidden="true"></i></div>
          <div class="principle" data-reveal data-delay="2"><span>03</span><p>${copy.principleCuriosity}</p><i aria-hidden="true"></i></div>
        </div>
      </section>

      <section class="contact section" id="contact" aria-labelledby="contact-title">
        <div class="contact__glow" aria-hidden="true"></div>
        <div class="contact__heading" data-reveal><p class="eyebrow eyebrow--light"><span aria-hidden="true"></span> ${copy.contactEyebrow}</p><h2 id="contact-title">${copy.contactTitle}</h2></div>
        <div class="contact__details" data-reveal data-delay="1">
          <p>${copy.contactIntro}</p>
          <div class="contact-options">
            <div class="contact-option"><span>${copy.email}</span><button class="contact-reveal" type="button" data-contact="email">${copy.showEmail} <i aria-hidden="true">↗</i></button><a class="contact-link" data-contact-link="email" hidden></a></div>
            <div class="contact-option"><span>${copy.phone}</span><button class="contact-reveal" type="button" data-contact="phone">${copy.showPhone} <i aria-hidden="true">↗</i></button><a class="contact-link" data-contact-link="phone" hidden></a></div>
          </div>
          <noscript><p class="noscript-note">${copy.noscript}</p></noscript>
          <p class="privacy-note">${copy.privacyNote}</p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="site-footer__main">
        <a class="brand brand--footer" href="#top" aria-label="${copy.backToTop}"><span>R</span><i aria-hidden="true"></i><span>S</span></a>
        <p>${copy.footerTagline}</p><p>© <span data-year>2026</span> Raj Sherjeet Singh</p>
      </div>
      <nav class="site-footer__privacy" aria-label="${copy.consentLabel}"><a href="${privacyRoutes[copy.lang]}">${copy.privacyLink}</a><button type="button" data-consent-settings>${copy.analyticsSettings}</button></nav>
      <aside class="footer-gratitude" aria-label="${copy.gratitudeLabel}"><span class="footer-gratitude__mark" aria-hidden="true">SC</span><p>${copy.gratitude}</p></aside>
    </footer>
${consentBanner(copy)}
  </body>
</html>
`;
};

const renderPrivacyPage = (copy) => {
  const canonical = `${siteUrl}${privacyRoutes[copy.lang]}`;
  return `<!doctype html>
<html lang="${copy.lang}" data-locale="${copy.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${copy.privacyTitle}</title>
    <meta name="description" content="${copy.privacyDescription}" />
    <meta name="robots" content="noindex, follow" />
    <meta name="theme-color" content="#0d1110" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com; style-src 'self'; script-src 'self' https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
    <script src="/script.js" defer></script>
  </head>
  <body class="privacy-page">
    <!-- Generated by scripts/build-site.mjs. -->
    <a class="skip-link" href="#main">${copy.skip}</a>
    <header class="site-header" data-header>
      <a class="brand" href="${routes[copy.lang]}" aria-label="${copy.brandHome}"><span>R</span><i aria-hidden="true"></i><span>S</span></a>
      <nav class="language-switcher" aria-label="${copy.languageNav}">${languageSwitcher(copy.lang, true)}</nav>
    </header>
    <main class="privacy-content" id="main">
      <p class="eyebrow"><span aria-hidden="true"></span> Kakasan</p>
      <h1>${copy.privacyHeading}</h1>
      <p class="privacy-content__lead">${copy.privacyIntro}</p>
      <p class="privacy-content__updated">${copy.privacyUpdated}</p>
      <section><h2>${copy.privacyChoiceTitle}</h2><p>${copy.privacyChoice}</p></section>
      <section><h2>${copy.privacyMeasureTitle}</h2><p>${copy.privacyMeasure}</p></section>
      <section><h2>${copy.privacyStorageTitle}</h2><p>${copy.privacyStorage}</p><p><strong>Google Analytics ID:</strong> ${measurementId}</p></section>
      <section><h2>${copy.privacyControlTitle}</h2><p>${copy.privacyControl}</p><button class="button button--primary" type="button" data-consent-settings>${copy.analyticsSettings}</button></section>
      <section><h2>${copy.privacyControllerTitle}</h2><p>${copy.privacyController}</p><ul><li><a href="https://policies.google.com/privacy">${copy.googlePrivacy}</a></li><li><a href="https://support.google.com/analytics/answer/6004245">${copy.googleAnalyticsInfo}</a></li></ul></section>
      <a class="text-link privacy-content__return" href="${routes[copy.lang]}">${copy.returnToSite}</a>
    </main>
${consentBanner(copy)}
  </body>
</html>
`;
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(routes)
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${updated}</lastmod>
${Object.entries(routes)
  .map(([language, alternateRoute]) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${siteUrl}${alternateRoute}" />`)
  .join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outputs = new Map([
  ["index.html", renderPage(locales.en)],
  ["uk/index.html", renderPage(locales.uk)],
  ["ru/index.html", renderPage(locales.ru)],
  ["nl/index.html", renderPage(locales.nl)],
  ["privacy.html", renderPrivacyPage(locales.en)],
  ["uk/privacy.html", renderPrivacyPage(locales.uk)],
  ["ru/privacy.html", renderPrivacyPage(locales.ru)],
  ["nl/privacy.html", renderPrivacyPage(locales.nl)],
  ["sitemap.xml", sitemap],
  ["robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`],
]);

for (const [relativePath, content] of outputs) {
  const destination = join(root, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, content, "utf8");
}

console.log(`Generated ${outputs.size} site files.`);
