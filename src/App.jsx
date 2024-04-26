
import { useEffect, useState } from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";

import Nav from "./components/nav/Nav";


import { Sidebar2 } from "./components/inner-sidebar/InnerSidebar";
import ContactUS from "./pages/contact/Contact";
import Article from "./pages/article/Article";
import SingleArticle from "./components/single-article/SingleArticle";
import Projects from "./pages/projects/Projects";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); 



  const Layout = () => (
    <div className="main">
      <div className="container">
        <div
          className="menuContainer"
          // style={{ display: isDesktop || menuOpen ? "block" : "none" }}
        >
      
          <Sidebar2/>
        </div>
        <div className="contentContainer">
      
          <Outlet />

        </div>
      </div>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/contact",
          element: <ContactUS/>,
        },
        {
          path: "/article",
          element: <Article/>,
        },
        {
          path: "/article/:slug",
          element: <SingleArticle/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}




















  // const toggleMenu = () => {
  //   if (!isDesktop) {
  //     setMenuOpen(!menuOpen);
  //   }
  // };

  // const closeMenu = () => {
  //   if (!isDesktop) {
  //     setMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth > 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);