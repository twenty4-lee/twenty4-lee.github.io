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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "twenty4-lee",
  title: "Youngseo Lee",
  subTitle: emoji(
    "An undergraduate student experiencing AI and Data Science."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1c_nintWNCC2Yan2heZ8ZwqDTSw336vty/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/twenty4-lee",
  linkedin: "https://www.linkedin.com/in/youngseo-lee-a988ab235/",
  gmail: "twenty4.lee@gmail.com",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI Engineering and Data Analyzing",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Use Python for data analysis and AI for training models")
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
      logo: require("./assets/images/hyuLogo.png"),
      subHeader: "Bachelor of Engineering in Information System",
      duration: "Feburary 2020 - Current",
      desc: "Current GPA: 4.32",
      descBullets: [
        "Created web/mobile game application named “Squid game” using vue.js",
        "Participated in the Forif hackathon, contributing a c-programming game"
      ]
    },
    {
      schoolName: "Louisiana State University",
      logo: require("./assets/images/lsuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2023 - May 2023",
      desc: "Took courses about Big data, Management in Information Systems...",
      descBullets: ["Won 3rd prize in the Hackathon organized by Woman in Computer Science (WiCS) by developing web / mobile game application named “Math mania” using react.js"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning & Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
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
      role: "Research Intern",
      company: "University of Birmingham",
      companylogo: require("./assets/images/uob.jpg"),
      date: "September 2023 – March 2024",
      desc: "School of Metallurgy and Materials, Extreme Robotics Lab",
      descBullets: [
        "Engaged in research in the field of Robotics AI with machine learning for characterizing materials"
      ]
    },
    {
      role: "What's next?",
      company: "",
      companylogo: require("./assets/images/questionmark.png"),
      date: "Current",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I HAVE DONE SO FAR",
  projects: [
    {
      image: require("./assets/images/deeplearning.png"),
      projectName: "Facial Expression Classification",
      projectDesc: "A real-time application to classify facial expressions",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/twenty4-lee/facial_expression"
        },
        {
          name: "Visit Techblog (Korean)",
          url: "https://helix-evening-373.notion.site/Deep-Learning-32bb4735ebc2470ba1cde379c7e77ce0"
        },
        {
          name: "Watch YouTube (Korean)",
          url: "https://youtu.be/c6q8gl9f-N0"
        }
      ]
    },
    {
      image: require("./assets/images/lgLogo.png"),
      projectName: "LG Electronics AI home appliances competition (2nd prize)",
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
          url: "https://file.notion.so/f/f/5b7f0b1d-1fbf-421b-bf4b-ff3f5fd5c8c8/4b7be9f2-588f-48d4-8c4f-1b2b32fa4601/AI_SWE.pdf?id=f6cacbbf-b82b-4b68-8858-5f8f4d2ac797&table=block&spaceId=5b7f0b1d-1fbf-421b-bf4b-ff3f5fd5c8c8&expirationTimestamp=1701626400000&signature=r9EtkvJ3rJi68gE5tE9LlJy-dCdHHiRgq1UNZtV1Q-0&downloadName=HomeAlone+Document.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/UoB_white.png"),
      projectName: "Extreme Robotics Lab",
      projectDesc: "A real-time ROS framework to detect and identify radiation sources",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://nextu.se/"
        },
        {
          name: "Access to papers (English)",
          url: "http://nextu.se/"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
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
      image: require("./assets/images/googleAssistantLogo.webp"),
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
      image: require("./assets/images/pwaLogo.webp"),
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
    "My Inbox is open for all.",
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
  isHireable
};
