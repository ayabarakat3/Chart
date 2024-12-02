const ctx = document.getElementById('barChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Maroon", "Olive", "Navy", 'Silver', 'Blue'],
        datasets: [
            {
                label: 'Votes',
                data: [373, 333, 353, 363, 297],
                backgroundColor: ['maroon', 'olive', 'navy', 'silver', 'blue'],
                borderColor: ['black'],
                borderWidth: 1
            }
        ]
    }
});