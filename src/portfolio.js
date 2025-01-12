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
    "https://github.com/arif-syr/resume_repository/blob/master/Arif-Syraj-resume-AWS.pdf", // Set to empty to hide the button
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
      desc: "Relevant coursework: DS&A, Algorithms, Principles of Software Development, Software Development Lifecycle, Cloud Computing, Foundations of A.I., Bayesian & Deep Learning, Systems Programming, Network Programming",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Illinois at Urbana-Champaign",
      logo: require("./assets/images/University_of_Illinois_seal.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "August 2016 - May 2021",
      desc: "Relevant coursework: Linear Algebra, Database Systems, Signals Processing, Differential Equations",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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
        "Designed an algorithm to estimate plant height using noisy LiDAR data collected by our phenotyping robot, cutting error by >50% across datasets over the previous algorithm and beating accuracy of manual measurements.",
        "Revamped robot autonomy by designing a crash detection algorithm fusing LiDAR and odometry data collected from various environments, reducing overall false positives and negatives by 75%.",
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
      projectName: "LLM's To Detect Chart Misinformation",
      projectDesc: [
        "Finetuned a multimodal LLM (LLaVA) to detect visual misinformation in bar charts with LoRA and 2.3k examples.",
        "Created a custom finetuning script and explored parameters to prevent overfitting and minimize GPU loads.",
        "Resulted in a model that can identify visually manipulated bar charts 90% of the time."
      ],
      skills: ["Python", "Hugging Face", "PyTorch", "LoRA", "AI/ML"],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Highly Available Cloud Application Deployment",
      projectDesc: [
        "Architected and deployed a highly available, secure application on AWS using ECR, EC2, ALB, VPC, and ASGs.",
        "Configured an ALB to distribute traffic across EC2 instances in private subnets across multiple AZ's with launch templates and auto-scaling groups, enhancing scalability, security, and availability.",
        "Improved operational security by launching bastion hosts across availability zones using ASGs for highly available, secure SSH access to EC2 instances.",
        "Set up TLS encryption using ACM and Route 53 for domain management and HTTPS-encrypted communication.",
        "Deployed a containerized application orchestrated with ECS."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Syllabus Generator",
      projectDesc: [
        "Used low-cost LLMs and crewAI to coordinate the automatic generation of a syllabus using basic course info.",
        "Implemented prompt engineering techniques to optimize syllabus section generation, significantly improving output quality and relevance.",
        "Developed a microservice using FastAPI that talks to large LLM's like ChatGPT for automated syllabus generation."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Craigslist Apartment Scraper",
      projectDesc: [
        "A Python web-scraping script that enables a user to browse hundreds of ads for rental accommodation on Craigslist in a fraction of the time it would take to do so using the website.",
        "Scraped results are output to HTML files in a readable manner according to a list of user-specified constraints on commute time, rent, number of bedrooms, location, shared versus whole apartments, and more.",
        "Allows a user to easily see commute times to a specified location by foot, bike, and car. This data is queried from OpenStreetMap and can be used to sort listings according to travel time buckets by a chosen mode of transport."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Mindset",
      projectDesc: [
        "A wellness web-app with a task management system to help users track and quit addictions, track nutrition, sleep quality, and focus on work.",
        "Group project where we used Node.js with Express to set up the server, Passport.js and Google OAuth2 for authentication, and Mongoose to store user data."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Reddit Product Scraper",
      projectDesc: [
        "Solo project to find specific products being re-sold on Reddit subreddits to get them at a discount.",
        "Leveraged the Reddit API to scrape thousands of posts per minute to find relevant products and deliver them to the user in a readable fashion.",
        "Personally saved $150 on $500 worth of purchases."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Blackjack Agent",
      projectDesc: [
        "Developed an agent to play blackjack against humans using Q-learning as a reinforcement learning algorithm.",
        "Simulated an environment to teach an agent to optimize decision making by balancing exploration and exploitation.",
        "Used matplotlib and the learned policy of the agent to visualize agent policy."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
    },
    {
      projectName: "Fashion Image Classifier",
      projectDesc: [
        "Used keras and tensorflow to adapt ViT (Vision Transformer) to classify fashion articles by training on the fashion_mnist dataset.",
        "Achieved a train accuracy of 86.88% after 4 epochs of training on 4000 images."
      ],
      // footerLink: [
      //   { name: "View Details", url: "link_to_project_details_or_demo" }
      // ]
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
