const questions = [
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
    question: "What is the purpose of acid etching in the placement of composite restorations?",
    choices: ["To bond the restoration", "To clean the tooth surface", "To increase adhesion", "To whiten the tooth"],
    correctAnswer: "To increase adhesion",
    explanation: "Acid etching is used to increase the surface roughness of enamel, enhancing the adhesion of composite restorations."
  },
  {
    question: "Which tooth has the longest root in the human dentition?",
    choices: ["Maxillary canine", "Mandibular first molar", "Maxillary central incisor", "Maxillary second premolar"],
    correctAnswer: "Maxillary canine",
    explanation: "The maxillary canine has the longest root of all teeth in the human dentition."
  },
  {
    question: "Which nerve supplies sensation to the mandibular teeth?",
    choices: ["Inferior alveolar nerve", "Facial nerve", "Maxillary nerve", "Lingual nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve supplies sensation to all mandibular teeth."
  },
  {
    question: "How many cusps does a typical mandibular second molar have?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation: "The mandibular second molar typically has four cusps."
  },
  {
    question: "Which nerve provides sensory innervation to the anterior two-thirds of the tongue?",
    choices: ["Glossopharyngeal nerve", "Lingual nerve", "Facial nerve", "Hypoglossal nerve"],
    correctAnswer: "Lingual nerve",
    explanation: "The lingual nerve, a branch of the mandibular nerve, supplies sensation to the anterior two-thirds of the tongue."
  },
  {
    question: "Which muscle is responsible for retracting the tongue?",
    choices: ["Styloglossus", "Hyoglossus", "Genioglossus", "Palatoglossus"],
    correctAnswer: "Styloglossus",
    explanation: "The styloglossus muscle retracts the tongue back into the oral cavity."
  },
  {
    question: "How many roots does a maxillary first premolar usually have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "A maxillary first premolar typically has two roots."
  },
  {
    question: "Which part of the tooth contains living cells?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp contains the blood vessels, nerves, and living cells that nourish the tooth."
  },
  {
    question: "Which tooth typically erupts first in primary dentition?",
    choices: ["Maxillary central incisor", "Mandibular central incisor", "Maxillary lateral incisor", "Mandibular first molar"],
    correctAnswer: "Mandibular central incisor",
    explanation: "The mandibular central incisor is usually the first tooth to erupt in primary dentition."
  },
  {
    question: "Which salivary gland produces the most saliva during meals?",
    choices: ["Parotid gland", "Submandibular gland", "Sublingual gland", "Minor salivary glands"],
    correctAnswer: "Parotid gland",
    explanation: "The parotid gland produces the most saliva during meals, secreting a serous (watery) fluid."
  },
  {
    question: "Which teeth are referred to as the '6-year molars'?",
    choices: ["First molars", "Second molars", "Third molars", "Premolars"],
    correctAnswer: "First molars",
    explanation: "The first molars, which erupt around the age of 6, are referred to as '6-year molars'."
  },
  
  // Oral Pathology
  {
    question: "What is the primary cause of oral leukoplakia?",
    choices: ["Tobacco use", "Alcohol consumption", "Viral infection", "Poor oral hygiene"],
    correctAnswer: "Tobacco use",
    explanation: "Oral leukoplakia is often associated with tobacco use, both smoking and smokeless tobacco."
  },
  {
    question: "Which condition is characterized by desquamation and redness of the gingiva?",
    choices: ["Pemphigus vulgaris", "Erythema multiforme", "Lichen planus", "Desquamative gingivitis"],
    correctAnswer: "Desquamative gingivitis",
    explanation: "Desquamative gingivitis presents with sloughing of the gingival epithelium and redness, often associated with immune-mediated conditions."
  },
  {
    question: "Which bacterial species is primarily responsible for causing dental caries?",
    choices: ["Streptococcus mutans", "Porphyromonas gingivalis", "Fusobacterium nucleatum", "Prevotella intermedia"],
    correctAnswer: "Streptococcus mutans",
    explanation: "Streptococcus mutans is the primary bacteria involved in the initiation of dental caries."
  },
  {
    question: "What is the most common oral lesion associated with HIV?",
    choices: ["Oral hairy leukoplakia", "Candidiasis", "Kaposi's sarcoma", "Herpes labialis"],
    correctAnswer: "Candidiasis",
    explanation: "Oral candidiasis is the most common oral lesion associated with HIV, often occurring due to immune suppression."
  },
  {
    question: "Which of the following is the most common cause of angular cheilitis?",
    choices: ["Candida infection", "Herpes simplex virus", "Bacterial infection", "Vitamin B12 deficiency"],
    correctAnswer: "Candida infection",
    explanation: "Angular cheilitis is most commonly caused by a fungal infection with Candida species, often in conjunction with Staphylococcus aureus."
  },
  {
    question: "Which oral condition presents as a 'geographic' map-like appearance on the tongue?",
    choices: ["Geographic tongue", "Lichen planus", "Oral candidiasis", "Leukoplakia"],
    correctAnswer: "Geographic tongue",
    explanation: "Geographic tongue appears as areas of erythema on the tongue, bordered by white margins, and changes in shape over time."
  },
  {
    question: "Which virus is primarily responsible for causing oral cold sores?",
    choices: ["Herpes simplex virus type 1", "Epstein-Barr virus", "Cytomegalovirus", "Varicella-zoster virus"],
    correctAnswer: "Herpes simplex virus type 1",
    explanation: "Herpes simplex virus type 1 (HSV-1) causes oral cold sores, commonly known as herpes labialis."
  },
  {
    question: "Which condition is characterized by a white lesion on the lateral border of the tongue in immunocompromised patients?",
    choices: ["Oral hairy leukoplakia", "Oral lichen planus", "Geographic tongue", "Oral candidiasis"],
    correctAnswer: "Oral hairy leukoplakia",
    explanation: "Oral hairy leukoplakia is caused by Epstein-Barr virus and is typically seen in immunocompromised patients, particularly those with HIV."
  },
  {
    question: "What is the most common benign tumor of the salivary glands?",
    choices: ["Pleomorphic adenoma", "Warthin's tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"],
    correctAnswer: "Pleomorphic adenoma",
    explanation: "Pleomorphic adenoma is the most common benign tumor of the salivary glands."
  },
  {
    question: "Which condition is associated with painful ulcers in the oral mucosa that recur periodically?",
    choices: ["Aphthous stomatitis", "Leukoplakia", "Candidiasis", "Oral lichen planus"],
    correctAnswer: "Aphthous stomatitis",
    explanation: "Aphthous stomatitis presents as recurrent, painful ulcers in the oral mucosa, commonly known as canker sores."
  },

  // Preventive Dentistry
  {
    question: "What is the primary role of fluoride in preventing dental caries?",
    choices: ["Remineralization", "Tooth whitening", "Desensitization", "Plaque reduction"],
    correctAnswer: "Remineralization",
    explanation: "Fluoride helps prevent dental caries by promoting remineralization of tooth enamel."
  },
  {
    question: "Which habit is most likely to lead to tooth erosion?",
    choices: ["Frequent consumption of acidic beverages", "Brushing too often", "Eating sugary foods", "Using mouthwash"],
    correctAnswer: "Frequent consumption of acidic beverages",
    explanation: "Frequent consumption of acidic beverages, such as soda and citrus drinks, can erode tooth enamel over time."
  },
  {
    question: "Which oral hygiene practice is most effective in preventing interproximal caries?",
    choices: ["Flossing", "Brushing twice a day", "Using mouthwash", "Chewing sugar-free gum"],
    correctAnswer: "Flossing",
    explanation: "Flossing is the most effective method for cleaning interproximal spaces between teeth and preventing interproximal caries."
  },
  {
    question: "What is the recommended concentration of fluoride in toothpaste for adults at high risk for dental caries?",
    choices: ["500 ppm", "1000 ppm", "1500 ppm", "5000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "For adults at high risk for dental caries, fluoride toothpaste with a concentration of 5000 ppm is recommended."
  },
  {
    question: "Which food is most likely to contribute to dental caries?",
    choices: ["Sticky, sugary foods", "Leafy green vegetables", "Nuts", "Cheese"],
    correctAnswer: "Sticky, sugary foods",
    explanation: "Sticky, sugary foods adhere to the teeth and provide a substrate for bacteria, leading to the development of dental caries."
  },
  {
    question: "Which vitamin is essential for maintaining healthy gingiva and preventing scurvy?",
    choices: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin E"],
    correctAnswer: "Vitamin C",
    explanation: "Vitamin C is essential for the formation of collagen and the maintenance of healthy gingiva, preventing conditions like scurvy."
  },
  {
    question: "What is the optimal frequency for routine dental check-ups for patients with good oral health?",
    choices: ["Every 3 months", "Every 6 months", "Annually", "Every 2 years"],
    correctAnswer: "Every 6 months",
    explanation: "Patients with good oral health are typically recommended to have routine dental check-ups every 6 months."
  },
  {
    question: "Which food helps neutralize acid in the mouth and is considered protective against dental caries?",
    choices: ["Cheese", "Citrus fruits", "Candies", "Crackers"],
    correctAnswer: "Cheese",
    explanation: "Cheese helps neutralize acid in the mouth and increases saliva production, offering protection against dental caries."
  },
  {
    question: "What is the purpose of pit and fissure sealants?",
    choices: ["Prevent dental caries", "Strengthen enamel", "Reduce tooth sensitivity", "Whiten teeth"],
    correctAnswer: "Prevent dental caries",
    explanation: "Pit and fissure sealants are applied to the chewing surfaces of molars to seal off deep grooves and prevent dental caries."
  },
  {
    question: "What is the main dietary recommendation for reducing the risk of dental caries?",
    choices: ["Reduce sugar intake", "Increase protein intake", "Increase fiber intake", "Avoid acidic foods"],
    correctAnswer: "Reduce sugar intake",
    explanation: "Reducing sugar intake is the most important dietary recommendation for lowering the risk of developing dental caries."
  },

  // Restorative Dentistry
  {
    question: "Which restorative material releases fluoride over time?",
    choices: ["Glass ionomer", "Composite resin", "Amalgam", "Gold"],
    correctAnswer: "Glass ionomer",
    explanation: "Glass ionomer releases fluoride over time, which helps prevent secondary caries."
  },
  {
    question: "Which restorative material is commonly used for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Glass ionomer"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations because of its tooth-colored appearance and esthetics."
  },
  {
    question: "Which component is used in composite restorations to increase adhesion to enamel?",
    choices: ["Etchant", "Sealant", "Fluoride", "Calcium hydroxide"],
    correctAnswer: "Etchant",
    explanation: "An etchant, typically phosphoric acid, is used to roughen the enamel surface, improving adhesion of composite restorations."
  },
  {
    question: "Which dental material is commonly used for temporary fillings?",
    choices: ["Zinc oxide eugenol", "Composite resin", "Amalgam", "Glass ionomer"],
    correctAnswer: "Zinc oxide eugenol",
    explanation: "Zinc oxide eugenol is commonly used for temporary fillings because of its soothing properties on the pulp."
  },
  {
    question: "Which restorative material is best suited for posterior restorations due to its strength and durability?",
    choices: ["Amalgam", "Composite resin", "Gold", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Amalgam is commonly used for posterior restorations because of its strength, durability, and ability to withstand chewing forces."
  },
  {
    question: "What is the primary purpose of using a dental liner in deep cavity preparations?",
    choices: ["To protect the pulp", "To increase adhesion", "To reduce sensitivity", "To enhance esthetics"],
    correctAnswer: "To protect the pulp",
    explanation: "A dental liner is used to protect the pulp from thermal and chemical irritation in deep cavity preparations."
  },
  {
    question: "Which instrument is used to smooth and shape amalgam restorations?",
    choices: ["Burnisher", "Explorer", "Scaler", "Curette"],
    correctAnswer: "Burnisher",
    explanation: "A burnisher is used to smooth and shape amalgam restorations after placement."
  },
  {
    question: "Which restorative material is most suitable for inlays and onlays?",
    choices: ["Gold", "Composite resin", "Amalgam", "Acrylic resin"],
    correctAnswer: "Gold",
    explanation: "Gold is a highly durable material commonly used for inlays and onlays due to its longevity and fit."
  },
  {
    question: "Which procedure is recommended for restoring a tooth with extensive decay and structural damage?",
    choices: ["Crown", "Filling", "Sealant", "Veneer"],
    correctAnswer: "Crown",
    explanation: "A crown is recommended for restoring a tooth with extensive decay or damage that cannot be adequately restored with a filling."
  },
  {
    question: "Which material is commonly used to bond indirect restorations, such as crowns, to teeth?",
    choices: ["Dental cement", "Composite resin", "Glass ionomer", "Zinc oxide eugenol"],
    correctAnswer: "Dental cement",
    explanation: "Dental cement is used to bond indirect restorations like crowns, bridges, and inlays to the tooth structure."
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
