function calculateInvestment() {
  const currentSavings = parseFloat(document.getElementById("currentSavings").value);
  const annualReturn = parseFloat(document.getElementById("annualReturn").value) / 100;
  const yearsToInvest = parseFloat(document.getElementById("yearsToInvest").value);
  
  let finalSavings = currentSavings;

  for (let i = 0; i < yearsToInvest; i++) {
    finalSavings *= (1 + annualReturn);
  }

  const resultLabel = document.getElementById("result");
  resultLabel.textContent = `Final Investment Value: ₹${finalSavings.toFixed(2)}`;
  
  const chart = new ApexCharts(document.querySelector("#chart"), {
    series: [currentSavings, finalSavings - currentSavings],
    labels: ["Initial Investment", "Interest Earned"],
    colors: ["#ffc107", "#28a745"],
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
