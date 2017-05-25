"use strict";

var bravo = new Framework7({
    pushState: true,
    swipePanel: 'right'
});

bravo.loginScreen(document.getElementById('login-screen'), false);

var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Alimentação", "Malhação", "Aeróbica"],
        datasets: [{
            data: [80, 94, 77],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }]
    },
    options: {
    	legend: {
    		display: true,
    		position: 'bottom',
    		fullWidth: true,
    		fontSize: 26,
    		boxWidth: 20
    	}
    }
});