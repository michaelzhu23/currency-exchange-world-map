var baseInput = document.getElementById("base-input");
var exchangeInput = document.getElementById("exchange-input");
var exchangeRate;

function baseToExchange(){
  var computedExchangeAmount = baseInput.value * exchangeRate;
  exchangeInput.value = computedExchangeAmount.toFixed(2);
}

function exchangeToBase(){
  var computedBaseAmount = exchangeInput.value / exchangeRate;
  baseInput.value = computedBaseAmount.toFixed(2);
}

baseInput.addEventListener("input", baseToExchange);
exchangeInput.addEventListener("input", exchangeToBase)
