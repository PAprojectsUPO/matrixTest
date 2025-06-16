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
    console.log("DOM loaded, initializing elements...");
    
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

    questionHintElem = document.getElementById('question-hint'); // Assign from static HTML element
    
    console.log("DOM elements assigned:");
    console.log("moduleSelectionScreen:", moduleSelectionScreen);
    console.log("moduleOptionsContainer:", moduleOptionsContainer);

    prevButton = document.getElementById('prev-btn');
    if (!prevButton) {
        prevButton = document.createElement('button');
        prevButton.id = 'prev-btn';
        prevButton.textContent = 'Atrás';
        prevButton.className = 'px-5 py-2 rounded-lg text-white font-semibold'; // Consider Tailwind classes if consistent
        prevButton.disabled = true;
        const nav = document.getElementById('navigation-buttons');
        if (nav) nav.insertBefore(prevButton, nav.firstChild);
    }
    
    // Initialize event listeners
    if (nextButton) nextButton.addEventListener('click', nextQuestion);
    if (restartButton) restartButton.addEventListener('click', restartQuiz);
    if (backToModulesButton) backToModulesButton.addEventListener('click', showModuleSelectionScreen);
    if (prevButton) prevButton.addEventListener('click', prevQuestion);

    // Add event listener for show results button
    const showResultsButton = document.getElementById('show-results-button');
    if (showResultsButton) showResultsButton.addEventListener('click', showResults);

    if (startBasicButton) startBasicButton.addEventListener('click', () => startQuiz('basico'));
    if (startIntermediateButton) startIntermediateButton.addEventListener('click', () => startQuiz('intermedio'));
    if (startAdvancedButton) startAdvancedButton.addEventListener('click', () => startQuiz('avanzado'));

    // Set initial screen visibility: Module selection should be visible first.
    if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');

    console.log("About to call fetchQuestions()");
    fetchQuestions().then(() => {
        console.log("fetchQuestions completed successfully");
    }).catch(error => {
        console.error("fetchQuestions failed:", error);
    });
});

async function fetchQuestions() {
    console.log("=== fetchQuestions START ===");
    
    try {
        console.log("Fetching questions.json...");
        const response = await fetch('./questions.json');
        console.log("Fetch response status:", response.status);
        console.log("Fetch response ok:", response.ok);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log("Parsing JSON...");
        const data = await response.json();
        console.log("JSON parsed successfully");
        console.log("Data structure:", {
            hasQuizModules: !!data.quizModules,
            quizModulesType: typeof data.quizModules,
            quizModulesLength: data.quizModules ? data.quizModules.length : 'N/A'
        });
        
        if (!data.quizModules || !Array.isArray(data.quizModules)) {
            throw new Error("Invalid data structure: quizModules not found or not an array");
        }
        
        allModulesData = data.quizModules;
        console.log("allModulesData assigned:", allModulesData.length, "modules");

        // Show module selection screen
        if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
        if (difficultyScreen) difficultyScreen.classList.add('hidden');
        if (quizScreen) quizScreen.classList.add('hidden');
        if (resultsScreen) resultsScreen.classList.add('hidden');
        
        console.log("Calling populateModuleSelectionScreen...");
        populateModuleSelectionScreen();
        console.log("=== fetchQuestions COMPLETE ===");
        
    } catch (error) {
        console.error("Error in fetchQuestions:", error);
        console.error("Error stack:", error.stack);
        
        // Set fallback data
        allModulesData = [];
        
        if (moduleOptionsContainer) {
            moduleOptionsContainer.innerHTML = `<p class='error-text'>Error al cargar los módulos: ${error.message}</p>`;
        }
        
        // Ensure module screen is shown even on error
        if (moduleSelectionScreen) moduleSelectionScreen.classList.remove('hidden');
        if (difficultyScreen) difficultyScreen.classList.add('hidden');
        if (quizScreen) quizScreen.classList.add('hidden');
        if (resultsScreen) resultsScreen.classList.add('hidden');
    }
}

function populateModuleSelectionScreen() {
    console.log("=== populateModuleSelectionScreen DEBUG ===");
    console.log("moduleOptionsContainer:", moduleOptionsContainer);
    console.log("allModulesData:", allModulesData);
    console.log("allModulesData type:", typeof allModulesData);
    console.log("allModulesData.length:", allModulesData ? allModulesData.length : 'N/A');
    
    if (!moduleOptionsContainer) {
        console.error("moduleOptionsContainer no encontrado!");
        return;
    }

    // Clear previous options
    moduleOptionsContainer.innerHTML = '';

    if (!allModulesData || !Array.isArray(allModulesData) || allModulesData.length === 0) {
        console.warn("No hay datos de módulos válidos");
        moduleOptionsContainer.innerHTML = "<p class='info-text'>No hay módulos disponibles en este momento.</p>";
        return;
    }
    
    console.log("Creating buttons for", allModulesData.length, "modules");
    
    allModulesData.forEach((module, index) => {
        console.log(`Processing module ${index}:`, module);
        console.log(`Module name: '${module.name}'`);
        
        const button = document.createElement('button');
        button.className = 'start-button';
        
        // Ensure we have a valid name
        const moduleName = module && module.name ? module.name : `Módulo ${index + 1}`;
        button.textContent = moduleName;
        
        button.addEventListener('click', () => {
            console.log("Module selected:", module);
            selectModule(module);
        });
        
        moduleOptionsContainer.appendChild(button);
        console.log(`Button created for: ${moduleName}`);
    });
    
    console.log("=== populateModuleSelectionScreen COMPLETE ===");
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
    userAnswers = [];
    userCorrectStatus = [];
    
    // Clear feedback containers and reset display states
    if (feedbackSummary) feedbackSummary.innerHTML = '';
    if (feedbackContainer) feedbackContainer.innerHTML = '';
    
    // Set up initial screen visibility
    if (quizScreen) quizScreen.classList.remove('hidden');
    if (difficultyScreen) difficultyScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (moduleSelectionScreen) moduleSelectionScreen.classList.add('hidden');
    
    generateQuestion();
}

// Function to generate a question
function generateQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        updateNavigationButtons();
    } else {
        showResults();
    }
}

function selectAnswer(selectedIdx) {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Prevenir cambios de respuesta si ya se respondió esta pregunta
    if (userAnswers[currentQuestionIndex] !== undefined) {
        console.log("Esta pregunta ya fue respondida. No se permite cambiar la respuesta.");
        return;
    }
    
    userAnswers[currentQuestionIndex] = selectedIdx;
    const isCorrect = currentQuestion.options[selectedIdx] === currentQuestion.correctAnswer;
    userCorrectStatus[currentQuestionIndex] = isCorrect;
    
    // Actualizar score si la respuesta es correcta
    if (isCorrect) {
        score++;
    }
    
    console.log(`Question ${currentQuestionIndex + 1}: Answer selected, isCorrect: ${isCorrect}, Current score: ${score}`);
    
    renderFeedback(currentQuestionIndex);
    if (questionHintElem) questionHintElem.style.display = 'none';
    
    // Show next button after answering
    if (nextButton) {
        nextButton.classList.remove('hidden');
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.textContent = 'Finalizar Test';
        } else {
            nextButton.textContent = 'Siguiente';
        }
    }
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
    
    // Actualizar la variable global score y mostrar en pantalla
    score = realScore;
    if (finalScore) finalScore.textContent = score;
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

    // Create detailed feedback summary
    if (feedbackSummary) {
        feedbackSummary.innerHTML = ''; // Clear previous feedback

        questions.forEach((question, index) => {
            const questionResultDiv = document.createElement('div');
            questionResultDiv.classList.add('question-result-item', 'mb-6', 'pb-4', 'border-b', 'border-gray-700');

            const questionTitle = document.createElement('h4');
            questionTitle.classList.add('text-lg', 'font-semibold', 'mb-2', 'text-blue-400');
            questionTitle.innerHTML = `Pregunta ${index + 1}: ${question.text}`;

            const userAnswerPara = document.createElement('p');
            userAnswerPara.classList.add('text-sm', 'mb-1');
            const userAnswerIndex = userAnswers[index];
            const isAnswered = userAnswerIndex !== undefined && userAnswerIndex !== null;
            const userAnswerDisplay = isAnswered && question.options ? question.options[userAnswerIndex] : "No respondida";
            const answerCorrect = isAnswered && userCorrectStatus[index];
            userAnswerPara.innerHTML = `Tu respuesta: <span class="font-medium ${answerCorrect ? 'text-green-400' : 'text-red-400'}">${userAnswerDisplay}</span>`;

            const correctAnswerPara = document.createElement('p');
            correctAnswerPara.classList.add('text-sm', 'mb-1');
            correctAnswerPara.innerHTML = `Respuesta correcta: <span class="font-medium text-green-400">${question.correctAnswer}</span>`;
            
            questionResultDiv.appendChild(questionTitle);
            questionResultDiv.appendChild(userAnswerPara);
            questionResultDiv.appendChild(correctAnswerPara);

            if (question.explanation) {
                const explanationPara = document.createElement('p');
                explanationPara.classList.add('text-sm', 'text-gray-400', 'italic', 'mt-1');
                explanationPara.innerHTML = `Explicación: ${question.explanation}`;
                questionResultDiv.appendChild(explanationPara);
            }
            feedbackSummary.appendChild(questionResultDiv);
        });
    }
    
    // Process MathJax for the feedback summary
    if (window.MathJax && feedbackSummary) {
        MathJax.typesetPromise([feedbackSummary]).catch((err) => console.log(err.message));
    }
}

// Function to display the question and options
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        console.error("Current question is undefined. Index:", currentQuestionIndex, "Questions:", questions);
        // Potentially handle this error by showing an error message or navigating away
        return;
    }

    if (questionText) questionText.innerHTML = currentQuestion.text; // Use innerHTML for potential MathJax
    
    // Check if this question was already answered
    const isAlreadyAnswered = userAnswers[currentQuestionIndex] !== undefined;
    
    if (optionsContainer) {
        optionsContainer.innerHTML = ''; // Clear previous options
        if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.classList.add('option-button');
                
                // Wrap option text in a span for better layout control
                const optionTextSpan = document.createElement('span');
                optionTextSpan.className = 'option-main-text';
                optionTextSpan.innerHTML = option; // Use innerHTML for potential MathJax
                button.appendChild(optionTextSpan);
                
                // Only add click listener if question hasn't been answered
                if (!isAlreadyAnswered) {
                    button.addEventListener('click', () => selectAnswer(index));
                } else {
                    // Disable button and show visual indication
                    button.disabled = true;
                    button.style.cursor = 'not-allowed';
                }
                
                optionsContainer.appendChild(button);
            });
        } else {
            console.error("Options are missing or not an array for question:", currentQuestion);
        }
    }

    // If question was already answered, show the feedback immediately
    if (isAlreadyAnswered) {
        renderFeedback(currentQuestionIndex);
        // Hide hint for answered questions
        if (questionHintElem) questionHintElem.style.display = 'none';
        
        // Add a message indicating the question was already answered
        if (feedbackContainer) {
            const alreadyAnsweredMsg = document.createElement('p');
            alreadyAnsweredMsg.className = 'text-sm text-yellow-400 font-medium mt-2';
            alreadyAnsweredMsg.innerHTML = '⚠️ Ya respondiste esta pregunta. No puedes cambiar tu respuesta.';
            feedbackContainer.appendChild(alreadyAnsweredMsg);
        }
    } else {
        // Clear any previous feedback for unanswered questions
        if (feedbackContainer) feedbackContainer.innerHTML = '';
        
        // Show hint only for unanswered questions
        if (questionHintElem) {
            if (currentQuestion.hint) {
                questionHintElem.textContent = currentQuestion.hint;
                questionHintElem.style.display = 'block';
            } else {
                questionHintElem.textContent = '';
                questionHintElem.style.display = 'none';
            }
        }
    }

    // Update navigation buttons
    if (prevButton) prevButton.disabled = currentQuestionIndex === 0;
    
    // Show/hide next button based on whether question is answered
    if (nextButton) {
        if (isAlreadyAnswered) {
            nextButton.classList.remove('hidden');
        } else {
            nextButton.classList.add('hidden');
        }
    }
    
    // Update next button text
    if (nextButton) {
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.textContent = 'Finalizar Test';
        } else {
            nextButton.textContent = 'Siguiente';
        }
    }
    
    const showResultsButton = document.getElementById('show-results-button');
    if (showResultsButton) showResultsButton.classList.add('hidden'); // Hide by default


    // Ensure MathJax typesets the content
    if (window.MathJax) {
        const elementsToTypeset = [questionText, optionsContainer].filter(Boolean);
        window.MathJax.typesetPromise(elementsToTypeset)
            .catch((err) => console.error('MathJax typesetting error in displayQuestion:', err));
    }
    
    if (feedbackContainer) feedbackContainer.innerHTML = ''; // Clear previous feedback
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
