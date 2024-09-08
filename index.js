var v = Math.ceil(Math.random() * 6);

document.querySelector(".img1").setAttribute("src", "images/dice" + v + ".png");
var c = Math.ceil(Math.random() * 6);
document.querySelector(".img2").setAttribute("src", "images/dice" + c + ".png");
if (v > c) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins the game";
} else if (v < c) {
  document.querySelector("h1").innerHTML = "Player 2 wins the game 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
