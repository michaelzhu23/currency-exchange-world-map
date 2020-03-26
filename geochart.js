google.charts.load('current', {
  'packages': ['geochart'],
  'mapsApiKey': 'AIzaSyBITAwbhKlYsNko116JfFWkl_zYtaKzhY0'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Currency'],
    ['United States', 1],
    ['Japan', 1],
    ['United Kingdom', 1],
    ['Australia', 1],
    ['Canada', 1],
    ['China', 1],
    ['Russia', 1],
    ['India', 1],
    ['Brazil', 1],
    ['Spain', 1],
    ['France', 1],
    ['Italy', 1],
    ['Germany', 1],
    ['Greece', 1],
    ['Finland', 1],
    ['Ireland', 1]
  ]);

  var options = {
    backgroundColor: '#81d4fa'
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', handleSelect);
  function handleSelect() {
    var selection = chart.getSelection();
    if (selection.length) {
      firstCountryClicked = data.getValue(selection[0].row, 0);
      console.log(data.getValue(selection[0].row, 0));
    }
  }
}
