var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "Aug 2019",
      "Sep 2019",
      "Oct 2019",
      "Nov 2019",
      "Dec 2019",
      "Jan 2020",
      "Feb 2020",
      "Mar 2020",
      "Apr 2020"
    ],
    datasets: [
      {
        label: "",
        backgroundColor: "transparent",
        borderColor: "#e8590c",
        data: [0, 10, 5, 2, 20, 30, 45, 20, 30, 40]
      }
    ]
  },

  // Configuration options go here
  options: {
    tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function(tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index];
        },
        title: function() {
          return;
        }
      },
      backgroundColor: "#E8590C",
      bodyFontSize: 16,
      bodyAlign: "center",
      bodySpacing: 100
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            borderDash: [10, 4]
          }
        }
      ]
    }
  }
});
