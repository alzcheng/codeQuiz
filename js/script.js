//Variable definitions

//Variables for defining HTML
//Timer variables
var countdownTimer = document.querySelector(".countdownTimer");
var startGame = document.querySelector(".startGame");

//HTML variables
var cardBody = document.querySelector(".card-body");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");

var questionCount = 0;
var count = 10;
var score = 0;

var questionBank = [
    {
        Question: "Question1",
        Answer: ["a", "b", "c", "d"],
        AnswerKey: [false, true, false, false]
    },
    {
        Question: "Question2",
        Answer: ["e", "f", "g", "h"],
        AnswerKey: [false, true, false, false]
    }
];

//var timerStartSec= 75;


//Function definitions 


startGame.addEventListener("click", function () {
    //Traverse the DOM to change format of page
    var btnGroup = document.createElement("div");
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");

    //Setting attributes for dynamic HTML 
    btnGroup.setAttribute("class", "btn-group-vertical");
    btn1.setAttribute("type", "button");
    btn1.setAttribute("class", "btn btn-primary choice1");
    btn2.setAttribute("type", "button");
    btn2.setAttribute("class", "btn btn-primary choice2");
    btn3.setAttribute("type", "button");
    btn3.setAttribute("class", "btn btn-primary choice3");
    btn4.setAttribute("type", "button");
    btn4.setAttribute("class", "btn btn-primary choice4");

    //Remote and append children
    cardBody.removeChild(cardText);
    cardBody.removeChild(startGame)
    cardBody.appendChild(btnGroup);
    btnGroup.appendChild(btn1);
    btnGroup.appendChild(btn2);
    btnGroup.appendChild(btn3);
    btnGroup.appendChild(btn4);

    startTimer();
    startQuestions();
})


//Countdown timer 
function startTimer() {

    var timer = setInterval(function () {
        count--
        countdownTimer.textContent = "Timer: " + count;
        if (count === 0) {
            clearInterval(timer)
            countdownTimer.textContent = "Timer: " + count;
            //Tallies up the scores
            endGame();
        }
    }, 1000)
}

function startQuestions() {
    var choice1 = document.querySelector(".choice1")
    var choice2 = document.querySelector(".choice2")
    var choice3 = document.querySelector(".choice3")
    var choice4 = document.querySelector(".choice4")


    cardTitle.textContent = questionBank[questionCount].Question;
    choice1.textContent = questionBank[questionCount].Answer[0];
    choice2.textContent = questionBank[questionCount].Answer[1];
    choice3.textContent = questionBank[questionCount].Answer[2];
    choice4.textContent = questionBank[questionCount].Answer[3];

    choice1.addEventListener("click", function () {
        if (questionBank[questionCount].AnswerKey[0]) {
            score++;
            alert("Right Answer");
        } else {
            alert("Wrong Answer");
        }

        if (questionCount == questionBank.length - 1) {
            endGame();
        } else {
            questionCount = questionCount + 1;
            startQuestions()
        }

    })

    choice2.addEventListener("click", function () {
        if (questionBank[questionCount].AnswerKey[1]) {
            score++;
            alert("Right Answer");
        } else {
            alert("Wrong Answer");
        }

        if (questionCount == questionBank.length - 1) {
            endGame();
        } else {
            questionCount = questionCount + 1;
            startQuestions()
        }

    })

    choice3.addEventListener("click", function () {
        if (questionBank[questionCount].AnswerKey[2]) {
            score++;
            alert("Right Answer");
        } else {
            alert("Wrong Answer");
        }

        if (questionCount == questionBank.length - 1) {
            endGame();
        } else {
            questionCount = questionCount + 1;
            startQuestions()
        }
    })

    choice4.addEventListener("click", function () {
        if (questionBank[questionCount].AnswerKey[3]) {
            score++;
            alert("Right Answer");
        } else {
            alert("Wrong Answer");
        }

        if (questionCount == questionBank.length - 1) {
            endGame();
        } else {
            questionCount = questionCount + 1;
            startQuestions()
        }
    })
    //}
};

function endGame() {
    score = score + count;
    console.log(score);
}
//Script

//Stage 1:  Cover page with button that starts the program



// Once the program starts, the timer starts 

//Stage 2:  Questions and answer program - goes through each of the question and prompt the user to select answers
// The timer stops either when the user has answered all the questions or when it goes into zero 
//Stage 3:  Once all the questions are answered or the timer runs out, we prompt the user for initials for high score
//Stage 4:  If the user makes it to the high score, it is displayed.  Otherwise, a message says the user didn't not get to a highscore
//There are 2 buttons for this stage, either you start again or you can clear the top scores