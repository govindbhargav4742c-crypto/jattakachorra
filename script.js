document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('revenueChart').getContext('2d');

    // Gradient background for the chart
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Revenue ($)',
                data: [1200, 1900, 1700, 2500, 2100, 3200, 2800],
                borderColor: '#6366f1',
                borderWidth: 3,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4 // Makes the line curvy/modern
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { display: false } },
                x: { grid: { display: false } }
            }
        }
    });
});// Add this to your <script> section
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active from all
        document.querySelectorAll('.sidebar li').forEach(li => {
            li.classList.remove('active');
        });
        // Add active to clicked one
        this.classList.add('active');
    });
});
