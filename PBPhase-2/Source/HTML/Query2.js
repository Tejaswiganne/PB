google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['FriendsCount && Followers Count', 'Number Of Users'],
        ['greater',     237800],
        ['lesser',      217304],
        ['equal',  2703]
    ]);

    var options = {
        title: 'Friends Count && Followers Count vs Number Of Users'};

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
