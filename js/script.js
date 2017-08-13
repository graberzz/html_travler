var slider = tns({
    container: '.about__staff-list',
    items: 4,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
      '0': 1,
      '540': 2,
      '700': 3,
      '910': 4,
    },

  });

var menuToggle = document.getElementsByClassName('main-nav__toggle')[0];

menuToggle.addEventListener('click', function(){
  var menu = document.getElementsByClassName('main-nav__list')[0];
  var toggleLine = document.getElementsByClassName('main-nav__toggle-line')[0];
  menu.classList.toggle('main-nav__list--active');
  toggleLine.classList.toggle('main-nav__toggle-line--active');
});