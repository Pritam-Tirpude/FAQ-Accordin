const question = document.querySelectorAll(".question");
const arrowIcon = document.querySelector(".arrow-down");

question.forEach((ques) => {
  console.log(ques);
  ques.addEventListener("click", () => {
    ques.classList.toggle("active");
    const answerContent = ques.nextElementSibling;
    if (ques.classList.contains("active")) {
      answerContent.style.maxHeight = answerContent.scrollHeight + "px";
      ques.firstElementChild.style.color = "hsl(238, 29%, 16%)";
      ques.firstElementChild.style.fontWeight = "bold";
      ques.lastElementChild.style.transform = "rotate(180deg)";
    } else {
      answerContent.style.maxHeight = 0;
      ques.firstElementChild.style.color = "hsl(240, 6%, 50%)";
      ques.firstElementChild.style.fontWeight = "lighter";
      ques.lastElementChild.style.transform = "rotate(0deg)";
    }
  });
});
