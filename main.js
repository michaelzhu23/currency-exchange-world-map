var usa = document.getElementById("option1-usa");
var jpn = document.getElementById("option1-jpn");
var gbr = document.getElementById("option1-gbr");
var aus = document.getElementById("option1-aus");
var can = document.getElementById("option1-can");
var chn = document.getElementById("option1-chn");
var rus = document.getElementById("option1-rus");
var ind = document.getElementById("option1-ind");
var bra = document.getElementById("option1-bra");
var esp = document.getElementById("option1-esp");
var fra = document.getElementById("option1-fra");
var ita = document.getElementById("option1-ita");
var deu = document.getElementById("option1-deu");
var grc = document.getElementById("option1-grc");
var fin = document.getElementById("option1-fin");
var irl = document.getElementById("option1-irl");

var usa2 = document.getElementById("option2-usa");
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
var option1 = document.querySelectorAll(".option1");
var option2 = document.querySelectorAll(".option2");
var baseCurrency = document.getElementById("base-currency");
var exchangeCurrency = document.getElementById("exchange-currency");
var exchangeAmount = document.getElementById("exchange-amount");
var firstCountryClicked;
var firstCountryCurrency;
var secondCountryClicked;
var secondCountryCurrency;

function getExchangeRate(firstCountryCurrency, secondCountryCurrency){
  $.ajax({
    method: "GET",
    url: `https://free.currconv.com/api/v7/convert?q=${firstCountryCurrency}_${secondCountryCurrency}&compact=ultra&apiKey=96ef9ace0176e6e5def3`,
    success: function (data) {
      console.log(data);
      exchangeRate = Object.values(data)[0];
      exchangeAmount.textContent = exchangeRate;
    },
    error: function(error){
      console.log(error);
    }
  })
}
