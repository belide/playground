"use strict";

// DOM
const board = document.querySelector(".board");

// Global
let memoryValues = [];
let tileId = [];
let flipped = 0;

// Sprite coordinates
const tiles = [
  {name: "apple",       posX: -148, posY:    2},
  {name: "apple",       posX: -148, posY:    2},
  {name: "strawberry",  posX: -142, posY:  393},
  {name: "strawberry",  posX: -142, posY:  393},
  {name: "watermelon",  posX: -150, posY:  209},
  {name: "watermelon",  posX: -150, posY:  209},
  {name: "orange",      posX:  351, posY:   10},
  {name: "orange",      posX:  351, posY:   10},
  {name: "banana",      posX:  552, posY: -179},
  {name: "banana",      posX:  552, posY: -179},
  {name: "pear",        posX:  553, posY: -367},
  {name: "pear",        posX:  553, posY: -367},
];


// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleTiles = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};


// Main function
const showBoard = () => {
  let output = "";

  // Shuffle tiles
  const shuffledTiles = shuffleTiles(tiles);

  // Display shuffled tiles
  shuffledTiles.forEach((tile, index) => {
    output += `<div id="tile_${index}" data-tile="${tile.posX} ${tile.posY}"></div>`;
  });
  board.innerHTML = output;

  // Get shuffled tiles
  const displayedTiles = document.querySelectorAll(".board > div");

  // Attach an event listener to each tile
  displayedTiles.forEach(tile => {
    tile.addEventListener("click", flipTile);
  });
};


// flipTile function
const flipTile = (event) => {
  if (event.target.style.background === "" && memoryValues.length < 2) {
    const [posX, posY] = event.target.dataset.tile.split(" ");
    event.target.style.background = `url("fruit.jpg") ${posX}px ${posY}px`;
  }

  if (memoryValues.length === 0) {
    memoryValues.push(event.target.dataset.tile);
    tileId.push(event.target.id);
  } else if (memoryValues.length === 1) {
    memoryValues.push(event.target.dataset.tile);
    tileId.push(event.target.id);

    // If the tiles match
    if (memoryValues[0] === memoryValues[1]) {
      flipped += 2;

      // Clear the arrays
      memoryValues = [];
      tileId = [];

      // If all tiles match
      setTimeout(() => {
        if (flipped === tiles.length) {
          alert("Game over. Well done!")
          showBoard();
        }
      }, 1000);
    } else { // The tiles don't match
      const firstCard = document.getElementById(tileId[0]);
      const secondCard = document.getElementById(tileId[1]);

      // Add animation
      firstCard.classList.add("shake");
      secondCard.classList.add("shake");

      setTimeout(() => {
        // Flip tiles back
        firstCard.style.background = "";
        secondCard.style.background = "";

        // Remove animation
        firstCard.classList.remove("shake");
        secondCard.classList.remove("shake");
  
        // Clear the arrays
        memoryValues = [];
        tileId = [];
      }, 1100); 
    }
  }
};

showBoard();