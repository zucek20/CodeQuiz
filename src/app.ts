import { answersArr } from "./list.js";

// a set of variables of certain HTML elements that are used in code
const scoreCount = document.querySelector(".scoreCount") as HTMLSpanElement;
const nextBtn = document.querySelector("#next") as HTMLButtonElement;
const questionText = document.querySelector("#questionText") as HTMLSpanElement;
const answerBtns = document.querySelectorAll(".answerBtn");
const answerSpans = document.querySelectorAll(".answerSpan");

// array of objects containing questions for quiz and their answers
const questionsArr: { text: string; answer: string }[] = [];

// class for constructing questions
class Question {
  text: string;
  answer: string;

  constructor(text: string, answer: string) {
    this.text = text;
    this.answer = answer;
  }
}

// constructing questons for quiz
const question1 = new Question("HTML stands for", "B");
const question2 = new Question("Most popular front-end framework in 2021", "C");
const question3 = new Question(
  "JavaScript concept that exactly deals with repetition in objects",
  "A"
);
const question4 = new Question("Creator of C programming language", "B");
const question5 = new Question("The year JavaScript was created", "D");
const question6 = new Question("Back-end framework that use PHP", "B");
const question7 = new Question(
  "Most popular tool that provides version control",
  "A"
);
const question8 = new Question(
  "Concept of function calling itself in its body",
  "C"
);
const question9 = new Question("Which language is interpreted?", "A");
const question10 = new Question("JSON stands for...", "C");
const question11 = new Question(
  "Data structure that contains pairs of keys and values",
  "D"
);
const question12 = new Question("What is an IDE?", "A");

//push each question to questionsArr
questionsArr.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12)


// function that check if answer is correct. If correct: it paints it green, wrong: red and allows to go to next question.
function checkAnswer(): void {
   
}

// variable to store current question number
let count: number = 0

// variable to store answerSpan class number
let ansCount: number = 1

// function that update question and answers spans. Reset classes
function next(): void {
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
   count++
}

// loop for listening event on buttons to check if answer is correct
for (let i = 0; i < answerBtns.length; i++) {
   answerBtns[i].addEventListener('click', checkAnswer)
}

// load first question when page load
window.addEventListener('load', event => {
   next()
})
