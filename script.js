function calculateInterest() {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const period = Number(document.getElementById("period-value").value);

    const interest = (principal * rate * period) / 100;
    const finalAmount = principal + interest;

    document.getElementById("amount").textContent = `Principal Amount: ₹${principal.toFixed(2)}`;
    document.getElementById("interest").textContent = `Interest: ₹${interest.toFixed(2)}`;
    document.getElementById("finalAmount").textContent = `Final Amount: ₹${finalAmount.toFixed(2)}`;

    renderChart(principal, interest);
}

function renderChart(principal, interest) {
    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            backgroundColor: null
        },
        title: {
            text: 'Simple Interest Breakdown',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        plotOptions: {
            pie: {
                innerSize: '50%',
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    style: {
                        color: 'white',
                        textOutline: 'none'
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Amount',
            data: [
                { name: 'Principal', y: principal },
                { name: 'Interest', y: interest }
            ]
        }]
    });
}
