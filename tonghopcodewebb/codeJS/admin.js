const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Lượt truy cập',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(255, 0, 0, 1)', // Đường màu đỏ
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                fill: true,
                tension: 0.4, // Làm đường mượt hơn
            },
            {
                label: 'Thời gian truy cập',
                data: [12, 14, 16, 13, 11, 15, 17],
                borderColor: 'rgba(0, 0, 255, 1)', // Đường màu xanh
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                fill: true,
                tension: 0.4, // Làm đường mượt hơn
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});