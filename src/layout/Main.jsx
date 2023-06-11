import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} onToggle={handleThemeToggle} />

      {/* Rest of your home page content */}
      <div>
        <div className="md:min-h-[calc(100vh-70px)]">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
