const cvData = {
  name: "Mahdi Kiani",
  title: "Ph.D. in Computer Software Engineering, Lecturer",
  contact: {
    email: "mkiani3000@gmail.com",
    secondaryEmail: "Me.kiani@eng.ui.ac.ir",
  },
  education: [
    {
      degree: "Ph.D. in Computer Engineering (Software)",
      institution: "University of Isfahan",
      years: "2021 - 2026",
      thesis: "Multi-dimensional Auto-tagging of Microtonal Music",
      gpa: "19.23",
    },
    {
      degree: "Master's in Business Management",
      institution: "University of Isfahan",
      years: "2018 - 2020",
      thesis:
        "Discrete Event Simulation of the Impact of Blockchain Technology on Supply Chain Performance",
      gpa: "19.0",
    },
    {
      degree: "Bachelor's in Computer Engineering (Software)",
      institution: "University of Najafabad",
      years: "2003 - 2007",
      thesis:
        "Examination and Analysis of the Effect of Design Patterns in Software Development (Case Study: A Reservation System)",
      gpa: "16.24",
    },
  ],
  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "React",
      "Angular",
    ],
    backend: ["C#", "SQL Server", "Python", "C", "C++"],
    frameworks: [
      "React",
      "Flutter",
      "Node.js",
      "Express",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "Angular",
      "Django",
    ],
  },
  experience: [
    {
      title: "Lecturer",
      institution: "University of Farhangian, Isfahan, Iran",
      period: "Fall 2024 - Present",
      details:
        "Teaching application of technology in education, teaching strategies, operating systems, web programming, advanced programming, computer applications in teaching, computer basics, and data mining. Produced educational videos on ASP.NET Core MVC with C# from basic to advanced levels and authored books on Microsoft MVC 5 and Entity Framework Code First.",
    },
    {
      title: "Head of IT and Communications Department",
      institution: "General Directorate of Education of Isfahan Province",
      period: "2022 - 2024",
      details:
        "Managed IT infrastructure, communications, digital services, and organizational technology operations for the department.",
    },
    {
      title: "Information Technology Officer",
      institution: "General Directorate of Education of Isfahan Province",
      period: "2010 - 2022",
      details:
        "Managed IT infrastructure, communications, digital services, and organizational technology operations for the department.",
    },
    {
      title: "Software Developer",
      institution: "Omran Abshar Espadana Company",
      period: "2008 - 2010",
      details:
        "Worked as a software developer and IT manager on business and organizational systems.",
    },
    {
      title:
        "Manager and Consultant of the Development Team / Senior Developer",
      institution: "Nahib Javan Company",
      period: "2009 - Part-time",
      details:
        "Managed the development team, advised on software architecture, and served as a senior developer.",
    },
  ],
  projects: [
    "Ticketing System",
    "Online Buying & Selling Platform",
    "Procurements, Invoice & Document Management",
    "Human Resource Management System",
    "Office Automation Suite",
    "Dynamic Report Generator",
    "Forum Application",
    "Dynamic Form & Process Builder",
    "Content Management System",
  ],
  publications: [
    "HOMAYON: A hybrid fusion transformer for microtonal music auto-tagging using melody-aware timbre representations. (2026)",
    "Improving Supply Chain Performance Using Blockchain-Enabled Smart Contract: a Discrete-Event Simulation. (2025)",
    "Implementing an online education and learning plan in Isfahan province schools during the COVID-19 pandemic. (2020)",
  ],
};

const iconMap = {
  frontend: "fa-solid fa-display",
  backend: "fa-solid fa-server",
  frameworks: "fa-solid fa-cubes",
};

const groupTitleMap = {
  frontend: "Frontend",
  backend: "Backend & Programming",
  frameworks: "Frameworks & Platforms",
};

function createElement(tag, className, html) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html) element.innerHTML = html;
  return element;
}

function setupLoader() {
  const revealPage = () => {
    document.body.classList.remove("is-loading");
    document.body.classList.add("loaded");
  };

  window.addEventListener("load", () => {
    window.setTimeout(revealPage, 450);
  });

  window.setTimeout(revealPage, 1800);
}

function populatePage() {
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  document.getElementById("about-text").textContent =
    `Hello, I am ${cvData.name}. I hold a Ph.D. in Computer Software Engineering and serve as a Lecturer. My work combines artificial intelligence, software engineering, distributed systems, full-stack development, educational technology, and practical IT leadership. I enjoy building useful systems, teaching technical subjects clearly, and turning research ideas into working digital solutions.`;

  const educationContainer = document.querySelector(".education-container");
  cvData.education.forEach((education) => {
    const item = createElement(
      "article",
      "education-item reveal-on-scroll",
      `
        <span class="meta-pill">${education.years}</span>
        <h3>${education.degree}</h3>
        <p>${education.institution}</p>
        <p><span class="detail-label">Thesis:</span> ${education.thesis}</p>
        <p><span class="detail-label">GPA:</span> ${education.gpa}</p>
      `,
    );
    educationContainer.appendChild(item);
  });

  const skillsContainer = document.querySelector(".skills-container");
  Object.entries(cvData.skills).forEach(([group, skills]) => {
    const skillGroup = createElement(
      "article",
      "skill-group reveal-on-scroll",
      `
        <h3><i class="${iconMap[group]}"></i> ${groupTitleMap[group]}</h3>
        <div class="skill-tags"></div>
      `,
    );

    const tags = skillGroup.querySelector(".skill-tags");
    skills.forEach((skill) => {
      tags.appendChild(createElement("span", "skill-tag", skill));
    });

    skillsContainer.appendChild(skillGroup);
  });

  const experienceContainer = document.querySelector(".experience-container");
  cvData.experience.forEach((experience) => {
    const item = createElement(
      "article",
      "experience-item reveal-on-scroll",
      `
        <span class="meta-pill">${experience.period}</span>
        <h3>${experience.title}</h3>
        <p><strong>${experience.institution}</strong></p>
        <p>${experience.details}</p>
      `,
    );
    experienceContainer.appendChild(item);
  });

  const projectsContainer = document.querySelector(".projects-container");
  const projectsColumn = createListColumn(
    "Project Portfolio",
    cvData.projects,
    "project-column",
  );
  const publicationsColumn = createListColumn(
    "Selected Publications",
    cvData.publications,
    "publication-column",
  );
  projectsContainer.append(projectsColumn, publicationsColumn);

  setupEmailLink("primary-email", cvData.contact.email);
  setupEmailLink("secondary-email", cvData.contact.secondaryEmail);
}

function createListColumn(title, items, className) {
  const column = createElement(
    "article",
    `${className} reveal-on-scroll`,
    `<h3>${title}</h3><ul class="item-list"></ul>`,
  );
  const list = column.querySelector(".item-list");
  items.forEach((item) => {
    list.appendChild(createElement("li", "", item));
  });
  return column;
}

function setupEmailLink(id, email) {
  const link = document.getElementById(id);
  if (!link || !email) return;

  link.href = `mailto:${email}`;
  link.querySelector("span").textContent = email;
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset =
        document.querySelector(".site-header")?.offsetHeight || 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset - 14;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      history.pushState(null, "", targetId);
      closeMobileMenu();
    });
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  if (!toggle || !navigation) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu",
    );
    navigation.classList.toggle("is-open", !isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

function closeMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  if (!toggle || !navigation) return;

  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function setupActiveNavigation() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { threshold: 0.45 },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupProfileImageFallback() {
  const profileImage = document.getElementById("profile-image");
  if (!profileImage) return;

  const showFallback = () => {
    profileImage.closest(".portrait-shell")?.classList.add("image-missing");
  };

  profileImage.addEventListener("error", showFallback);

  if (profileImage.complete && profileImage.naturalWidth === 0) {
    showFallback();
  }
}

setupLoader();

document.addEventListener("DOMContentLoaded", () => {
  populatePage();
  setupProfileImageFallback();
  setupSmoothScrolling();
  setupMobileMenu();
  setupRevealAnimations();
  setupActiveNavigation();
  setupHeaderState();
});
