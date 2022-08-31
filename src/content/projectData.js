import React from "react";
import CognixionLogo from "../images/companies/cognixion.png";
import {
  FaGithub,
  FaReact,
  FaDiscord,
  FaYoutube,
  FaFigma,
} from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiMaterialui,
  SiJavascript,
  SiFlask,
  SiMongodb,
  SiTensorflow,
  SiGraphql,
  SiGooglemaps,
  SiPython,
  SiDevpost,
  SiNumpy,
} from "react-icons/si";
import { FiLink } from "react-icons/fi";

import TimeLine from "../images/projects/TimeLine2.png";
import Tabis from "../images/projects/Tabis.png";
import StudyGoose from "../images/projects/StudyGoose.png";
import FreeSpACE from "../images/projects/FreeSpACE.png";
import CXNone from "../images/projects/CXNone.png";

export const PROJECTS = [
  {
    img: TimeLine,
    name: "TimeLine",
    favourite: true,
    tags: ["Full Stack"],
    tools: [
      { icon: <DiHtml5 />, name: "HTML" },
      { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiGooglemaps />, name: "Google Places API" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",

        link: "https://github.com/Arcslogger/TimeLine",
      },
      {
        icon: <SiDevpost />,
        name: "Devpost",
        link: "https://devpost.com/software/timeline-qv2a60",
      },
      {
        icon: <FaYoutube />,
        name: "Demo",
        link: "https://www.youtube.com/watch?v=RT1EIRt_i2U",
      },
    ],
    description:
      "TimeLine is a web app that shows establishments in the area and how busy they are using user input and the Google Places and Geocoding API. TimeLine helps civilians avoid crowds and busy lines, which may also pose a COVID 19 health risk.",
    award: "🏆 Runner Up at ExploreHacks 2021.",
  },
  {
    img: Tabis,
    name: "Tabis",
    favourite: true,
    tags: ["Full Stack", "Neurotech"],
    tools: [
      { icon: <FaReact />, name: "React" },
      // { icon: <DiHtml5 />, name: "HTML" },
      // { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",

        link: "https://github.com/LavanSumanan/nathacks",
      },
      {
        icon: <SiDevpost />,
        name: "Devpost",
        link: "https://devpost.com/software/tabis",
      },
      {
        icon: <FaYoutube />,
        name: "Demo",
        link: "https://www.youtube.com/watch?v=KAOVlZgsdtM",
      },
    ],
    description:
      "Developed a web app Tabis that saves user specific EEG (electroencephalogram) brain data from the Muse 2 headband and analyzes it to determine the user's sleep stages and cycles. Users can upload their data to their profile and see minutely analysis of their sleep patterns to identify optimal waking times. I worked with NumPy and MongoDB in the backend to store user data and analyze EEG data into brain wave frequencies.",
    award: "🏆 First Place at NATHacks 2021",
  },
  {
    img: CognixionLogo,
    name: "HTN Challenge",
    favourite: false,
    tags: ["Front End"],
    tools: [
      { icon: <FaReact />, name: "React" },
      { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiGraphql />, name: "GraphQL" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",

        link: "https://github.com/IvanYu327/HTN-EventSearcher",
      },
      {
        icon: <FiLink />,
        name: "Demo",
        link: "https://htn-frontend-challenge-ivanyu.herokuapp.com/",
      },
    ],
    description:
      "This project was built for Hack the North's Front End Challenge. I created an events page to retrieve events from their API using GraphQL. Unfortunately the API has been closed so the demo no longer displays events.",
  },
  {
    img: StudyGoose,
    name: "Study Goose",
    favourite: true,
    tags: ["Discord", "Machine Learning"],
    tools: [
      { icon: <FaDiscord />, name: "Discord.py API" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",

        link: "https://github.com/IvanYu327/Study-Goose_HyperHacks21",
      },
      {
        icon: <SiDevpost />,
        name: "Devpost",
        link: "https://devpost.com/software/study-buddy-fj5bk1",
      },
      {
        icon: <FaYoutube />,
        name: "Demo",
        link: "https://www.youtube.com/watch?v=bwxRaF9M6Uk",
      },
    ],
    description:
      "Study Goose is a student helper Discord bot. I developed an AI chatbot using Python and trained a ML model using TensorFlow to respond to common Discord inquiries addressed to the bot, reducing the learning curve for new users to use Discord. I also developed features to convert images to text, play music, answer educational questions, and implemented MongoDB to store to-do lists and user preferences, servicing 400+ users.",
    award: "🏆 Best Hack at HyperHacks 2021.",
  },
  {
    img: FreeSpACE,
    name: "Free SpACE",
    favourite: true,
    tags: ["Full Stack", "E-Sports"],
    tools: [
      { icon: <DiHtml5 />, name: "HTML" },
      // { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",
        link: "https://github.com/IvanYu327/FreeSpACE_LiquidHacks21",
      },
      {
        icon: <SiDevpost />,
        name: "Devpost",
        link: "https://devpost.com/software/free-space-8n9auy",
      },
      {
        icon: <FaYoutube />,
        name: "Demo",
        link: "https://www.youtube.com/watch?v=bTbT5mIBFyY",
      },
    ],
    description:
      "We analyzed current esports community and developed a web app to play in Bingo in real time with esports events as a new way for online viewers to stay engaged. I developed the back-end with Flask and Python to store login and data in MongoDB and update bingo boards across all users while processing HTTP requests to display appropriate information and quickly change displays.",
    award: "🏆 Best Beginner Hack at Liquid Hacks 2.0 2021",
  },
  {
    img: CXNone,
    name: "Assistive AR Keyboard",
    favourite: true,
    tags: ["Design", "AR"],
    tools: [{ icon: <FaFigma />, name: "Figma" }],
    description:
      "During my internship with Cognixion, I modernized and redesigned AAC (Augmentative and Alternative Communication) and AR interfaces. As much as I'd love to share the design process, my work is under NDA until the product is released.",
  },
  {
    img: CognixionLogo,
    name: "Build a Bot-y",
    favourite: false,
    tags: ["Discord", "Python"],
    tools: [
      { icon: <FaDiscord />, name: "Discord.py API" },
      { icon: <SiPython />, name: "Python" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",
        link: "https://github.com/IvanYu327/Build-a-Bot-y_EngHackQuests21",
      },
      {
        icon: <FaYoutube />,
        name: "Demo",
        link: "https://www.youtube.com/watch?v=lYSbyvhQNSw&feature=share",
      },
    ],
    description:
      "Build a Bot-y was my first hackthon project and is a workout planning Discord bot that tracks user profiles, personalized reminders, and comparisons to your friends to remind people to stay fit through a familiar social platform. I also developed a marketing website using HTML/CSS/JS for the bot as well. 🏆 First Place - EngHacks Quests 2021",
  },
  {
    img: CognixionLogo,
    name: "Personal Website",
    favourite: false,
    tags: ["Front End"],
    tools: [
      { icon: <FaReact />, name: "React" },
      { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiMaterialui />, name: "Material UI" },
    ],
    links: [
      {
        icon: <FaGithub />,
        name: "Github",
        link: "https://github.com/IvanYu327/personal-website",
      },
      {
        icon: <FiLink />,
        name: "Demo (you're on it)",
      },
    ],
    description: "It's my personal website.",
  },
];
