/* Aviso de cookies — HerramientasIA
   AdSense (y sus cookies) solo se cargan después de que el usuario pulse "Aceptar".
   El enlace "Configurar cookies" del pie permite cambiar la elección en cualquier momento. */
(function () {
  var KEY = "herramientasia_cookie_consent";
  var ADSENSE_CLIENT = "ca-pub-9723862717735653";
  var adsLoaded = false;

  function loadAds() {
    if (adsLoaded) return;
    adsLoaded = true;
    var s = document.createElement("script");
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
    s.async = true;
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }

  function getConsent() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function setConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    var el = document.getElementById("cookie-banner");
    if (el) el.hidden = true;
    if (value === "accepted") loadAds();
    else if (adsLoaded) window.location.reload(); // retirar el consentimiento descarga los anuncios
  }

  function showBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");
    var settings = document.getElementById("cookie-settings");
    if (acceptBtn) acceptBtn.addEventListener("click", function () { setConsent("accepted"); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { setConsent("rejected"); });
    if (settings) settings.addEventListener("click", showBanner);

    var stored = getConsent();
    if (stored === "accepted") loadAds();
    else if (stored !== "rejected") showBanner();
  });
})();
