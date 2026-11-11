import {
  SiPython,
  SiGooglebigquery,
  SiLooker,
  SiDuckdb,
  SiGoogleanalytics,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGithub,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PieChartIcon from "@mui/icons-material/PieChart";
import TableChartIcon from "@mui/icons-material/TableChart";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-sql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SQL" },
    { id: "skills-main-tableau", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Tableau" },
    { id: "skills-main-powerbi", className: "skill-icon", icon: <PieChartIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI" },
    { id: "skills-main-excel", className: "skill-icon", icon: <TableChartIcon sx={{ fontSize: ICON_SIZE }} />, text: "Excel" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" }
  ],
  complementarySkills: [
    { id: "skills-comp-bigquery", className: "skill-icon", icon: <SiGooglebigquery size={ICON_SIZE} />, text: "BigQuery" },
    { id: "skills-comp-looker", className: "skill-icon", icon: <SiLooker size={ICON_SIZE} />, text: "Looker Studio" },
    { id: "skills-comp-duckdb", className: "skill-icon", icon: <SiDuckdb size={ICON_SIZE} />, text: "DuckDB" },
    { id: "skills-comp-ga4", className: "skill-icon", icon: <SiGoogleanalytics size={ICON_SIZE} />, text: "GA4" },
    { id: "skills-comp-pandas", className: "skill-icon", icon: <SiPandas size={ICON_SIZE} />, text: "pandas" },
    { id: "skills-comp-numpy", className: "skill-icon", icon: <SiNumpy size={ICON_SIZE} />, text: "NumPy" },
    { id: "skills-comp-jupyter", className: "skill-icon", icon: <SiJupyter size={ICON_SIZE} />, text: "Jupyter" },
    { id: "skills-comp-github", className: "skill-icon", icon: <SiGithub size={ICON_SIZE} />, text: "GitHub" }
  ]
};

export default skillsConfig;
