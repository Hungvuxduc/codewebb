function approveOrder(button) {
    const row = button.closest('tr');
    const statusCell = row.querySelector('.status');
    if (statusCell.textContent === "Chưa duyệt") {
        statusCell.textContent = "Đơn hàng đã được phê duyệt";
        statusCell.classList.add("approved");
        button.disabled = true;
    }
}