const ctx = document.getElementById('barChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["BabyPink", "Pink", "DarkPink", 'Red'],
        datasets: [
            {
                label: 'Votes',
                data: [373, 333, 353, 363],
                backgroundColor: ['babyPink', 'pink', 'darkPink', 'red'],
                borderColor: ['black'],
                borderWidth: 1
            }
        ]
    }
});