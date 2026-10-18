type Project = {
  name: string;
  client: string;
  dateRange: string;
  description: string;
  link?: string;
  skills?: string[];
};

export const siteConfig = {
  name: "Youngseo Lee",
  title: "Digital Consultant",
  description: "Portfolio website of Youngseo Lee",
  accentColor: "#1d4ed8",
  social: {
    email: "ylee144@kr.kpmg.com",
    linkedin: "https://linkedin.com/in/youngseo-lee-a988ab235/",
    github: "https://github.com/twenty4-lee",
  },
  aboutMe:
    "I am a Digital Consultant at Samjong KPMG (KPMG Korea), bridging emerging technologies and business strategy. I help organizations shape AI transformation roadmaps and turn operational needs into practical data and AI initiatives. I am also interested in Physical AI, especially human-robot teaming in warehouses and the integration of robotic systems into real-world workflows.",
  skills: [
    "Python",
    "Enterprise AI Transformation (AX)",
    "Prompt Engineering",
  ],
  projects: [
    {
      name: "Authorization System Enhancement PoC",
      client: "Samsung Card",
      dateRange: "September 2026 - Present",
      description:
        "Reviewed and structured the authorization system architecture, consolidating application, database, middleware, and infrastructure configurations for the PoC.",
    },
    {
      name: "Sustainable Growth and Information Strategy Planning Consulting",
      client: "Korea Software Financial Cooperative",
      dateRange: "July 2026 - August 2026",
      description:
        "Formulated an integrated master plan for VISION 2040 and next-generation digital transformation, establishing strategic growth initiatives and data-driven AX execution roadmaps.",
    },
    {
      name: "AX Consulting",
      client: "Korea Rental",
      dateRange: "March 2026 - June 2026",
      description:
        "Established a data readiness diagnostic framework for structured and unstructured data, formulated cross-functional AX initiatives, and designed Gemini training programs.",
    },
    {
      name: "Public Sector AX Adoption Guideline Report",
      client: "National IT Industry Promotion Agency",
      dateRange: "December 2025 - February 2026",
      description:
        "Established a four-phase lifecycle framework covering planning, development and validation, operation and monitoring, and scaling, providing public officials with standardized guidance for sustainable AI transformation.",
    },
    {
      name: "Conversational Data Platform Using Natural Language Queries",
      client: "Samsung Fire & Marine Insurance",
      dateRange: "August 2025 - November 2025",
      description:
        "Built a natural language query-based interactive analytics service for sales daily reports, enabling non-technical field sales managers to retrieve data instantly, receive AI insights, and automate metric tracking.",
    },
    {
      name: "Korea Fintech Trends Report",
      client: "Fintech Center Korea",
      dateRange: "April 2025 - July 2025",
      description:
        "Structured key trends across seven core fintech technologies, analyzed PitchBook investment data across seven countries (2020-2024), and conducted in-depth interviews with startup executives to produce a comprehensive report on market trends, technology adoption, and corporate strategies.",
    },
    {
      name: "AI Masterplan",
      client: "LG Household & Health Care",
      dateRange: "January 2025 - February 2025",
      description:
        "Conducted benchmark research on global beauty logistics AI, interviewed field operators to identify pain points, and established a strategic AI execution roadmap for R&D, SCM, procurement, and logistics operations.",
    },
  ] as Project[],
  experience: [
    {
      company: "Samjong KPMG (KPMG Korea)",
      title: "Digital Consultant",
      dateRange: "January 2025 - Present",
      bullets: [
        "AX Transformation: Formulated enterprise-wide AI transformation roadmaps across R&D, SCM, sales, and logistics, translating operational pain points from field interviews into actionable AI agent workflows",
        "Data Readiness: Diagnosed structured and unstructured data quality to establish AI-ready data standards and build natural language query (NLQ) analytics systems",
        "Safe & Trusted AI: Established public-sector AX adoption guidelines emphasizing safe and trusted AI governance, while designing enterprise-wide AI literacy frameworks",
      ],
    },
    {
      company: "Munhwa Broadcasting Corporation (MBC)",
      title: "AI Engineering Intern",
      dateRange: "March 2024 - June 2024",
      bullets: [
        "Implemented the NeMo framework for speaker diarization in a speech-to-text (STT) pipeline",
        "Applied image super-resolution techniques to low-quality images, improving person recognition in Dost11's celebrity database",
        "Researched methods to improve Korean optical character recognition (OCR) accuracy",
      ],
    },
    {
      company: "University of Birmingham (UoB)",
      title: "Robotics and AI Student Research Intern, Extreme Robotics Lab",
      dateRange: "September 2023 - March 2024",
      bullets: [
        "Developed ROS nodes using a Gradient Boosting classifier to detect and classify 7 radioactive isotopes, enabling real-time decision-making for UGV robotics in nuclear environments",
        "Engineered a computer vision pipeline to convert gamma spectrum graph images into CSV datasets and validated classification performance via real-time Jackal UGV experiments",
      ],
    },
  ],
  education: [
    {
      school: "Hanyang University",
      degree: "Bachelor of Science in Information Systems",
      dateRange: "March 2020 - August 2024",
      achievements: [
        "GPA: 4.32 / 4.5",
        "Thesis: Facial Emotion Classification Using Convolutional Neural Networks (CNNs)",
        "Relevant Coursework: Data Structures, Artificial Intelligence and Applications, AI+X: Deep Learning",
      ],
    },
    {
      school: "Louisiana State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "January 2023 - May 2023",
      achievements: [
        "GPA: 4.08 / 4.3",
        "Exchange Student Program",
        "Relevant Coursework: Big Data Technology, Management of IT Function",
      ],
    },
  ],
};
