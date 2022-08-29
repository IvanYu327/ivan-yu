import React from "react";
import CognixionLogo from "../images/cognixion.png";
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
} from "react-icons/si";
import { FiLink } from "react-icons/fi";

export const PROJECTS = [
  {
    img: CognixionLogo,
    name: "TimeLine",
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "Tabis",
    tags: ["Full Stack", "Neurotech"],
    tools: [
      { icon: <FaReact />, name: "React" },
      // { icon: <DiHtml5 />, name: "HTML" },
      // { icon: <DiCss3 />, name: "CSS" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPython />, name: "Python" },
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "HTN Challenge",
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "Study Goose",
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "Free SpACE",
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "AAC AR Keyboard",
    tags: ["Design", "AR"],
    tools: [{ icon: <FaFigma />, name: "Figma" }],
    description:
      "During my internship with Cognixion, I modernized and redesigned AAC (Augmentative and Alternative Communication) and AR interfaces. As much as I'd love to share the design process, my work is under NDA until the product is released.",
  },
  {
    img: CognixionLogo,
    name: "Build a Bot-y",
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
    description: "this is a project",
  },
  {
    img: CognixionLogo,
    name: "Personal Website",
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
