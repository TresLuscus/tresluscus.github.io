
(() => {

  const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1, //количество показанных картинок
    slidesPerGroup: 1, // количество листаемых картинок
    spaceBetween: 0, // отступ между картинками
    loop: false,
    navigation: {
      nextEl: '.swiper-gallery-next',
      prevEl: '.swiper-gallery-prev'
    },
    pagination: {
      el: '.swiper-gallery-pagination',
      type: 'fraction'
    },
    breakpoints: {
      641 : {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      971 : {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 27
      },
      1281 : {
        slidesPerView: 2,
        spaceBetween: 34
      },
      1561 : {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});
})();



