// Function to toggle password visibility
function togglePasswordVisibility(button, inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
      button.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn';
    } else {
      input.type = "password";
      button.innerHTML = '<i class="fas fa-eye"></i> Hiện';
    }
  }

  // Function to handle the register button click
  function handleRegister(event) {
    event.preventDefault();
    // Kiểm tra xem checkbox có được chọn không
    const agreeCheckbox = document.getElementById("agreeTerms");
    if (!agreeCheckbox.checked) {
      alert("Bạn phải đồng ý với điều khoản để đăng ký.");
      return;
    }
    // Hiển thị thông báo đăng ký thành công ở góc phải trên cùng
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Hiển thị thông báo
    // Sau 3 giây, ẩn thông báo và chuyển hướng sang trang login
    setTimeout(() => {
      successMessage.style.display = "none";
      window.location.href = "dangnhapnew.html"; // Điều hướng sang trang đăng nhập
    }, 3000);
  }