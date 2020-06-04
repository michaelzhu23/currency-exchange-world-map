google.charts.load('current', {
  'packages': ['geochart'],
  'mapsApiKey': 'AIzaSyBITAwbhKlYsNko116JfFWkl_zYtaKzhY0'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Currency'],
    ['United States', 1],
    ['Japan', 2],
    ['United Kingdom', 2],
    ['Australia', 2],
    ['Canada', 2],
    ['China', 2],
    ['Russia', 2],
    ['India', 2],
    ['Brazil', 2],
    ['Spain', 2],
    ['France', 2],
    ['Italy', 2],
    ['Germany', 2],
    ['Greece', 2],
    ['Sweden', 2],
    ['Philippines', 2],
    ['Mexico', 2]
  ]);

  var options = {
    colorAxis: { colors: ['eeef20', '#81c14b'] },
    backgroundColor: '#81d4fa'
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);

  $(window).resize(function () {
    chart.draw(data, options);
  })

  google.visualization.events.addListener(chart, 'select', handleSelect);
  function handleSelect() {
    var selection = chart.getSelection();
    if (selection.length) {
      exchangeCountrySelected = data.getValue(selection[0].row, 0);
      baseInput.value = "";
      exchangeInput.value = "";
      var option2 = document.querySelectorAll(".option2");
      switch (exchangeCountrySelected) {
        case "Australia":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "AUD"
          var aus2 = document.getElementById("option2-aus");
          aus2.setAttribute("selected", "");
          exchangeCurrency.textContent = aus2.textContent;
          break;
        case "Brazil":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "BRL"
          var bra2 = document.getElementById("option2-bra");
          bra2.setAttribute("selected", "");
          exchangeCurrency.textContent = bra2.textContent;
          break;
        case "Canada":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "CAD"
          var can2 = document.getElementById("option2-can");
          can2.setAttribute("selected", "");
          exchangeCurrency.textContent = can2.textContent;
          break;
        case "China":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "CNY";
          var chn2 = document.getElementById("option2-chn");
          chn2.setAttribute("selected", "");
          exchangeCurrency.textContent = chn2.textContent;
          break;
        case "France":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          var fra2 = document.getElementById("option2-fra");
          fra2.setAttribute("selected", "");
          exchangeCurrency.textContent = fra2.textContent;
          break;
        case "Germany":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          var deu2 = document.getElementById("option2-deu");
          deu2.setAttribute("selected", "");
          exchangeCurrency.textContent = deu2.textContent;
          break;
        case "Greece":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          var grc2 = document.getElementById("option2-grc");
          grc2.setAttribute("selected", "");
          exchangeCurrency.textContent = grc2.textContent;
          break;
        case "India":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "INR"
          var ind2 = document.getElementById("option2-ind");
          ind2.setAttribute("selected", "");
          exchangeCurrency.textContent = ind2.textContent;
          break;
        case "Italy":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          var ita2 = document.getElementById("option2-ita");
          ita2.setAttribute("selected", "");
          exchangeCurrency.textContent = ita2.textContent;
          break;
        case "Japan":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "JPY"
          var jpn2 = document.getElementById("option2-jpn");
          jpn2.setAttribute("selected", "");
          exchangeCurrency.textContent = jpn2.textContent;
          break;
        case "Mexico":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "MXN"
          var mex2 = document.getElementById("option2-mex");
          mex2.setAttribute("selected", "");
          exchangeCurrency.textContent = mex2.textContent;
          break;
        case "Philippines":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "PHP"
          var phl2 = document.getElementById("option2-phl");
          phl2.setAttribute("selected", "");
          exchangeCurrency.textContent = phl2.textContent;
          break;
        case "Russia":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "RUB"
          var rus2 = document.getElementById("option2-rus");
          rus2.setAttribute("selected", "");
          exchangeCurrency.textContent = rus2.textContent;
          break;
        case "Spain":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "EUR"
          var esp2 = document.getElementById("option2-esp");
          esp2.setAttribute("selected", "");
          exchangeCurrency.textContent = esp2.textContent;
          break;
        case "Sweden":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "SEK"
          var swe2 = document.getElementById("option2-swe");
          swe2.setAttribute("selected", "");
          exchangeCurrency.textContent = swe2.textContent;
          break;
        case "United Kingdom":
          for (var i = 0; i < option2.length; i++) {
            option2[i].removeAttribute("selected");
          }
          exchangeCurrencyCode = "GBP"
          var gbr2 = document.getElementById("option2-gbr");
          gbr2.setAttribute("selected", "");
          exchangeCurrency.textContent = gbr2.textContent;
          break;
        }
      if (exchangeCountrySelected !== "United States"){
        getExchangeRate(exchangeCurrencyCode);
      }
      }
    }
  }
