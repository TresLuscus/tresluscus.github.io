(() => {

  const swiper = new Swiper('.event__swiper', {
    slidesPerView: 1, //количество показанных картинок
    spaceBetween: 20, // отступ между картинками
    slidesPerGroup: 1, // количество листаемых картинок
    loop: false,
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: ".swiper-event-pagination",
      type: 'bullets',
      clickable: true

    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },
    navigation: {
      nextEl: '.swiper-event-next',
      prevEl: '.swiper-event-prev'
    },
    breakpoints: {
      611 : {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 27
      },
      971 : {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      1281 : {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

})();
