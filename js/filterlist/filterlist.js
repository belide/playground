"use strict";

const search = document.querySelector(".search");
const listItems = document.querySelectorAll(".list-item > a");
const matchFound = document.querySelector(".matchfound");

// Highlight matches
const highlightMatches = e => {
  e.preventDefault();

  const regexp = new RegExp(e.target.value, "i");
  listItems.forEach(item => {
      const result = item.innerText.replace(regexp, str => {
        return `<span class="match">${str}</span>`;
      });
      item.innerHTML = result;
  });
};

// Filter list
const filterList = e => {
  e.preventDefault();
  let matches = 0;

  listItems.forEach(item => {
    const userInput = e.target.value.toLowerCase();
    const contactName = item.innerText.toLowerCase();

    if (contactName.indexOf(userInput) !== -1) {
      item.parentNode.style.removeProperty("display");
      if (userInput.length > 0) {
        matches++;
      }
    } else {
      item.parentNode.style.setProperty("display", "none");
    }
  });

  if (matches > 0) {
    matchFound.innerHTML = "Found: " + matches;
  } else {
    matchFound.innerHTML = "";
  }
};

search.addEventListener("keyup", filterList);
search.addEventListener("keyup", highlightMatches);