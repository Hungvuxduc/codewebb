function searchProducts() {
    const input = document
      .getElementById("search-input")
      .value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach((item) => {
      const productName = item
        .querySelector(".product-name")
        .textContent.toLowerCase();
      if (productName.includes(input)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }

  const images = [
    [
      "https://myshoes.vn/image/cache/catalog/2023/adidas/adi1/giay-adidas-grand-court-base-2-nam-trang-xanh-la-01-800x800.jpg",
      "https://myshoes.vn/image/cache/catalog/2024/adidas/ad4/giay-adidas-vl-court-3-0-den-nau-01-800x800.jpg",
      "https://myshoes.vn/image/cache/catalog/2024/adidas/ad3/giay-adidas-supernova-stride-nam-xam-xanh-01-800x800.jpg",
    ],
    [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a5b979a-e42b-4a80-b25a-3926e6294b23/AIR+MAX+90+GTX.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca341e3d-c51b-4e0e-b3b3-0e26d6049487/NIKE+AIR+PEGASUS+2005.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/297346e3-1a41-4319-b775-510473ab43e4/AIR+MAX+DN.png",
    ],
    [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b97ce999-afd0-4b62-8684-ce5c2a2fa8eb/WMNS+AIR+JORDAN+1+MID.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2af15054-2598-4443-9c05-81c0c23659e2/AIR+JORDAN+1+MID+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d54d997f-2ae0-44be-98f7-c179b60020a9/AIR+JORDAN+1+MID.png",
    ],
  ];

  const productDisplay = document.getElementById("productDisplay");
  let currentIndex = 0;

  function updateImages() {
    productDisplay.innerHTML = "";
    images[currentIndex].forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      productDisplay.appendChild(img);
    });
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(updateImages, 3000);
  updateImages();