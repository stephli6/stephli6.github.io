import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      title_i18n: { en: "Home", es: "Home" },
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      title_i18n: { en: "Projects", es: "Projects" },
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Skills",
      title_i18n: { en: "Skills", es: "Skills" },
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
