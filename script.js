console.log("eu amo a jeni")

var countDownDate = new Date("Mar 31, 2023 16:08:30").getTime()

var x = setInterval(function () {
  var now = new Date().getTime()
  var distance = countDownDate - now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("demo").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds

  if (distance < 0) {
    clearInterval(x)
    document.getElementById("demo").innerHTML = "EXPIRED"
  }
}, 1000)
