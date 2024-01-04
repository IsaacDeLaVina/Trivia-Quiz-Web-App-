// Stores quiz questions and answers. A for loop runs until a condition is met, while a while loop runs until a condition is false.
    
const questions = [
    {
        question: 'In which year did the French Revolution begin?',
        answers: [
            {text: "1789", correct: true},
            {text: "1790", correct: false},
            {text: "1791", correct: false},
            {text: "1792", correct: false},
        ]
    },
    {
        question: 'What was the name of the first empire in China?',
        answers:[
            {text: 'Han Dynasty', correct: false},
            {text: ' Qin Dynasty ', correct: true},
            {text: 'Tang Dynasty', correct: false},
            {text: 'Ming Dynasty', correct: false},
        ]
    },
    {
        question: ' Who was the first elected president of the United States?',
        answers:[
            {text: 'Thomas Jefferson', correct: false},
            {text: 'John Adams', correct: false},
            {text: 'George Washington ', correct: true},
            {text: 'James Madison', correct: false},
        ]
    },
    {
        question: 'What was the capital of the ancient Roman Republic? ',
        answers:[
            {text: 'Rome', correct: true},
            {text: 'Venice', correct: false},
            {text: 'Athens', correct: false},
            {text: 'Constantinople', correct: false},
        ]
    },
    {
        question: 'In which year did the Berlin Wall fall?',
        answers:[
            {text: '1985', correct: false},
            {text: '1989', correct: true},
            {text: '1986', correct: false},
            {text: '1990', correct: false},
        ]
    },
    {
        question: 'Who wrote the Declaration of Independence? ',
        answers:[
            {text: 'Thomas Jefferson', correct: true},
            {text: 'Benjamin Franklin', correct: false},
            {text: 'John Adams', correct: false},
            {text: "George Washington", correct: false},
        ]
    },
    {
        question: 'What was the name of the first Emperor of Japan',
        answers:[
            {text: 'Emperor Meiji', correct: false},
            {text: 'Emperor Jimmu', correct: true},
            {text: 'Emperor Taisho', correct: false},
            {text: "Emperor Akihito", correct: false},
            
        ]
    },
    {
        question: 'Who was the first President of the Soviet Union?',
        answers:[
            {text: 'Vladimir Lenin', correct: true},
            {text: 'Mikhail Gorbachev', correct: false},
            {text: 'Joseph Stalin', correct: false},
            {text: "Boris Yeltsin", correct: true},
        ]
    },
    {
        question: 'When did the United Nations come into existence?',
        answers:[
            {text: '1945', correct: true},
            {text: '1947', correct: false},
            {text: '1953', correct: false},
            {text: "1956 ", correct: false},
        ]
    },
    {
        question: 'Who was the first King of England?',
        answers:[
            {text: 'Alfred the Great', correct: false},
            {text: 'William the Conqueror', correct: true},
            {text: 'Henry VIII', correct: false},
            {text: "Edward III", correct: false},
        ]
    },
    {
        question: 'When did the Industrial Revolution begin?',
        answers:[
            {text: '1750', correct: true},
            {text: '1775', correct: false},
            {text: '1800', correct: false},
            {text: "1825", correct: false},
        ]
    },
    {
        question: 'What was the name of the dynasty that ruled China from 1368 to 1644?',
        answers:[
            {text: 'Han Dynasty', correct: false},
            {text: 'Ming Dynasty', correct: true},
            {text: 'Qing Dynasty', correct: false},
            {text: "Tang Dynasty", correct: false},
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