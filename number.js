let restartbtn = document.getElementById("restart");
let btn = document.getElementById("submit");
var inputUser = document.getElementById("btn_user");
let count = 0;

let output = document.getElementById("text");

let number = Math.floor(Math.random() * 100);

btn.addEventListener("click", function () {
  let input = document.getElementById("btn_user").value;
  if (input == number) {
    output.innerHTML = `Vous avez bien deviné, votre numéro était ${number}`;
    count++;
    document.getElementById("count").innerHTML = count;
    document.getElementById("won").innerHTML = `Bravo ! Vous avez gagné !!!`;
  } else if (input < number) {
    output.innerHTML = `Le bon chiffre est plus grand !`;
    count++;
    document.getElementById("count").innerHTML = count;
  } else if (input > number) {
    output.innerHTML = `Le bon chiffre est plus petit !`;
    count++;
    document.getElementById("count").innerHTML = count;
  }
});

restartbtn.addEventListener("click", function () {
  location.reload();
});
inputUser.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});
