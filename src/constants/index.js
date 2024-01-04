
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
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
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
        "Assisted Prof. Quan and P.h.D graduate G. Zhu in their research of unobtrusive continuous blood pressure monitoring devices.",
        "Provided software & hardware support for a multi-million dollar NIH funded research, becoming familiar with research flow." ,
        "Produced prototypes for printed-circuit boards using a CNC, demonstrating rapid PCB prototyping. (Arduino, ESP8266).",
        "Collaboratively reverse engineered an international medical pump module without a manual, utilizing UART for control.",
        "Analyzed biosensor experimental data with Python libraries, enabling data-driven insights and results. (OpenCv, GUI).",
        "Programmed controller for biosensor calibration platform in C, making it able to collect accurate data automatically.",
      ],
    },
    {
      title: "Research Assistant - Computer Vision",
      company_name: "The Nano-Bio Interfaces Lab at Umass Boston",
      icon: umb,
      iconBg: "#E6DEDD",
      url:"https://blogs.umb.edu/kimhamad/", 
      date: "September 2023 - December 2023",
      points: [
        "Assisted Prof. Hamad and Ph.D. candidate Josselyn Mata in her research of reconfigurable rapid diagnostics for infectious diseases, such as Covid-19 (Ampli).",
        "Developed OOP program to identify Ampli system and analyze it, predicting strand of virus in sample (Computer Vision).",
        "Constructed Ampli blocks using 3D modeling and laser cutting (TinkerCad, Fusion360, Inkscape, PrusaSlicer).",
        "Completed a 6-week long summer leadership academy focused on preparing students for professional success. ",
        "Presented about my progress on multiple occasions during lab meetings and to the CS department.",
      ],
    },
  ];
  
  const projects = [
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
      name: "Ampli Recognition",
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
  ];
  
  export { services, technologies, experiences, projects };