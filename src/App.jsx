
import { useEffect, useState } from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Projects from "./pages/home/Projects";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px as breakpoint for desktop

  const toggleMenu = () => {
    if (!isDesktop) {
      setMenuOpen(!menuOpen);
    }
  };

  const closeMenu = () => {
    if (!isDesktop) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Layout = () => (
    <div className="main">
      <div className="container">
        <div
          className="menuContainer"
          style={{ display: isDesktop || menuOpen ? "block" : "none" }}
        >
          <Menu
            isDesktop={isDesktop}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
        <div className="contentContainer">
          <Nav
            isDesktop={isDesktop}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
          <Outlet />
          <Footer />
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
          element: <Projects />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
