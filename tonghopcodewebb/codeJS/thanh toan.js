function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Sao Chép Thành Công: 02072002888");
}
function cancelPayment() {
    window.location.href = "file:///Users/chuong/Downloads/GiaoDien1.html"; 
}
setTimeout(function() {
    window.location.href = "file:///Users/chuong/Downloads/GiaoDien1.html";
}, 200000);