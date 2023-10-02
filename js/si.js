function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const years = parseFloat(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  
  const simpleInterest = (principal * years * rate).toFixed(2);
  const finalAmount = (principal + parseFloat(simpleInterest)).toFixed(2);
  
  const resultLabel = document.getElementById("result");
  resultLabel.textContent = `Final Amount: ₹${finalAmount}`;
  
  const chart = new ApexCharts(document.querySelector("#chart"), {
    series: [principal, parseFloat(simpleInterest)],
    labels: ["Principal Amount", "Simple Interest"],
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