var data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [{
      data: [300, 50, 100, 150],
      backgroundColor: ['red', 'blue', 'yellow', 'green'],
      borderColor: 'white',
      borderWidth: 2
  }]
};

var ctx = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
          display: true,
          text: 'Donut Chart Example'
      },
      legend: {
          display: true,
          position: 'bottom'
      }
  }
});