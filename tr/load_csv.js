google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function initialize() {
  var opts = {sendMethod: 'auto'};
  // Replace the data source URL on next line with your data source URL.
  var query = new google.visualization.Query('https://raw.githubusercontent.com/denizalti/covid-19-data-turkey/master/country-data.csv', opts);

  // Optional request to return only column C and the sum of column B, grouped by C members.
  // query.setQuery('select C, sum(B) group by C');

  // Send the query with a callback function.
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {

  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, {width: 400, height: 240, is3D: true});
}
console.log("Calling initialize;");
initialize();
