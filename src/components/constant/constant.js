import settings from '../../assets/settings.svg'
import box from '../../assets/notification.svg'
import home from "../../assets/home.svg";
import projects from "../../assets/grid.svg";
import skills from "../../assets/code.svg";
import contact from "../../assets/users.svg";
import article from "../../assets/codesandbox.svg";
export const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: home,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: projects,
      items: [
        {
          path: "/projects",
          name: "Frontend",
        },
     
        {
          path: "/projects",
          name: "Backend",
        },
        {
          path: "/",
          name: "Practice",
        },
        {
          path: "/",
          name: "Company",
        },
      ],
    },
    {
      name: "Skills",
      icon: skills,
      items: [
        {
          path: "#",
          name: "ReactJS",
        },
        {
          path: "#",
          name: "NextsJS",
        },
        {
          path: "#",
          name: "NodeJS",
        },
        {
          path: "#",
          name: "ExpressJS",
        },
        {
          path:"#",
          name: "MongoDB",
        },
        {
          path: "#",
          name: "PostgresSQL",
        },
        {
          path: "#",
          name: "Vanilla JS",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: contact,
      items: [
        {
          path: "#",
          name: "Email",
        },
        {
          path: "#",
          name: "Github",
        },
        {
          path: "#",
          name: "Linkedin",
        },
      ],
    },
  
    {
      name: "Articles",
      path:"/article",
      icon: article,
    },
  

  ];