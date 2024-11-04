document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startButton = document.getElementById('start-quiz');
    const restartButton = document.getElementById('restart-quiz');
    const questionImage = document.getElementById('question-image');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackElement = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score-display');
    const progressRing = document.querySelector('.progress-ring__circle-progress');
    const progressText = document.querySelector('.progress-text');
  
    // Quiz State
    let currentQuestionIndex = 0;
    let score = 0;
    let isAnswerSelected = false;
  
    // Progress Ring Setup
    const radius = 36;
    const circumference = radius * 2 * Math.PI;
    progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
  
    function updateProgress(current, total) {
      const progress = current / total;
      const offset = circumference - progress * circumference;
      progressRing.style.strokeDashoffset = offset;
      progressText.textContent = `${Math.round(progress * 100)}%`;
    }
  
    function showScreen(screen) {
      [welcomeScreen, quizScreen, resultsScreen].forEach(s => s.classList.add('hidden'));
      screen.classList.remove('hidden');
    }
  
    function displayQuestion(question) {
      // Update question text
      questionText.textContent = question.text;
  
      // Handle question image
      if (question.imageUrl) {
        questionImage.innerHTML = `<img src="${question.imageUrl}" alt="Question visual">`;
        questionImage.classList.remove('hidden');
      } else {
        questionImage.classList.add('hidden');
      }
  
      // Create option buttons
      optionsContainer.innerHTML = '';
      question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.addEventListener('click', () => handleAnswerSelection(index));
        optionsContainer.appendChild(button);
      });
  
      // Reset feedback
      feedbackElement.classList.add('hidden');
      isAnswerSelected = false;
  
      // Update progress
      updateProgress(currentQuestionIndex + 1, questions.length);
    }
  
    function handleAnswerSelection(selectedIndex) {
      if (isAnswerSelected) return;
      isAnswerSelected = true;
  
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedIndex === currentQuestion.correctAnswer;
      const buttons = optionsContainer.querySelectorAll('.option-button');
  
      // Disable all buttons
      buttons.forEach(button => button.disabled = true);
  
      // Show correct/incorrect styling
      buttons[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        buttons[currentQuestion.correctAnswer].classList.add('correct');
      }
  
      // Show feedback
      feedbackElement.textContent = currentQuestion.explanation;
      feedbackElement.classList.remove('hidden');
      feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
  
      // Update score
      if (isCorrect) score++;
  
      // Move to next question or show results after delay
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          displayQuestion(questions[currentQuestionIndex]);
        } else {
          showResults();
        }
      }, 2000);
    }
  
    function showResults() {
      showScreen(resultsScreen);
      const percentage = Math.round((score / questions.length) * 100);
      scoreDisplay.textContent = `You scored ${score} out of ${questions.length} (${percentage}%)`;
    }
  
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      showScreen(quizScreen);
      displayQuestion(questions[0]);
    }
  
    // Event Listeners
    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', startQuiz);
  
    // Initialize welcome screen
    showScreen(welcomeScreen);
  });