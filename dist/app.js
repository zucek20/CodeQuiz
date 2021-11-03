"use strict";
// a set of variables of certain HTML elements that are used in code
const scoreCount = document.querySelector(".scoreCount");
const nextBtn = document.querySelector("#next");
const questionText = document.querySelector("#questionText");
const answerBtns = document.querySelectorAll(".answerBtn");
const answerSpans = document.querySelectorAll(".answerSpan");
// array of objects containing questions for quiz and their answers
const questionsArr = [];
// multidimesional array od string containing answers
const answersArr = [
    [
        "High Text MultiLanguage",
        "HyperText Markup Language",
        "HighText Multi Line",
        "History Testing Markup Language",
    ],
    ["Vue", "Angular", "React", "Svelte"],
    ["for in", "while", "for of", "forEach"],
    [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "Guido van Rossum",
        "Yukihiro Matsumoto",
    ],
    ["1998", "1990", "2001", "1995"],
    ["Node", "Laravel", "Spring boot", "Flask"],
    ["Git", "Mercurial", "CVS", "Bazaar"],
    ["Destructuring", "Polymorphism", "Recursion", "Callback"],
    ["Python", "C++", "Rust", "Go"],
    [
        "Java syntax object node",
        "JavaScript oriented node",
        "JavaScript object notation",
        "Java system oriented notaton",
    ],
    ["Array", "Boolean", "String", "Object"],
    [
        "Integrated Development Environment",
        "Initial Data Extraction",
        "Inner Data Export",
        "Initial Development Environment",
    ],
];
// class for constructing questions
class Question {
    constructor(text, answer) {
        this.text = text;
        this.answer = answer;
    }
}
// constructing questons for quiz
const question1 = new Question("HTML stands for", "B");
const question2 = new Question("Most popular front-end framework in 2021", "C");
const question3 = new Question("JavaScript concept that exactly deals with repetition in objects", "A");
const question4 = new Question("Creator of C programming language", "B");
const question5 = new Question("The year JavaScript was created", "D");
const question6 = new Question("Back-end framework that use PHP", "B");
const question7 = new Question("Most popular tool that provides version control", "A");
const question8 = new Question("Concept of function calling itself in its body", "C");
const question9 = new Question("Which language is interpreted?", "A");
const question10 = new Question("JSON stands for...", "C");
const question11 = new Question("Data structure that contains pairs of keys and values", "D");
const question12 = new Question("What is an IDE?", "A");
