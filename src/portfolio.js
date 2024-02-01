/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Youngseo Lee",
  title: "Youngseo Lee",
  subTitle: emoji(
    "An undergraduate student experiencing AI and Data Science."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1I_EJ7f4-f43dfBRk0GEOhw58OWjZYiJK/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/twenty4-lee",
  linkedin: "https://www.linkedin.com/in/youngseo-lee-a988ab235/",
  gmail: "twenty4.lee@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " AI Engineering and Data Analyzing",
  skills: [
    emoji("⚡ Develop interactive Front end / User interfaces for web and mobile applications"),
    emoji("⚡ Use Python for data analysis and AI for training models"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanyang University",
      logo: require("./assets/images/hanyangLogo.png"),
      subHeader: "Bachelor of Engineering in Information Systems",
      duration: "March 2020 - August 2024 (expected)",
      desc: "Current GPA: 4.32",
      descBullets: [
        'Created web/mobile game application named "Squid Game" using vue.js',
        "Participated in the Forif hackathon, creating a c-programming game"
      ]
    },
    {
      schoolName: "Louisiana State University",
      logo: require("./assets/images/LSULogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2023 - May 2023",
      desc: "Took courses about Big data, Management in Information Systems ...",
      descBullets: [
        'Won 3rd prize in the Hackathon organized by Woman in Computer Science (WiCS) by developing web / mobile game application named "Math mania" using react.js',
        "Got on the May 2023 Dean's List in College of Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning & Machine Learning",
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

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Researcher",
      company: "University of Birmingham",
      companylogo: require("./assets/images/UoBDarkLogo.jpg"),
      date: "September 2023 – March 2024",
      desc: "School of Metallurgy and Materials, Extreme Robotics Lab",
      descBullets: [
        "Engaged in research in the field of Robotics AI with machine learning for characterizing materials",
        "Publication: "
      ]
    },
    {
      role: "What's next?",
      company: "Current",
      companylogo: require("./assets/images/question.png"),
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I HAVE DONE SO FAR",
  projects: [
    {
      image: require("./assets/images/DLLogo.png"),
      projectName: "Facial Expression Classification",
      projectDesc: "A real-time application to classify facial expressions",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/twenty4-lee/facial_expression"
        },
        {
          name: "Visit Techblog (Korean)",
          url: "https://helix-evening-373.notion.site/Facial-Expression-32bb4735ebc2470ba1cde379c7e77ce0?pvs=74"
        },
        {
          name: "Watch YouTube (Korean)",
          url: "https://www.youtube.com/watch?v=c6q8gl9f-N0"
        }
      ]
    },
    {
      image: require("./assets/images/LGLogo.png"),
      projectName: "LG Electronics AI home appliances competition (2nd Prize)",
      projectDesc: "A solution for dual-income families with young children at 'Home Alone'",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/10minutesmom/homealone"
        },
        {
          name: "Visit Techblog (Korean)",
          url: "https://helix-evening-373.notion.site/HOME-ALONE-34634be4455f4dd9a5b7a8c490dc4f03"
        },
        {
          name: "Access to Papers (English)",
          url: "https://file.notion.so/f/f/5b7f0b1d-1fbf-421b-bf4b-ff3f5fd5c8c8/4b7be9f2-588f-48d4-8c4f-1b2b32fa4601/AI_SWE.pdf?id=f6cacbbf-b82b-4b68-8858-5f8f4d2ac797&table=block&spaceId=5b7f0b1d-1fbf-421b-bf4b-ff3f5fd5c8c8&expirationTimestamp=1706882400000&signature=2ul0NWUfmfPnRj3jIAMA6xrWgMU6BtTyDtID5ixjGbg&downloadName=HomeAlone+Document.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/UoBLogo.png"),
      projectName: "Extreme Robotics Lab",
      projectDesc: "A real-time ROS framework to detect and identify radiation sources",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/twenty4-lee/ERL_ROS"
        },
        {
          name: "Access to papers (English)",
          url: "https://www.overleaf.com/read/qfyksjzbsknj#3ceeec"
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

  achievementsCards: [
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "MY INBOX IS OPEN FOR ALL"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
