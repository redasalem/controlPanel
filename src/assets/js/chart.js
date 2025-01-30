import "../../../node_modules/chart.js/dist/Chart";

(function(){

    var ctx = document.getElementById('example-chart').getContext('2d');
    var chart = new Chart(ctx, {    
        type: 'line',
		// datasets  و ليس data 
        data: { 
            labels: ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'],
          //  من المفترض أن تكون هناdatasets
            datasets: [{
                label: 'مبيعات الشهر ',
                backgroundColor: 'transparent',
                borderColor: 'blue',
                data: [423, 534, 1244, 122, 644, 322,1240,1603,234,442,543,123],
                lineTension:0.2
            }]
        },

        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    position: "top"
                }]
            }
        }
    });
    const navigation=document.querySelector('.c-table_navigation');
    const roundomArray=(mylength,max)=>Array.from({length:mylength},()=>Math.round(Math.random()*max));
    navigation.addEventListener('click',()=>{
        chart.data.datasets[0].data=roundomArray(12,1200);
        chart.update();
    })
})();