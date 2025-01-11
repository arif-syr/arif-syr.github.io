/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arif Syraj",
  title: "Hello, I'm Arif",
  subTitle: emoji(
    "A driven Software Engineer with expertise in software applications, cloud solutions, and AI-driven tools. Proficient in Python, Java, and MLLMs/LLMs, with experience designing LiDAR-based algorithms, fine-tuning LLMs, and deploying scalable cloud solutions on AWS. Passionate about solving complex problems and leveraging modern technologies to create impactful solutions."
  ),
  resumeLink:
    "https://github.com/arif-syr/resume_repository/blob/master/Arif-Syraj-resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arif-syr",
  githubUniversity: "https://github.com/arif-syraj-usfca",
  linkedin: "https://www.linkedin.com/in/arifsyraj/",
  gmail: "arif.syraj1@gmail.com",
  // stackoverflow: "https://stackoverflow.com/users/",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  // subTitle: "lorem ipsum",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

skillCategories: [
  {
    category: "Programming Languages",
    skills: [
      { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
      { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
      { skillName: "C", fontAwesomeClassname: "devicon-c-plain" },
      { skillName: "C++", fontAwesomeClassname: "devicon-cplusplus-plain" },
      { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
      { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
      { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
      { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    ],
  },
  {
    category: "General",
    skills: [
      { skillName: "Finetuning", fontAwesomeClassname: "fas fa-cogs" },
      { skillName: "Prompt Engineering", fontAwesomeClassname: "fas fa-lightbulb" },
      { skillName: "Agile", fontAwesomeClassname: "fas fa-tasks" },
      { skillName: "Data Scraping", fontAwesomeClassname: "fas fa-download" },
      { skillName: "Shell Scripting", fontAwesomeClassname: "fas fa-terminal" },
      { skillName: "Containerization", fontAwesomeClassname: "fab fa-docker" },
      { skillName: "Multithreading", fontAwesomeClassname: "fas fa-project-diagram" },
      { skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync-alt" },
      { skillName: "Automated Testing", fontAwesomeClassname: "fas fa-vial" },
      { skillName: "Cloud Deployment", fontAwesomeClassname: "fas fa-cloud" },
      { skillName: "Network Protocols", fontAwesomeClassname: "fas fa-network-wired" },
    ],
  },
  {
    category: "Frameworks/Tools",
    skills: [
      { skillName: "Linux Development", fontAwesomeClassname: "fab fa-linux" },
      { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
      { skillName: "GCP", fontAwesomeClassname: "fas fa-cloud" },
      { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
      { skillName: "ROS", fontAwesomeClassname: "fas fa-robot" },
      { skillName: "PyTorch", customIconPath: require("./assets/images/pytorch.jpg")},
      { skillName: "TensorFlow", customIconPath: require("./assets/images/tensorflow.jpg")},
      { skillName: "MongoDB", customIconPath: require("./assets/images/mongodb.jpg")},
      { skillName: "React", fontAwesomeClassname: "fab fa-react" },
      { skillName: "JUnit", fontAwesomeClassname: "fas fa-vial" },
    ],
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of San Francisco",
      logo: require("./assets/images/USFLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - December 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "University of Illinois at Urbana-Champaign",
      logo: require("./assets/images/University_of_Illinois_seal.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "August 2016 - May 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperience = {
  display: true, //Set it to true to show workExperience Section
  experience: [
    {
      role: "Software Engineer",
      company: "EarthSense",
      companylogo: require("./assets/images/EarthSense-Logo.png"),
      date: "March 2021 – July 2022",
      // desc: "",
      descBullets: [
        "Designed an algorithm to estimate plant height using noisy LiDAR data collected by our phenotyping robot, cutting error by >50\% across datasets over the previous algorithm and beating accuracy of manual measurements.",
        "Revamped robot autonomy by designing a crash detection algorithm fusing LiDAR and odometry data collected from various environments, reducing overall false positives and negatives by 75\%.",
        "Greatly decreased need for manual waypoint recording by implementing automatic waypoint generation on turns, saving customers several minutes per data collection and improving robot autonomy.",
        "Introduced a culture of documentation in our workflows for libraries and testing methodologies, which I later used to onboard interns for a summer.",
        "Extensively tested robot system functionality, standardized testing methodologies and created utility shell scripts, helping catch several system bugs before deployment to customers."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A list of projects I have completed recently",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ✉️"),
  subtitle:
    "Want to discuss a project or just say hi? Feel free to contact me below.",
  // number: "+92-0000000000",
  email_address: "arif.syraj1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperience,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
