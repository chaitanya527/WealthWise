function calculateNetWorth() {
  var assets = parseFloat(document.getElementById("assets").value);
  var liabilities = parseFloat(document.getElementById("liabilities").value);
  var networth = assets - liabilities;
  document.getElementById("networthResult").textContent = "Net Worth: RS" + networth.toFixed(2);
  
  const chart = new ApexCharts(document.querySelector("#networthChart"), {
    series: [assets, liabilities],
    labels: ["Assets", "Liabilities"],
    colors: ["#28a745", "#dc3545"],
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "2%",
        },
      },
    },
  });

  chart.render();
}
