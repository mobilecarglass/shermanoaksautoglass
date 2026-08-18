(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    var backdrop = document.querySelector(".nav-backdrop");
    if (!toggle || !nav) return;

    function setOpen(open) {
      body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    }
    function close() { setOpen(false); }

    toggle.addEventListener("click", function () {
      setOpen(!body.classList.contains("nav-open"));
    });
    if (backdrop) backdrop.addEventListener("click", close);
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && body.classList.contains("nav-open")) close();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && body.classList.contains("nav-open")) close();
    });
  });
})();