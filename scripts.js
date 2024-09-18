const questions = [
  {
    question: "Which nerve provides sensory innervation to the lower lip?",
    choices: ["Inferior alveolar nerve", "Lingual nerve", "Buccal nerve", "Mental nerve"],
    correctAnswer: "Mental nerve",
    explanation: "The mental nerve, a branch of the inferior alveolar nerve, provides sensory innervation to the lower lip."
  },
  {
    question: "How many roots does a typical maxillary first molar have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "The maxillary first molar typically has three roots: two buccal and one palatal."
  },
  {
    question: "Which muscle is primarily responsible for closing the mouth?",
    choices: ["Masseter", "Buccinator", "Temporalis", "Lateral pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a powerful muscle that elevates the mandible to close the mouth."
  },
  {
    question: "Which tooth is most commonly congenitally missing?",
    choices: ["Maxillary lateral incisor", "Mandibular canine", "Maxillary first premolar", "Mandibular second molar"],
    correctAnswer: "Maxillary lateral incisor",
    explanation: "The maxillary lateral incisor is one of the most commonly congenitally missing teeth."
  },
  // (Continue adding questions until you have a total of 100 questions)
  {
    question: "Which restorative material is best suited for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations due to its esthetic properties, blending with natural tooth color."
  },
  {
    question: "Which dental procedure involves the removal of decayed tooth material and the placement of a restorative material?",
    choices: ["Cavity preparation and filling", "Crown placement", "Root canal treatment", "Dental extraction"],
    correctAnswer: "Cavity preparation and filling",
    explanation: "Cavity preparation involves the removal of decayed tooth structure, followed by the placement of a restorative material to restore function."
  }
];

// Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the quiz
function displayQuiz() {
  shuffleArray(questions);  // Shuffle questions
  const quizForm = document.getElementById('quizForm');
  quizForm.innerHTML = '';  // Clear previous content
  
  // Display only the first 100 questions
  questions.slice(0, 100).forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);
    
    question.choices.forEach(choice => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${choice}"> ${choice}`;
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });
    
    quizForm.appendChild(questionDiv);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);

  document.getElementById('result').textContent = '';  // Clear result
  document.getElementById('retakeButton').style.display = 'none';  // Hide retake button
}

// Function to grade the quiz
function gradeQuiz(event) {
  event.preventDefault();
  
  let score = 0;
  let explanations = "";
  const formData = new FormData(document.getElementById('quizForm'));
  
  questions.slice(0, 100).forEach((question, index) => {
    const userAnswer = formData.get(`q${index}`);
    if (userAnswer === question.correctAnswer) {
      score++;
    } else {
      explanations += `<p>Question ${index + 1}: The correct answer is <strong>${question.correctAnswer}</strong>. ${question.explanation}</p>`;
    }
  });
  
  const totalQuestions = 100;  // Assuming we're displaying 100 questions
  const result = document.getElementById('result');
  result.innerHTML = `You scored ${score} out of ${totalQuestions}. ${explanations}`;
  
  document.getElementById('retakeButton').style.display = 'block';  // Show retake button
}

// Function to retake the quiz
function retakeQuiz() {
  displayQuiz();  // Re-randomize and redisplay questions
}

// Initialize the quiz
document.getElementById('quizForm').addEventListener('submit', gradeQuiz);
document.getElementById('retakeButton').addEventListener('click', retakeQuiz);

// Load the quiz initially
displayQuiz();
