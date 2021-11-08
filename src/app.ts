import { answersArr } from "./list.js";

// a set of variables of certain HTML elements that are used in code
const scoreCount = document.querySelector(".scoreCount") as HTMLSpanElement;
const nextBtn = document.querySelector("#next") as HTMLButtonElement;
const questionText = document.querySelector("#questionText") as HTMLSpanElement;
const answerBtns = document.querySelectorAll(".answerBtn");
const answerSpans = document.querySelectorAll(".answerSpan");

// array of objects containing questions for quiz and their answers
const questionsArr: { text: string; answer: number }[] = [];

let score: number = 0
// class for constructing questions
class Question {
  text: string;
  answer: number;

  constructor(text: string, answer: number) {
    this.text = text;
    this.answer = answer;
  }
}

// constructing questons for quiz
const question1 = new Question("HTML stands for", 2);
const question2 = new Question("Most popular front-end framework in 2021", 3);
const question3 = new Question(
  "JavaScript concept that exactly deals with repetition in objects",
  1
);
const question4 = new Question("Creator of C programming language", 2);
const question5 = new Question("The year JavaScript was created", 4);
const question6 = new Question("Back-end framework that use PHP", 2);
const question7 = new Question(
  "Most popular tool that provides version control",
  1
);
const question8 = new Question(
  "Concept of function calling itself in its body",
  3
);
const question9 = new Question("Which language is interpreted?", 1);
const question10 = new Question("JSON stands for...", 3);
const question11 = new Question(
  "Data structure that contains pairs of keys and values",
  4
);
const question12 = new Question("What is an IDE?", 1);

//push each question to questionsArr
questionsArr.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12)

// variable to store current question number
let count: number = 0

// function that check if answer is correct. If correct: it paints it green, wrong: red and allows to go to next question.
function checkAnswer(): void {
   // variable to store current question object
   let currentQuestion: object = questionsArr[count -1]
   
   if (currentQuestion.answer == this.classList[1]) {
      this.classList.add('correct')
      nextBtn.addEventListener('click', next)
      nextBtn.classList.add('active')
      score++
      scoreCount.textContent = score.toString()
      console.log(count)
      // protect to further mistakes after correct answer checked
      for (let i = 0; i < answerBtns.length; i++) {
         answerBtns[i].removeEventListener('click', checkAnswer)
      }
   } else { // if wrong answer picked
      this.classList.add('wrong')
      score--
      scoreCount.textContent = score.toString()
      console.log(count)
   }
   console.log(currentQuestion)
}




// variable to store answerSpan class number
let ansCount: number = 1

// function that update question and answers spans. Reset classes
function next(): void {
   if (count == 12) {
      nextBtn.classList.add('hidden')
      alert(`You completed quiz with score: ${score}`)
      // protect from additional score decrementation
      for (let i = 0; i < answerBtns.length; i++) {
         removeEventListener('click', checkAnswer)
      }
   }
   for (let i = 0; i < answerBtns.length; i++) {
      answerBtns[i].addEventListener('click', checkAnswer)
   }
   nextBtn.removeEventListener('click', next)
   nextBtn.classList.remove('active')
   questionText.textContent = questionsArr[count].text // update question textContent

   // loop that assigns textContent to every answer span
   for (let i = 0; i < answerSpans.length; i++) {
      const span = answerSpans[i]
      switch (ansCount) {
         case 1:
            span.textContent = answersArr[count][0]
            ansCount++
            break;
         case 2:
            span.textContent = answersArr[count][1]
            ansCount++
            break;
         case 3:
            span.textContent = answersArr[count][2]
            ansCount++
            break;
         case 4:
            span.textContent = answersArr[count][3]
            ansCount = 1 // reset ansCount
            break;
      
         default:
            break;
         }
   }
   
   // clear buttons classes
   for (let i = 0; i < answerBtns.length; i++) {
      answerBtns[i].classList.remove('wrong')
      answerBtns[i].classList.remove('correct')
   }
   count++
}

// add listening event on buttons to check if answer is correct
for (let i = 0; i < answerBtns.length; i++) {
   answerBtns[i].addEventListener('click', checkAnswer)
}

// load first question when page load
window.addEventListener('load', event => {
   next()
})