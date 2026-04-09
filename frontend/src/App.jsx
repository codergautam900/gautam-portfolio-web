import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDownload,
  FiExternalLink,
  FiGrid,
  FiLayers,
  FiMail,
  FiMenu,
  FiMoon,
  FiPhone,
  FiShield,
  FiSun,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import { FaGithub, FaHackerrank, FaInstagram, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { SiFlutter, SiMongodb, SiSocketdotio } from "react-icons/si";

const portfolio = {
  name: "Gautam Sagar",
  headline: "Full Stack Developer | Flutter Developer | AI/ML Enthusiast",
  email: "gateaspirant8650@gmail.com",
  phone: "7900503595",
  education: "B.Tech in Computer Science (AKTU) | 2023-2027",
  githubUsername: "codergautam900",
  about:
    "I am a passionate developer focused on building real-world, scalable software systems. I have hands-on experience in full stack development and Flutter, and I am actively exploring AI/ML to solve practical problems. I enjoy working on impactful projects and continuously improving my skills.",
  roles: ["Full Stack Developer", "Flutter Developer", "AI/ML Enthusiast"],
};

const resumeFile = "/Gautam-Sagar-Resume.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/codergautam900", icon: FaGithub },
  { label: "X", href: "https://x.com/GautamR03279682", icon: FaXTwitter },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/gateaspirant8650", icon: FaHackerrank },
  { label: "Instagram", href: "https://www.instagram.com/fitcodergautam", icon: FaInstagram },
];

const quickStats = [
  { value: "4", label: "Public project repos" },
  { value: "3", label: "Core focus tracks" },
  { value: "2023-2027", label: "B.Tech CSE at AKTU" },
];

const highlights = [
  "Built SaaS-style applications with authentication and role management",
  "Experience with real-time systems and API design",
  "Integrated AI/ML features into applications",
  "Hackathon project development experience",
];

const goals = [
  "Seeking software development internships",
  "Open to backend and full stack roles",
  "Interested in building impactful tech products",
];

const executionSignals = [
  {
    title: "System Thinking",
    icon: FiTrendingUp,
    description: "I prefer products where frontend, backend, and user outcomes stay connected instead of being built in isolation.",
    bullets: [
      "Comfortable with auth flows, role logic, APIs, and dashboard-style experiences",
      "Strong fit for teams that want product-minded engineering, not just task completion",
    ],
  },
  {
    title: "Realtime and Reliability",
    icon: FiShield,
    description: "My strongest project themes revolve around alerts, messaging, event handling, and dependable application flow.",
    bullets: [
      "Experience with Socket.IO patterns, realtime interaction, and event-driven features",
      "Interested in backend and full stack roles where correctness and responsiveness matter",
    ],
  },
  {
    title: "Applied Learning Mindset",
    icon: FiCpu,
    description: "I actively connect academic learning with practical product builds across web, mobile, and AI-assisted systems.",
    bullets: [
      "Building while learning keeps my portfolio grounded in real implementation work",
      "Good internship fit for teams that value speed, ownership, and steady skill growth",
    ],
  },
];

const focusPillars = [
  {
    title: "Scalable Product Thinking",
    description: "Designing systems that feel polished for users and practical for teams.",
    icon: FiLayers,
  },
  {
    title: "Responsive Interfaces",
    description: "Crafting smooth, mobile-first experiences with intentional motion.",
    icon: FiGrid,
  },
  {
    title: "Backend Reliability",
    description: "Shipping APIs, auth flows, and real-time features that stay maintainable.",
    icon: FiCode,
  },
];

const skillGroups = [
  {
    title: "Frontend Systems",
    description: "Modern interfaces with strong component structure and responsive behavior.",
    icon: FaReact,
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend and APIs",
    description: "Server-side logic for auth, business rules, and data handling.",
    icon: FaNodeJs,
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Data Layer",
    description: "Flexible persistence and schema-driven application structure.",
    icon: SiMongodb,
    items: ["MongoDB", "Schema Design", "Query Optimization", "Role Management"],
  },
  {
    title: "Mobile Engineering",
    description: "Cross-platform app experiences with product-level usability in mind.",
    icon: SiFlutter,
    items: ["Flutter", "Responsive Layouts", "Navigation", "State Handling"],
  },
  {
    title: "Programming Core",
    description: "Problem solving and implementation across multiple language stacks.",
    icon: FaJava,
    items: ["Java", "Python", "DSA Practice", "OOP"],
  },
  {
    title: "Realtime and Tooling",
    description: "Collaboration-ready workflows with live data and strong version control.",
    icon: SiSocketdotio,
    items: ["Git", "GitHub", "Socket.IO", "Deployment Workflows"],
  },
];

const projects = [
  {
    title: "SustainOS AI",
    status: "Flagship full stack platform",
    repo: "https://github.com/gauravgautam2003/SustaionOS-open-source-sustainability-monitoring-action-app.git",
    summary:
      "A sustainability intelligence system that turns water and energy telemetry into alerts, AI insights, and forecasts for smart environments.",
    points: [
      "Converts raw telemetry into operational alerts for faster decisions",
      "Generates AI-assisted insights and forecasting for campuses and infrastructure systems",
      "Structured like a SaaS product with role-aware workflows and actionable dashboards",
    ],
    takeaway:
      "Shows full stack product structure, data-to-decision thinking, and the ability to turn a technical problem into a usable platform concept.",
    evidence: [
      { label: "Architecture", value: "Telemetry ingestion, alerting flow, dashboards, and AI-style forecasting outputs" },
      { label: "Engineering Signal", value: "SaaS-style structure with role-aware workflows and practical product direction" },
      { label: "Why It Matters", value: "Demonstrates backend planning, frontend clarity, and systems thinking in one project" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Forecasting", "AI Insights"],
  },
  {
    title: "Silent Witness",
    status: "Realtime emergency response concept",
    repo: "https://github.com/codergautam900/-InvisibleWitness-AI.git",
    summary:
      "An intelligent accident detection and reporting system focused on cutting emergency response time with instant alerts.",
    points: [
      "Detects accident events and prepares structured incident reporting flows",
      "Pushes real-time notifications toward emergency services and responders",
      "Built around speed, clarity, and practical impact in urgent situations",
    ],
    takeaway:
      "Highlights event-driven problem solving, response-focused UX, and the ability to design software around urgency and safety.",
    evidence: [
      { label: "Architecture", value: "Detection pipeline, incident reporting flow, and emergency alert handling" },
      { label: "Engineering Signal", value: "Realtime communication thinking with structured backend-driven event flow" },
      { label: "Why It Matters", value: "Strong interviewer signal for systems where latency, alerts, and correctness matter" },
    ],
    stack: ["Realtime Alerts", "APIs", "Event Handling", "Automation", "Safety Tech"],
  },
  {
    title: "Blogshub",
    status: "Content platform build",
    repo: "https://github.com/codergautam900/Blogshub.git",
    summary:
      "A MERN-based blogging platform focused on publishing workflows, content management, and a smooth reader-writer experience.",
    points: [
      "Supports creating and managing blog content through a structured full stack workflow",
      "Designed around readable UI, content delivery, and practical CRUD functionality",
      "Reflects experience with application structure, routing, and backend-connected interfaces",
    ],
    takeaway:
      "Demonstrates that I can build clean CRUD-heavy product flows, organize a MERN codebase, and focus on usable content experiences.",
    evidence: [
      { label: "Architecture", value: "Content CRUD, routing structure, backend-connected UI, and publishing workflow" },
      { label: "Engineering Signal", value: "Solid full stack fundamentals for application organization and data handling" },
      { label: "Why It Matters", value: "Shows execution discipline beyond flashy features by shipping practical product flows" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "CRUD", "Content Platform"],
  },
  {
    title: "MERN Chat App",
    status: "Realtime communication app",
    repo: "https://github.com/codergautam900/mern-chat-app.git",
    summary:
      "A chat-focused MERN application built around realtime messaging, interactive UI flows, and responsive user communication.",
    points: [
      "Implements chat interactions with backend-driven messaging flows",
      "Explores realtime behavior and user-focused interface responsiveness",
      "Demonstrates practical work with full stack app state and communication features",
    ],
    takeaway:
      "Acts as strong proof that I can work with realtime communication patterns, app state, and interactive user experiences.",
    evidence: [
      { label: "Architecture", value: "Socket-driven messaging flow, auth logic, and interactive chat state" },
      { label: "Engineering Signal", value: "Realtime application thinking with responsive full stack coordination" },
      { label: "Why It Matters", value: "Good signal for collaboration tools, dashboards, and user-interactive systems" },
    ],
    stack: ["MERN", "Socket.IO", "Realtime Messaging", "Authentication", "Responsive UI"],
  },
];

const githubHighlights = [
  {
    title: "Main GitHub",
    value: "codergautam900",
    description: "Home for portfolio work, experiments, and public repositories.",
  },
  {
    title: "Problem Solving",
    value: "HackerRank",
    description: "Sharpening logic, coding fluency, and implementation speed.",
  },
  {
    title: "Current Focus",
    value: "Full Stack + Flutter + AI/ML",
    description: "Balancing product builds with systems and ML exploration.",
  },
  {
    title: "Availability",
    value: "Open to Internships",
    description: "Interested in backend, full stack, and product-focused team environments.",
  },
];

const githubShowcase = [
  {
    title: "Blogshub",
    type: "Featured Repository",
    href: "https://github.com/codergautam900/Blogshub",
    summary: "MERN blogging platform demonstrating full stack CRUD workflows and content-focused product structure.",
    stack: ["MERN", "CRUD", "Routing"],
  },
  {
    title: "MERN Chat App",
    type: "Featured Repository",
    href: "https://github.com/codergautam900/mern-chat-app",
    summary: "Realtime communication project showing message flow, app state handling, and Socket.IO-oriented thinking.",
    stack: ["Socket.IO", "Realtime", "Authentication"],
  },
];

const githubMetrics = [
  { value: "4", label: "featured public projects" },
  { value: "3", label: "focus tracks on display" },
  { value: "Open", label: "for internships" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const buildMailtoUrl = ({ name, email, subject, message }) => {
  const params = new URLSearchParams({
    subject: subject || "Portfolio enquiry for Gautam Sagar",
    body: [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "Hi Gautam, I would like to connect with you.",
    ].join("\n"),
  });

  return `mailto:${portfolio.email}?${params.toString()}`;
};

const GitHubAvatar = ({ username, name }) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div className="github-avatar github-avatar--fallback" aria-label={`${name} avatar fallback`}>
        <span>{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
      </div>
    );
  }

  return (
    <img
      className="github-avatar"
      src={`https://github.com/${username}.png?size=280`}
      alt={`${name} GitHub avatar`}
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const currentRole = portfolio.roles[roleIndex];
    const finishedTyping = !isDeleting && typedText === currentRole;
    const finishedDeleting = isDeleting && typedText === "";

    const timeoutId = window.setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true);
        return;
      }

      if (finishedDeleting) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % portfolio.roles.length);
        return;
      }

      setTypedText((current) =>
        currentRole.slice(0, current.length + (isDeleting ? -1 : 1)),
      );
    }, finishedTyping ? 1400 : isDeleting ? 45 : 75);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, roleIndex, typedText]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(formData);
    setFormStatus("Your email app should open with the message pre-filled.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a className="brand" href="#home" onClick={closeMenu}>
              <span className="brand-mark">GS</span>
              <span className="brand-copy">
                <strong>{portfolio.name}</strong>
                <span>Developer Portfolio</span>
              </span>
            </a>

            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="nav-actions">
              <a className="mini-cta" href={resumeFile} download>
                Resume
              </a>
              <button
                className="icon-button"
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
              <button
                className="icon-button mobile-only"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen((current) => !current)}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section hero-section" id="home">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy-block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="eyebrow">
                <HiSparkles />
                Building practical software with product thinking
              </span>

              <div className="type-shell">
                <span className="type-shell__label">Now shipping</span>
                <span className="type-shell__value">
                  {typedText}
                  <span className="type-cursor" />
                </span>
              </div>

              <h1 className="hero-title">{portfolio.name}</h1>
              <p className="hero-subtitle">{portfolio.headline}</p>
              <p className="hero-description">{portfolio.about}</p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                  <FiArrowRight />
                </a>
                <a className="btn btn-secondary" href={resumeFile} download>
                  Download Resume PDF
                  <FiDownload />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="social-row">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} className="social-link" href={href} target="_blank" rel="noreferrer">
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>

              <div className="quick-stats">
                {quickStats.map((stat) => (
                  <motion.article
                    key={stat.label}
                    className="stat-card"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
            >
              <div className="hero-orb hero-orb--one" />
              <div className="hero-orb hero-orb--two" />
              <div className="hero-grid-glow" />

              <motion.div
                className="depth-panel"
                animate={{
                  rotateX: [6, 2, 6],
                  rotateY: [-10, 10, -10],
                  y: [-10, 8, -10],
                }}
                transition={{
                  duration: 14,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="depth-panel__glow" />
                <div className="terminal-window">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="terminal-copy">
                    <span>$ profile.init()</span>
                    <strong>Scalable systems. Realtime thinking. AI-assisted products.</strong>
                    <span>{">"} internship_mode = true</span>
                  </div>
                </div>

                <div className="focus-grid">
                  {focusPillars.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="focus-card">
                      <span className="focus-icon">
                        <Icon />
                      </span>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="floating-ribbon floating-ribbon--left">SaaS + Auth + APIs</div>
                <div className="floating-ribbon floating-ribbon--right">Responsive 3D UI</div>
                <div className="floating-chip">Flutter + Full Stack + AI/ML</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="section"
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">About</span>
              <h2>Engineering real-world software with clarity, speed, and useful outcomes.</h2>
              <p>
                I care about products that solve practical problems, not just demos that look good in screenshots.
                My focus stays on scalable architecture, responsive UX, and features that help users act faster.
              </p>
            </div>

            <div className="about-layout">
              <article className="card card-accent">
                <span className="card-label">Developer Profile</span>
                <h3>Full stack execution with mobile and AI curiosity in the same workflow.</h3>
                <p>{portfolio.about}</p>

                <div className="info-grid">
                  <a className="info-tile" href={`mailto:${portfolio.email}`}>
                    <FiMail />
                    <div>
                      <span>Email</span>
                      <strong>{portfolio.email}</strong>
                    </div>
                  </a>
                  <a className="info-tile" href={`tel:${portfolio.phone}`}>
                    <FiPhone />
                    <div>
                      <span>Phone</span>
                      <strong>{portfolio.phone}</strong>
                    </div>
                  </a>
                  <div className="info-tile">
                    <HiSparkles />
                    <div>
                      <span>Education</span>
                      <strong>{portfolio.education}</strong>
                    </div>
                  </div>
                </div>
              </article>

              <article className="card">
                <span className="card-label">Highlights</span>
                <motion.div
                  className="highlight-grid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {highlights.map((item) => (
                    <motion.div key={item} className="highlight-card" variants={sectionVariants}>
                      <HiSparkles />
                      <p>{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Skills</span>
              <h2>Built across web, mobile, backend, and realtime product layers.</h2>
              <p>
                My toolkit is broad enough to build full flows end-to-end and focused enough to stay practical for
                shipping.
              </p>
            </div>

            <div className="skill-grid">
              {skillGroups.map(({ title, description, icon: Icon, items }) => (
                <motion.article
                  key={title}
                  className="card skill-card"
                  whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                  transition={{ type: "spring", stiffness: 210, damping: 18 }}
                >
                  <div className="skill-card__header">
                    <span className="skill-icon">
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Projects</span>
              <h2>Featured projects that show product thinking, realtime systems, and full stack execution.</h2>
              <p>
                These projects reflect the kind of systems I enjoy building most: practical products with strong
                backend logic, clear user flows, and room for meaningful scale.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  className="card project-card"
                  whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 210, damping: 18 }}
                >
                  <span className="project-status">{project.status}</span>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-takeaway">
                    <strong>What this proves:</strong> {project.takeaway}
                  </p>

                  <div className="project-evidence-grid">
                    {project.evidence.map((item) => (
                      <div key={`${project.title}-${item.label}`} className="project-evidence-card">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>

                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a className="btn btn-secondary project-link-button" href={project.repo} target="_blank" rel="noreferrer">
                      View Project
                      <FiExternalLink />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="readiness"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Execution Signals</span>
              <h2>What an interviewer can quickly infer from this portfolio.</h2>
              <p>
                The strongest signal here is not just design polish. It is consistent proof that I like building
                complete systems with user-facing clarity, backend structure, and practical problem framing.
              </p>
            </div>

            <div className="readiness-grid">
              {executionSignals.map(({ title, description, bullets, icon: Icon }) => (
                <article key={title} className="card readiness-card">
                  <div className="readiness-head">
                    <span className="focus-icon">
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>

                  <ul className="readiness-list">
                    {bullets.map((bullet) => (
                      <li key={bullet}>
                        <FiCheckCircle />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="github"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">GitHub Stats</span>
              <h2>GitHub section built for clarity, not fragile external widgets.</h2>
              <p>
                This version keeps things simple and readable: profile identity, highlighted repositories, and fast
                signals about what I am actively building.
              </p>
            </div>

            <div className="github-layout">
              <div className="github-stats">
                <article className="card github-profile-card">
                  <div className="github-profile-head">
                    <GitHubAvatar username={portfolio.githubUsername} name={portfolio.name} />
                    <div className="github-profile-copy">
                      <span className="github-pill">GitHub Profile</span>
                      <h3>{portfolio.name}</h3>
                      <p>@{portfolio.githubUsername}</p>
                    </div>
                  </div>

                  <p className="github-profile-summary">
                    Public work centered on full stack products, realtime systems, and practical exploration across
                    Flutter and AI/ML ideas.
                  </p>

                  <div className="github-metric-grid">
                    {githubMetrics.map((item) => (
                      <div key={item.label} className="github-metric-card">
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a className="btn btn-secondary project-link-button" href={socialLinks[0].href} target="_blank" rel="noreferrer">
                      Open GitHub Profile
                      <FiExternalLink />
                    </a>
                  </div>
                </article>

                <div className="github-showcase-grid">
                  {githubShowcase.map((item) => (
                    <a
                      key={item.title}
                      className="card github-showcase-card"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="project-status">{item.type}</span>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <div className="tag-list">
                        {item.stack.map((tag) => (
                          <span key={`${item.title}-${tag}`} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="github-inline-link">
                        View on GitHub
                        <FiExternalLink />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="github-highlights">
                {githubHighlights.map((item) => (
                  <article key={item.title} className="card github-mini-card">
                    <span>{item.title}</span>
                    <strong>{item.value}</strong>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Contact</span>
              <h2>Ready for internships, collaboration, and useful technical conversations.</h2>
              <p>
                If you are hiring, collaborating, or building something meaningful, I would love to hear about it.
              </p>
            </div>

            <div className="contact-layout">
              <article className="card contact-card">
                <span className="card-label">Contact Details</span>
                <h3>Let&apos;s build something that matters.</h3>
                <p>
                  I am looking for software development internship opportunities and backend or full stack roles where
                  I can contribute, learn fast, and ship dependable products.
                </p>

                <div className="contact-stack">
                  <a className="contact-link" href={`mailto:${portfolio.email}`}>
                    <FiMail />
                    {portfolio.email}
                  </a>
                  <a className="contact-link" href={`tel:${portfolio.phone}`}>
                    <FiPhone />
                    {portfolio.phone}
                  </a>
                </div>

                <div className="goal-list">
                  {goals.map((goal) => (
                    <div key={goal} className="goal-pill">
                      {goal}
                    </div>
                  ))}
                </div>

                <div className="project-actions">
                  <a className="btn btn-secondary project-link-button" href={resumeFile} download>
                    Download Resume PDF
                    <FiDownload />
                  </a>
                </div>
              </article>

              <article className="card">
                <span className="card-label">Contact Form</span>
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <label>
                    Subject
                    <input
                      type="text"
                      name="subject"
                      placeholder="Role, project, or collaboration"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Message
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell Gautam about the opportunity or idea."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <button className="btn btn-primary btn-full" type="submit">
                    Send via Email
                    <FiArrowRight />
                  </button>
                </form>

                {formStatus ? <p className="form-status">{formStatus}</p> : null}
              </article>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>{portfolio.name}</strong>
            <p>Full Stack Developer | Flutter Developer | AI/ML Enthusiast</p>
          </div>
          <div className="footer-links">
            <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${portfolio.email}`}>Email</a>
            <a href={resumeFile} download>
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
