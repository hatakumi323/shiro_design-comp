let mySwiper = new Swiper('.swiper-container', {
  
  autoplay: {
    delay: 6000,
  },
  
  loop: true,
  
  
  navigation: {  //ナビゲーションのオプション（矢印ボタンの要素を指定）
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});