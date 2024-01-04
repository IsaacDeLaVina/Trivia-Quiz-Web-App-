// Stores quiz questions and answers. A for loop runs until a condition is met, while a while loop runs until a condition is false.
    
const questions = [
    {
        question: 'A _______ is a module that returns a value back to the part of the program that is called it.',
        answers: [
            {text: "Function", correct: true},
            {text: "Decision", correct: false},
            {text: "Loop", correct: false},
            {text: "Structure", correct: false},
        ]
    },
    {
        question: 'Every element is an array is assigned a unique number known as a(n) ______',
        answers:[
            {text: 'Number', correct: true},
            {text: 'Decision', correct: false},
            {text: 'Loop', correct: false},
            {text: 'Structure', correct: true},
        ]
    },
    {
        question: 'The step by step procedure for solving a problem.',
        answers:[
            {text: 'Programming', correct: false},
            {text: 'Algorithm', correct: true},
            {text: 'Digital Structure', correct: false},
            {text: 'Flowchart', correct: false},
        ]
    },
    {
        question: 'A pointer is...',
        answers:[
            {text: 'Address of a variable', correct: false},
            {text: 'A variable for sorting address', correct: true},
            {text: 'Data type of an address variable', correct: false},
            {text: 'Indication of the variable to be accessed next', correct: false},
        ]
    },
    {
        question: 'Its a datatype that holds decimal nubmers',
        answers:[
            {text: 'float', correct: true},
            {text: 'Int', correct: false},
            {text: 'Byte', correct: true},
            {text: 'Char', correct: false},
        ]
    },
    {
        question: 'What symbol do you write for AND? ',
        answers:[
            {text: '||', correct: false},
            {text: '!', correct: false},
            {text: '&&', correct: true},
            {text: "^", correct: false},
        ]
    },
    {
        question: 'An Object is a collection of data and code that represents a real-world entity. ',
        answers:[
            {text: 'True', correct: true},
            {text: 'False', correct: false},
            
        ]
    },
    {
        question: 'What is the primary purpose of a loop in programming? ',
        answers:[
            {text: 'To define variables', correct: false},
            {text: 'To store data', correct: false},
            {text: 'To debug code', correct: false},
            {text: "To repeat a task", correct: true},
        ]
    },
    {
        question: 'In object-oriented programming, what is a class?',
        answers:[
            {text: 'a set of instructions', correct: false},
            {text: 'a type of data', correct: false},
            {text: 'a template used to create objects', correct: true},
            {text: "a function that performs a task", correct: false},
        ]
    },
    {
        question: 'What is the purpose of the break statement in programming?',
        answers:[
            {text: 'to debug code', correct: false},
            {text: 'to exit a loop', correct: true},
            {text: 'to define variables', correct: false},
            {text: "to store data", correct: false},
        ]
    },
    {
        question: 'What is the purpose of the break statement in programming? ',
        answers:[
            {text: 'A for loop is used for decision-making, while a while loop is used for iteration.', correct: false},
            {text: 'A for loop is used for iteration, while a while loop is used for decision-making.', correct: false},
            {text: 'A for loop runs until a condition is false, while a while loop runs until a condition is met.', correct: false},
            {text: "A for loop runs until a condition is met, while a while loop runs until a condition is false.", correct: true},
        ]
    },
    {
        question: 'What is the purpose of a variable in programming?',
        answers:[
            {text: 'To store a constant value', correct: false},
            {text: 'To store a value that cannot change', correct: false},
            {text: 'To store a data type', correct: false},
            {text: "To store a value that can change", correct: true},
        ]
    },
];

// Stores HTML Elements as variables. In that way, it will be easy for the program to access the html document without writing the entire object method.

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//  Stores the question number (currentQuestionIndex) along with the quiz score.

let currentQuestionIndex = 0;
let score = 0;


// The main function of the applicaiton. 
function startQuiz(){ 
    // Sets the current question number and score to 0. 
    currentQuestionIndex = 0;
    score = 0;
    // Changes the original text to "Submit". 
    nextButton.innerHTML = "Submit";
    showQuestion(); 
}

// Reveals the questions from the quiz data (question object).
function showQuestion(){
    resetState();
    // Grabs the question index from the questions object and stores it in this variable. 
    let currentQuestion = questions[currentQuestionIndex]; 
    // Adds the question number on the question. 
    let questionNo = currentQuestionIndex + 1;
    //This variable updates the question number along with the data. 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //Goes to the current question form the question object and displays the answers. 
    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text; // This adds the text answers from the question object. 
        button.classList.add("btn"); // Sets the new button element as a class. 
        answerButtons.appendChild(button); // Causes the button to display answers. 
        if(answer.correct){
            button.dataset.correct = answer.correct; // Adds the true or false from the question object's dataset. 
        }
        button.addEventListener("click", selectAnswer); //Calls the selectAnswer button.  
    });
}

// This function resets the previous question and answer. 
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Checks the user's answers if its right or wrong.
function selectAnswer(e){
     const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true"; 
    // If the user's submits the right answer it will active the isCorrect statements and adds the score. If not, he/she will not be given a score.
    if(isCorrect){
        selectedBtn.classList.add("correct");
        console.log("The answer is correct");
        score++;
    }else{
        console.log("The answer is wrong"); 
    }

   Array.from(answerButtons.children).forEach(button => { // For each button, it will check the data set to see if its true or not
        if(button.dataset.correct === "true"){
            console.log("Great job Nerd!");
        }
        button.disabled = true; // Disables the buttons after the user submits. 
   });
   nextButton.style.display = "block";
}

// Reveals the final score to the user. 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again?";
    nextButton.style.display = "block";
   
}

//Displays another question and shows the score when the quiz is finshed. 
function handleNextButton(){
    currentQuestionIndex++; // Increase the question number or index by one. This means it sets a new question with new answers. 
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

// Restarts the quiz. 
nextButton.addEventListener("click", ()=> {
    // Checks the question number is less than the question length.
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

// Runs the application.
startQuiz();