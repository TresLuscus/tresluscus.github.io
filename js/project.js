(() => {

  const swiper = new Swiper('.project__swiper', {
    slidesPerView: 1, //количество показанных картинок
    slidesPerGroup: 1, // количество листаемых картинок
    spaceBetween: 0, // отступ между картинками
    loop: true,
    navigation: {
      nextEl: '.swiper-project-next',
      prevEl: '.swiper-project-prev'
    },
    breakpoints: {
      640 : {
        slidesPerView: 2,
        spaceBetween: 27
      },
      971 : {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1281 : {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

  tippy('.js-tooltip-btn', {
    theme: 'project__tooltip'
  });


})();



