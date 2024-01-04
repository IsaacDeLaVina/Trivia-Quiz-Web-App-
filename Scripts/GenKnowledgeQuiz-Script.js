// Stores quiz questions and answers. A for loop runs until a condition is met, while a while loop runs until a condition is false.
    
const questions = [
    {
        question: 'Which of the following is the capital of Canada?',
        answers: [
            {text: "Ottawa", correct: true},
            {text: "Toronto", correct: false},
            {text: "Vancouver", correct: false},
            {text: "Montreal", correct: false},
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers:[
            {text: 'The Nile', correct: false},
            {text: 'The Amazon', correct: true},
            {text: 'The Mississippi', correct: false},
            {text: 'The Yangtze', correct: false},
        ]
    },
    {
        question: ' Which of the following languages has the longest alphabet?',
        answers:[
            {text: 'Greek', correct: false},
            {text: 'Russian', correct: true},
            {text: 'Arabic', correct: false},
            {text: 'Latin', correct: false},
        ]
    },
    {
        question: 'What is the name of the famous fictional detective created by Arthur Conan Doyle?',
        answers:[
            {text: 'Sherlock Holmes', correct: true},
            {text: 'Hercule Poirot', correct: false},
            {text: ' Miss Marple', correct: false},
            {text: 'Inspector Lestrade', correct: false},
        ]
    },
    {
        question: 'What type of animal is a koala?',
        answers:[
            {text: 'Reptile', correct: false},
            {text: 'Bird ', correct: false},
            {text: 'Mammal', correct: true},
            {text: 'Fish', correct: false},
        ]
    },
    {
        question: 'What color is the sky?',
        answers:[
            {text: 'Brown', correct: false},
            {text: 'Blue', correct: true},
            {text: 'Green', correct: false},
            {text: "Purple", correct: false},
        ]
    },
    {
        question: "What is the world's most spoken language?",
        answers:[
            {text: 'English', correct: false},
            {text: 'Spanish', correct: false},
            {text: 'Mandarin', correct: true},
            {text: 'French', correct: false},
            
        ]
    },
    {
        question: 'What is the largest ocean in the world?',
        answers:[
            {text: 'Pacific Ocean', correct: true},
            {text: 'Indian Ocean', correct: false},
            {text: 'Atlantic Ocean', correct: false},
            {text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers:[
            {text: 'Michelangelo', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
            {text: 'Raphael', correct: false},
            {text: "Donatello", correct: false},
        ]
    },
    {
        question: 'What is the most common type of star in the Milky Way Galaxy?',
        answers:[
            {text: 'Neutron star', correct: false},
            {text: 'Red giant', correct: false},
            {text: 'White dwarf', correct: false},
            {text: "Red dwarf", correct: true},
        ]
    },
    {
        question: 'What is the capital of the United States of America?',
        answers:[
            {text: 'New York', correct: false},
            {text: 'Los Angeles', correct: false},
            {text: 'Washington D.C.', correct: true},
            {text: "Las Vegas", correct: false},
        ]
    },
    {
        question: 'What is the smallest country in the world?',
        answers:[
            {text: 'Vatican City', correct: true},
            {text: 'Monaco', correct: false},
            {text: 'Liechtenstein', correct: false},
            {text: "San Marino", correct: false},
        ]
    },
    {
        question: 'What is the biggest planet in our solar system?',
        answers:[
            {text: 'Saturn', correct: false},
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: false},
            {text: "Jupiter", correct: true},
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