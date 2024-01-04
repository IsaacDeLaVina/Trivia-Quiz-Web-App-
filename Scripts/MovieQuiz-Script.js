// Stores quiz questions and answers. A for loop runs until a condition is met, while a while loop runs until a condition is false.
    
const questions = [
    {
        question: 'What is the most successful movie of all time (in terms of box office sales)?',
        answers: [
            {text: "Avatar", correct: true},
            {text: "Titanic ", correct: false},
            {text: "Avengers: Endgame", correct: false},
            {text: "Star Wars: The Force Awakens", correct: false},
        ]
    },
    {
        question: 'What was the first animated Disney feature-length film?',
        answers:[
            {text: 'Pinocchio', correct: false},
            {text: 'Bambi', correct: false},
            {text: 'Snow White and the Seven Dwarfs', correct: true},
            {text: 'Fantasia', correct: false},
        ]
    },
    {
        question: 'What is the name of the protagonist in the 1994 film Forrest Gump?',
        answers:[
            {text: 'Tom Hanks', correct: false},
            {text: 'Bubba Gump', correct: false},
            {text: 'Forrest Gump', correct: true},
            {text: 'Jenny Curran', correct: false},
        ]
    },
    {
        question: 'What is the title of the James Bond movie that was released in 2012?',
        answers:[
            {text: 'Casino Royale', correct: false},
            {text: 'Spectre', correct: false},
            {text: 'Quantum of Solace', correct: false},
            {text: 'Skyfall', correct: true},
        ]
    },
    {
        question: 'Who directed the Dark Knight?',
        answers:[
            {text: 'Martin Scorsese', correct: false},
            {text: 'Steven Spielberg', correct: false},
            {text: 'Quentin Tarantino', correct: false},
            {text: 'Chirstopher Nolan', correct: true},
        ]
    },
    {
        question: 'What is the title of the first film in the Harry Potter series',
        answers:[
            {text: 'Chamber of Secrets', correct: false},
            {text: 'Goblet of Fire', correct: false},
            {text: "Sorcerer's Stone", correct: true},
            {text: "Prisoner of Azkaban", correct: false},
        ]
    },
    {
        question: 'What is the title of the 2015 Star Wars installment',
        answers:[
            {text: 'The Force Awakens', correct: true},
            {text: 'Rouge One', correct: false},
            {text: 'Revenge of the Sith', correct: false},
            {text: 'A New Hope', correct: false},
            
        ]
    },
    {
        question: 'Who directed the 1999 film American Beauty?',
        answers:[
            {text: 'Steven Spielberg', correct: false},
            {text: 'Sam Mendes', correct: true},
            {text: 'Quentin Tarantino', correct: false},
            {text: "Martin Scorsese", correct: false},
        ]
    },
    {
        question: 'In Back to the Future, what year does Marty McFly travel back in time to?',
        answers:[
            {text: '1945', correct: false},
            {text: '1950', correct: false},
            {text: '1955', correct: true},
            {text: "1960", correct: false},
        ]
    },
    {
        question: 'In Mean Girls, The Plastics performed a dance to which Christmas song at the Winter Talent Show?',
        answers:[
            {text: 'Rockin Around the Christmas Tree', correct: false},
            {text: 'Jingle Bell Rock', correct: true},
            {text: 'All I Want For Chirstmas Is You', correct: false},
            {text: "Last Christmas", correct: false},
        ]
    },
    {
        question: "In Tangled, what is Flynn Rider's real name",
        answers:[
            {text: 'Eugene Fitzherbert', correct: true},
            {text: 'Herbert Barney', correct: false},
            {text: 'Melvin Orvillert', correct: false},
            {text: "Morris Mortimer", correct: false},
        ]
    },
    {
        question: 'in Avengers: Endgame, when Scott (aka Ant-Man) shows up the Avengers compound how much time had passed since "the Snap"?',
        answers:[
            {text: '2 years', correct: false},
            {text: '10 years', correct: false},
            {text: '12 years', correct: false},
            {text: "5 years", correct: true},
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