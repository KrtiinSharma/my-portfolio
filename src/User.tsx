import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Info = {
  name: "KrtiinSharma",
  stack: [
    "Software Engineer Student",
    "Full Stack Web Developer",
    "Open Source Contributor",
  ],
  bio: "I'm a Computer Science student currently in 2nd year.i build real life projects for better understanding in web  development , MERN STACK.",
};

const ProjectInfo = [
  {
    title: "Twitter Clone",
    desc: "",
    image: "twitter.png",
    live: true,
    technologies: ["React", "TailwindCSS", "mongoDB", "express", "cloudinary"],
    link: "/",
    github: "https://github.com/KrtiinSharma/twitter-clone",
  },
  {
    title: "NEFEX",
    desc: "",
    image: "nefex.png",
    live: false,
    technologies: ["React", "SCSS", "TMDB API"],
    link: "https://nefex.vercel.app/",
    github: "https://github.com/KrtiinSharma/Nefex",
  },
  {
    title: "Leetcode Clone",
    desc: "Leetcode is a full-stack web application that replicates the core features of Leetcode, including user authentication. The front end is built with typescript, TailwindCSS while the back end uses Firebase for user authentication and data storage Leetcode Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "leetcode.png",
    live: false,
    technologies: ["Typescript", "TailwindCSS", "Javascript"],
    link: "https://leetcode-clone-ruby.vercel.app/",
    github: "https://github.com/KrtiinSharma/leetcode-clone",
  },
  {
    title: "Zoom Clone",
    desc: "",
    image: "zoom.png",
    live: false,
    technologies: ["typescript", "Node.js", "Express"],
    link: "https://zoom-clone-taupe.vercel.app/",
    github: "https://github.com/KrtiinSharma/zoom_clone",
  },
  {
    title: "Pern Chat app",
    desc: "",
    image: "chat.png",
    live: false,
    technologies: [
      "Typescript",
      "javascript",
      "TailwindCSS",
      "Firebase",
      "MongoDB",
      "Express",
      "Prisma",
    ],
    link: "https://pern-chat-app-czbc.onrender.com/",
    github: "https://github.com/KrtiinSharma/pern-chat-app",
  },
  {
    title: "Gmail clone",
    desc: "",
    image: "gmail.png",
    live: false,
    technologies: ["React", "TailwindCSS", "Firebase"],
    link: "/",
    github: "https://github.com/KrtiinSharma/gmailclone",
  },
  {
    title: "Expense Tracker",
    desc: "",
    image: "tracker.png",
    live: false,
    technologies: ["React", "TailwindCSS", "mongoDB", "graphql"],
    link: "https://expense-tracker-gql-7728.onrender.com/",
    github: "https://github.com/KrtiinSharma/expense-tracker-gql",
  },
  {
    title: "Google Search Clone",
    desc: "",
    image: "google-search.png",
    live: false,
    technologies: ["React", "TailwindCSS", "mongoDB", "graphql"],
    link: "https://google-search-clone-main.netlify.app/",
    github: "https://github.com/KrtiinSharma/google-search-clone",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "MongoDB Compass", "Postman"],
  },
];

const socialLinks = [
  { link: "https://github.com/KrtiinSharma", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/krtiin-sharma-4a113626b/",
    icon: IconBrandLinkedin,
  },
  {
    link: "",
    icon: IconBrandYoutube,
  },
  { link: "https://www.instagram.com/krtiin2415", icon: IconBrandInstagram },
  { link: "https://leetcode.com/u/krtiin/", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "System Engineer",
    company: "skience",
    date: "Nov 2022 - Sep 2023",
    desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    skills: [
      "Java",
      "MySQL",
      "Hibernate",
      "Selenium",
      "Jenkins",
      "JIRA",
      "Automation Testing",
    ],
  },
];

const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
