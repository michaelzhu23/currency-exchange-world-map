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
    colorAxis: { colors: ['#81c14b', '#81c14b'] },
    backgroundColor: '#81d4fa'
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', handleSelect);
  function handleSelect() {
    var selection = chart.getSelection();
    if (selection.length) {
        exchangeCountrySelected = data.getValue(selection[0].row, 0);
        console.log(data.getValue(selection[0].row, 0));
        if (exchangeCountrySelected === "China") {
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "CNY";
          chn2.setAttribute("selected", "");
          exchangeCurrency.textContent = chn2.textContent;
        } else if (exchangeCountrySelected === "Canada") {
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "CAD"
          can2.setAttribute("selected", "");
          exchangeCurrency.textContent = can2.textContent;
        } else if (exchangeCountrySelected === "Australia") {
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "AUD"
          aus2.setAttribute("selected", "");
          exchangeCurrency.textContent = aus2.textContent;
        } else if (exchangeCountrySelected === "France") {
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          fra2.setAttribute("selected", "");
          exchangeCurrency.textContent = fra2.textContent;
        }
        getExchangeRate(exchangeCurrencyCode);
      }
    }
  }
