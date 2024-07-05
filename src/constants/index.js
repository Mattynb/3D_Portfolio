
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
  
  const technologies = [

    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
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
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Research Assistant - Computer Engineering",
      company_name: "Harvard Medical School and Massachusetts General Hospital",
      icon: mgh,
      iconBg: "#E6DEDD",
      url: "https://www.nmr.mgh.harvard.edu/Neural_Systems_Group/index.html",
      date: "April 2021 - April 2022",
      points: [
        "Spearheaded software & hardware support for multi-million dollar NIH funded research, aiding workflows of 3 papers.",
        "Collaboratively reverse engineered an international medical pump module via UART, saving thousands of dollars in funds.",
        "Programmed a C-based controller for a biosensor calibration platform, automatically calibrating protocols under 60s.",
        "Designed a GUI to collect visual data in monitor with OpenCV and save to excel, enabling live data collection up to 60 fps.",  
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
        "Architected a computer vision program to extract rapid test results, streamlining diagnostics in 2500+ lines of code.",
        "Implemented image scanning feature using OpenCV, isolating the rapid test system from images with 100% accuracy.",
        "Built OOP feature to automatically create a virtual representation of the image, breaking the problem down into 3 classes.",
        "Integrated the program with a MongoDB database, enabling recognition of test components with 100% accuracy."
      ],
    },
    {
      title: "Bioinformatics Research Trainee - Machine Learning",
      company_name: "Dana Farber @ UMass Boston",
      icon: umb,
      iconBg: "#E6DEDD",
      url:"https://umb-dfhcc.org/",  
      date: "September 2023 - May 2023",
      points: [
        "By the end of my experience I will have:",
        "Architected a machine learning program to analyze rapid test results and classify which of the 53 viruses is likely present.",
        "Deployed this program as an user friendly web app.",
        "Identified the unique normal RGB distribution displayed across multiple tests, or \"fingerprint\" of each virus.",
        "Generated new data by randomly selecting points within each fingerprint, multiplying dataset 100x for each disease.",
        "Used this dataset to train 10 different Sci-kit-Learn ML models from LDA to Neural Networks and compared each accuracy.",
      ],
    },
  ];
  
  const projects = [
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
      name: "AmpliVision",
      description:
        "OOP program to identify Ampli system and analyze it, predicting strand of virus in sample. This tool assists Prof. Hamad and Ph.D. candidate Josselyn Mata in their research of reconfigurable rapid diagnostics for infectious diseases, such as Covid-19.",
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
          name: "GitHub",
          color: "pink-text-gradient",
        },
        {
          name: "3D Printing",
          color: "blue-text-gradient",
        },
        
      ],
      image: ampli_oop,
      source_code_link: "https://github.com/Mattynb/PhaseA_CV_NanoBioLab",
      live_code_link: "",
    },
    {
      name: "Plant Recognition",
      description:
        "This website can identify more than 1000 plant taxons, including flowers and trees from all over the world. This was possible using a customized convolutional neural network (CNN) to get potentially acurate results. We estimate that in 70% of cases, we offer the right answer.",
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