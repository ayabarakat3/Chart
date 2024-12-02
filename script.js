const ctx = document.getElementById('barChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Maroon", "Olive", "Navy", 'Silver'],
        datasets: [
            {
                label: 'Votes',
                data: [373, 333, 353, 363],
                backgroundColor: ['maroon', 'olive', 'navy', 'silver'],
                borderColor: ['black'],
                borderWidth: 1
            }
        ]
    }
});