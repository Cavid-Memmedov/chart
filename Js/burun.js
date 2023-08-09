var days = [1, 2, 3, 4, 5, 6, 7];
var plannedWork = [40, 30, 25, 20, 15, 10, 5];
var completedWork = [40, 35, 30, 20, 15, 10, 5];

var remainingWork = plannedWork.map((planned, index) => planned - completedWork[index]);

var ctx = document.getElementById('burunChart').getContext('2d');
var burndownChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'Remaining Work',
            data: remainingWork,
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderColor: 'rgba(0, 123, 255, 0.7)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 123, 255, 1)',
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Sprint Burndown Chart'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Days'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Remaining Work'
                }
            }]
        }
    }
});
