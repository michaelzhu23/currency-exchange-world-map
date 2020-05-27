var exchangeCountrySelected;
var exchangeCurrencyCode;
var exchangeRate = null;

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
