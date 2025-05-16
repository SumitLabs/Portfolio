import htmlLogo from "./assets/Tech/html.png";
import cssLogo from "./assets/Tech/css.png";
import javascriptLogo from "./assets/Tech/javascript.png";
import reactjsLogo from "./assets/Tech/reactjs.png";
import reduxLogo from "./assets/Tech/redux.png";
import sassLogo from "./assets/Tech/sass.png";
import tailwindcssLogo from "./assets/Tech/tailwind.png";
import gsapLogo from "./assets/Tech/gsap.png";
import nodejsLogo from "./assets/Tech/nodejs.png";
import expressjsLogo from "./assets/Tech/express.png";
import mysqlLogo from "./assets/Tech/mysql.png";
import mongodbLogo from "./assets/Tech/mongodb.png";
import firebaseLogo from "./assets/Tech/firebase.png";
import cppLogo from "./assets/Tech/cpp.png";
import csharpLogo from "./assets/Tech/csharp.png";
import typescriptLogo from "./assets/Tech/typescript.png";
import gitLogo from "./assets/Tech/git.png";
import githubLogo from "./assets/Tech/github.png";
import postmanLogo from "./assets/Tech/postman.png";
import figmaLogo from "./assets/Tech/figma.png";

import project01 from "./assets/Project01.png";
import project02 from "./assets/Project02.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const Projects = [
  {
    name: "IPL Live Cricket Score App",
    tech: [
      {
        name: "React JS",
        logo: reactjsLogo,
      },
      {
        name: "Express JS",
        logo: expressjsLogo,
      },
      { name: "MongoDB", logo: mongodbLogo },
    ],
    img: project02,
    dec: `Developed MoneymakerX24.com, a full-stack IPL betting platform using the MERN stack. Integrated live match scores via third-party APIs and WebSocket. Implemented JWT-based user authentication, dynamic betting logic with odds and wallet management, and an admin panel for match and user control. Designed a responsive UI with React and Bootstrap, and deployed the app on a VPS using Nginx.`,
    link: "https://monyemaker.com",
  },
  {
    name: "HomeCare Service Website",
    tech: [
      {
        name: "React JS",
        logo: reactjsLogo,
      },
    ],
    img: project01,
    dec: `Developed MoneymakerX24.com, a full-stack IPL betting platform using the MERN stack. Integrated live match scores via third-party APIs and WebSocket. Implemented JWT-based user authentication, dynamic betting logic with odds and wallet management, and an admin panel for match and user control. Designed a responsive UI with React and Bootstrap, and deployed the app on a VPS using Nginx.`,
    link: "https://monyemaker.com",
  },
  {
    name: "IPL Live Cricket Score App",
    tech: [
      {
        name: "React JS",
        logo: reactjsLogo,
      },
      {
        name: "Express JS",
        logo: expressjsLogo,
      },
      { name: "MongoDB", logo: mongodbLogo },
    ],
    img: project02,
    dec: `Developed MoneymakerX24.com, a full-stack IPL betting platform using the MERN stack. Integrated live match scores via third-party APIs and WebSocket. Implemented JWT-based user authentication, dynamic betting logic with odds and wallet management, and an admin panel for match and user control. Designed a responsive UI with React and Bootstrap, and deployed the app on a VPS using Nginx.`,
    link: "https://monyemaker.com",
  },
];
