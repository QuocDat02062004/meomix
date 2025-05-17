const allProducts = [
  {
    img: "./assets/patebanhmi.png",
    title: "Pate thịt Bò",
    rating: 599,
    description:
      "Cho mèo của bạn niềm vui của nước sốt mà không làm bẩn. Thức ăn khô cho mèo Meow Mix® Gravy Bursts là hỗn hợp hương vị gà mặn của hạt giòn và túi nước sốt thật — để có một sự bùng nổ của nước sốt ngon lành gây ngạc nhiên và thích thú. Đây là cách hoàn hảo để cung cấp dinh dưỡng cân bằng cho mèo trưởng thành của bạn với hương vị hấp dẫn.",
  },
  {
    img: "./assets/patecahoi.png",
    title: "Pate cá Hồi",
    rating: 320,
    description: "Pate cá hồi tươi ngon, bổ sung omega-3 cho sức khỏe.",
  },
  {
    img: "./assets/patebanhmi.png",
    title: "Pate bánh mì",
    rating: 412,
    description: "Pate bánh mì thơm béo, tuyệt vời cho bữa sáng nhanh gọn.",
  },
  {
    img: "./assets/patemeo.png",
    title: "Pate mèo đặc biệt",
    rating: 280,
    description: "Pate mèo đặc biệt với công thức dành riêng cho mèo cưng.",
  },
  {
    img: "./assets/goidinhduong1.png",
    title: "Gói gà & rau củ",
    rating: 210,
    description: "Gói gà kết hợp rau củ tươi ngon, đầy đủ dinh dưỡng.",
  },
  {
    img: "./assets/goidinhduong2.png",
    title: "Gói cá ngừ & trứng",
    rating: 340,
    description: "Gói cá ngừ và trứng bổ sung protein và vitamin cần thiết.",
  },
  {
    img: "./assets/goidinhduong3.png",
    title: "Combo thập cẩm",
    rating: 410,
    description: "Combo thập cẩm với nhiều hương vị đa dạng, hấp dẫn.",
  },
  {
    img: "./assets/goithitbo.png",
    title: "Gói thịt bò nướng",
    rating: 389,
    description: "Gói thịt bò nướng thơm ngon, giàu đạm cho bữa ăn ngon miệng.",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id === null || id < 0 || id >= allProducts.length) {
    document.body.innerHTML = "<h2>Sản phẩm không tồn tại.</h2>";
  } else {
    const product = allProducts[id];

    document.getElementById("product-img").src = product.img;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-detail").textContent = product.description;

    document.getElementById(
      "product-rating"
    ).textContent = `(${product.rating})`;
    document.getElementById("product-description").textContent =
      product.description;
  }
});
