const largeImageScreen = document.querySelector(".full");
const largeImage = document.querySelector(".full__img");
const largeImageBackground = document.querySelector(".full__img--bg");
const gallery = document.querySelector(".gallery__list");
// 画像の数
let imgCount;

const fetchImgApi = (entries) => {
  fetch("https://5e6f169f5171ce0016085575.mockapi.io/img")
    .then(response => response.json())
    .then(images => {
      // if (images.length < limit) {
      //   const indicator = entries[0].target
      //   observer.unobserve(indicator);
      //   indicator.remove();
      // }
      // entries.forEach(entry => {
      //   if(entry.isIntersecting){
      addItem(images);
      //   }
      // });
    })
    .then(() => {
      makeImgLarge();
    });
}

// テンプレートに画像を挿入する
const addItem = images => {
  const template = document.querySelector(".template").content;
  const fragment = document.createDocumentFragment();

  images.forEach((image, i) => {
    // テンプレートのノードを複製
    const clone = document.importNode(template, true);
    const list = clone.querySelector(".template__list");
    // テンプレート内のimg要素
    const img = list.querySelector(".template__list--img");
    img.setAttribute("src", image.src);
    // 各画像にid付与
    img.setAttribute("id", `img-${i}`);
    fragment.appendChild(list);
  });
  gallery.appendChild(fragment);
  imgCount = gallery.childElementCount;
}

// 画像ポップアップ用ファンクション
const makeImgLarge = () => {
  const items = document.querySelectorAll(".template__list");
  // 画像拡大表示
  items.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      largeImage.setAttribute("src", e.target.src);
      largeImage.setAttribute("id", i);
      largeImageScreen.classList.add("is-show");
    });
  });

  // 画像拡大非表示
  largeImageBackground.addEventListener("click", (e) => {
    largeImageScreen.classList.remove("is-show");
    // 画像拡大表示用のimgタグからsrcを消す（次に拡大表示するときに前の画像が一瞬表示されてしまうため）
    setTimeout(() => {
      largeImage.removeAttribute("src");
    }, 500);
  });
}

// 画像拡大時に前の画像に進む機能
const prevImage = () => {
  let prevId = Number(largeImage.id);
  let prevSrc;
  if (prevId === 0) {
    // もし１枚目の画像なら
    prevId = imgCount;
    prevSrc = gallery.lastElementChild.querySelector(".template__list--img").src;
  } else {
    prevSrc = document.querySelector(`#img-${prevId - 1}`).src;
  }
  largeImage.setAttribute("src", prevSrc);
  largeImage.setAttribute("id", prevId - 1);
}

// 画像拡大時に次の画像に進む機能
const nextImage = () => {
  let nextId = Number(largeImage.id);
  let nextSrc;
  if (nextId === imgCount - 1) {
    // もし最後の画像なら
    nextId = -1;
    nextSrc = gallery.firstElementChild.querySelector(".template__list--img").src;
  } else {
    nextSrc = document.querySelector(`#img-${nextId + 1}`).src;
  }
  largeImage.setAttribute("src", nextSrc);
  largeImage.setAttribute("id", nextId + 1);
}

window.onload = fetchImgApi();

// インフィニティスクロール用のインターセクションオブザーバー
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0
// };
// const observer = new IntersectionObserver(fetchImgApi, options);
// const indicator = document.querySelector(".indicator");
// observer.observe(indicator);
