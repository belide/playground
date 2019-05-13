"use strict";

const roll = document.getElementById("roll");
const die1 = document.getElementById("die1")
const die2 = document.getElementById("die2");

const rollDice = () => {
  const sides = [
    "&#xf525",
    "&#xf528",
    "&#xf527",
    "&#xf524",
    "&#xf523",
    "&#xf526"
  ];

  const randomNum1 = Math.floor(Math.random() * 6);
  const randomNum2 = Math.floor(Math.random() * 6);
  
  die1.innerHTML = sides[randomNum1];
  die2.innerHTML = sides[randomNum2];
};

rollDice();

roll.addEventListener("click", rollDice);