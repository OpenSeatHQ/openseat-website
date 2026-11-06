// Hero dashboard: roll each KPI up to its value once, odometer-style.
// The final values are already in the HTML, so no-JS and reduced-motion visitors just see them.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('[data-odometer]').forEach(function (el, card) {
    var value = el.textContent.trim();
    var digitsLeft = value.replace(/\D/g, '').length;
    el.setAttribute('aria-label', value);
    el.textContent = '';

    value.split('').forEach(function (ch) {
      var cell = document.createElement('span');
      cell.setAttribute('aria-hidden', 'true');
      if (!/\d/.test(ch)) {
        cell.textContent = ch;
        el.appendChild(cell);
        return;
      }
      // Lower-order digits spin more laps, like a real odometer.
      var laps = 4 - Math.min(--digitsLeft, 3);
      var stops = laps * 10 + Number(ch) + 1;
      var strip = document.createElement('span');
      strip.className = 'odo-strip';
      for (var i = 0; i < stops; i++) {
        var d = document.createElement('span');
        d.textContent = i % 10;
        strip.appendChild(d);
      }
      strip.style.transitionDelay = (450 + card * 120) + 'ms';
      strip.dataset.to = 'translateY(' + (-(stops - 1) / stops * 100) + '%)';
      cell.className = 'odo-digit';
      cell.appendChild(strip);
      el.appendChild(cell);
    });
  });

  // Force a layout so the start position is committed, then the transition runs.
  var strips = document.querySelectorAll('.odo-strip');
  if (strips.length) void strips[0].offsetHeight;
  strips.forEach(function (s) {
    s.style.transform = s.dataset.to;
  });
})();
