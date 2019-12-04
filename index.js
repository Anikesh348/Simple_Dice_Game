/*var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var ransomdice1 ="images/dice"+randomNumber1+".png";
var ransomdice2 ="images/dice"+randomNumber2+".png";
//document.querySelector(".example").style.backgroundColor = "red";
*/
function myFunction() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var ransomdice1 = "images/dice" + randomNumber1 + ".png";
  var ransomdice2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", ransomdice1);
  document.querySelectorAll("img")[1].setAttribute("src", ransomdice2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!!"
  }

  document.querySelector("button").innerHTML = "Play Again!!";

  //document.location.reload();


}
