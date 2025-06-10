// Define the types of matrices and their descriptions/properties
// This can be removed if questions are fully provided by the new bank
// const matrixTypes = [ ... ];

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let allModulesData = []; // To store all modules from questions.json
let selectedModuleId = null; // To store the ID of the selected module
let selectedModuleData = null; // To store the complete data of the selected module
let selectedDifficulty = null; // To store the selected difficulty level
let allQuestionsData = {}; // To store questions of the selected module by difficulty

// Quiz configuration
const MAX_QUESTIONS = 10; // Maximum number of questions per quiz

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

// New elements for module info and back button
let selectedModuleName;
let selectedModuleDescription;
let backToModulesButton;

// Elements for results screen module/difficulty info
let resultsModuleName;
let resultsDifficulty;

// Buttons for difficulty
let startBasicButton;
let startIntermediateButton;
let startAdvancedButton;

// --- NUEVA LÓGICA DE RENDERIZADO Y FEEDBACK ---

// Elemento para la pista/hint
let questionHintElem;
let prevButton;

// Estado de respuestas del usuario
let userAnswers = [];
let userCorrectStatus = [];

document.addEventListener('DOMContentLoaded', () => {
    // Assign DOM elements to variables
    moduleSelectionScreen = document.getElementById('module-selection-screen');
    moduleOptionsContainer = document.getElementById('module-options-container');
    difficultyScreen = document.getElementById('difficulty-screen');
    quizScreen = document.getElementById('quiz-screen');
    resultsScreen = document.getElementById('results-screen');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    feedbackContainer = document.getElementById('feedback-container');
    nextButton = document.getElementById('next-button');
    feedbackSummary = document.getElementById('feedback-summary');
    finalScore = document.getElementById('score');
    totalQuestions = document.getElementById('total-questions');
    restartButton = document.getElementById('restart-button');

    selectedModuleName = document.getElementById('selected-module-name');
    selectedModuleDescription = document.getElementById('selected-module-description');
    backToModulesButton = document.getElementById('back-to-modules');

    resultsModuleName = document.getElementById('results-module-name');
    resultsDifficulty = document.getElementById('results-difficulty');

    startBasicButton = document.getElementById('start-basic');
    startIntermediateButton = document.getElementById('start-intermediate');
    startAdvancedButton = document.getElementById('start-advanced');

    questionHintElem = document.getElementById('question-hint');
    if (!questionHintElem) {
        questionHintElem = document.createElement('p');
        questionHintElem.id = 'question-hint';
        questionHintElem.className = 'text-gray-500 text-sm italic mb-4';
        if (questionText && questionText.parentNode) {
            questionText.parentNode.insertBefore(questionHintElem, questionText.nextSibling);
        }
    }

    prevButton = document.getElementById('prev-btn');
    if (!prevButton) {
        prevButton = document.createElement('button');
        prevButton.id = 'prev-btn';
        prevButton.textContent = 'Atrás';
        prevButton.className = 'px-5 py-2 rounded-lg text-white font-semibold';
        prevButton.disabled = true;
        const nav = document.getElementById('navigation-buttons');
        if (nav) nav.insertBefore(prevButton, nav.firstChild);
    }
    
    // Initialize event listeners
    if (nextButton) nextButton.addEventListener('click', nextQuestion);
    if (restartButton) restartButton.addEventListener('click', restartQuiz);
    if (backToModulesButton) backToModulesButton.addEventListener('click', showModuleSelectionScreen);
    if (prevButton) prevButton.addEventListener('click', prevQuestion);

    if (startBasicButton) startBasicButton.addEventListener('click', () => startQuiz('basico'));
    if (startIntermediateButton) startIntermediateButton.addEventListener('click', () => startQuiz('intermedio'));
    if (startAdvancedButton) startAdvancedButton.addEventListener('click', () => startQuiz('avanzado'));

    // Set initial screen visibility: Module selection should be visible first.
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');

    fetchQuestions(); // Fetch data and then populate module selection
});

async function fetchQuestions() {
    try {
        const response = await fetch('./questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allModulesData = data.quizModules; // Store all modules

        // Ensure module screen is shown before populating
        if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
        if (difficultyScreen) difficultyScreen.classList.add('hidden');
        if (quizScreen) quizScreen.classList.add('hidden');
        if (resultsScreen) resultsScreen.classList.add('hidden');
        
        populateModuleSelectionScreen(); // Now populate
    } catch (error) {
        console.error("Error fetching questions:", error);
        if (moduleOptionsContainer) {
            moduleOptionsContainer.innerHTML = "<p class='error-text'>Error al cargar los módulos. Por favor, inténtalo de nuevo más tarde.</p>";
        }
        // Ensure module screen is shown even on error, with other screens hidden
        if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
        if (difficultyScreen) difficultyScreen.classList.add('hidden');
        if (quizScreen) quizScreen.classList.add('hidden');
        if (resultsScreen) resultsScreen.classList.add('hidden');
    }
}

function populateModuleSelectionScreen() {
    if (!moduleOptionsContainer) {
        console.error("moduleOptionsContainer no encontrado. No se pueden poblar los módulos.");
        return;
    }

    // Ensure module selection screen is visible and others are hidden
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');

    moduleOptionsContainer.innerHTML = ''; // Clear previous options

    if (!allModulesData || allModulesData.length === 0) {
        moduleOptionsContainer.innerHTML = "<p class='info-text'>No hay módulos disponibles en este momento.</p>";
        console.warn("No hay datos de módulos para mostrar o allModulesData está vacío.");
        return;
    }
    
    allModulesData.forEach(module => {
        const button = document.createElement('button');
        button.textContent = module.name;
        button.classList.add('start-button'); // Re-use existing button style
        button.addEventListener('click', () => selectModule(module));
        moduleOptionsContainer.appendChild(button);
    });
}

function showModuleSelectionScreen() {
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    
    // Optionally, reset parts of the state if going "back to modules" implies a reset
    // For now, just ensures the module list is shown. Full reset is handled by restartQuiz.
    populateModuleSelectionScreen(); 
}

function showDifficultyScreen() {
    // Module name and description are updated in selectModule directly.
    // This function just handles screen visibility.
    if (moduleSelectionScreen) moduleSelectionScreen.classList.add('hidden');
    if (difficultyScreen) difficultyScreen.classList.remove('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
}

function selectModule(module) {
    selectedModuleId = module.id;
    selectedModuleData = module; // Store complete module data
    allQuestionsData = module.difficultyLevels; // Load questions for the selected module
    
    // Update module info display
    if (selectedModuleName) selectedModuleName.textContent = module.name;
    if (selectedModuleDescription) selectedModuleDescription.textContent = module.description;
    
    showDifficultyScreen();
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to select random questions from the available pool
function selectRandomQuestions(questionPool, maxQuestions) {
    if (!questionPool || questionPool.length === 0) {
        return [];
    }
    
    // If we have fewer questions than the maximum, return all shuffled
    if (questionPool.length <= maxQuestions) {
        return shuffleArray(questionPool);
    }
    
    // Shuffle the pool and take the first maxQuestions
    const shuffled = shuffleArray(questionPool);
    return shuffled.slice(0, maxQuestions);
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
    
    // Store the selected difficulty level
    selectedDifficulty = difficulty;
    
    const questionPool = allQuestionsData[difficulty];
    if (!questionPool || questionPool.length === 0) {
        alert(`No hay preguntas disponibles para el nivel ${difficulty} en el módulo seleccionado.`);
        return;
    }
    
    // Select random questions from the pool (maximum 10 questions)
    questions = selectRandomQuestions(questionPool, MAX_QUESTIONS);
    
    if (questions.length === 0) {
        alert(`Error al seleccionar preguntas para el nivel ${difficulty}.`);
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    if (feedbackSummary) feedbackSummary.innerHTML = ''; // Clear previous feedback summary
    if (quizScreen) quizScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (moduleSelectionScreen) moduleSelectionScreen.classList.add('hidden');
    generateQuestion();
}

// Function to generate a question
function generateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        // Render pregunta
        if (questionText) {
            questionText.innerHTML = currentQuestion.text;
            if (window.MathJax) MathJax.typesetPromise([questionText]);
        }
        // Render pista si no ha respondido
        if (questionHintElem) {
            if (userAnswers[currentQuestionIndex] == null && currentQuestion.hint) {
                questionHintElem.textContent = `Pista: ${currentQuestion.hint}`;
                questionHintElem.classList.remove('hidden');
            } else {
                questionHintElem.classList.add('hidden');
            }
        }
        // Render opciones
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            currentQuestion.options.forEach((option, idx) => {
                const button = document.createElement('button');
                button.classList.add('option-button');
                button.innerHTML = `${String.fromCharCode(65 + idx)}. ${option}`;
                button.onclick = () => selectAnswer(idx);
                optionsContainer.appendChild(button);
            });
            if (window.MathJax) MathJax.typesetPromise([optionsContainer]);
        }
        // Feedback inmediato dentro de la opción seleccionada
        if (userAnswers[currentQuestionIndex] != null) {
            renderFeedback(currentQuestionIndex);
        }
        // Navegación
        updateNavigationButtons();
        if (nextButton) nextButton.classList.remove('hidden');
    } else {
        showResults();
    }
}

function selectAnswer(selectedIdx) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIdx;
    const isCorrect = currentQuestion.options[selectedIdx] === currentQuestion.correctAnswer;
    userCorrectStatus[currentQuestionIndex] = isCorrect;
    // No modificar score aquí, se recalcula en showResults
    renderFeedback(currentQuestionIndex);
    if (questionHintElem) questionHintElem.classList.add('hidden');
}

function renderFeedback(qIdx) {
    const currentQuestion = questions[qIdx];
    const selectedIdx = userAnswers[qIdx];
    const correctIdx = currentQuestion.options.findIndex(opt => opt === currentQuestion.correctAnswer);
    Array.from(optionsContainer.children).forEach((button, idx) => {
        button.disabled = true;
        button.classList.remove('correct', 'incorrect', 'selected');
        // Limpiar feedback anterior
        Array.from(button.querySelectorAll('.answer-feedback, .answer-feedback-rationale')).forEach(e => e.remove());
        if (idx === selectedIdx) {
            if (idx === correctIdx) {
                button.classList.add('correct');
                const feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'answer-feedback correct';
                feedbackDiv.innerHTML = `<svg class="icon" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" fill="currentColor"></path></svg> Respuesta correcta`;
                button.appendChild(feedbackDiv);
            } else {
                button.classList.add('incorrect');
                const feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'answer-feedback incorrect';
                feedbackDiv.innerHTML = `<svg class="icon" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" fill="currentColor"></path></svg> Respuesta incorrecta`;
                button.appendChild(feedbackDiv);
            }
            // Justificación
            const rationaleDiv = document.createElement('div');
            rationaleDiv.className = 'answer-feedback-rationale';
            rationaleDiv.innerHTML = currentQuestion.explanation || '';
            button.appendChild(rationaleDiv);
        }
        if (idx === correctIdx && idx !== selectedIdx) {
            button.classList.add('correct');
        }
    });
    if (window.MathJax) MathJax.typesetPromise([optionsContainer]);
    if (nextButton) nextButton.classList.remove('hidden');
}

function updateNavigationButtons() {
    if (!prevButton || !nextButton) return;
    prevButton.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = 'Finalizar Test';
    } else {
        nextButton.textContent = 'Siguiente';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        generateQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        generateQuestion();
    }
}

function showResults() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.remove('hidden');
    // Calcular score real basado en respuestas correctas
    let realScore = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        const q = questions[i];
        if (userAnswers[i] != null && q.options[userAnswers[i]] === q.correctAnswer) {
            realScore++;
        }
    }
    if (finalScore) finalScore.textContent = realScore;
    if (totalQuestions) totalQuestions.textContent = questions.length;
    // Update module and difficulty information
    if (resultsModuleName && selectedModuleData) {
        resultsModuleName.textContent = selectedModuleData.name;
    }
    if (resultsDifficulty && selectedDifficulty) {
        // Convert difficulty names to Spanish
        const difficultyNames = {
            'basico': 'Básico',
            'intermedio': 'Intermedio',
            'avanzado': 'Avanzado'
        };
        resultsDifficulty.textContent = difficultyNames[selectedDifficulty] || selectedDifficulty;
    }
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
    selectedModuleData = null; // Reset selected module data
    selectedDifficulty = null; // Reset selected difficulty
    allQuestionsData = {}; // Reset module questions
    userAnswers = [];
    userCorrectStatus = [];
    if (feedbackSummary) feedbackSummary.innerHTML = '';
    
    // Ensure correct screens are shown/hidden
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden'); // Show module selection
    
    populateModuleSelectionScreen(); // Repopulate modules
}
