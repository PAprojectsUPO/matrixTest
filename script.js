// Define the types of matrices and their descriptions/properties
// This can be removed if questions are fully provided by the new bank
// const matrixTypes = [ ... ];

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let allModulesData = []; // To store all modules from questions.json
let selectedModuleId = null; // To store the ID of the selected module
let allQuestionsData = {}; // To store questions of the selected module by difficulty

// Declare DOM element variables globally, to be assigned once DOM is loaded
let moduleSelectionScreen;
let moduleOptionsContainer;
let difficultyScreen; // Renamed from startScreen
let quizScreen;
let resultsScreen;
let questionText;
let optionsContainer;
let feedbackContainer;
let nextButton;
let feedbackSummary;
let finalScore;
let totalQuestions;
let restartButton;

// Buttons for difficulty
let startBasicButton;
let startIntermediateButton;
let startAdvancedButton;

document.addEventListener('DOMContentLoaded', () => {
    // Assign DOM elements to variables
    moduleSelectionScreen = document.getElementById('module-selection-screen');
    moduleOptionsContainer = document.getElementById('module-options-container');
    difficultyScreen = document.getElementById('difficulty-screen');
    quizScreen = document.getElementById('quiz-screen');
    resultsScreen = document.getElementById('results-screen');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    feedbackContainer = document.getElementById('feedback-container'); // Initialize feedbackContainer
    nextButton = document.getElementById('next-button');
    feedbackSummary = document.getElementById('feedback-summary');
    finalScore = document.getElementById('score');
    totalQuestions = document.getElementById('total-questions');
    restartButton = document.getElementById('restart-button');

    // Initialize elements that might not exist if quiz-screen is hidden initially
    if (nextButton) nextButton.addEventListener('click', nextQuestion);
    if (restartButton) restartButton.addEventListener('click', restartQuiz);

    // Initialize difficulty buttons
    startBasicButton = document.getElementById('start-basic');
    startIntermediateButton = document.getElementById('start-intermediate');
    startAdvancedButton = document.getElementById('start-advanced');

    if (startBasicButton) startBasicButton.addEventListener('click', () => startQuiz('basico'));
    if (startIntermediateButton) startIntermediateButton.addEventListener('click', () => startQuiz('intermedio'));
    if (startAdvancedButton) startAdvancedButton.addEventListener('click', () => startQuiz('avanzado'));

    fetchQuestions();
    showModuleSelectionScreen(); // Show module selection first
});

async function fetchQuestions() {
    try {
        const response = await fetch('http://127.0.0.1:5500/questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allModulesData = data.quizModules; // Store all modules
        populateModuleSelectionScreen();
    } catch (error) {
        console.error("Error fetching questions:", error);
        if (moduleOptionsContainer) {
            moduleOptionsContainer.innerHTML = "<p class='error-text'>Error al cargar los módulos. Por favor, inténtalo de nuevo más tarde.</p>";
        }
    }
}

function populateModuleSelectionScreen() {
    if (!moduleOptionsContainer || !allModulesData) return;
    moduleOptionsContainer.innerHTML = ''; // Clear previous options
    allModulesData.forEach(module => {
        const button = document.createElement('button');
        button.textContent = module.name;
        button.classList.add('start-button'); // Re-use existing button style
        button.addEventListener('click', () => selectModule(module));
        moduleOptionsContainer.appendChild(button);
    });
}

function selectModule(module) {
    selectedModuleId = module.id;
    allQuestionsData = module.difficultyLevels; // Load questions for the selected module
    showDifficultyScreen();
}

function startQuiz(difficulty) {
    if (!selectedModuleId) {
        console.error("No module selected.");
        alert("Por favor, selecciona un módulo primero.");
        showModuleSelectionScreen();
        return;
    }
    if (!allQuestionsData || !allQuestionsData[difficulty]) {
        console.error(`Questions for difficulty '${difficulty}' not found in module '${selectedModuleId}'.`);
        alert(`No se encontraron preguntas para el nivel '${difficulty}' en el módulo seleccionado.`);
        return;
    }
    questions = allQuestionsData[difficulty];
    if (!questions || questions.length === 0) {
        alert(`No hay preguntas disponibles para el nivel ${difficulty} en el módulo seleccionado.`);
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    feedbackSummary.innerHTML = ''; // Clear previous feedback summary
    if (quizScreen) quizScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (moduleSelectionScreen) moduleSelectionScreen.classList.add('hidden');
    generateQuestion();
}

// Function to generate a question
function generateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex]; // Correctly define currentQuestion
        if (questionText) {
            questionText.innerHTML = currentQuestion.text; // Use innerHTML to allow MathJax rendering
            // Process MathJax for the question text
            if (window.MathJax) {
                MathJax.typesetPromise([questionText]).catch((err) => console.log(err.message));
            }
        }
        if (optionsContainer) {
            optionsContainer.innerHTML = ''; // Clear previous options
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.innerHTML = option; // Use innerHTML to allow MathJax rendering
                button.classList.add('option-button');
                button.addEventListener('click', () => selectAnswer(option, currentQuestion.correctAnswer, currentQuestion)); // Use 'correctAnswer' property
                optionsContainer.appendChild(button);
            });
            // Process MathJax for all option buttons
            if (window.MathJax) {
                MathJax.typesetPromise([optionsContainer]).catch((err) => console.log(err.message));
            }
        }
        if (feedbackContainer) feedbackContainer.innerHTML = ''; // Clear previous immediate feedback
        if (nextButton) nextButton.classList.add('hidden'); // Hide next button until an answer is selected
    } else {
        showResults();
    }
}

function selectAnswer(selectedOption, correctAnswer, currentQuestion) { // Add currentQuestion parameter
    if (!optionsContainer || !feedbackContainer || !nextButton) return;

    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        if (button.innerHTML === correctAnswer) {
            button.classList.add('correct');
        } else if (button.innerHTML === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    const isCorrect = (selectedOption === correctAnswer);
    const feedbackBox = document.createElement('div');
    feedbackBox.classList.add('feedback-box');

    if (isCorrect) {
        score++;
        feedbackBox.innerHTML = `<p><strong>¡Correcto!</strong></p>`;
        if (currentQuestion.feedback && currentQuestion.feedback.correct) {
             feedbackBox.innerHTML += `<p>${currentQuestion.feedback.correct}</p>`;
        }
        feedbackBox.classList.add('correct-feedback');
    } else {
        feedbackBox.innerHTML = `<p><strong>Incorrecto.</strong> La respuesta correcta era: ${correctAnswer}.</p>`;
        if (currentQuestion.feedback && currentQuestion.feedback.incorrect) {
            feedbackBox.innerHTML += `<p>${currentQuestion.feedback.incorrect}</p>`;
        }
        feedbackBox.classList.add('incorrect-feedback');
    }
    feedbackContainer.innerHTML = ''; // Clear previous feedback before adding new
    feedbackContainer.appendChild(feedbackBox);
    
    // Process MathJax for the feedback
    if (window.MathJax) {
        MathJax.typesetPromise([feedbackContainer]).catch((err) => console.log(err.message));
    }

    // Add to feedback summary for results screen
    if(feedbackSummary) {
        const feedbackBoxClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
        const questionStatusText = isCorrect ? 'Correcta' : 'Incorrecta';
        
        let feedbackEntryHtml = `
            <div class="feedback-box ${feedbackBoxClass}">
                <p><strong>Pregunta ${currentQuestionIndex + 1}: ${currentQuestion.text} - ${questionStatusText}</strong></p>`;
        
        if (!isCorrect) {
            feedbackEntryHtml += `<p>Tu respuesta: ${selectedOption}</p><p>Respuesta correcta: ${correctAnswer}</p>`;
        }
        if (currentQuestion.feedback) {
            const feedbackDetail = isCorrect ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect;
            if (feedbackDetail) feedbackEntryHtml += `<p><em>${feedbackDetail}</em></p>`;
        }
        feedbackEntryHtml += `</div>`;
        feedbackSummary.innerHTML += feedbackEntryHtml; 
    }

    if (nextButton) nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++; // Increment index before generating next question
    // Clear previous feedback
    if (feedbackContainer) feedbackContainer.innerHTML = '';
    generateQuestion();
}

function showResults() {
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.remove('hidden');
    // Update the specific span elements for score and total questions
    if (finalScore) finalScore.textContent = score;
    if (totalQuestions) totalQuestions.textContent = questions.length;
    
    // Process MathJax for the feedback summary
    if (window.MathJax && feedbackSummary) {
        MathJax.typesetPromise([feedbackSummary]).catch((err) => console.log(err.message));
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
    selectedModuleId = null; // Reset selected module
    allQuestionsData = {}; // Reset module questions
    if (feedbackSummary) feedbackSummary.innerHTML = '';
    if (resultsScreen) resultsScreen.classList.add('hidden');
    showModuleSelectionScreen(); // Go back to module selection
}

function showModuleSelectionScreen() {
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
}

function showDifficultyScreen() {
    if (difficultyScreen) difficultyScreen.classList.remove('hidden');
    if (moduleSelectionScreen) moduleSelectionScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
}
