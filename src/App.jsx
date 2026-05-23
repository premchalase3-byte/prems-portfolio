import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import GlobalStyle from "./globalStyles";

// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import ContactPage from "./components/ContactPage";
import CertificationsPage from "./components/CertificationsPage";

import SoundBar from "./subComponents/SoundBar";

function App() {

  const location = useLocation();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        {/* SOUND BAR */}

        <div
          style={{
            transform: isMobile
              ? "scale(0.7)"
              : "scale(1)",

            transformOrigin: "top left",

            position: "fixed",

            zIndex: 9999
          }}
        >
          <SoundBar />
        </div>

        <AnimatePresence mode="wait">

          <Routes
            key={location.pathname}
            location={location}
          >

            <Route
              path="/"
              element={<Main />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/blog"
              element={<BlogPage />}
            />

            <Route
              path="/work"
              element={<WorkPage />}
            />

            <Route
              path="/skills"
              element={<MySkillsPage />}
            />

            {/* CONTACT PAGE */}

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* CERTIFICATIONS PAGE */}

            <Route
              path="/certifications"
              element={<CertificationsPage />}
            />

            {/* Catch-all */}

            <Route
              path="*"
              element={<Main />}
            />

          </Routes>

        </AnimatePresence>

      </ThemeProvider>
    </>
  );
}

export default App;