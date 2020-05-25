var baseInput = document.getElementById("base-input");
var exchangeInput = document.getElementById("exchange-input");
var resetButton = document.getElementById("reset-button");
var exchangeRate;

function baseToExchange(){
  var computedExchangeAmount = baseInput.value * exchangeRate;
  exchangeInput.value = computedExchangeAmount.toFixed(2);
}

function exchangeToBase(){
  var computedBaseAmount = exchangeInput.value / exchangeRate;
  baseInput.value = computedBaseAmount.toFixed(2);
}

function resetForm(){
  exchangeCurrency.textContent = "Exchange Currency";
  exchangeAmount.textContent = "Amount";
  for (var i = 0; i < option2.length; i++) {
    option2[i].removeAttribute("selected");
  }
}

baseInput.addEventListener("input", baseToExchange);
exchangeInput.addEventListener("input", exchangeToBase)
resetButton.addEventListener("click", resetForm);
