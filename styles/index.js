document.addEventListener('DOMContentLoaded', function () {
  // ---- Element References ----
  const celsius = document.getElementById('celsius');
  const fahrenheit = document.getElementById('fahrenheit');
  const kelvin = document.getElementById('kelvin');
  const rankine = document.getElementById('rankine');
  const reaumur = document.getElementById('reaumur');

  // ---- Hamburger Menu ----
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');

  // Create overlay element for mobile nav
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);

  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mainNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  mainNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu if window resizes past mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 640) closeMenu();
  });

  // ---- Temperature Conversion Logic ----
  function round(val) {
    return parseFloat(val.toFixed(2));
  }

  celsius.oninput = function () {
    const c = parseFloat(celsius.value);
    if (isNaN(c)) { fahrenheit.value = kelvin.value = rankine.value = reaumur.value = ''; return; }
    fahrenheit.value = round((c * 9) / 5 + 32);
    kelvin.value = round(c + 273.15);
    rankine.value = round((c * 9) / 5 + 491.67);
    reaumur.value = round(c * 0.8);
  };

  fahrenheit.oninput = function () {
    const f = parseFloat(fahrenheit.value);
    if (isNaN(f)) { celsius.value = kelvin.value = rankine.value = reaumur.value = ''; return; }
    celsius.value = round(((f - 32) * 5) / 9);
    kelvin.value = round(((f - 32) * 5) / 9 + 273.15);
    rankine.value = round(f + 459.67);
    reaumur.value = round((f - 32) / 2.25);
  };

  kelvin.oninput = function () {
    const k = parseFloat(kelvin.value);
    if (isNaN(k)) { fahrenheit.value = celsius.value = rankine.value = reaumur.value = ''; return; }
    fahrenheit.value = round((k - 273.15) * (9 / 5) + 32);
    celsius.value = round(k - 273.15);
    rankine.value = round(k * 1.8);
    reaumur.value = round((k - 273.15) / 1.25);
  };

  rankine.oninput = function () {
    const r = parseFloat(rankine.value);
    if (isNaN(r)) { fahrenheit.value = celsius.value = kelvin.value = reaumur.value = ''; return; }
    fahrenheit.value = round(r - 459.67);
    celsius.value = round((r - 491.67) / 1.8);
    kelvin.value = round(r / 1.8);
    reaumur.value = round((r - 491.67) / 2.25);
  };

  reaumur.oninput = function () {
    const re = parseFloat(reaumur.value);
    if (isNaN(re)) { fahrenheit.value = celsius.value = kelvin.value = rankine.value = ''; return; }
    fahrenheit.value = round(re * 2.25 + 32);
    celsius.value = round(re * 1.25);
    kelvin.value = round(re * 1.25 + 273.15);
    rankine.value = round(re * 2.25 + 491.67);
  };
});
