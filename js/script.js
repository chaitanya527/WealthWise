function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const years = parseFloat(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  
  const compoundInterest = principal * Math.pow(1 + rate, years);
  const returnAmount = compoundInterest - principal;
  
  const resultLabel = document.getElementById("result");
  resultLabel.textContent = `Final Amount: ₹${compoundInterest.toFixed(2)}`;
  
  const chart = new ApexCharts(document.querySelector("#chart"), {
    series: [principal, returnAmount],
    labels: ["Initial Investment", "Return Amount"],
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
