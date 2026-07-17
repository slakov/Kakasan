document.documentElement.classList.add("js");

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

const ANALYTICS_ID = "G-NZ9WMGEK0Q";
const ANALYTICS_CONSENT_KEY = "kakasan-analytics-consent-v1";
const consentBanner = document.querySelector("[data-consent-banner]");
const consentAccept = document.querySelector("[data-consent-accept]");
const consentDecline = document.querySelector("[data-consent-decline]");
const consentSettings = document.querySelectorAll("[data-consent-settings]");
let analyticsLoaded = false;
let analyticsConsent = null;

const readAnalyticsConsent = () => {
  try {
    const value = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
};

const saveAnalyticsConsent = (value) => {
  analyticsConsent = value;
  try {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Consent still applies for the current page when local storage is unavailable.
  }
};

const configureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
};

const loadAnalytics = () => {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  window[`ga-disable-${ANALYTICS_ID}`] = false;
  configureDataLayer();

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    content_language: document.documentElement.lang,
    cookie_flags: "SameSite=None;Secure",
    transport_type: "beacon",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  script.dataset.googleAnalytics = ANALYTICS_ID;
  document.head.append(script);
};

const deleteAnalyticsCookies = () => {
  const host = window.location.hostname;
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${host}; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host}; SameSite=Lax`;
  });
};

const showConsentBanner = ({ focus = false } = {}) => {
  if (!consentBanner) return;
  consentBanner.hidden = false;
  requestAnimationFrame(() => consentBanner.classList.add("is-visible"));
  if (focus) consentDecline?.focus();
};

const hideConsentBanner = () => {
  if (!consentBanner) return;
  consentBanner.classList.remove("is-visible");
  window.setTimeout(() => {
    consentBanner.hidden = true;
  }, 220);
};

const allowAnalytics = () => {
  saveAnalyticsConsent("granted");
  loadAnalytics();
  hideConsentBanner();
};

const declineAnalytics = () => {
  saveAnalyticsConsent("denied");
  window[`ga-disable-${ANALYTICS_ID}`] = true;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }
  deleteAnalyticsCookies();
  hideConsentBanner();
};

const trackAnalyticsEvent = (name, parameters = {}) => {
  if (analyticsConsent !== "granted" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
};

consentAccept?.addEventListener("click", allowAnalytics);
consentDecline?.addEventListener("click", declineAnalytics);
consentSettings.forEach((button) => {
  button.addEventListener("click", () => showConsentBanner({ focus: true }));
});

analyticsConsent = readAnalyticsConsent();
if (analyticsConsent === "granted") loadAnalytics();
else if (analyticsConsent === null) showConsentBanner();

document.querySelectorAll("[data-language-switcher] a").forEach((link) => {
  link.addEventListener("click", () => {
    trackAnalyticsEvent("language_change", {
      from_language: document.documentElement.lang,
      to_language: link.getAttribute("hreflang"),
    });
  });
});

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackAnalyticsEvent("contact_intent", {
      content_language: document.documentElement.lang,
    });
  });
});

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
    trackAnalyticsEvent("contact_reveal", {
      contact_method: kind,
      content_language: document.documentElement.lang,
    });
  });
});

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
