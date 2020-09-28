const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";

const quote = document.querySelector(".quote");
const input = document.querySelector(".input");
const timer = document.querySelector(".timer");

let correct = true;
input.addEventListener("input", () => {
  const quoteInCharArr = quote.querySelectorAll("span");
  const inputInCharArr = input.value.split("");

  quoteInCharArr.forEach((charSpan, index) => {
    const character = inputInCharArr[index];
    if (character == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
      correct = true;
    } else {
      charSpan.classList.add("incorrect");
      charSpan.classList.remove("correct");
      correct = false;
    }
  });
  if (correct) {
    renderNewQuote();
  }
});

const randomQuote = async () => {
  const response = await fetch(RANDOM_QUOTE_API_URL);
  const data = await response.json();
  return data.content;
};

/*
function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content);
}
*/

const renderNewQuote = async () => {
  const newQuote = await randomQuote();
  quote.innerText = "";
  newQuote.split("").forEach(char => {
    const characterSpan = document.createElement("span");
    characterSpan.innerHTML = char;
    quote.appendChild(characterSpan);
  });
  input.value = null;
  startTimer();
};

let startTime;
const startTimer = () => {
  timer.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
};

const getTimerTime = () => {
  return Math.floor((new Date() - startTime) / 1000);
};

renderNewQuote();
