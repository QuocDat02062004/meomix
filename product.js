const products = [
  {
    img: "./assets/pate-uot/pate-uot1.png",
    title: "Pate thịt Bò",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot2.png",
    title: "Pate cá Hồi",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot3.png",
    title: "Pate bánh mì",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot1.png",
    title: "Pate thịt Bò",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot2.png",
    title: "Pate cá Hồi",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot3.png",
    title: "Pate bánh mì",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot2.png",
    title: "Pate cá Hồi",
    rating: 599,
  },
  {
    img: "./assets/pate-uot/pate-uot3.png",
    title: "Pate bánh mì",
    rating: 599,
  },
];

const products2 = [
  {
    img: "./assets/goi-da-dang/pate1.png",
    title: "Combo Seafood",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate2.png",
    title: "Combo Classic",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate3.png",
    title: "Combo Surf Turf",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate4.png",
    title: "Combo Poultry",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate1.png",
    title: "Combo Seafood",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate2.png",
    title: "Combo Classic",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate3.png",
    title: "Combo Surf Turf",
    rating: 599,
  },
  {
    img: "./assets/goi-da-dang/pate4.png",
    title: "Combo Poultry",
    rating: 599,
  },
];

const products3 = [
  {
    img: "./assets/kho/kho1.png",
    title: "GRAVY BURSTS",
    rating: 599,
  },
  {
    img: "./assets/kho/kho2.png",
    title: "Seafood Medley",
    rating: 599,
  },
  {
    img: "./assets/kho/kho3.png",
    title: "Indoor Health",
    rating: 599,
  },
  {
    img: "./assets/kho/kho1.png",
    title: "GRAVY BURSTS",
    rating: 599,
  },
  {
    img: "./assets/kho/kho2.png",
    title: "Seafood Medley",
    rating: 599,
  },
  {
    img: "./assets/kho/kho3.png",
    title: "Indoor Health",
    rating: 599,
  },
  {
    img: "./assets/kho/kho2.png",
    title: "Seafood Medley",
    rating: 599,
  },
  {
    img: "./assets/kho/kho3.png",
    title: "Indoor Health",
    rating: 599,
  },
];

function renderProducts(container, productList) {
  productList.forEach((product, index) => {
    const productHTML = `
      <a href="product-detail.html?id=${index}" class="product" style="text-decoration: none; color: inherit;">
        <img src="${product.img}" alt="${product.title}" />
        <div class="product-title">${product.title}</div>
        <div class="stars">★★★★★<span class="rating">(${product.rating})</span></div>
      </a>
    `;
    container.innerHTML += productHTML;
  });
}

const containers = document.querySelectorAll(".container-pate");

renderProducts(containers[0], products);
renderProducts(containers[1], products2);
renderProducts(containers[2], products3);
