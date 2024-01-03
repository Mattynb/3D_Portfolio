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
    {
      name: "Jupyter",
      icon: jupyter,
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
    {
      title: "Wix Developer",
      company_name: "Plan Ahead Constructions",
      icon: pac,
      iconBg: "#0e3b77",
      date: "December 2023",
      url: "https://www.planaheadconstructions.com/",
      points: [
        "Executed a complete design and functional overhaul, enhancing user experience and interface for increased engagement.",
        "My focus on SEO strategies led to a 1,967% increase in traffic.",
        "My ongoing responsibilities include website maintenance, monitoring analytics, and implementing user feedback for continuous improvement.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          icon: reactjs,
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          icon: mongodb,
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          icon: tailwind,
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          icon: reactjs,
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          icon: nodejs,
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };