const right = document.querySelector(".right");
const languages = ["HTML", "CSS", "JavaScript", "Python"];

let counter = 0;

const slide = () => {
  right.innerHTML = "<h1>" + languages[counter] + "</h1>";
  right.style.opacity = "1";

  const innerSlide = () => {
    counter === languages.length - 1 ? counter = 0 : counter++;
    right.style.opacity = "0";
    setTimeout(slide, 1000);
  
  }
  setTimeout(innerSlide, 1000);
};

window.addEventListener("load", slide);