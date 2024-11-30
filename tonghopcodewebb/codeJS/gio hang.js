const cartItems = [];
      let totalAmount = 0;

      function addToCart(name, price) {
        cartItems.push({ name, price });
        updateCart();
      }

      function updateCart() {
        const cartItemsContainer = document.getElementById("cartItems");
        cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ

        cartItems.forEach((item) => {
          const div = document.createElement("div");
          div.className = "cart-item";
          div.innerHTML = `
                    <span>${item.name}</span>
                    <span>Giá: ${item.price.toLocaleString()} VNĐ</span>
                    <a href="#" class="remove" onclick="removeFromCart('${
                      item.name
                    }')">Xóa</a>
                `;
          cartItemsContainer.appendChild(div);
        });

        totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
        document.getElementById(
          "total"
        ).innerHTML = `Tổng cộng: ${totalAmount.toLocaleString()} VNĐ`;
      }

      function removeFromCart(name) {
        const index = cartItems.findIndex((item) => item.name === name);
        if (index > -1) {
          cartItems.splice(index, 1);
          updateCart();
        }
      }

      function goHome() {
        window.location.href = "/giaodiennew.html"; // Đường dẫn trang chủ của bạn
      }

      function trackOrder() {
        window.location.href = "/theodoidonhang.html"; // Đường dẫn đến trang theo dõi đơn hàng
      }

      function confirmOrder() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        if (name && email && phone) {
          // Hiển thị thông tin xác nhận đơn hàng
          document.getElementById("confirmName").textContent = name;
          document.getElementById("confirmEmail").textContent = email;
          document.getElementById("confirmPhone").textContent = phone;
          var confirmation = document.getElementById("orderConfirmation");
          confirmation.classList.add("show");
          setTimeout(function () {
            confirmation.classList.remove("show");
            window.location.href = "Thanhtoan.html";
          }, 1000);
        } else {
          alert("Vui lòng nhập đầy đủ thông tin!");
        }
      }

      // Thêm sản phẩm ví dụ vào giỏ hàng
      addToCart("Sản phẩm 1", 100000);
      addToCart("Sản phẩm 2", 200000);