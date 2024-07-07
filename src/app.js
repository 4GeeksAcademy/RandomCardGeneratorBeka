/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const Numbercard = document.getElementById("Numbercard");
const cardStart = document.getElementById("cardStart");
const cardEnd = document.getElementById("cardEnd");
const GenerateRandomCard = document.getElementById("GenerateRandomCard");
const timer = document.getElementById("timer");
const dimensionForm = document.getElementById("dimensionForm");

let randomNumber = document.createElement("randomNumber");
randomNumber.style.fontSize = "150px";
randomNumber.style.color = "black";
randomNumber.style.textAlign = "center";
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
randomNumber.textContent = values[Math.floor(Math.random() * values.length)];

let randomCardStart = document.createElement("randomCardStart");
randomCardStart.style.fontSize = "100px";
randomCardStart.style.height = "200px";
let cards = ["♥", "♦", "♣", "♠"];
let randomCard = cards[Math.floor(Math.random() * cards.length)];
randomCardStart.textContent = randomCard;

let randomCardEnd = document.createElement("randomCard");
randomCardEnd.style.fontSize = "100px";
randomCardEnd.style.height = "200px";

randomCardEnd.textContent = randomCard;

if (randomCard === "♥") {
  randomCardStart.style.color = "red";
  randomCardEnd.style.color = "red";
} else {
  randomCardStart.style.color = "black";
  randomCardEnd.style.color = "black";
}

function GenerateCard() {
  //write your code here
  Numbercard.appendChild(randomNumber).innerText +
    cardStart.appendChild(randomCardStart).innerText +
    cardEnd.appendChild(randomCardEnd);
}

window.onload = function() {
  //write your code here
  GenerateCard();
};

GenerateRandomCard.addEventListener("click", function() {
  randomNumber.textContent = values[Math.floor(Math.random() * values.length)];

  let cards = ["♥", "♦", "♣", "♠"];
  let randomCard = cards[Math.floor(Math.random() * cards.length)];

  randomCardStart.textContent = randomCard;
  randomCardEnd.textContent = randomCard;

  if (randomCard === "♥") {
    randomCardStart.style.color = "red";
    randomCardEnd.style.color = "red";
  } else {
    randomCardStart.style.color = "black";
    randomCardEnd.style.color = "black";
  }
});

timer.addEventListener("click", function() {
  setTimeout(() => {
    timer.innerText = "¡TIME IS UP!";
    timer.style.color = "red";
    timer.style.fontWeight = "bold";

    randomNumber.textContent =
      values[Math.floor(Math.random() * values.length)];

    let cards = ["♥", "♦", "♣", "♠"];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];

    randomCardStart.textContent = randomCard;
    randomCardEnd.textContent = randomCard;

    if (randomCard === "♥") {
      randomCardStart.style.color = "red";
      randomCardEnd.style.color = "red";
    } else {
      randomCardStart.style.color = "black";
      randomCardEnd.style.color = "black";
    }
  }, 3000);
});

document;
dimensionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const carta = document.getElementById("CardHeart");

  carta.style.width = width + "px";
  carta.style.height = height + "px";
});
