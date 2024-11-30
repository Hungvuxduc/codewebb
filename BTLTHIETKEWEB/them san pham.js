function submitProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById("product-name").value.trim();
    const price = document.getElementById("product-price").value.trim();
    const description = document.getElementById("product-description").value.trim();
    const errorMessage = document.getElementById("error-message");
    
    if (!name || !price || !description) {
        errorMessage.textContent = "Vui lòng điền đầy đủ thông tin.";
        return;
    }

    // Xử lý để gửi dữ liệu sản phẩm (giả lập)
    alert("Sản phẩm mới đã được đăng: " + name);
    // Thêm mã gửi sản phẩm lên server ở đây
    
    // Reset form sau khi gửi
    document.getElementById("product-form").reset();
    errorMessage.textContent = "";
}

function formatText(command) {
    const textarea = document.getElementById("product-description");
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);
    
    if (selectedText) {
        let formattedText;
        
        if (command === 'bold') {
            formattedText = `<b>${selectedText}</b>`;
        } else if (command === 'italic') {
            formattedText = `<i>${selectedText}</i>`;
        } else if (command === 'fontSize') {
            formattedText = `<span style="font-size: 18px">${selectedText}</span>`;
        }

        // Thay thế phần văn bản đã chọn với định dạng mới
        textarea.setRangeText(formattedText);
    }
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById("image-preview");
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}