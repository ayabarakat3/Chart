const ctx = document.getElementById('barChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: 'Votes',
                data: [373, 333, 353, 363],
                backgroundColor: ['red', 'blue', 'yellow', 'orange'],
                borderColor: ['black'],
                borderWidth: 1
            }
        ]
    }
});