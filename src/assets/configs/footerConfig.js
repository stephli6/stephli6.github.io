import {AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/stephli6",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://linkedin.com/in/stephli6",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "mailto:stephli6.work@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <AiOutlineMail size={50}/>
        }
    ]
}

export default footerConfig
