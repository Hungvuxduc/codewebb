let map; // Biến để lưu bản đồ

function initMap() {
  const mapOptions = {
    center: { lat: 21.029, lng: 105.8411 }, // Tọa độ của Trường Đại học Đại Nam
    zoom: 15, // Cấp độ thu phóng
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Thêm marker cho địa chỉ
  const marker = new google.maps.Marker({
    position: { lat: 21.029, lng: 105.8411 },
    map: map,
    title: "Địa chỉ đơn hàng: Trường Đại học Đại Nam",
  });
}

function showMap() {
  const mapElement = document.getElementById("map");
  mapElement.style.display = "block"; // Hiển thị bản đồ
  initMap(); // Khởi tạo bản đồ
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("orderStatusForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const orderNumber = document.getElementById("orderNumber").value;
      let statusMessage;

      // Kiểm tra mã đơn hàng hợp lệ
      if (orderNumber === "123456" || orderNumber === "234567" || orderNumber === "345678") {
        statusMessage = "Đơn hàng đang giao tới địa chỉ: Trường Đại học Đại Nam!";
        showMap(); // Hiển thị bản đồ
      } else {
        statusMessage = "Mã đơn hàng không hợp lệ hoặc không tồn tại!";
        document.getElementById("map").style.display = "none"; // Ẩn bản đồ nếu không hợp lệ
      }

      document.getElementById("statusResult").textContent = statusMessage;
    });
});
