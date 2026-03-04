$(document).ready(function () {

  // ── BACK TO TOP ──
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });
  $('.back-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  // ── STICKY NAVBAR ──
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('sticky-top shadow');
    }
  });

  // ── CAROUSEL AUTO ──
  $('#heroCarousel').carousel({ interval: 5000, ride: 'carousel' });

  // ── ACTIVE NAV LINK ──
  var path = window.location.pathname;
  $('nav .nav-link').each(function () {
    var href = $(this).attr('href');
    if (href === path || (href !== '/' && path.startsWith(href))) {
      $(this).addClass('active text-primary');
    }
  });

  // ── FORM VALIDATION ──
  $('#contactForm').submit(function (e) {
    var name = $('[name="name"]').val().trim();
    var email = $('[name="email"]').val().trim();
    var message = $('[name="message"]').val().trim();
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });

  // ── WOW ANIMATIONS ──
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // ── SMOOTH SCROLL ──
  $('a[href^="#"]').click(function (e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });
});
