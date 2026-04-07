import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGrid,
  FiLayers,
  FiMail,
  FiMenu,
  FiMoon,
  FiPhone,
  FiSun,
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
  { value: "2023-2027", label: "B.Tech CSE at AKTU" },
  { value: "Internship Ready", label: "Open to software development internships" },
  { value: "Apps + AI", label: "Building practical full stack and ML-driven products" },
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
    summary:
      "A sustainability intelligence system that turns water and energy telemetry into alerts, AI insights, and forecasts for smart environments.",
    points: [
      "Converts raw telemetry into operational alerts for faster decisions",
      "Generates AI-assisted insights and forecasting for campuses and infrastructure systems",
      "Structured like a SaaS product with role-aware workflows and actionable dashboards",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Forecasting", "AI Insights"],
  },
  {
    title: "Silent Witness",
    status: "Realtime emergency response concept",
    summary:
      "An intelligent accident detection and reporting system focused on cutting emergency response time with instant alerts.",
    points: [
      "Detects accident events and prepares structured incident reporting flows",
      "Pushes real-time notifications toward emergency services and responders",
      "Built around speed, clarity, and practical impact in urgent situations",
    ],
    stack: ["Realtime Alerts", "APIs", "Event Handling", "Automation", "Safety Tech"],
  },
];

const githubHighlights = [
  {
    title: "Primary Profile",
    value: "codergautam900",
    description: "Central place for ongoing builds, experiments, and portfolio work.",
  },
  {
    title: "Problem Solving",
    value: "HackerRank",
    description: "Actively sharpening logic, coding fluency, and implementation speed.",
  },
  {
    title: "Current Focus",
    value: "Full Stack + Flutter + AI/ML",
    description: "Balancing product delivery with deeper systems and ML exploration.",
  },
  {
    title: "Collaboration Mode",
    value: "Internship Ready",
    description: "Open to teams solving meaningful backend, mobile, or platform problems.",
  },
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

  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${portfolio.githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=62d0ff&text_color=a9bdd7&icon_color=7bf7c4&ring_color=ffb26b`;
  const githubLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${portfolio.githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=62d0ff&text_color=a9bdd7`;

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
              <a className="mini-cta" href="/Gautam-Sagar-Resume.txt" download>
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
                <a className="btn btn-secondary" href="/Gautam-Sagar-Resume.txt" download>
                  Download Resume
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
              <h2>Two serious builds aimed at useful, high-impact outcomes.</h2>
              <p>
                These projects reflect the kind of products I enjoy most: systems that blend strong backend logic,
                responsive experiences, and real-world purpose.
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
                    <a href={`mailto:${portfolio.email}`} aria-label={`Discuss ${project.title}`}>
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="project-summary">{project.summary}</p>

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
                </motion.article>
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
              <h2>Code presence, learning momentum, and public developer identity.</h2>
              <p>
                The profile section combines live GitHub cards with a quick read on what I am actively building and
                improving.
              </p>
            </div>

            <div className="github-layout">
              <div className="github-stats">
                <a className="card github-card" href={socialLinks[0].href} target="_blank" rel="noreferrer">
                  <img
                    src={githubStatsUrl}
                    alt="GitHub stats card for Gautam Sagar"
                    loading="lazy"
                  />
                </a>
                <a className="card github-card" href={socialLinks[0].href} target="_blank" rel="noreferrer">
                  <img
                    src={githubLanguagesUrl}
                    alt="Top languages card for Gautam Sagar"
                    loading="lazy"
                  />
                </a>
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
            <a href="/Gautam-Sagar-Resume.txt" download>
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
