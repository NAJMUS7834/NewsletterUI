
function createPieChart(id, data, labels, colors) {
  const ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

createPieChart('pieChart1', [60, 30, 10], ['Completed', 'In Progress', 'Blocked'], ['#4caf50', '#ff9800', '#f44336']);
createPieChart('pieChart2', [50, 35, 15], ['Closed', 'Open', 'On Hold'], ['#2196f3', '#ffeb3b', '#9e9e9e']);
createPieChart('pieChart3', [70, 20, 10], ['Achieved', 'Ongoing', 'Pending'], ['#8bc34a', '#03a9f4', '#e91e63']);
