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
  },
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
  {
    question: "Which part of the tooth contains the blood vessels and nerves?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp chamber contains the tooth's blood vessels, nerves, and connective tissue."
  },
  {
    question: "What is the most common cause of dry socket after a tooth extraction?",
    choices: ["Poor blood clot formation", "Excessive rinsing", "Infection", "Tobacco use"],
    correctAnswer: "Poor blood clot formation",
    explanation: "Dry socket occurs when the blood clot at the extraction site dislodges or doesn't form properly."
  },
  {
    question: "Which nerve innervates the muscles of mastication?",
    choices: ["Facial nerve", "Mandibular nerve", "Hypoglossal nerve", "Trigeminal nerve"],
    correctAnswer: "Mandibular nerve",
    explanation: "The mandibular nerve, a branch of the trigeminal nerve, is responsible for innervating the muscles of mastication."
  },
  {
    question: "Which dental instrument is used to measure pocket depth around a tooth?",
    choices: ["Scaler", "Curette", "Periodontal probe", "Explorer"],
    correctAnswer: "Periodontal probe",
    explanation: "A periodontal probe is used to measure the depth of periodontal pockets around teeth."
  },
  {
    question: "How many roots does a mandibular second molar typically have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "Mandibular molars typically have two roots: a mesial root and a distal root."
  },
  {
    question: "Which muscle helps elevate the mandible during chewing?",
    choices: ["Masseter", "Lateral pterygoid", "Mylohyoid", "Orbicularis oris"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a key muscle involved in elevating the mandible during chewing."
  },

  // Oral Pathology
  {
    question: "Which condition is commonly associated with Candida albicans in the oral cavity?",
    choices: ["Oral leukoplakia", "Oral thrush", "Herpes labialis", "Geographic tongue"],
    correctAnswer: "Oral thrush",
    explanation: "Oral thrush is a fungal infection in the mouth caused by Candida albicans."
  },
  {
    question: "Which virus is most commonly associated with oral cold sores?",
    choices: ["Herpes simplex virus", "Epstein-Barr virus", "Human papillomavirus", "Coxsackievirus"],
    correctAnswer: "Herpes simplex virus",
    explanation: "Herpes simplex virus (HSV-1) is the virus responsible for causing cold sores around the mouth."
  },
  {
    question: "What is the primary risk factor for developing oral cancer?",
    choices: ["Smoking", "Vitamin D deficiency", "Dry mouth", "Poor oral hygiene"],
    correctAnswer: "Smoking",
    explanation: "Tobacco smoking is the most significant risk factor for developing oral cancer."
  },
  {
    question: "Which premalignant oral lesion is characterized by white patches that cannot be rubbed off?",
    choices: ["Leukoplakia", "Oral lichen planus", "Candidiasis", "Aphthous ulcers"],
    correctAnswer: "Leukoplakia",
    explanation: "Leukoplakia is a premalignant lesion that presents as white patches on the oral mucosa that cannot be rubbed off."
  },
  {
    question: "What is the primary cause of gingivitis?",
    choices: ["Plaque buildup", "Tobacco use", "Trauma", "Dry mouth"],
    correctAnswer: "Plaque buildup",
    explanation: "Gingivitis is most commonly caused by the accumulation of dental plaque on the teeth and gums."
  },
  {
    question: "Which oral condition is characterized by burning sensations on the tongue and altered taste?",
    choices: ["Burning mouth syndrome", "Geographic tongue", "Leukoplakia", "Herpes labialis"],
    correctAnswer: "Burning mouth syndrome",
    explanation: "Burning mouth syndrome is characterized by a burning sensation in the mouth, often accompanied by altered taste."
  },
  {
    question: "Which of the following is a common symptom of temporomandibular joint dysfunction (TMD)?",
    choices: ["Jaw pain", "Toothache", "Gum swelling", "Bleeding gums"],
    correctAnswer: "Jaw pain",
    explanation: "TMD often presents as jaw pain, clicking, and restricted movement of the jaw."
  },
  {
    question: "Which virus is associated with hand, foot, and mouth disease?",
    choices: ["Herpes simplex virus", "Coxsackievirus", "Epstein-Barr virus", "Human papillomavirus"],
    correctAnswer: "Coxsackievirus",
    explanation: "Hand, foot, and mouth disease is caused by the coxsackievirus, presenting with oral ulcers and rash on hands and feet."
  },
  {
    question: "What is the recommended treatment for pericoronitis?",
    choices: ["Irrigation and antibiotics", "Extraction", "Filling", "Root canal"],
    correctAnswer: "Irrigation and antibiotics",
    explanation: "Pericoronitis is often treated with irrigation of the infected area and antibiotics to clear the infection."
  },
  {
    question: "Which vitamin deficiency is associated with angular cheilitis?",
    choices: ["Vitamin A", "Vitamin D", "Vitamin B12", "Vitamin C"],
    correctAnswer: "Vitamin B12",
    explanation: "Vitamin B12 deficiency can lead to angular cheilitis, a condition characterized by inflammation at the corners of the mouth."
  },

  // Restorative Dentistry
  {
    question: "Which material is commonly used for dental fillings due to its durability and strength?",
    choices: ["Amalgam", "Composite resin", "Glass ionomer", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Dental amalgam has been widely used for fillings because of its durability, strength, and cost-effectiveness."
  },
  {
    question: "What is the primary function of a dental liner?",
    choices: ["To protect the pulp", "To fill the tooth", "To bond the restoration", "To polish the restoration"],
    correctAnswer: "To protect the pulp",
    explanation: "A dental liner is used to protect the pulp from thermal and chemical irritation."
  },
  {
    question: "Which material is commonly used for temporary crowns?",
    choices: ["Stainless steel", "Acrylic resin", "Composite", "Ceramic"],
    correctAnswer: "Acrylic resin",
    explanation: "Acrylic resin is often used to make temporary crowns because it is quick to fabricate and inexpensive."
  },
  {
    question: "Which restorative material is best suited for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations due to its esthetic properties, blending with natural tooth color."
  },
  {
    question: "What is the purpose of acid etching in the placement of composite restorations?",
    choices: ["To bond the restoration", "To clean the tooth surface", "To increase adhesion", "To whiten the tooth"],
    correctAnswer: "To increase adhesion",
    explanation: "Acid etching is used to increase the surface roughness of enamel, enhancing the adhesion of composite restorations."
  },
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
  {
    question: "Which part of the tooth contains the blood vessels and nerves?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp chamber contains the tooth's blood vessels, nerves, and connective tissue."
  },
  {
    question: "Which virus is associated with hand, foot, and mouth disease?",
    choices: ["Herpes simplex virus", "Coxsackievirus", "Epstein-Barr virus", "Human papillomavirus"],
    correctAnswer: "Coxsackievirus",
    explanation: "Hand, foot, and mouth disease is caused by the coxsackievirus, presenting with oral ulcers and rash on hands and feet."
  },
  {
    question: "Which of the following is a premalignant condition of the oral cavity?",
    choices: ["Oral leukoplakia", "Aphthous ulcers", "Oral lichen planus", "Candidiasis"],
    correctAnswer: "Oral leukoplakia",
    explanation: "Leukoplakia is considered a premalignant lesion that can potentially progress to oral cancer."
  },
  {
    question: "Which condition is characterized by red, swollen gums that bleed easily?",
    choices: ["Gingivitis", "Periodontitis", "Glossitis", "Leukoplakia"],
    correctAnswer: "Gingivitis",
    explanation: "Gingivitis is inflammation of the gums that results in redness, swelling, and easy bleeding, usually due to plaque buildup."
  },
  {
    question: "What is the primary cause of halitosis?",
    choices: ["Bacterial breakdown of food particles", "Oral candidiasis", "Gingival inflammation", "Dry mouth"],
    correctAnswer: "Bacterial breakdown of food particles",
    explanation: "Bad breath (halitosis) is commonly caused by anaerobic bacteria in the mouth breaking down food particles."
  },
  {
    question: "Which restorative material is best suited for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations due to its esthetic properties, blending with natural tooth color."
  },
  // Continue adding more questions until you reach 100 questions
  {
    question: "Which dental material is most commonly used for posterior restorations due to its strength and durability?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Dental amalgam is widely used for posterior restorations because of its strength, durability, and ability to withstand occlusal forces."
  },
  {
    question: "Which is the primary reason for a root canal treatment?",
    choices: ["To treat an infected or necrotic pulp", "To place a dental crown", "To close gaps between teeth", "To whiten teeth"],
    correctAnswer: "To treat an infected or necrotic pulp",
    explanation: "Root canal treatment is performed to remove infected or necrotic pulp tissue and save the tooth."
  },
  {
    question: "What is the recommended fluoride concentration in toothpaste for adults with moderate to high caries risk?",
    choices: ["1000 ppm", "1450 ppm", "5000 ppm", "6000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "For adults with moderate to high caries risk, fluoride toothpaste with a concentration of 5000 ppm is recommended."
  },
  {
    question: "Which vitamin is essential for preventing gingival bleeding?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin C",
    explanation: "Vitamin C is essential for maintaining healthy connective tissue and preventing gingival bleeding."
  },
  {
    question: "Which of the following radiographic techniques is best for visualizing a horizontal fracture of the mandible?",
    choices: ["Occlusal", "Periapical", "Panoramic", "Bitewing"],
    correctAnswer: "Panoramic",
    explanation: "A panoramic radiograph provides a broad view of the mandible and is useful for diagnosing fractures."
  },
  {
    question: "What is the most common cause of dry socket after a tooth extraction?",
    choices: ["Poor blood clot formation", "Excessive rinsing", "Infection", "Tobacco use"],
    correctAnswer: "Poor blood clot formation",
    explanation: "Dry socket occurs when the blood clot at the extraction site dislodges or doesn't form properly."
  },
  {
    question: "What is the recommended treatment for a dental abscess in a patient allergic to penicillin?",
    choices: ["Clindamycin", "Amoxicillin", "Metronidazole", "Cephalexin"],
    correctAnswer: "Clindamycin",
    explanation: "Clindamycin is a suitable alternative antibiotic for treating dental abscesses in patients with a penicillin allergy."
  },
  {
    question: "Which nerve is primarily responsible for innervating the muscles of mastication?",
    choices: ["Facial nerve", "Mandibular nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"],
    correctAnswer: "Mandibular nerve",
    explanation: "The mandibular nerve, a branch of the trigeminal nerve, innervates the muscles of mastication."
  },
  {
    question: "Which dental instrument is used to measure pocket depth around a tooth?",
    choices: ["Scaler", "Curette", "Periodontal probe", "Explorer"],
    correctAnswer: "Periodontal probe",
    explanation: "A periodontal probe is used to measure the depth of periodontal pockets around teeth."
  },
  {
    question: "What is the function of fluoride in preventing dental caries?",
    choices: ["Whitening teeth", "Strengthening enamel", "Desensitizing dentin", "Reducing plaque"],
    correctAnswer: "Strengthening enamel",
    explanation: "Fluoride helps prevent dental caries by strengthening the enamel and making it more resistant to acid attacks."
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
