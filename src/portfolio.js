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
  username: "Stephanie Hwang",
  title: "Hi all, I'm Stephanie",
  subTitle: emoji(
    "A passionate Data Analyst turning raw data into decisions with SQL, Python, Tableau, and Power BI. UCLA MEng Data Science '27. Seeking Data / BI Analyst roles in Los Angeles, Orange County, or remote in California."
  ),
  resumeLink:
    "https://stephli6.github.io/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/stephli6",
  linkedin: "https://www.linkedin.com/in/stephli6",
  gmail: "stephli6.work@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYST WHO TURNS MESSY DATA INTO DECISIONS",
  skills: [
    emoji(
      "⚡ End-to-end analysis: from raw data and SQL queries to dashboards and recommendations"
    ),
    emoji(
      "⚡ Interactive Tableau and Power BI dashboards that non-technical teams can actually use"
    ),
    emoji(
      "⚡ Reproducible Python and SQL pipelines with documented methods and honest limits"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "GA4",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Los Angeles (UCLA)",
      logo: require("./assets/images/uclaLogo.png"),
      subHeader: "Master of Engineering, Data Science Track",
      duration: "September 2026 - June 2027 (Expected)",
      desc: "Master's in Engineering with a Data Science focus.",
      descBullets: [
        "Data science, machine learning, and analytics coursework"
      ]
    },
    {
      schoolName: "University of California, Irvine (UCI)",
      logo: require("./assets/images/uciLogo.png"),
      subHeader: "B.S. Applied and Computational Mathematics, Data Science Concentration",
      duration: "September 2022 - June 2026",
      desc: "B.S. in Applied and Computational Mathematics with a Data Science concentration.",
      descBullets: [
        "Applied mathematics, statistics, and data science coursework"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo.png"),
      subHeader: "M.S. Computer Science, Artificial Intelligence (Online)",
      duration: "Expected June 2028",
      desc: "Online M.S. in Computer Science, Artificial Intelligence specialization.",
      descBullets: ["Pursued alongside full-time study"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL & Databases", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python & Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "BI & Visualization (Tableau / Power BI)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mathematics Tutor",
      company: "Illumi Academy",
      companylogo: require("./assets/images/illumiLogo.png"),
      date: "Aug 2023 – Present",
      desc: "Tutoring mathematics one-on-one and in small groups; breaking down complex problems into clear, checkable steps.",
      descBullets: [
        "One-on-one and small-group math tutoring",
        "Explaining complex problems in clear, checkable steps"
      ]
    },
    {
      role: "Analytics Volunteer",
      company: "USC National Center on Elder Abuse",
      companylogo: require("./assets/images/uscLogo.png"),
      date: "Jun 2026 – Aug 2026",
      desc: "Volunteer analytics work supporting the Center's research data — cleaning, checking, and summarizing program data."
    },
    {
      role: "Research Project Coordinator",
      company: "Claremont McKenna College, Psychology",
      companylogo: require("./assets/images/cmcLogo.png"),
      date: "May 2026 – Aug 2026",
      desc: "Coordinated a psychology research project: scheduling, participant tracking, and keeping study data organized and complete."
    },
    {
      role: "Paralegal Assistant Intern",
      company: "Andion, Shaw, McKee & Orleans",
      companylogo: require("./assets/images/andionLogo.png"),
      date: "Jun 2022 – Aug 2022",
      desc: "Immigration law internship in Los Angeles: assisted with case preparation and client file organization."
    }
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
  title: "Big Projects",
  subtitle: "END-TO-END ANALYTICS, FROM RAW DATA TO A RESULT A BUSINESS CAN USE",
  projects: [
    {
      image: require("./assets/images/ecommerce_dashboard.jpg"),
      projectName: "E-commerce Revenue & Customer Analytics",
      projectDesc:
        "92 days of Google Merchandise Store GA4 data: $362,165 revenue, 5,692 purchase events, 3.68% funnel conversion — SQL + Python + a 9-sheet Tableau dashboard.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/stephli6/Google-Merchandise-Store-Ecommerce-Revenue-Customer-Analytics"
        }
      ]
    },
    {
      image: require("./assets/images/extern_cover.jpg"),
      projectName: "Amazon People Analytics Externship",
      projectDesc:
        "Attrition-risk analysis on employee feedback data (Nov 2026 – Jan 2027): workforce segmentation, engagement patterns, and AI-assisted recommendations. In progress.",
      footerLink: [
        {
          name: "Extern Portfolio",
          url: "https://extern.com/portfolios/stephanieh"
        }
      ]
    },
    {
      image: require("./assets/images/tata_cover.jpg"),
      projectName: "Tata Data Visualisation Simulation",
      projectDesc:
        "Forage job simulation: framed the business question, cleaned retail data, and built an executive dashboard for a non-technical audience.",
      footerLink: [
        {
          name: "View Simulation",
          url: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo"
        }
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

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a data project or just want to say hi? My inbox is open.",
  number: "(626) 295-5028",
  email_address: "stephli6.work@gmail.com"
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
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
