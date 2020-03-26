google.charts.load('current', {
  'packages': ['geochart'],
  'mapsApiKey': 'AIzaSyBITAwbhKlYsNko116JfFWkl_zYtaKzhY0'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['United States', 700],
    ['Japan', 700],
    ['United Kingdom', 700],
    ['Australia', 700],
    ['Canada', 700],
    ['China', 700],
    ['Russia', 700],
    ['India', 700],
    ['Brazil', 700],
    ['Spain', 700],
    ['France', 700],
    ['Italy', 700],
    ['Germany', 700],
    ['Greece', 700],
    ['Finland', 700],
    ['Ireland', 700]
  ]);

  var options = {
    backgroundColor: '#81d4fa'
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
