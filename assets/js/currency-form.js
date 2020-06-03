var exchangeCurrency = document.getElementById("exchange-currency");
var exchangeAmount = document.getElementById("exchange-amount");
var baseInput = document.getElementById("base-input");
var exchangeInput = document.getElementById("exchange-input");
var resetButton = document.getElementById("reset-button");
var exchangeSelectForm = document.getElementById("exchange-select-form");

function baseToExchange(){
  var computedExchangeAmount = baseInput.value * exchangeRate;
  exchangeInput.value = computedExchangeAmount.toFixed(2);
}

function exchangeToBase(){
  var computedBaseAmount = exchangeInput.value / exchangeRate;
  baseInput.value = computedBaseAmount.toFixed(2);
}

function handleOptionSelect(event){
  exchangeCurrencyCode = event.target.value;
  getExchangeRate(exchangeCurrencyCode);
  var selectedOption = document.querySelector(`[value=${event.target.value}]`)
  exchangeCurrency.textContent = selectedOption.textContent;
  baseInput.value = "";
  exchangeInput.value = "";
}

function resetForm(){
  exchangeCurrency.textContent = "Exchange Currency";
  exchangeAmount.textContent = "Amount";
  exchangeRate = null;
  var option2 = document.querySelectorAll(".option2");
  for (var i = 0; i < option2.length; i++) {
    option2[i].removeAttribute("selected");
  }
}

baseInput.addEventListener("input", baseToExchange);
exchangeInput.addEventListener("input", exchangeToBase)
exchangeSelectForm.addEventListener("change", handleOptionSelect);
resetButton.addEventListener("click", resetForm);
