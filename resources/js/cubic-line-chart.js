import Chart from "chart.js/auto";

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart3").getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(236, 102, 102, 0.5)");
    gradient.addColorStop(1, "rgba(236, 102, 102, 0)"); 
    const data = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
            {
                label: "Values",
                data: [250, 200, 150, 200, 180, 130, 0],
                borderColor: "#EC6666",
                tension: 0.4,
                backgroundColor: gradient,
                fill: "start",
                tension: 0.5,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 250,
                    callback: function(value, index, values) {
                        if (value === 0 || value === 250 || value === 500) {
                            return `${value} m`; 
                        } else {
                            return value; 
                        }
                    }
                }
            
            },
        },
    };

    const myChart3 = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
    });
});
