// Global Variables:
const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuiz = document.getElementById('section-quiz');
const spanTimer = document.getElementById('span-timer');
const sectionEndGame = document.getElementById('section-end-game');
const sectionHighScore = document.getElementById('section-highscore');
const questionTitle = document.getElementById('question-title');
const questionChoiceOne = document.getElementById('question-choices-one');
const questionChoiceTwo = document.getElementById('question-choices-two');
const questionChoiceThree = document.getElementById('question-choices-three');
const submitBtn = document.getElementById('submit-button');
const questionChoiceBtns = [...document.querySelectorAll('.button-choice')];
console.log(questionChoiceBtns)
const feedback = document.getElementById('question-feedback');
const questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyper Text Preprocessor", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Cheat Sheet Stuff", "Cascading Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What does JavaScript do?",
        choices: ["Provide logic and functionality to the code", "Provide structure to the code", "Provide style to the code"],
        answer: "Provide logic and functionality to the code"
    }

];

let questionIndex = 0;

console.log(questions)

let timerId;
let time;
let timeRemaining = 60;





// Landing Page:
    // When the start game button is clicked:
btnStartGame.addEventListener('click', function(event){

    showQuestionSection();

});


function showQuestionSection(){
    // Hide the landing page
    sectionLanding.classList.add('hide');
    // Show the question section
    sectionQuiz.classList.remove('hide');

    startTimer();
    showQuestion(questionIndex);

}

// Start the timer on question page
function startTimer(time){

    // deduct time remaing by 1 every second
    timerId = setInterval(function timer(){
        spanTimer.textContent = timeRemaining;
        timeRemaining --;
        
        // if time remaining <=0
            // end game
     if(timeRemaining <= 0){
         endGame();
        }
        
    }, 1000);
    
}

function stopTimer(){
    clearInterval(timerId);
}

// Endgame Function:
function endGame(){
    // Hide Question Page, show Endgame section
    sectionEndGame.classList.remove('hide');
    // Stop the timer
    stopTimer();
    // Show the save initials and save score functions
    sectionQuiz.classList.add('hide');
    

}
// Question Page:
    // Timer should have already started

function showQuestion(index){

    const question = questions[index];
    questionTitle.textContent = question.title;
    questionChoiceOne.textContent = question.choices[0];
    questionChoiceTwo.textContent = question.choices[1];
    questionChoiceThree.textContent = question.choices[2];
    
  
}



// When the user clicks on one of the question choices
function answerQuestion (event){
    // Check if the if the choice is correct or not
    if(questions[questionIndex].answer === event.target.textContent){
        // If correct, display correct feedback
        feedback.classList.remove('hide');
        // If incorrect
    }else{
        // Deduct 10 sec from remaining time
        timeRemaining -= 20;
        console.log(timeRemaining);
    }
    //move on to next Q

    // if time remains positive
        // move on to next question
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        // If user clicks on a choice in the last Q
    } else {
            // end game
        endGame()
    }
    showQuestion(questionIndex);

   
}

questionChoiceBtns.map((button) => {
    button.addEventListener('click', (event) => answerQuestion(event));
})

function showHighScoreSection(){
        // Hide the landing page
        sectionEndGame.classList.add('hide');
        // Show the question section
        sectionHighScore.classList.remove('hide');
}



// End Game Section:
submitBtn.addEventListener('click', function(event){

    showHighScoreSection()

});

    // If the user clicks on submit button without entering anything
        // display alert, tell user to type in an input
    // If the user types in something and clicks submit
        // store the user high score & initial in local storage
        // show the high score page, hide the end game page

// High Score Page:
    // Show all the previous high scores
    // get the data from local storage
    // when user clicks back to home
        // redirect user to landing page