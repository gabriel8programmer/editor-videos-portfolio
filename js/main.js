/**
 * Orquestra a UI: header, menu, galeria, filtros, contato e animações.
 */
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    document.body.classList.add("reduced-motion");
  }

  /* ---------- Ano do footer ---------- */
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header scroll ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("nav-mobile");

  function setMenuOpen(open) {
    if (!toggle || !mobileNav || !header) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    mobileNav.hidden = !open;
    header.classList.toggle("is-menu-open", open);
  }

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setMenuOpen(open);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
    }
  });

  /* ---------- Contato / footer links ---------- */
  const brandIcons = {
    freelas99: {
      src: "assets/icons/99freelas.webp",
      srcSm: "assets/icons/99freelas-sm.webp",
      width: 20,
      height: 20,
      alt: "Logo 99Freelas"
    }
  };

  const contactIcons = {
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.96.55 3.8 1.5 5.38L2 22l4.95-1.6a9.86 9.86 0 0 0 5.09 1.4h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.75 14.07c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.26-4.79-4.2-4.93-4.4-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.17 0 .4-.07.63.48.24.56.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.28.74 1.22 1.59 1.97 1.1.97 2.02 1.27 2.3 1.41.29.14.45.12.62-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.36z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>`,
    workana: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 17 8.5 7l3.5 7 3.5-7L20 17"/><path d="M6.5 13h4M13.5 13h4"/></svg>`
  };

  function brandIconMarkup(key, { small = false } = {}) {
    const icon = brandIcons[key];
    if (!icon) return contactIcons[key] || "";
    const src = small ? icon.srcSm : icon.src;
    const size = small ? 16 : icon.width;
    return `<img class="brand-icon" src="${src}" alt="" width="${size}" height="${size}" loading="lazy" decoding="async" aria-hidden="true" />`;
  }

  function renderContactLinks() {
    const container = document.getElementById("contact-links");
    const footerSocial = document.getElementById("footer-social");
    if (!container || typeof siteConfig === "undefined") return;

    const items = [
      { key: "whatsapp", label: "WhatsApp", href: siteConfig.contact.whatsapp },
      { key: "email", label: "E-mail", href: siteConfig.contact.email },
      { key: "freelas99", label: "99Freelas", href: siteConfig.contact.freelas99 },
      { key: "workana", label: "Workana", href: siteConfig.contact.workana }
    ];

    container.innerHTML = "";
    footerSocial.innerHTML = "";

    items.forEach(({ key, label, href }) => {
      const hasLink = Boolean(href && String(href).trim());
      const iconHtml = brandIconMarkup(key);

      const contactBtn = document.createElement(hasLink ? "a" : "span");
      contactBtn.className = `contact-link contact-link--${key}${hasLink ? "" : " is-disabled"}`;
      contactBtn.innerHTML = `${iconHtml}<span>${label}${hasLink ? "" : " (em breve)"}</span>`;
      if (hasLink) {
        contactBtn.href = href;
        contactBtn.target = href.startsWith("mailto:") || href.startsWith("https://wa.me") ? "_self" : "_blank";
        if (contactBtn.target === "_blank") contactBtn.rel = "noopener noreferrer";
      } else {
        contactBtn.setAttribute("aria-disabled", "true");
        contactBtn.title = "Link ainda não configurado";
      }
      container.appendChild(contactBtn);

      if (hasLink && footerSocial) {
        // Rodapé: apenas ícones (WhatsApp, e-mail, 99Freelas)
        if (key === "workana") return;

        const foot = document.createElement("a");
        foot.className = `footer-social-link footer-social-link--${key}`;
        foot.href = href;
        foot.setAttribute("aria-label", label);
        foot.title = label;
        foot.innerHTML = brandIconMarkup(key, { small: false });
        if (!href.startsWith("mailto:") && !href.startsWith("https://wa.me")) {
          foot.target = "_blank";
          foot.rel = "noopener noreferrer";
        }
        footerSocial.appendChild(foot);
      }
    });
  }

  /* ---------- Galeria de projetos ---------- */
  const grid = document.getElementById("projects-grid");
  const filtersEl = document.querySelector(".filters");
  const emptyEl = document.getElementById("projects-empty");
  let activeCategory = "Todos";

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "project-card reveal";
    article.dataset.category = project.category;
    article.dataset.orientation = project.orientation || "horizontal";
    article.dataset.id = String(project.id);

    const isPlaceholder = project.placeholder || !project.videoId;
    const tools = (project.tools || [])
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("");

    article.innerHTML = `
      <button type="button" class="project-thumb" aria-label="Abrir vídeo: ${escapeHtml(project.title)}">
        <img
          src="${escapeHtml(project.thumbnail)}"
          alt="Thumbnail do projeto ${escapeHtml(project.title)}"
          loading="lazy"
          decoding="async"
          width="${project.orientation === "vertical" ? 540 : 960}"
          height="${project.orientation === "vertical" ? 960 : 540}"
        />
        <span class="project-thumb-overlay">
          <span class="play-btn" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5L8 5.5z"/></svg>
          </span>
        </span>
        ${isPlaceholder ? '<span class="project-badge placeholder">Placeholder</span>' : ""}
      </button>
      <div class="project-body">
        <p class="project-category">${escapeHtml(project.category)}</p>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        <ul class="project-tools">${tools}</ul>
        <button type="button" class="btn btn-ghost project-action">
          ${isPlaceholder ? "Ver detalhes" : "Assistir"}
        </button>
      </div>
    `;

    const open = () => {
      if (window.VideoPlayer) window.VideoPlayer.open(project);
    };

    article.querySelector(".project-thumb").addEventListener("click", open);
    article.querySelector(".project-action").addEventListener("click", open);

    return article;
  }

  function renderFilters() {
    if (!filtersEl || typeof categories === "undefined") return;
    filtersEl.innerHTML = "";

    categories.forEach((cat, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `filter-btn${index === 0 ? " is-active" : ""}`;
      btn.textContent = cat;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
      btn.addEventListener("click", () => {
        activeCategory = cat;
        filtersEl.querySelectorAll(".filter-btn").forEach((el) => {
          const active = el.textContent === cat;
          el.classList.toggle("is-active", active);
          el.setAttribute("aria-selected", String(active));
        });
        applyFilter();
      });
      filtersEl.appendChild(btn);
    });
  }

  function applyFilter() {
    if (!grid) return;
    const cards = [...grid.querySelectorAll(".project-card")];
    let visible = 0;

    cards.forEach((card) => {
      const match =
        activeCategory === "Todos" || card.dataset.category === activeCategory;
      card.classList.toggle("is-hidden", !match);
      if (match) visible += 1;
    });

    if (emptyEl) emptyEl.hidden = visible > 0;
    observeReveals();
  }

  function renderProjects() {
    if (!grid || typeof projects === "undefined") return;
    grid.innerHTML = "";

    const list = [...projects].sort((a, b) => {
      if (Boolean(b.featured) !== Boolean(a.featured)) {
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }
      return Number(a.id) - Number(b.id);
    });

    list.forEach((project) => {
      grid.appendChild(createProjectCard(project));
    });

    applyFilter();
  }

  /* ---------- IntersectionObserver reveals ---------- */
  let observer;

  function observeReveals() {
    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (reducedMotion) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    nodes.forEach((el) => observer.observe(el));
  }

  /* ---------- Init ---------- */
  renderContactLinks();
  renderFilters();
  renderProjects();
  observeReveals();
})();
