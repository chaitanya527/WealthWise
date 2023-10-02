function calculateRetirement() {
  const currentSavings = parseFloat(document.getElementById("currentSavings").value);
  const annualContribution = parseFloat(document.getElementById("annualContribution").value);
  const yearsToRetire = parseFloat(document.getElementById("yearsToRetire").value);
  const annualReturn = parseFloat(document.getElementById("annualReturn").value) / 100;
  
  let finalSavings = currentSavings;

  for (let i = 0; i < yearsToRetire; i++) {
    finalSavings += annualContribution;
    finalSavings *= (1 + annualReturn);
  }

  const resultLabel = document.getElementById("result");
  resultLabel.textContent = `Final Retirement Savings: ₹${finalSavings.toFixed(2)}`;
  
  const chart = new ApexCharts(document.querySelector("#chart"), {
    series: [currentSavings, finalSavings - currentSavings],
    labels: ["Current Savings", "Interest Earned"],
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
