const counter = document.querySelector("#counter");
const buttonCreator = document.createElement("button");
const commentInput = document.querySelector("#comment-input");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const likesList = document.querySelector(".likes");
const likeButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
const submitCommentButton = document.querySelector("#submit");
const commentForm = document.querySelector("#comment-form");
const commentList = document.querySelector("#list");
const buttonArray = [likeButton, minusButton, plusButton, submitCommentButton];
const createParagraph = document.createElement("p");

let count = 0;
let intervalID;
let isPaused = false;
let likeCounts = {};

const startCount = () => {
  count++;
  counter.innerText = count;
};

document.addEventListener("DOMContentLoaded", () => {
  intervalID = setInterval(startCount, 1000);
});

minusButton.addEventListener("click", () => {
  counter.innerText -= 1;
});

plusButton.addEventListener("click", () => {
  counter.innerText++;
});

pauseButton.addEventListener("click", () => {
  if (isPaused) {
    intervalID = setInterval(startCount, 1000);
    buttonArray.forEach((button) => {
      button.removeAttribute("disabled");
    });
    pauseButton.innerText = "Pause";
  } else {
    clearInterval(intervalID);
    buttonArray.forEach((button) => {
      button.setAttribute("disabled", true);
    });
    pauseButton.innerText = "Resume";
  }
  isPaused = !isPaused;
});

likeButton.addEventListener("click", () => {
  const createLI = document.createElement("li");
  const currentCount = counter.innerText;
  if (!likeCounts[currentCount]) {
    likeCounts[currentCount] = 1;
  } else {
    likeCounts[currentCount]++;
  }
  const timesText = likeCounts[currentCount] === 1 ? "time" : "times";
  createLI.innerText = `${counter.innerText} was liked ${likeCounts[currentCount]} ${timesText}.`;
  likesList.append(createLI);
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = commentInput.value;
  const createParagraph = document.createElement("p"); // Create a new paragraph element
  createParagraph.innerText = inputText;
  commentList.appendChild(createParagraph);
  commentInput.value = "";
});
