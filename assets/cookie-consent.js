/* Aviso de cookies — MarketIA
   Guarda la elección en localStorage y solo carga AdSense/Analytics tras aceptar.
   Cuando actives AdSense, pon su script dentro de loadAds() en vez de directamente en el <head>. */
(function () {
  var KEY = "marketia_cookie_consent";

  function loadAds() {
    // Ejemplo de cómo cargar AdSense solo tras el consentimiento:
    // var s = document.createElement("script");
    // s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX";
    // s.async = true;
    // s.crossOrigin = "anonymous";
    // document.head.appendChild(s);
  }

  function hideBanner() {
    var el = document.getElementById("cookie-banner");
    if (el) el.hidden = true;
  }

  function setConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    hideBanner();
    if (value === "accepted") loadAds();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var stored;
    try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }

    if (stored === "accepted") { loadAds(); return; }
    if (stored === "rejected") return;

    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    banner.hidden = false;

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");
    if (acceptBtn) acceptBtn.addEventListener("click", function () { setConsent("accepted"); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { setConsent("rejected"); });
  });
})();
