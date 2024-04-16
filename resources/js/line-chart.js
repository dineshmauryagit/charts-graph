

import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart1').getContext('2d');

    const data = {
        labels: ['15 April', '16 April', '17 April', '18 April', '19 April', '20 April', '21 April'],
        datasets: [
            {
                label: 'Line 1',
                data: [250, 270, 280, 100, 80, 40, 250],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: 'start',
                hidden: false, 
                borderColor: "#147AD6",
                backgroundColor: '#147AD6',
                pointStyle: false
            },
            {
                label: 'Line 2',
                data: [480, 490, 500, 300, 200, 500, 550],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1,
                fill: 'start',

                borderColor: "#EC6666",
                backgroundColor: '#EC6666',
                hidden: false, 
                pointStyle: false

            }
        ]
    };

    const options = {};

    const myChart1 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    document.getElementById('toggleLine1').addEventListener('click', function() {
        const line1 = myChart1.data.datasets[0];
        line1.hidden = !line1.hidden;
        myChart1.update();
    });

    document.getElementById('toggleLine2').addEventListener('click', function() {
        const line2 = myChart1.data.datasets[1];
        line2.hidden = !line2.hidden;
        myChart1.update();
    });
});
