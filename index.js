const questionEL = document.querySelectorAll(".question");
const arrowEL = document.querySelectorAll(".arrow");
const answerEL = document.querySelectorAll(".answer");

questionEL.forEach(function (question, index) {
  question.addEventListener("click", function () {
    closeAll(index);
    openRequired(index);
  });
});

function closeAll(index) {
  for (let i = 0; i < questionEL.length; i++) {
    if (i !== index) {
      questionEL[i].classList.remove("dark-text");
      arrowEL[i].classList.remove("rotate-arrow");
      answerEL[i].classList.remove("open-ans");
    }
  }
}

function openRequired(index) {
  questionEL[index].classList.toggle("dark-text");
  arrowEL[index].classList.toggle("rotate-arrow");
  answerEL[index].classList.toggle("open-ans");
}
