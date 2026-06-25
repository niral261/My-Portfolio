import {
    mobile,
    backend,
    web,
    creator,
    javascript,
    java,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    isro,
    piersight_space,
    chat,
    spotify_youtube,
    kaizen,
    blog,
    plasma,
    redis,
    rabbitmq,
    django,
    cpp,
    fastapi,
    aws,
    doodle,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Avenger",
    },
    {
      id: "work",
      title: "Missions",
    },
    {
      id: "contact",
      title: "Assemble",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "DevOps",
      icon: backend,
    },
    {
      title: "Qauntum Computing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "RabbitMQ",
      icon: rabbitmq,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Software Engineer",
      company_name: "PierSight Space",
      icon: piersight_space,
      iconBg: "#fff",
      date: "Dec 2024 - July 2025",
      points: [
        "Forged a microservice-based, cloud-native backend for MATSYA, a maritime analytics platform using python and agile methodologies that fuses SAR, AIS and optical satellite data.",
        "Migrated vector layers from PostGIS/GeoJSON rows to partitioned GeoParquet on AWS S3. Using PostgreSQL and AWS, columnar storage with push-down returns STAC queries in < 300 ms, reduced file storage by 70 % – 99.7 %.",
        "Orchestrated asynchronous workloads with RabbitMQ, and Celery, automated retries with exponential back-off.",
        "Containerised all services with lean, multi-stage Docker builds, cut image sizes by ~50 %.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "ISRO",
      icon: isro,
      iconBg: "#fff",
      date: "May 2024 - August 2024",
      points: [
        "Developed a channel for sending and receiving large images using quantum computing and traditional computer concepts.",
        "Used hashing SHA-256 on the top of assymetric encryption method RSA of key-size of 2048 bits for security of the data.",
        "Implemented Superdense Coding algorithm of quantum computing for transmission of the images.",
        "Made a responsive design and ensuring cross-browser compatibility for web application.",
        
      ],
    },
    {
      title: "Technical Team Member",
      company_name: "Team Kaizen INDIA - PDEU",
      icon: kaizen,
      iconBg: "#000",
      date: "July 2022 - July 2023",
      points: [
        "Collaborated with senior and junior team members in designing and participating in a hyper-efficient electric car race at the Shell Eco-marathon competition.",
        "Led a diverse team of 15-16 students, showcasing adept leadership skills through collaboration with seasoned professionals and the motivation of eager junior team members, fostering a collaborative environment.",
        "Developed an embedded controller using STM32 microcontrollers and C to control a prototype electric vehicle.",
        "Utilized STM32CubeMX to configure and initialize microcontroller & Keil uVision5 - add logic to drive a vehicle.",
        "Boosted electric vehicle energy efficiency, increasing the meter reading from 198 km/kWh to nearly 300km/kWh through targeted optimizations in motor control and power management.",

        
      ],
    },
    
  ];
    
  const projects = [
    {
      name: "Blog App",
      description:
        "The Blog Web App is a comprehensive platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete blog posts. It features user authentication, a rich text editor, and a comment system, providing a robust and scalable solution for managing blog content.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "orange-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/niral261/Blog-app",
    },
    {
      name: "Chit Chat App",
      description:
        "The Chat Mobile App is a real-time messaging application built using XML for the frontend design, Firebase for authentication and storage, and Java for the backend. Developed in Android Studio, this app provides a seamless and interactive chat experience with features such as user authentication, message storage, and real-time updates.",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "XML",
          color: "orange-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/niral261/Chit-Chat-App",
    },
    {
      name: "spotify2MP3",
      description:
        "Spotify2MP3 is a powerful and user-friendly tool that allows users to convert their Spotify playlists into MP3 files. By leveraging the Spotify API and YouTube, this application fetches your favorite tracks from Spotify and downloads them as high-quality MP3 files, enabling offline listening.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "spotipy",
          color: "pink-text-gradient",
        },
        {
          name: "ffmpeg",
          color: "orange-text-gradient",
        },
      ],
      image: spotify_youtube,
      source_code_link: "https://github.com/niral261/spotify2MP3/tree/master",
    },
    {
      name: "plasma",
      description:
        "The Plasma 2024 Conference App is a comprehensive mobile application designed to enhance the experience of attendees, guests, and speakers at the Plasma 2024 conference. This app serves as a one-stop solution for all conference-related information and activities, ensuring that users have easy access to the latest updates and essential details.",
      tags: [
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
        {
          name: "Flutter",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: plasma,
      source_code_link: "https://github.com/niral261/Plasma-2024/tree/master",
    },
    {
      name: "Doodle",
      description:
        "Project Doodle is a fast-paced, interactive multiplayer web game where players join custom rooms to draw and guess words in real-time. Engineered with a scalable WebSocket backend, it ensures seamless, lag-free synchronization of the drawing canvas, and live chat across concurrent users.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: doodle,
      source_code_link: "https://github.com/niral261/Doodle",
    },
  ];
  
  export { services, technologies, experiences, projects };