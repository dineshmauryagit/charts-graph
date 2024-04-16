

import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart2').getContext('2d');

    const value = 76;
    const total = 100;
    const remaining = total - value;

    const data = {
        labels: ['Used', 'Remaining'],
        datasets: [{
            data: [value, remaining],
            backgroundColor: [
                '#147AD6',
                'rgba(192, 192, 192, 192)'
            ],
            borderJoinStyle:'rounded'
        }]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: `Used ${value}% of ${total}%`,
                font: {
                    size: 18
                }
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label;
                        const value = context.raw;
                        return `${label}: ${value}%`;
                    }
                }
            },
            
        }
    };

    const myChart2 = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    const textX = myChart2.width / 2 + myChart2.left;
    const textY = myChart2.height / 2 + myChart2.top;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = 'black'; 
    ctx.fillText(`${value}%`, textX, textY);
});
