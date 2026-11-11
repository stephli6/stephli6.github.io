import { AiFillGithub, AiFillEye } from "react-icons/ai";

import ecommerceDashboard from "../images/ecommerce_dashboard.jpg";
import externCover from "../images/extern_cover.jpg";
import tataCover from "../images/tata_cover.jpg";

import React from 'react';

const projectConfig = [
  {
    id: "project-2",
    title: "E-commerce Revenue & Customer Analytics",
    category: { en: "Analytics", es: "Analytics" },
    description_i18n: {
      en: "End-to-end analysis of 92 days of Google Merchandise Store GA4 data: $362,165 revenue, 5,692 purchase events, 3.68% funnel conversion — SQL + Python + a 9-sheet Tableau dashboard.",
      es: "End-to-end analysis of 92 days of Google Merchandise Store GA4 data: $362,165 revenue, 5,692 purchase events, 3.68% funnel conversion — SQL + Python + a 9-sheet Tableau dashboard."
    },
    links: [
      { name: "repo", url: "https://github.com/stephli6/Google-Merchandise-Store-Ecommerce-Revenue-Customer-Analytics", icon: <AiFillGithub/> },
    ],
    image: ecommerceDashboard,
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Amazon People Analytics Externship",
    category: { en: "People Analytics", es: "People Analytics" },
    description_i18n: {
      en: "Attrition-risk analysis on employee feedback data (Nov 2026–Jan 2027): workforce segmentation, engagement patterns, and AI-assisted recommendations. In progress.",
      es: "Attrition-risk analysis on employee feedback data (Nov 2026–Jan 2027): workforce segmentation, engagement patterns, and AI-assisted recommendations. In progress."
    },
    links: [
      { name: "portfolio", url: "https://extern.com/portfolios/stephanieh", icon: <AiFillEye/> },
    ],
    image: externCover,
    target: "_blank"
  },
  {
    id: "project-0",
    title: "Tata Data Visualisation Simulation",
    category: { en: "Simulation", es: "Simulation" },
    description_i18n: {
      en: "Forage job simulation: framed the business question, cleaned retail data, and built an executive dashboard for a non-technical audience.",
      es: "Forage job simulation: framed the business question, cleaned retail data, and built an executive dashboard for a non-technical audience."
    },
    links: [
      { name: "simulation", url: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo", icon: <AiFillEye/> },
    ],
    image: tataCover,
    target: "_blank"
  }
];

export default projectConfig;
