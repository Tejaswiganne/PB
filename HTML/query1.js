google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['bg', '557125.4286',],
        ['fa', 514026.6667],
        ['sr', 455411],
        ['ru', 389256.1276],
        ['uk', 215039.4545],
        ['ar', 126023.0588],
        ['el', 114934.9427],
        ['in', 101920.7893],
        ['ja', 87049.95322],
        ['de', 73571.00588],
    ]);

    var options = {
        title: 'Specific language status count',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'No of tweets from different languages',
            minValue: 0
        },
        vAxis: {
            title: 'Language'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
