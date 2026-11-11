import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaChalkboardTeacher, FaFlask, FaBalanceScale } from "react-icons/fa";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Stephanie Hwang</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Stephanie Hwang</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "SQL · Python · Tableau",
      "UCLA MEng Data Science '27",
    ],
    es: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "SQL · Python · Tableau",
      "UCLA MEng Data Science '27",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I'm a data analyst in training at UCLA (MEng, Data Science, June 2027) with a B.S. in Applied Mathematics from UC Irvine. I turn messy public data into answers a business can use — from a $362K e-commerce funnel analysis to people-analytics work on attrition.",
      exit:
        "Fluent in SQL, Python, Tableau, and Power BI. Seeking Data / BI Analyst roles in Los Angeles, Orange County, or remote in California.",
    },
    es: {
      start:
        "I'm a data analyst in training at UCLA (MEng, Data Science, June 2027) with a B.S. in Applied Mathematics from UC Irvine. I turn messy public data into answers a business can use — from a $362K e-commerce funnel analysis to people-analytics work on attrition.",
      exit:
        "Fluent in SQL, Python, Tableau, and Power BI. Seeking Data / BI Analyst roles in Los Angeles, Orange County, or remote in California.",
    },
  },

  workTimeline: [
    {
      id: "work-3",
      title: "Mathematics Tutor",
      title_i18n: { en: "Mathematics Tutor", es: "Mathematics Tutor" },
      company: "Illumi Academy",
      description_i18n: {
        en: "Tutoring mathematics one-on-one and in small groups; breaking down complex problems into clear, checkable steps.",
        es: "Tutoring mathematics one-on-one and in small groups; breaking down complex problems into clear, checkable steps.",
      },
      date: "Aug 2023–Present",
      icon: <FaChalkboardTeacher />,
      tags: ["math", "tutoring", "communication"],
    },
    {
      id: "work-2",
      title: "Analytics Volunteer",
      title_i18n: { en: "Analytics Volunteer", es: "Analytics Volunteer" },
      company: "USC National Center on Elder Abuse",
      description_i18n: {
        en: "Volunteer analytics work supporting the Center's research data — cleaning, checking, and summarizing program data.",
        es: "Volunteer analytics work supporting the Center's research data — cleaning, checking, and summarizing program data.",
      },
      date: "Jun–Aug 2026",
      icon: <BsClipboardData />,
      tags: ["python", "sql", "data-cleaning"],
    },
    {
      id: "work-1",
      title: "Research Project Coordinator",
      title_i18n: { en: "Research Project Coordinator", es: "Research Project Coordinator" },
      company: "Claremont McKenna College, Psychology",
      description_i18n: {
        en: "Coordinated a psychology research project: scheduling, participant tracking, and keeping study data organized and complete.",
        es: "Coordinated a psychology research project: scheduling, participant tracking, and keeping study data organized and complete.",
      },
      date: "May–Aug 2026",
      icon: <FaFlask />,
      tags: ["research", "psychology", "coordination"],
    },
    {
      id: "work-0",
      title: "Paralegal Assistant Intern",
      title_i18n: { en: "Paralegal Assistant Intern", es: "Paralegal Assistant Intern" },
      company: "Andion, Shaw, McKee & Orleans",
      description_i18n: {
        en: "Immigration law internship in Los Angeles: assisted with case preparation and client file organization.",
        es: "Immigration law internship in Los Angeles: assisted with case preparation and client file organization.",
      },
      date: "Jun–Aug 2022",
      icon: <FaBalanceScale />,
      tags: ["legal", "immigration", "organization"],
    },
  ],
};

export default homeConfig;
