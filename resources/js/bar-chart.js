import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart4').getContext('2d');

    const data = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
            type: 'bar',
            label: 'Values',
            data: [500, 500, 500, 500, 500, 500],
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }, {
            type: 'line',
            label: 'Average',
            data: [250, 200, 489, 100, 220, 0],
            borderColor: 'rgba(255, 99, 132, 0.5)',
            fill: false,
            tension: 0.4,
            pointStyle: 'circle',
            hoverRadius: 8,
            pointHoverRadius: 8
        }]
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: true // Hide x-axis grid lines
                }
            },
            y: {
                ticks: {
                    stepSize: 250, 
                    callback: function(value, index, values) {
                        return value; 
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Combo Chart'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        }
    };

    const myChart4 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});