"use strict";

const toggle = document.querySelector(".menu-toggle");
const nav = toggle.parentElement;
const menuContainer = document.querySelector(".menu-container");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("is-open");

  const height = menuContainer.scrollHeight;

  if (nav.classList.contains("is-open")) {
    menuContainer.style.setProperty("height", height + "px");
  } else {
    menuContainer.style.setProperty("height", "0");
  }
});
