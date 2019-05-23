"use strict";

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
const menuContainer = document.querySelector(".menu-container");

toggle.addEventListener("click", e => {
  e.preventDefault();
  nav.classList.toggle("is-active");

  const height = menuContainer.scrollHeight;

  if (nav.classList.contains("is-active")) {
    menuContainer.style.height = height + "px";
  } else {
    menuContainer.style.height = "0px";
  }
})
