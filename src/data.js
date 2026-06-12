// Default Data Initializations & External Links Management

// 1. Learning Modules with dedicated external portal links
export const defaultModules = [
  {
    id: 1,
    code: 'Module 01',
    title: 'Neural Networks 101',
    description: 'Architectural fundamentals of deep learning models, backpropagation, and activation functions.',
    icon: 'psychology',
    isSecondary: false,
    portalUrl: 'https://github.com/google-deepmind/alphageometry',
    syllabus: [
      'Core Perceptron & Linear Classifiers',
      'Gradient Descent & Backpropagation Mathematics',
      'Activation Functions: ReLU, Sigmoid, GELU',
      'Loss Formulations: Cross-Entropy, MSE, Contrastive Loss'
    ]
  },
  {
    id: 2,
    code: 'Module 02',
    title: 'Python for Data Science',
    description: 'Advanced manipulation of high-dimensional datasets using Pandas, NumPy, and PyTorch tensors.',
    icon: 'data_object',
    isSecondary: true,
    portalUrl: 'https://github.com/numpy/numpy',
    syllabus: [
      'Pandas Vectorized Operations & GroupBy Optimization',
      'NumPy N-Dimensional Arrays & Broadcasting Rules',
      'PyTorch Tensor Construction, Autograd & GPU Acceleration',
      'Data Ingestion Pipelines & DataLoader Tuning'
    ]
  },
  {
    id: 3,
    code: 'Module 03',
    title: 'Distributed Model Training',
    description: 'Scale deep learning training pipelines across distributed clusters using data and model parallelism.',
    icon: 'dns',
    isSecondary: false,
    portalUrl: 'https://github.com/pytorch/pytorch',
    syllabus: [
      'Data Parallelism (DP) vs Distributed Data Parallelism (DDP)',
      'Model Parallelism, Pipeline Parallelism & Tensor Parallelism',
      'Gradient Accumulation & Zero Redundancy Optimizer (ZeRO)',
      'NCCL Communication Backends & Bandwidth Profiling'
    ]
  },
  {
    id: 4,
    code: 'Module 04',
    title: 'Adversarial Robustness & Defense',
    description: 'Examine adversarial perturbation attacks on deep learning networks and build resilient defense strategies.',
    icon: 'shield',
    isSecondary: true,
    portalUrl: 'https://github.com/tensorflow/privacy',
    syllabus: [
      'Fast Gradient Sign Method (FGSM) & PGD Attacks',
      'Adversarial Training & Robust Loss Formulations',
      'Model Stealing, Inversion & Membership Inference Attacks',
      'Differential Privacy & Secure Multi-Party Computation'
    ]
  }
];

export const defaultJobs = [

  { id: 1, title: 'Machine Learning Engineer Intern', company: 'Google', location: 'Bangalore, India', type: 'Internship', salary: '₹80,000 - 1,00,000/month', icon: 'terminal', description: 'Work on ML models for Google products, including data pipelines and model training.', applyUrl: 'https://careers.google.com/students/' },

  { id: 2, title: 'AI/ML Intern', company: 'Microsoft', location: 'Hyderabad, India', type: 'Internship', salary: '₹70,000 - 90,000/month', icon: 'terminal', description: 'Contribute to Azure AI services, building and evaluating ML models for cloud-scale applications.', applyUrl: 'https://careers.microsoft.com/students/us/en' },

  { id: 3, title: 'Data Science & ML Intern', company: 'Amazon', location: 'Bangalore, India', type: 'Internship', salary: '₹60,000 - 85,000/month', icon: 'database', description: 'Develop predictive models for supply chain and customer recommendation systems.', applyUrl: 'https://www.amazon.jobs/en/teams/internships-for-students' },

  { id: 4, title: 'Machine Learning Intern', company: 'Adobe', location: 'Noida, India', type: 'Internship', salary: '₹60,000 - 80,000/month', icon: 'image', description: 'Work on computer vision and generative AI features for Creative Cloud products.', applyUrl: 'https://careers.adobe.com/us/en/search-results?keywords=intern' },

  { id: 5, title: 'AI Research Intern', company: 'NVIDIA', location: 'Bangalore/Pune, India', type: 'Internship', salary: '₹70,000 - 1,00,000/month', icon: 'terminal', description: 'Research and develop deep learning algorithms optimized for GPU acceleration.', applyUrl: 'https://www.nvidia.com/en-in/about-nvidia/careers/university/' },

  { id: 6, title: 'ML Engineer Intern', company: 'Flipkart', location: 'Bangalore, India', type: 'Internship', salary: '₹50,000 - 70,000/month', icon: 'terminal', description: 'Build recommendation and search ranking models for India\'s largest e-commerce platform.', applyUrl: 'https://www.flipkartcareers.com/#!/joblist' },

  { id: 7, title: 'Applied Scientist Intern - ML', company: 'Swiggy', location: 'Bangalore, India', type: 'Internship', salary: '₹40,000 - 60,000/month', icon: 'terminal', description: 'Develop ML models for delivery time prediction, demand forecasting and personalization.', applyUrl: 'https://careers.swiggy.com/' },

  { id: 8, title: 'Machine Learning Intern', company: 'Zomato', location: 'Gurugram, India', type: 'Internship', salary: '₹35,000 - 50,000/month', icon: 'terminal', description: 'Work on ranking algorithms, fraud detection, and recommendation systems.', applyUrl: 'https://www.zomato.com/careers' },

  { id: 9, title: 'AI/ML Intern', company: 'Samsung R&D Institute India', location: 'Bangalore/Noida, India', type: 'Internship', salary: '₹40,000 - 60,000/month', icon: 'terminal', description: 'Contribute to on-device AI features for mobile and IoT products.', applyUrl: 'https://www.samsung.com/in/sri-careers/' },

  { id: 10, title: 'Data Scientist Intern', company: 'Paytm', location: 'Noida, India', type: 'Internship', salary: '₹30,000 - 50,000/month', icon: 'database', description: 'Build fraud detection and credit risk models using machine learning techniques.', applyUrl: 'https://jobs.paytm.com/' },

  { id: 11, title: 'Machine Learning Intern', company: 'Ola', location: 'Bangalore, India', type: 'Internship', salary: '₹35,000 - 55,000/month', icon: 'navigation', description: 'Work on demand prediction, route optimization and pricing algorithms.', applyUrl: 'https://www.olacabs.com/careers' },

  { id: 12, title: 'AI Intern', company: 'Salesforce', location: 'Hyderabad/Bangalore, India', type: 'Internship', salary: '₹60,000 - 80,000/month', icon: 'terminal', description: 'Contribute to Einstein AI platform features and generative AI tooling.', applyUrl: 'https://careers.salesforce.com/en/students/' },

  { id: 13, title: 'ML Research Intern', company: 'Qualcomm', location: 'Hyderabad/Bangalore, India', type: 'Internship', salary: '₹50,000 - 75,000/month', icon: 'terminal', description: 'Research efficient neural network architectures for edge AI on Snapdragon chips.', applyUrl: 'https://www.qualcomm.com/company/careers/students-and-graduates' },

  { id: 14, title: 'AI/ML Engineering Intern', company: 'Walmart Global Tech', location: 'Bangalore, India', type: 'Internship', salary: '₹50,000 - 70,000/month', icon: 'terminal', description: 'Develop ML solutions for retail forecasting, supply chain and personalization.', applyUrl: 'https://walmart.wd5.myworkdayjobs.com/WalmartExternal' },

  { id: 15, title: 'Machine Learning Intern', company: 'Myntra', location: 'Bangalore, India', type: 'Internship', salary: '₹35,000 - 50,000/month', icon: 'terminal', description: 'Build computer vision models for fashion tagging, search and recommendations.', applyUrl: 'https://careers.myntra.com/' },

  { id: 16, title: 'Data Science Intern', company: 'Goldman Sachs', location: 'Bangalore, India', type: 'Internship', salary: '₹70,000 - 1,00,000/month', icon: 'terminal', description: 'Apply ML and statistical models to financial data for risk and trading insights.', applyUrl: 'https://www.goldmansachs.com/careers/students/' },

  { id: 17, title: 'Machine Learning Intern', company: 'Uber', location: 'Bangalore/Hyderabad, India', type: 'Internship', salary: '₹50,000 - 75,000/month', icon: 'terminal', description: 'Improve ETA prediction, pricing, and matching algorithms using ML.', applyUrl: 'https://www.uber.com/us/en/careers/teams-and-roles/university/' },

  { id: 18, title: 'AI/ML Intern', company: 'Intuit', location: 'Bangalore, India', type: 'Internship', salary: '₹50,000 - 70,000/month', icon: 'terminal', description: 'Work on generative AI and ML models that power financial assistant features.', applyUrl: 'https://www.intuit.com/jobs/students/' },

  { id: 19, title: 'Machine Learning Intern', company: 'Sprinklr', location: 'Gurugram, India', type: 'Internship', salary: '₹40,000 - 60,000/month', icon: 'terminal', description: 'Develop NLP models for social media sentiment and trend analysis.', applyUrl: 'https://www.sprinklr.com/company/careers/' },

  { id: 20, title: 'Data Science & AI Intern', company: 'Mu Sigma', location: 'Bangalore, India', type: 'Internship', salary: '₹25,000 - 40,000/month', icon: 'database', description: 'Apply ML and analytics to solve business decision problems for global clients.', applyUrl: 'https://www.mu-sigma.com/careers/' },

];

// 2. Competitions with dedicated external "Learn More" links
export const defaultCompetitions = [
  {
    id: 'comp-arc',
    title: 'ARC White-Box Estimation Challenge 2026',
    description: 'Given the weights of a neural network, predict its expected per-neuron activations more accurately than running it many times. LLM-assisted development is explicitly allowed.',
    prize: '$100,000 USD',
    difficulty: 'EXPERT',
    registered: 247,
    endsInSeconds: 86400 * 5 + 32400,
    learnMoreUrl: 'https://aicrowd.com/challenges/arc-white-box-estimation-challenge-2026',
    icon: 'psychology',
    imageUrl: '/comp_arc.png'
  },
  {
    id: 'comp-arc-prize',
    title: 'ARC Prize 2026',
    description: 'Solve novel abstract reasoning tasks that are easy for humans but hard for AI. Open to all approaches, including LLMs, program synthesis, and hybrid systems.',
    prize: '$1,000,000 USD',
    difficulty: 'EXPERT',
    registered: 5821,
    endsInSeconds: 86400 * 120,
    learnMoreUrl: 'https://www.kaggle.com/competitions/arc-prize-2026',
    icon: 'extension',
    imageUrl: ''
  },
  {
    id: 'comp-llm-pref',
    title: 'LLM Classification Finetuning Challenge',
    description: 'Finetune large language models to predict human preference between two chatbot responses using Chatbot Arena conversation data.',
    prize: '$50,000 USD',
    difficulty: 'ADVANCED',
    registered: 286,
    endsInSeconds: 86400 * 18,
    learnMoreUrl: 'https://www.kaggle.com/competitions/llm-classification-finetuning',
    icon: 'forum',
    imageUrl: ''
  },
  {
    id: 'comp-synapse',
    title: 'Synapse: The Kaggle Competition 2026',
    description: 'A two-round machine learning competition with an online qualifier and an 8-hour offline finale, testing feature engineering and model optimization under time pressure.',
    prize: '₹30,000',
    difficulty: 'INTERMEDIATE',
    registered: 412,
    endsInSeconds: 86400 * 2,
    learnMoreUrl: 'https://unstop.com/hackathons/synapse-the-kaggle-competition-ascent-scaler-school-of-technology-bengaluru-karnataka-1669636',
    icon: 'memory',
    imageUrl: ''
  },
  {
    id: 'comp-veil',
    title: 'Pierce the VEIL: Hack It and Crack It Simulation',
    description: 'Attempt to reconstruct data protected by proprietary VEIL encoding technology, helping validate its non-reversibility under real-world conditions.',
    prize: '$10,000 USD',
    difficulty: 'ADVANCED',
    registered: 1893,
    endsInSeconds: 86400 * 9,
    learnMoreUrl: 'https://www.kaggle.com/competitions',
    icon: 'lock',
    imageUrl: ''
  },
  {
    id: 'comp-gemma-impact',
    title: 'Gemma for Global Impact',
    description: 'Harness Gemma open models to build AI solutions that drive measurable positive change in healthcare, education, or sustainability.',
    prize: '$75,000 USD',
    difficulty: 'INTERMEDIATE',
    registered: 1024,
    endsInSeconds: 86400 * 21,
    learnMoreUrl: 'https://www.kaggle.com/competitions',
    icon: 'public',
    imageUrl: ''
  },
  {
    id: 'comp-aerial-detect',
    title: 'Airborne Object Detection Challenge',
    description: 'Build a model capable of detecting and classifying objects across highly variable airborne scenarios and weather conditions using drone and satellite imagery.',
    prize: '$40,000 USD',
    difficulty: 'ADVANCED',
    registered: 678,
    endsInSeconds: 86400 * 14,
    learnMoreUrl: 'https://entranthub.com/competitions',
    icon: 'flight',
    imageUrl: ''
  },
  {
    id: 'comp-drilling',
    title: 'Autonomous Drilling Operations Challenge',
    description: 'Build a machine learning model that contributes to automating drilling operations and safety monitoring in the oil and gas industry.',
    prize: '$25,000 USD',
    difficulty: 'ADVANCED',
    registered: 312,
    endsInSeconds: 86400 * 30,
    learnMoreUrl: 'https://entranthub.com/competitions',
    icon: 'engineering',
    imageUrl: ''
  },
  {
    id: 'comp-spaceship',
    title: 'Spaceship Titanic',
    description: 'Predict which passengers were transported to an alternate dimension during a spacetime anomaly. A beginner-friendly classification challenge great for portfolio building.',
    prize: 'Swag + Recognition',
    difficulty: 'BEGINNER',
    registered: 2209,
    endsInSeconds: 86400 * 365,
    learnMoreUrl: 'https://www.kaggle.com/competitions/spaceship-titanic',
    icon: 'rocket_launch',
    imageUrl: ''
  },
  {
    id: 'comp-community-hack',
    title: 'Kaggle Community Hackathons',
    description: 'Participate in community-run AI challenges spanning mobility, climate resilience, public health, and more, built on full Kaggle competition infrastructure.',
    prize: 'Up to $10,000 USD',
    difficulty: 'INTERMEDIATE',
    registered: 1567,
    endsInSeconds: 86400 * 45,
    learnMoreUrl: 'https://www.kaggle.com/competitions',
    icon: 'groups',
    imageUrl: ''
  }

];

// 3. Other external links (Discord, GitHub, etc.)
export const externalSocialLinks = {
  // discord: 'https://discord.gg/aiden-platform',
  // github: 'https://github.com/aiden-platform',
  // documentation: 'https://github.com/aiden-platform/docs',
  linkedin: "https://www.linkedin.com/company/aiden-india/"
};
