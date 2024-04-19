(function () {
  const swipers = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 1000
    },
    effect: "fade",
    allowTouchMove: false
  });
}());
