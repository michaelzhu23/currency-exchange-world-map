var jpn2 = document.getElementById("option2-jpn");
var gbr2 = document.getElementById("option2-gbr");
var aus2 = document.getElementById("option2-aus");
var can2 = document.getElementById("option2-can");
var chn2 = document.getElementById("option2-chn");
var rus2 = document.getElementById("option2-rus");
var ind2 = document.getElementById("option2-ind");
var bra2 = document.getElementById("option2-bra");
var esp2 = document.getElementById("option2-esp");
var fra2 = document.getElementById("option2-fra");
var ita2 = document.getElementById("option2-ita");
var deu2 = document.getElementById("option2-deu");
var grc2 = document.getElementById("option2-grc");
var fin2 = document.getElementById("option2-fin");
var irl2 = document.getElementById("option2-irl");
var option2 = document.querySelectorAll(".option2");
var exchangeCurrency = document.getElementById("exchange-currency");
var exchangeAmount = document.getElementById("exchange-amount");
var exchangeCountrySelected;
var exchangeCurrencyCode;

function getExchangeRate(exchangeCurrencyCode){
  $.ajax({
    method: "GET",
    url: `https://openexchangerates.org/api/latest.json?app_id=d18484cad8964d32b4f71a7d9bd4005f&symbols=${exchangeCurrencyCode}`,
    success: function (data) {
      console.log(data);
      exchangeRate = data.rates[exchangeCurrencyCode];
      exchangeAmount.textContent = exchangeRate.toFixed(4);
    },
    error: function(error){
      console.log(error);
    }
  })
}
