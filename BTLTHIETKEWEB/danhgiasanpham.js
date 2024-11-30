const stars = document.querySelectorAll(".stars");
      let ratingValue = 0;

      stars.forEach((star) => {
        star.addEventListener("click", () => {
          ratingValue = star.getAttribute("data-value");
          stars.forEach((s) => {
            s.style.color = "#ffb400"; // Đổi màu các sao đã chọn
          });
          stars.forEach((s) => {
            if (s.getAttribute("data-value") > ratingValue) {
              s.style.color = "#ccc"; // Đổi màu các sao chưa chọn
            }
          });
        });
      });

      document.getElementById("submitReview").addEventListener("click", () => {
        const comment = document.getElementById("comment").value;
        const feedbackDiv = document.getElementById("feedback");

        if (ratingValue > 0 && comment.trim() !== "") {
          feedbackDiv.textContent = `Cảm ơn bạn đã đánh giá ${ratingValue} sao! Đánh giá của bạn: "${comment}"`;
          feedbackDiv.style.color = "#28a745"; // Màu xanh cho phản hồi thành công
          document.getElementById("comment").value = ""; // Xóa nội dung ô nhập
          ratingValue = 0; // Đặt lại giá trị đánh giá
          stars.forEach((s) => (s.style.color = "#ccc")); // Đặt lại màu sao
        } else {
          feedbackDiv.textContent = "Vui lòng chọn xếp hạng và nhập đánh giá!";
          feedbackDiv.style.color = "#dc3545"; // Màu đỏ cho thông báo lỗi
        }
      });