/**
 * Modal de vídeo com carregamento sob demanda do iframe do YouTube.
 * Não carrega players até o usuário abrir um projeto.
 */
(() => {
  const modal = document.getElementById("video-modal");
  if (!modal) return;

  const dialog = modal.querySelector(".video-modal-dialog");
  const titleEl = document.getElementById("video-modal-title");
  const embedEl = document.getElementById("video-embed");
  const frameEl = modal.querySelector(".video-frame");
  const loaderEl = modal.querySelector(".video-loader");
  const placeholderEl = document.getElementById("video-modal-placeholder");
  const closeTriggers = modal.querySelectorAll("[data-close-modal]");

  let lastFocused = null;
  let iframeLoadTimer = null;

  function getFocusable() {
    return [...dialog.querySelectorAll(
      'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
    )].filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
  }

  function buildEmbedUrl(project) {
    if (project.videoType === "youtube" && project.videoId) {
      const params = new URLSearchParams({
        autoplay: "1",
        rel: "0",
        modestbranding: "1",
        playsinline: "1"
      });
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(project.videoId)}?${params}`;
    }
    return null;
  }

  function showLoader(show) {
    if (!loaderEl) return;
    loaderEl.classList.toggle("is-hidden", !show);
  }

  function openModal(project) {
    lastFocused = document.activeElement;
    titleEl.textContent = project.title;
    frameEl.dataset.orientation = project.orientation || "horizontal";
    embedEl.innerHTML = "";

    const isPlaceholder = project.placeholder || !project.videoId;
    placeholderEl.hidden = !isPlaceholder;

    if (isPlaceholder) {
      showLoader(false);
      frameEl.hidden = true;
    } else {
      frameEl.hidden = false;
      showLoader(true);

      const url = buildEmbedUrl(project);
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.title = `Reprodução: ${project.title}`;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.addEventListener("load", () => showLoader(false), { once: true });

      // Fallback caso o evento load demore
      clearTimeout(iframeLoadTimer);
      iframeLoadTimer = setTimeout(() => showLoader(false), 4000);

      embedEl.appendChild(iframe);
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    dialog.focus();
  }

  function closeModal() {
    clearTimeout(iframeLoadTimer);
    embedEl.innerHTML = "";
    showLoader(true);
    frameEl.hidden = false;
    placeholderEl.hidden = true;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  closeTriggers.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.VideoPlayer = { open: openModal, close: closeModal };
})();
