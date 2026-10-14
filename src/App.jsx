
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Mail,
  Moon,
  Sun,
  BrainCircuit,
  BarChart3,
  Code2,
  Lightbulb,
  X,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
  FileText,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./App.css";

// ============================================================
// PROFILE SETTINGS
// Update your photo, contact details, or resume filenames here.
// Files must exist inside the public folder.
// ============================================================

const PROFILE = {
  name: "Nancy Sharma",
  linkedin: "https://www.linkedin.com/in/nancy-sharma-751319293",
  github: "https://github.com/Nancysharma03",
  email: "ushasharma1331994@gmail.com",
  photo: "/images/nancy-profile.png",
  javaResume: "/Nancy_Sharma_JAVA_FULL_STACK_ENGINEER.pdf",
  analyticsResume: "/Nancy_Sharma_SoftwareEngineer_DataAnalyst.pdf",
};

// ============================================================
// PROJECT CONTENT
// FUTURE UPDATE: Add or edit project details directly here.
// Update the description, implementation, technologies, outcome,
// liveUrl and repoUrl when a project changes.
// Use an empty string for a link that is not available yet.
// ============================================================

const projects = [
  {
    id: "thread-tale",
    category: "Java Development",
    title: "Thread & Tale",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85",
    description:
      "A responsive e-commerce concept for customized embroidery products, bringing product discovery, personalization and order management into one shopping experience.",
    problem:
      "Customers looking for personalized embroidery products need a convenient way to browse products, customize choices and manage orders online.",
    implementation: [
      "Designed a responsive storefront for customized embroidery products.",
      "Built backend business logic using Java 21 and Spring Boot.",
      "Designed REST APIs for product, customer and order operations.",
      "Integrated Spring Security for authentication and role-based authorization.",
      "Used Spring Data JPA, Hibernate and PostgreSQL for persistence.",
      "Razorpay payments and Cloudinary image storage are planned integrations, not completed features.",
    ],
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA",
      "Hibernate",
      "PostgreSQL",
    ],
    outcome:
      "Demonstrates full-stack application design across frontend presentation, backend logic, authentication, REST APIs and relational database persistence.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "pneumonia",
    category: "Deep Learning",
    title: "Pneumonia Detection from Chest X-rays",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    description:
      "A computer-vision project that classifies chest X-ray images into Normal and Pneumonia categories using deep-learning models.",
    problem:
      "Medical image datasets can be analyzed with deep learning to investigate patterns and support automated image-classification research.",
    implementation: [
      "Prepared chest X-ray images for model training and evaluation.",
      "Developed CNN- and ResNet50-based classification models using Python and PyTorch.",
      "Evaluated model performance using test accuracy, pneumonia recall, ROC-AUC and average precision.",
      "Compared model performance across the selected evaluation metrics.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "CNN",
      "ResNet50",
      "Deep Learning",
    ],
    outcome:
      "The evaluated CNN achieved 88.78% test accuracy, 95.90% pneumonia recall, 0.9609 ROC-AUC and 0.9757 average precision. These are experimental dataset results, not a claim of clinical readiness.",
    liveUrl: "",
    repoUrl: "https://github.com/Nancysharma03/AI-Pneumonia-Detection",
  },
  {
    id: "qr-menu",
    category: "Web Development",
    title: "QR Restaurant Menu & Ordering",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
    description:
      "A QR-based digital restaurant menu that lets customers browse menu items, select dishes, manage an order and calculate a bill through a web interface.",
    problem:
      "Digital menus can make menu access and basic order calculation more convenient than relying entirely on printed menus and manual billing.",
    implementation: [
      "Designed a responsive menu interface using HTML and CSS.",
      "Integrated QR-code access to the digital menu.",
      "Implemented menu selection and order management using JavaScript.",
      "Added automatic bill calculation and total price generation.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "QR Code Integration",
      "Order Management",
    ],
    outcome:
      "Demonstrates an interactive digital ordering workflow with menu selection and JavaScript-based bill calculation.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "drug-response",
    category: "Machine Learning",
    title: "Drug Response Prediction",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    description:
      "A biomedical machine-learning project exploring drug-response prediction using the GDSC dataset and classification and regression approaches.",
    problem:
      "Drug-response datasets contain complex relationships that can be explored with machine learning to estimate response-related outcomes.",
    implementation: [
      "Worked with the GDSC dataset for drug-response modelling.",
      "Compared Random Forest, SVM, ANN and XGBoost classification models.",
      "Used an XGBoost regressor for LN_IC50 prediction.",
      "Evaluated models using classification and regression metrics.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "SVM",
      "GDSC",
    ],
    outcome:
      "The evaluated XGBoost classifier achieved 85.34% accuracy, an 85.38% F1-score and 93.68% ROC-AUC. The regressor achieved an R² of 0.8465 for LN_IC50 prediction on the evaluated data.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "sales-eda",
    category: "Data Analysis",
    title: "Sales Data Analysis",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    description:
      "An exploratory data-analysis project focused on cleaning sales data, investigating distributions, and visualizing patterns and relationships.",
    problem:
      "Raw sales records are difficult to interpret until the data is cleaned, analyzed and presented meaningfully.",
    implementation: [
      "Cleaned and prepared sales data for analysis.",
      "Used Pandas and NumPy for data manipulation and numerical analysis.",
      "Performed exploratory and statistical analysis to investigate trends and relationships.",
      "Created visualizations using Matplotlib and Seaborn.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
    ],
    outcome:
      "Created a reproducible analysis workflow for exploring sales data and communicating patterns through visualizations.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "netflix",
    category: "Web Development",
    title: "Netflix Clone UI",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85",
    description:
      "A responsive streaming-platform interface inspired by Netflix, built to practise frontend development and interactive web design.",
    problem:
      "A streaming interface needs a clear visual hierarchy, accessible controls and a layout that works across screen sizes.",
    implementation: [
      "Created structured page layouts using HTML5 and CSS3.",
      "Added interactive elements and dynamic behaviour with JavaScript.",
      "Used DOM manipulation and event handling for interface interactions.",
      "Applied responsive design principles for different screen sizes.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Responsive Design",
    ],
    outcome:
      "Demonstrates responsive UI development, frontend layout and interactive JavaScript functionality.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "sentiment",
    category: "NLP & AI",
    title: "Amazon Review Sentiment Analysis",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    description:
      "An NLP project that analyzes Amazon product reviews and classifies sentiment as positive, neutral or negative.",
    problem:
      "Large volumes of customer reviews are difficult to assess manually. Sentiment analysis helps organize opinions into interpretable categories.",
    implementation: [
      "Prepared review text for natural language processing.",
      "Used VADER for lexicon-based sentiment analysis.",
      "Explored a RoBERTa-based transformer approach for sentiment classification.",
      "Organized predicted sentiment into positive, neutral and negative categories.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NLTK",
      "Transformers",
      "VADER",
      "RoBERTa",
      "NLP",
    ],
    outcome:
      "Explored rule-based and transformer-based sentiment analysis approaches for customer-review classification.",
    liveUrl: "",
    repoUrl: "",
  }
  
];

// ============================================================
// SKILLS
// FUTURE UPDATE: Add or remove skills in the relevant group.
// Development uses the Java resume. The other two groups use
// the Data Analytics resume until a separate AI/ML resume exists.
// ============================================================

const skillGroups = [
  {
    id: "development",
    title: "Development",
    subtitle: "Programming, backend & web development",
    skills: [
      "Java",
      "Core Java",
      "OOP",
      "Data Structures & Algorithms",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Node.js",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "CRUD Operations",
      "Maven",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQLite",
      "MongoDB",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Responsive Web Design",
    ],
    resume: PROFILE.javaResume,
    downloadName: "/Nancy_Sharma_JAVA_FULL_STACK_ENGINEER.pdf",
    buttonLabel: "Download Resume",
  },
  {
    id: "aiml",
    title: "AI/ML & Data Science",
    subtitle: "Machine learning, deep learning & NLP",
    skills: [
      "Python",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Torchvision",
      "CNN",
      "RNN",
      "Deep Learning",
      "Classification",
      "Regression",
      "Clustering",
      "Transfer Learning",
      "Computer Vision",
      "NLP",
      "NLTK",
      "Transformers",
      "VADER",
      "RoBERTa",
      "SHAP",
      "Feature Engineering",
      "Model Evaluation",
      "Cross-Validation",
      "Hyperparameter Tuning",
    ],
    resume: PROFILE.analyticsResume,
    downloadName: "/Nancy_Sharma_SoftwareEngineer_DataAnalyst.pdf",
    buttonLabel: "Download Resume",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    subtitle: "Data preparation, analysis & visualization",
    skills: [
      "Python",
      "R",
      "SQL",
      "Excel",
      "Google Sheets",
      "Pandas",
      "NumPy",
      "SciPy",
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Feature Engineering",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Data Visualization",
      "Jupyter Notebook",
    ],
    resume: PROFILE.analyticsResume,
    downloadName: "/Nancy_Sharma_SoftwareEngineer_DataAnalyst.pdf",
    buttonLabel: "Download Resume",
  },
];

// ============================================================
// SOCIAL LINKS
// ============================================================

function SocialLinks() {
  return (
    <div className="socials">
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </a>

      <a
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={20} />
      </a>

      <a href={`mailto:${PROFILE.email}`} aria-label="Email Nancy">
        <Mail size={18} />
      </a>

      <a
        href={PROFILE.javaResume}
        download="/Nancy_Sharma_JAVA_FULL_STACK_ENGINEER.pdf"
        aria-label="Download Java resume"
      >
        <FileText size={18} />
      </a>
    </div>
  );
}

// ============================================================
// NAVIGATION
// ============================================================

function Navbar({ dark, onToggleTheme }) {
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Nancy Sharma home">
        <span className="brand-mark">N.</span>
        <span>NANCY SHARMA</span>
      </a>

      <nav aria-label="Main navigation">
        {links.map(([label, id]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a
          className="nav-resume-btn"
          href={PROFILE.javaResume}
          download="/Nancy_Sharma_JAVA_FULL_STACK_ENGINEER.pdf"
        >
          <Download size={16} />
          Download Resume
        </a>

        <button
          className="theme-btn"
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}

// ============================================================
// HERO SECTION
// ============================================================

function Hero() {
  const interests = [
    {
      Icon: BrainCircuit,
      title: "Machine Learning",
      description: "Turning data into insights",
    },
    {
      Icon: Code2,
      title: "Web Development",
      description: "Building useful digital experiences",
    },
    {
      Icon: BarChart3,
      title: "Data Analytics",
      description: "Exploring patterns & creating impact",
    },
    {
      Icon: Lightbulb,
      title: "Continuous Learning",
      description: "Always curious, always growing",
    },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          SOFTWARE ENGINEER &amp; <b>ML ENGINEER</b>
          <span className="eyebrow-line" />
        </p>

        <h1>
          Hi, I’m
          <br />
          <span>Nancy</span> Sharma.
        </h1>

        <p className="hero-description">
          I’m a Computer Science and Engineering student specializing in
          Artificial Intelligence and Machine Learning. My technical
          interests span Java development, object-oriented programming,
          data structures, databases and responsive web development. I also
          build Python-based machine-learning workflows and data-analysis
          projects, turning technical ideas into practical applications.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#projects">
            View My Work <ArrowRight size={17} />
          </a>

          <a className="secondary-btn" href="#contact">
            <Mail size={17} /> Let’s Connect
          </a>
        </div>

        <SocialLinks />
      </div>

      <div className="hero-visual">
        <div className="portrait-halo" />

        <div className="portrait-frame">
          <img
            src={PROFILE.photo}
            alt="Nancy Sharma"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
          />
        </div>

        <div className="handwritten">
          Building ideas
          <br />
          with purpose ♡
        </div>

        <div className="floating-note">
          Java &amp; Spring Boot
          <br />
          AI/ML &amp; Analytics
          <br />
          Web Development
        </div>

        <span className="sparkle">✦</span>
      </div>

      <aside className="hero-side">
        <div className="interest-list">
          {interests.map(({ Icon, title, description }) => (
            <div className="interest" key={title}>
              <span className="interest-icon">
                <Icon size={22} />
              </span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats">
          <div>
            <strong>7+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Months Internship</span>
          </div>
          <div>
            <strong>3+</strong>
            <span>Domains</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Learning</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

// ============================================================
// PROJECT DETAILS POPUP
// Clicking a project opens its description.
// ============================================================

function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={onClose}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={21} />
        </button>

        <img
          className="modal-image"
          src={project.image}
          alt={`${project.title} preview`}
        />

        <div className="modal-body">
          <span className="project-category">{project.category}</span>

          <h2 id="project-modal-title">{project.title}</h2>

          <p className="modal-subtitle">Project overview</p>

          <h3>Project Overview</h3>
          <p>{project.description}</p>

          <h3>Problem Statement</h3>
          <p>{project.problem}</p>

          <h3>Implementation</h3>
          <ul>
            {project.implementation.map((item, index) => (
              <li key={`${project.id}-step-${index}`}>{item}</li>
            ))}
          </ul>

          <h3>Technologies Used</h3>
          <div className="tech-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <h3>Outcome &amp; Results</h3>
          <p>{project.outcome}</p>

          {/* FUTURE UPDATE:
              Add or edit liveUrl and repoUrl in the projects array above.
              Add further project details directly in that project object.
              A live-project button appears only when liveUrl is provided.
          */}

          <div className="project-modal-links">
            {project.liveUrl ? (
              <a
                className="primary-btn"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Live Project <ExternalLink size={16} />
              </a>
            ) : (
              <p className="link-status">
                Live demo coming soon. Add the deployed URL to this
                project’s liveUrl field when available.
              </p>
            )}

            {project.repoUrl && (
              <a
                className="secondary-btn"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Source Code <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// PROJECT CAROUSEL
// showAllProjects is declared HERE, inside Projects().
// View All Projects reveals all seven projects.
// ============================================================

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const carouselRef = useRef(null);

  const visibleProjects = projects;

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(".project-card");
    if (!card) return;

    const styles = window.getComputedStyle(carousel);
    const gap =
      Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;

    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  const handleViewAll = (event) => {
    event.preventDefault();

    setShowAllProjects((current) => !current);

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <style>{`
        .portfolio-project-carousel {
          display: flex !important;
          grid-template-columns: none !important;
          gap: 16px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 2px 2px 18px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .portfolio-project-carousel::-webkit-scrollbar {
          display: none;
        }

        .portfolio-project-carousel .project-card {
          flex: 0 0 calc((100% - 48px) / 4);
          width: calc((100% - 48px) / 4);
          min-width: 0;
          scroll-snap-align: start;
          text-align: left;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }

        .project-carousel-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-carousel-arrow {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border, #e9dfe7);
          border-radius: 50%;
          background: var(--card, #fff);
          color: inherit;
          cursor: pointer;
          transition: transform .2s ease, background .2s ease;
        }

        .project-carousel-arrow:hover {
          transform: translateY(-2px);
          background: var(--accent-bg, #f4eafa);
        }

        .project-carousel-arrow:focus-visible,
        .project-view-all:focus-visible {
          outline: 2px solid #9b7ac7;
          outline-offset: 3px;
        }

        .project-section-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .project-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .portfolio-project-carousel .project-card {
            flex-basis: calc((100% - 32px) / 3);
            width: calc((100% - 32px) / 3);
          }
        }

        @media (max-width: 760px) {
          .portfolio-project-carousel .project-card {
            flex-basis: calc((100% - 16px) / 2);
            width: calc((100% - 16px) / 2);
          }

          .project-section-actions {
            gap: 10px;
          }
        }

        @media (max-width: 520px) {
          .portfolio-project-carousel .project-card {
            flex-basis: 88%;
            width: 88%;
          }

          .project-section-actions {
            flex-wrap: wrap;
            justify-content: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-project-carousel {
            scroll-behavior: auto;
          }

          .project-carousel-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="section-heading">
        <div>
          <p className="eyebrow">
            FEATURED WORK <span className="eyebrow-line" />
          </p>

          <h2>
            Some Projects I’m <span>Proud Of</span>
          </h2>
        </div>

        <div className="project-section-actions">
          <a
            className="all-projects project-view-all"
            href="#projects"
            onClick={handleViewAll}
            aria-expanded={showAllProjects}
          >
            {showAllProjects ? "Show Featured" : "View All Projects"}
            <ArrowRight size={15} />
          </a>

          <div
            className="project-carousel-controls"
            aria-label="Project carousel controls"
          >
            <button
              className="project-carousel-arrow"
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Previous projects"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              className="project-carousel-arrow"
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Next projects"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="project-grid portfolio-project-carousel"
        ref={carouselRef}
        aria-label="Portfolio projects"
      >
        {visibleProjects.map((project) => (
          <button
            className="project-card"
            type="button"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            <img
              className="project-image"
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
            />

            <div className="project-content">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <span className="project-open">
                <span>View details</span>
                <span className="arrow-circle">
                  <ArrowRight size={16} />
                </span>
              </span>
            </div>
          </button>
        ))}
      </div>

      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

// ============================================================
// ABOUT ME
// ============================================================

function About() {
  return (
    <section className="detail-card about-card" id="about">
      <div className="detail-title">
        <span className="detail-icon">
          <UserRound size={21} />
        </span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <img
          src="/images/about-desk.jpg"
          alt="Study desk"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div>
          <p>
            I’m Nancy Sharma, a B.Tech Computer Science and Engineering
            student specializing in AI &amp; ML at LNCT University, Bhopal
            (2023–2027). My technical interests span software development,
            machine learning, and data analytics.
          </p>

          <p>
            I enjoy solving problems, exploring new technologies, and
            building projects that create value—from Java/Spring Boot
            applications to machine-learning models and responsive web
            interfaces.
          </p>

          <a className="secondary-btn about-link" href="#contact">
            Know More About Me <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE
// ============================================================

function Experience() {
  return (
    <section className="detail-card" id="experience">
      <div className="detail-title">
        <span className="detail-icon">
          <BriefcaseBusiness size={21} />
        </span>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        <p className="timeline-date">April – August 2026 · 5 months</p>

        <h3>Python Developer Intern</h3>

        <p className="company">
          SBN Research and Consultancy, Bhopal
        </p>

        <ul>
          <li>
            Worked on Python-based applications and machine-learning
            solutions for predictive analytics.
          </li>
          <li>
            Contributed to data preprocessing, feature engineering and
            healthcare AI/ML projects.
          </li>
          <li>
            Worked with model evaluation and data visualization using
            Python and analytics tools.
          </li>
        </ul>
      </div>
    </section>
  );
}

// ============================================================
// EDUCATION
// ============================================================

function Education() {
  return (
    <section className="detail-card" id="education">
      <div className="detail-title">
        <span className="detail-icon">
          <GraduationCap size={22} />
        </span>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        <div className="education-item">
          <div>
            <h3>B.Tech — CSE (AI &amp; ML)</h3>
            <p>LNCT University, Bhopal</p>
          </div>
          <span>
            2023–2027
            <br />
            CGPA: 7.95
          </span>
        </div>

        <div className="education-item">
          <div>
            <h3>12th Standard</h3>
            <p>Government Excellence School, Shivpuri</p>
          </div>
          <span>
            2021–2022
            <br />
            87%
          </span>
        </div>

        <div className="education-item">
          <div>
            <h3>10th Standard</h3>
            <p>Kids Garden School, Shivpuri</p>
          </div>
          <span>
            2019–2020
            <br />
            71%
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SKILLS AND DOMAIN-SPECIFIC RESUME DOWNLOADS
// ============================================================

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <p className="eyebrow">MY TECHNICAL TOOLKIT</p>

      <h2>
        Skills &amp; <span>Technologies</span>
      </h2>

      <p className="section-intro">
        Explore my skills by specialization and download the resume
        relevant to each domain.
      </p>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id}>
            <div className="skill-group-heading">
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
            </div>

            <div className="skills-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <a
              className="secondary-btn skill-resume-btn"
              href={group.resume}
              download={group.downloadName}
            >
              {group.buttonLabel}
              <Download size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">LET’S CONNECT</p>

      <h2>
        Let’s build something <span>meaningful.</span>
      </h2>

      <p>
        Interested in discussing a project, internship, or entry-level
        opportunity? Feel free to reach out.
      </p>

      <a className="primary-btn" href={`mailto:${PROFILE.email}`}>
        Email Nancy <Mail size={17} />
      </a>

      <div className="contact-links">
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn size={17} /> LinkedIn
        </a>

        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          <FaGithub size={18} /> GitHub
        </a>

        <a href={`mailto:${PROFILE.email}`}>
          <Mail size={17} /> {PROFILE.email}
        </a>
      </div>
    </section>
  );
}

// ============================================================
// MAIN APP
// All components and state are correctly scoped.
// ============================================================

function App() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "site dark" : "site"}>
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark((value) => !value)}
      />

      <Hero />

      <Projects />

      <section className="details-grid" aria-label="Profile details">
        <About />
        <Experience />
        <Education />
      </section>

      <Skills />

      <Contact />

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">N.</span>
          <span>NANCY SHARMA</span>
        </a>

        <p>Java Development · AI/ML · Data Analytics</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
