var exchangeCountrySelected;
var exchangeCurrencyCode;
var exchangeRate = null;
var baseInput = document.getElementById("base-input");
var exchangeInput = document.getElementById("exchange-input");

function hideModal() {
  document.querySelector(".modal-overlay").classList.add("hidden");
}

document.getElementById("continue-button").addEventListener("click", hideModal);

function getExchangeRate(exchangeCurrencyCode){
  $.ajax({
    method: "GET",
    url: `https://openexchangerates.org/api/latest.json?app_id=d18484cad8964d32b4f71a7d9bd4005f&symbols=${exchangeCurrencyCode}`,
    success: function (data) {
      exchangeAmount.classList.remove("badge-danger");
      exchangeAmount.classList.add("badge-primary");
      exchangeRate = data.rates[exchangeCurrencyCode];
      exchangeAmount.textContent = exchangeRate.toFixed(4);
    },
    error: function(error){
      exchangeAmount.classList.remove("badge-primary");
      exchangeAmount.classList.add("badge-danger");
      exchangeAmount.textContent = "Internet connection lost. Please try again.";
    }
  })
}
