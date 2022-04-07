const xValues = ["carbs", "protein", "fat", "vitamin A", "fibre"];
const yValues = [39, 33, 28, 34.9,40];
const barColors = [
  "#286c94",
  "#225e7c",
  "#3a92c1",
  "#d9e4e9",
  "#9ccce3"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Moin Moin Elewe Nutrition Information",
    }
  }
});