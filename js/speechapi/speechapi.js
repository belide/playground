"use strict";

const speakButton = document.querySelector(".speak");
const answer = document.getElementById("answer");
const randomNum = Math.floor(Math.random() * 100) + 1;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.lang = "en-US";

recognition.onaudiostart = () => {
  answer.innerHTML = "I'm listening...";
};

recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onresult = (event) => {
  const last = event.results.length - 1;
  const result = event.results[0][0].transcript;

  if (parseInt(result) > randomNum) {
    answer.innerHTML = "Your guess is too high.";
  } else if (parseInt(result) < randomNum) {
    answer.innerHTML = "Your guess is too low.";
  } else if (parseInt(result) === randomNum) {
    answer.innerHTML = "Good job! You guessed the number.";
  } else {
    answer.innerHTML = "Can you repeat that, please?";
  }
};

speakButton.addEventListener("click", e => {
  recognition.start();
});