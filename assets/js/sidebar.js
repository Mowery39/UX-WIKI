(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    const btn = document.getElementById("uxMenuBtn");
    const sidebar = document.getElementById("uxSidebar");
    const backdrop = document.getElementById("uxBackdrop");
    const closeBtn = document.getElementById("uxCloseBtn");

    if (!btn || !sidebar || !backdrop || !closeBtn) return;

    function openMenu() {
      sidebar.classList.add("open");
      backdrop.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      sidebar.classList.remove("open");
      backdrop.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  });
})();
