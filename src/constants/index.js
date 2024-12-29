
import { m } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mgh,
    jupyter,
    opencv,
    python,
    tensorflow,
    umb,
    pac,
    flask,
    pac_site,
    plant_site,
    ampli_oop,
    soccer_dash_game,
    fastapi,
    pac_kb,
    find_worker,
    scikit_learn,
    cs460_portfolio,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const languages = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    // C 
    // Java
  ]

  const tech_ai = [
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "Scikit-learn",
      icon: scikit_learn,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    // numpy 
    // jupyter 
    // conda 
    // pandas 
    // hpc
  ]

  const web_dev = [
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // express
    {
      name: "Node JS",
      icon: nodejs,
    },
    // threejs
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // postman
   
    {
      name: "Flask",
      icon: flask,
    },
    // postgress
  ]

  const other = [
    //github
    //aws
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    // linux
    // scrum
    // selenium (web scraping)
    // figma
    // wireshark 
  ]


  const technologies = {
    "Languages": languages,
    "Web Dev": web_dev,
    "AI": tech_ai,
    "Other": other,
  };
  
  const experiences = [
    {
      title: "Research Assistant - Computer Engineering",
      company_name: "Harvard Medical School and Massachusetts General Hospital",
      icon: mgh,
      iconBg: "#E6DEDD",
      url: "https://bme.mgh.harvard.edu/?page_id=133",
      date: "April 2021 - April 2022",
      points: [
        "Provided software & hardware support for multi-million dollar NIH funded research. Support tasks consisted of a series of small projects with tangible impacts. Most notably, uncovered functionality of a medical module via UART, saving thousands of dollars in funds otherwise necessary to acquire a new module. My efforts in this experience culminated in a IEEE MIT URTC virtual presentation as a contributing author.",
  
      ],
    },
    {
      title: "Research Assistant - Computer Vision",
      company_name: "Sloan Foundation @ UMass Boston",
      icon: umb,
      iconBg: "#E6DEDD",
      url:"https://blogs.umb.edu/kimhamad/", 
      date: "September 2023 - May 2023",
      points: [
        "Led the development of AmpliVision, a computer vision Python library designed to extract and analyze multiplex rapid test results, significantly streamlining the diagnostic process.", 
        "Created and constructed modular blocks for lateral flow assays (LFA), including custom-designed 3D-printed components to facilitate rapid testing.",
        "Successfully identified colorimetric patterns for different cancer types by determining RGB values from test lines, achieving precise block identification and mapping their spatial configuration.", 
        "This project enhanced my skills in software engineering, emphasizing clean, maintainable code and feature iteration.", 
        "Successfully implemented advanced image processing techniques using OpenCV, achieving 100% accuracy in rapid test isolation and automated recognition"
      ],
    },
    {
      title: "Bioinformatics Research Trainee - Machine Learning",
      company_name: "UMass Boston — Dana-Farber/Harvard Cancer Center Partnership",
      icon: umb,
      iconBg: "#E6DEDD",
      url:"https://umb-dfhcc.org/",
      date: "May 2024 - December 2024",
      points: [
        "Developed a rule-based generator for image simulation, capable of creating 28,672 training images, 4,096 validation images, and 1,344 testing images in parallel with a machine learning pipeline. The generator used predefined rules to arrange visual elements, adding 5% noise for robustness.",
        "Implemented and trained a convolutional neural network (CNN) using the LENET architecture for classifying rapid test results, achieving an average F1 score of 0.9970 on the test set",
        "Integrated outlier detection using the Python Outlier Detection (PyOD) library, achieving an accuracy of 98% with an F1 score of 90.91.",
        "Participated in 15 academic reading sessions on oncology research, which provided insights into current cancer disparities and informed my research direction."
      ],
    },
  ];
  
  const projects = [
    {
      name: "AmpliVision",
      description:
        "AmpliVision is an open source program designed to Automate AMPLI rapid test workflows. It loads and processes AMPLI rapid test images, finds the grid and Ampli blocks in the images, reads the diagnostic result for each Ampli block, generate a synthetic dataset of images, train a CNN classifier with generated images, then run outlier detection.",
      tags: [
        {
          name: "Research",
          color: "green-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "orange-text-gradient",
        },
        {
          name: "HPC",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
        
      ],
      image: ampli_oop,
      source_code_link: "https://github.com/Mattynb/AmpliVision",
      live_code_link: "https://amplivision3d.vercel.app/",
    },
    {
      name: "Plant Recognition",
      description:
        "This website can identify more than 1000 plant taxons, including flowers and trees from all over the world. This was possible using a customized convolutional neural network (CNN) to get potentially acurate results. We estimate that in 97% of cases, the right answer is within the top 2-3 highest confidence choices.",
      tags: [
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "orange-text-gradient",
        },
        {
          name: "Jupyter",
          color: "blue-text-gradient",
        },
      ],
      image: plant_site,
      source_code_link: "https://github.com/Mattynb/CS_Competition2023_PlantMLweb",
      live_code_link: "",
    },
    {
      name: "PAC Kitchen & Bath", 
      description:
        "Lead a team of 7 students in weekly SCRUM, providing Figma design. Constructed CI/CD using github actions, AWS EC2, and docker. Built 2 REST APIs for product (FastApi, PSQL) and other data (Node, MongoDB), which included security features like rate-limiting, auth, and COORS. Performed QA (React, CSS).",
        /*
        Lead a team of 7 students by coordinating weekly SCRUM, providing Figma design.
        Constructed CI/CD using github actions, AWS EC2, and docker. 
        Built 2 REST APIs for product (FastApi, PSQL) and other data (Node, MongoDB), 
        which included security features like rate-limiting, auth, and COORS.
        Performed QA of mantainability and clean code. (React, Js, CSS).
        */
      tags: [
        {
          name: "Team Lead",
          color: "orange-text-gradient",
        },
        {
          name: "Web Dev",
          color: "pink-text-gradient",
        },
        {
          name: "DevOps",
          color: "green-text-gradient",
        },
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
      ],
      image: pac_kb,
      source_code_link: "",
      live_code_link: "https://pac-kb.com/",
    },
    {
      name: "Plan Ahead Constructions", 
      description:
        "Executed a complete design and functional overhaul, enhancing user experience and interface for increased engagement. My focus on SEO strategies led to a 1,967% increase in traffic. My ongoing responsibilities include website maintenance, monitoring analytics.",
      tags: [
        {
          name: "Wix Website Builder",
          color: "blue-text-gradient",
        },
        {
          name: "UI Design",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: pac_site,
      source_code_link: "",
      live_code_link: "https://planaheadconstructions.com/",
    },
    {
      name: "Graphics Class Portfolio",
      description:
        "All of my CS460 - Graphics class projects. In this class I was able to develop rich and interactive web-based 3D visualizations using Three.js, XTK, and WebGL. I also learned how to create 3D models using Blender and Tinkercad. Since everything runs in the browser, it is all live on GitHub Pages.",
      tags: [
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
        {
          name: "XTK",
          color: "orange-text-gradient",
        },
        {
          name: "WebGL",
          color: "blue-text-gradient",
        },
      ],
      image: cs460_portfolio,
      source_code_link: "https://github.com/Mattynb/CS460student",
      live_code_link: "https://mattynb.github.io/CS460student/",
    },
    {
      name: "Soccer Dash",
      description:
        "Web based endless runner (Similar to Subway Surfers) game where you play as a soccer player. The game is built in unity using C# with some 3D models I created in Asset Forge. Keeps track of high scores as you play. Still needs a lot of work but it was a fun project",
      tags: [
        {
          name: "C#",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "orange-text-gradient",
        },
        {
          name: "Asset Forge",
          color: "blue-text-gradient",
        },
      ],
      image: soccer_dash_game,
      source_code_link: "https://github.com/Mattynb/SoccerDashGame",
      live_code_link: "https://soccer-dash-game.vercel.app/",
    },
    {
      name: "Find Worker",
      description:
        "This game is meant to be used as a social experiment about how licences positivelly affect applicants in the hiring process. This concept is based on “Job Market Signaling through Occupational Licensing,” work of Harvard professor Peter Q. Blair. ...See More on GitHub Readme",
        /*    This game is meant to be used as a social experiment about how licences 
positivelly affect applicants in the hiring process. This concept is 
based on “Job Market Signaling through Occupational Licensing,” work of Harvard 
professor Peter Q. Blair. 
    In the game you play the role of Job recruiter. First you meet the applicant.
The only information available is their appearance, ethnicity, age, gender, Experience
and whether or not they are lincenced. You win points by matching the applicant
with the appropriate job and lose points otherwise. You lose a LOT of points if 
it is the innapropriate job AND the applicant is an ex-convict. The only applicants
who are guaranteed not to be ex-convicts are lincenced applicants. This is implemented
on purpose in an attempt to access the players's inherit biases. After the game is 
over or terminated, a stats page pops up revealing trends related to players picks.
    Keep in mind the game is a rough draft with much left to desire, especially in the
graphics department.*/
      tags: [
        {
          name: "Research",
          color: "green-text-gradient",
        },
        {
          name: "Game Dev",
          color: "orange-text-gradient",
        },
      ],
      image: find_worker,
      source_code_link: "https://github.com/Mattynb/Find_worker",
      live_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, projects };