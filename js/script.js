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

// ヘッダーを取得
const header = document.getElementById("header");

// ヘッダーの高さを取得
const hH = header.clientHeight;

// 現在地を示す変数を定義
let pos = 0;

const onScroll = () => {
  console.log('scroll');
  // スクロール位置がヘッダーの高さ分より大きい場合にclass名を追加し、そうでない場合にclass名を削除
  if(pos > hH) {
    header.classList.add('header--unpinned');
  } else {
    header.classList.remove('header--unpinned');
  }
};

window.addEventListener("scroll", () => {
  // スクロールするごとにpos（現在地）の値を更新
  pos = window.scrollY;
  onScroll();
});