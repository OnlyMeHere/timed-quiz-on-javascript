var openTitle = document.querySelector("#openTitle");
var timer = document.querySelector("#timer");
var hiScore = document.querySelector("#hiScore");
var startBtn = document.querySelector("#startBtn");
var upBanner = document.querySelector("#upBanner");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var lowBanner = document.querySelector("#lowBanner");
var question = "";
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer = "";

const quizQuestion1 = ["What is the proper way to name Variables in JavaScript?", "Camel Casing","Tiger Casing", "All Lower Case","After famous people"];
const quizQuestion2 = ["What the correct way to end each line of code in JavaScript?","A Period","A Question Mark","A Semi-Colon","An Exclamation Point"];
const quizQuestion3 = ["When calling a function in JavaScript, where does the () go?", "At the beginning","In the middle","At the end of the Function","At the end of the line"];



startBtn.addEventListener("click", quiz());

choice1.addEventListener("click", 


function quiz() {
    console.log("Start Button Clicked");
    question = quizQuestion1[0];
    answer = quizQuestion1[1];
    document.upBanner.textContent = (question);
    



    







}

function checkAnswer() {

    console.log("Button 1 clicked");
    if 
}