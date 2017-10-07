const hc = document.querySelector("#hc");

function randColor() {
  var r = Math.floor(Math.random () * 255);
  var g = Math.floor(Math.random () * 255);
  var b = Math.floor(Math.random () * 255);
  return "rgb("+r+" ,"+g+", "+b+")";
}

setInterval(function () {
  hc.style.color = randColor();
  hc.style.backgroundColor = randColor();
}, 2000);
