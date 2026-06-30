import {
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiMonitor,
  FiSettings,
  FiShield,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import {
  TbBrain,
  TbCloudCog,
  TbDeviceLaptop,
  TbPlugConnected,
  TbRocket,
} from "react-icons/tb";
import {
  RiCodeSSlashLine,
  RiLightbulbFlashLine,
  RiTeamLine,
} from "react-icons/ri";
import { LuBrainCircuit, LuChartSpline, LuPuzzle, LuSparkles } from "react-icons/lu";
import "./Expertise.css";

const expertiseCards = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive web applications using modern frontend and backend technologies.",
    icon: RiCodeSSlashLine,
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
    icon: FiDatabase,
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
    icon: TbBrain,
    skills: ["Python", "Machine Learning", "Artificial Intelligence", "Data Analytics"],
  },
  {
    title: "DevOps & Tools",
    description: "Using professional development tools and collaborative workflows.",
    icon: FiTool,
    skills: ["Git", "GitHub", "GitLab", "Docker", "Microsoft Office"],
  },
];

const operations = [
  { label: "IT Support", icon: FiMonitor },
  { label: "Technical Assistance", icon: TbPlugConnected },
  { label: "System Monitoring", icon: LuChartSpline },
  { label: "Cloud Administration", icon: TbCloudCog },
  { label: "Software Installation", icon: FiSettings },
  { label: "Security Access Management", icon: FiShield },
];

const professionalSkills = [
  { label: "Problem Solving", icon: LuPuzzle },
  { label: "Project Coordination", icon: FiGitBranch },
  { label: "Communication", icon: FiUsers },
  { label: "Leadership", icon: TbRocket },
  { label: "Teamwork", icon: RiTeamLine },
  { label: "Fast Learning", icon: RiLightbulbFlashLine },
  { label: "Analytical Thinking", icon: LuBrainCircuit },
  { label: "Adaptability", icon: FiZap },
];

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "9+", label: "Certifications" },
  { value: "20+", label: "Students Trained" },
];

function IconBox({ icon: Icon, label }) {
  return (
    <article className="expertise-icon-box fade-up">
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </article>
  );
}

function ExpertiseCard({ card }) {
  const Icon = card.icon;

  return (
    <article className="expertise-card fade-up">
      <div className="expertise-card__top">
        <div className="expertise-card__icon">
          <Icon aria-hidden="true" />
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
      <div className="expertise-visual__panel">
        <div className="expertise-visual__toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="expertise-visual__screen">
          <TbDeviceLaptop className="expertise-visual__laptop" />
          <div className="expertise-visual__code">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <FiCpu className="expertise-visual__chip" />
          <LuSparkles className="expertise-visual__spark" />
        </div>
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
