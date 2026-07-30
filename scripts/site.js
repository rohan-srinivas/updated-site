(() => {
  const root = document.documentElement;
  const storageKey = "rohan-portfolio-theme";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      const isLight = theme === "light";
      toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      toggle.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
      toggle.innerHTML = isLight ? "☾" : "☀";
    }
  };

  const savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  const addThemeToggle = () => {
    const nav = document.querySelector(".navbar-nav.ms-auto");
    if (!nav || document.querySelector(".theme-toggle")) return;

    const item = document.createElement("li");
    item.className = "nav-item theme-toggle-item";

    const button = document.createElement("button");
    button.className = "theme-toggle";
    button.type = "button";
    button.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "light" ? "dark" : "light");
    });

    item.appendChild(button);
    nav.appendChild(item);
    applyTheme(root.dataset.theme || "dark");
  };

  const revealElements = () => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  };

  const updateNavOnScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    navbar.classList.toggle("nav-scrolled", window.scrollY > 24);
  };

  document.addEventListener("DOMContentLoaded", () => {
    addThemeToggle();
    revealElements();
    updateNavOnScroll();
    window.addEventListener("scroll", updateNavOnScroll, { passive: true });
  });
})();
