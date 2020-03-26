

$.ajax({
  method: "GET",
  url: "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR",
  success: function (data) {
    console.log(data);
  }
})

$.ajax({
  method: "GET",
  url: "https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=96ef9ace0176e6e5def3",
  success: function (data) {
    console.log(data);
  }
})
