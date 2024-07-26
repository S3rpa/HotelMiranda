const swiperRooms = new Swiper('#swipper-rooms', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next-rooms',
      prevEl: '#swiper-button-prev-rooms',
    }
});
const swiperFeatures = new Swiper('#swiper-features', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '#swiper-pagination-features',
  }
});