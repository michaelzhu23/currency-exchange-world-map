var usa = document.getElementById("option1-usa");
var usaText = usa.textContent;
var jpn = document.getElementById("option1-jpn");
var jpnText = jpn.textContent;
var gbr = document.getElementById("option1-gbr");
var gbrText = gbr.textContent;
var aus = document.getElementById("option1-aus");
var ausText = aus.textContent;
var can = document.getElementById("option1-can");
var canText = can.textContent;
var chn = document.getElementById("option1-chn");
var chnText = chn.textContent;
var rus = document.getElementById("option1-rus");
var rusText = rus.textContent;
var ind = document.getElementById("option1-ind");
var indText = ind.textContent;
var bra = document.getElementById("option1-bra");
var braText = bra.textContent;
var esp = document.getElementById("option1-esp");
var espText = esp.textContent;
var fra = document.getElementById("option1-fra");
var fraText = fra.textContent;
var ita = document.getElementById("option1-ita");
var itaText = ita.textContent;
var deu = document.getElementById("option1-deu");
var deuText = deu.textContent;
var grc = document.getElementById("option1-grc");
var grcText = grc.textContent;
var fin = document.getElementById("option1-fin");
var finText = fin.textContent;
var irl = document.getElementById("option1-irl");
var irlText = irl.textContent;
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
      exchangeAmount.textContent = Object.values(data)[0];
    },
    error: function(error){
      console.log(error);
    }
  })
}
