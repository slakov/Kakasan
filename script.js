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

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
