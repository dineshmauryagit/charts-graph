

import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart5').getContext('2d');

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
                pointStyle: false,
                tension: 0.4,
            },
            {
                label: 'Line 2',
                data: [480, 490, 500, 300, 200, 500, 550],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1,
                fill: 'start',
                tension: 0.4,
                borderColor: "#79D2DE",
                backgroundColor: '#79D2DE',
                hidden: false, 
                pointStyle: false

            }
        ]
    };

    const options = {};

    const myChart5 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
    document.getElementById('line2-part1').addEventListener('click', function() {
        const line1 = myChart5.data.datasets[0];
        line1.hidden = !line1.hidden;
        myChart5.update();
    });

    document.getElementById('line2-part2').addEventListener('click', function() {
        const line2 = myChart5.data.datasets[1];
        line2.hidden = !line2.hidden;
        myChart5.update();
    });
});
