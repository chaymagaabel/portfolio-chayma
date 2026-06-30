import "./Expertise.css";
import expertiseLaptop from "../assets/expertise-laptop.png";

const iconPaths = {
  code: (
    <>
      <path d="m10 9-4 3 4 3" />
      <path d="m14 9 4 3-4 3" />
      <path d="m13 5-2 14" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.6A3.5 3.5 0 0 0 9 19" />
      <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.6A3.5 3.5 0 0 1 15 19" />
      <path d="M9 4v15" />
      <path d="M15 4v15" />
      <path d="M9 9h2" />
      <path d="M13 13h2" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  plug: (
    <>
      <path d="M8 7V3" />
      <path d="M16 7V3" />
      <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
      <path d="M12 16v5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <path d="M6 16l4-5 3 3 5-7" />
      <path d="M18 7h-4" />
      <path d="M18 7v4" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 18H8a4 4 0 1 1 .8-7.9A5.5 5.5 0 0 1 19 12a3 3 0 0 1-1.5 6Z" />
      <path d="M12 12v4" />
      <path d="M10 14h4" />
    </>
  ),
  settings: (
    <>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19 12h2" />
      <path d="M3 12h2" />
      <path d="m17 7 1.4-1.4" />
      <path d="m5.6 18.4 1.4-1.4" />
      <path d="m17 17 1.4 1.4" />
      <path d="M5.6 5.6 7 7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  puzzle: (
    <>
      <path d="M9 3h6v5a2 2 0 1 0 0 4v9H9v-5a2 2 0 1 1 0-4V3Z" />
      <path d="M9 8H4v4h5" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="19" r="2" />
      <circle cx="6" cy="19" r="2" />
      <path d="M6 7v10" />
      <path d="M8 5h4a6 6 0 0 1 6 6v6" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  rocket: (
    <>
      <path d="M13 4c4 0 7 3 7 7-2 1-5 4-6 7l-4-4c3-1 6-4 7-6" />
      <path d="M8 14 5 17l2 2 3-3" />
      <path d="M9 9 5 8l-2 4 5 1" />
      <path d="M15 15l1 5 4-2-1-4" />
    </>
  ),
  team: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.9.8-1 1.8-1 3H9c0-1.2-.1-2.2-1-3Z" />
      <path d="M12 2v2" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-3" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
    </>
  ),
};

function Icon({ name, className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}

const expertiseCards = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive web applications using modern frontend and backend technologies.",
    icon: "code",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Node.js",
      "Golang",
      "REST APIs",
    ],
  },
  {
    title: "Backend & Databases",
    description: "Designing secure backend architectures and efficient databases.",
    icon: "database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Authentication",
      "CRUD Operations",
      "Database Design",
    ],
  },
  {
    title: "Artificial Intelligence",
    description: "Creating intelligent software powered by AI and Machine Learning.",
    icon: "brain",
    skills: ["Python", "Machine Learning", "Artificial Intelligence", "Data Analytics"],
  },
  {
    title: "DevOps & Tools",
    description: "Using professional development tools and collaborative workflows.",
    icon: "tools",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Microsoft Office"],
  },
];

const operations = [
  { label: "IT Support", icon: "monitor" },
  { label: "Technical Assistance", icon: "plug" },
  { label: "System Monitoring", icon: "chart" },
  { label: "Cloud Administration", icon: "cloud" },
  { label: "Software Installation", icon: "settings" },
  { label: "Security Access Management", icon: "shield" },
];

const professionalSkills = [
  { label: "Problem Solving", icon: "puzzle" },
  { label: "Project Coordination", icon: "branch" },
  { label: "Communication", icon: "users" },
  { label: "Leadership", icon: "rocket" },
  { label: "Teamwork", icon: "team" },
  { label: "Fast Learning", icon: "lightbulb" },
  { label: "Analytical Thinking", icon: "analytics" },
  { label: "Adaptability", icon: "zap" },
];

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "9+", label: "Certifications" },
  { value: "20+", label: "Students Trained" },
];

function IconBox({ icon, label }) {
  return (
    <article className="expertise-icon-box fade-up">
      <Icon name={icon} />
      <span>{label}</span>
    </article>
  );
}

function ExpertiseCard({ card }) {
  return (
    <article className="expertise-card fade-up">
      <div className="expertise-card__top">
        <div className="expertise-card__icon">
          <Icon name={card.icon} />
        </div>
        <span className="expertise-card__signal"></span>
      </div>

      <h3>{card.title}</h3>
      <p>{card.description}</p>

      <ul className="expertise-skill-list" aria-label={`${card.title} skills`}>
        {card.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

function ExpertiseIllustration() {
  return (
    <div className="expertise-visual fade-up" aria-hidden="true">
      <div className="expertise-visual__orb"></div>
      <div className="expertise-visual__frame">
        <img src={expertiseLaptop} alt="" className="expertise-visual__image" />
      </div>
    </div>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-container">
        <header className="expertise-hero">
          <div className="expertise-hero__content fade-up">
            <span className="expertise-kicker">Technical profile</span>
            <h2>
              Expertise<span>.</span>
            </h2>
            <p>
              I build scalable software solutions combining modern web technologies,
              backend systems and artificial intelligence.
            </p>
          </div>

          <ExpertiseIllustration />
        </header>

        <div className="expertise-grid" aria-label="Core expertise areas">
          {expertiseCards.map((card) => (
            <ExpertiseCard card={card} key={card.title} />
          ))}
        </div>

        <section className="operations-card fade-up" aria-labelledby="operations-title">
          <div className="operations-card__content">
            <span className="expertise-kicker">Enterprise readiness</span>
            <h3 id="operations-title">IT Operations & Support</h3>
            <p>Providing technical assistance and maintaining enterprise systems.</p>
          </div>

          <div className="operations-grid">
            {operations.map((item) => (
              <IconBox icon={item.icon} label={item.label} key={item.label} />
            ))}
          </div>
        </section>

        <section className="professional-skills" aria-labelledby="professional-title">
          <div className="professional-skills__heading fade-up">
            <span className="expertise-kicker">Beyond code</span>
            <h3 id="professional-title">Professional Skills</h3>
          </div>

          <div className="professional-grid">
            {professionalSkills.map((skill) => (
              <IconBox icon={skill.icon} label={skill.label} key={skill.label} />
            ))}
          </div>
        </section>

        <div className="stats-grid" aria-label="Career statistics">
          {stats.map((stat) => (
            <article className="stat-card fade-up" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <p className="expertise-quote fade-up">
          "Passionate about solving problems and building impactful software."
        </p>
      </div>
    </section>
  );
}

export default Expertise;
