const ctx = document.getElementById('barChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Maroon", "Olive", "Navy", 'Silver', 'Blue','Orange'],
        datasets: [
            {
                label: 'Votes',
                data: [373, 333, 353, 363, 297, 211],
                backgroundColor: ['maroon', 'olive', 'navy', 'silver', 'blue','orange'],
                borderColor: ['black'],
                borderWidth: 1
            }
        ]
    }
});