// Tracks clicks on any link to the OpenSeat app (nav, hero/CTA, footer).
document.addEventListener('click', function (e) {
  if (typeof gtag !== 'function') return;
  var link = e.target.closest && e.target.closest('a[href*="app.openseat.cc"]');
  if (!link) return;
  gtag('event', 'launch_app_click', {
    link_url: link.href,
    link_text: (link.textContent || '').trim().slice(0, 50),
    placement: link.closest('header, nav') ? 'nav' : link.closest('footer') ? 'footer' : 'body',
    transport_type: 'beacon'
  });
});
