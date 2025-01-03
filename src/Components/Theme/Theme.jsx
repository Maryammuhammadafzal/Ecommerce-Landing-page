import React, { useState, useEffect } from "react";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const Theme = () => {
  const [theme, setTheme] = useState(true);
  const [themeColor, setThemeColor] = useState("light");
  const [themeIcon, setThemeIcon] = useState(
    <MdWbSunny size={25} color={"#000"} />
  );
  const [themeText, setThemeText] = useState("Light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeColor(storedTheme);
      setTheme(storedTheme === "light");
      setThemeIcon(
        storedTheme === "light" ? (
          <MdWbSunny size={25} color={"#000"} />
        ) : (
          <FaMoon size={25} style={{ color: "#fff" }} />
        )
      );
      setThemeText(storedTheme === "light" ? "Light" : "Dark");
    }
  }, []);
  useEffect(()=>{
        const headerLight = () => { let navbar = document.body.children[0].children[0].children[0].children[0]
                return (theme ? navbar.classList.add('bg-white') : navbar.classList.remove('bg-white')) }
        const headerDark = () => {let navbar = document.body.children[0].children[0].children[0].children[0]
                return (!theme ? navbar.classList.add('bg-black') : navbar.classList.remove('bg-black'))}
        setThemeText(theme === true ? headerLight() && headerDark() : headerDark() && headerLight());
  },[theme])
  useEffect(() => {
    localStorage.setItem("theme", themeColor);
    document.body.classList.add(themeColor);
    document.body.classList.remove(themeColor === "light" ? "dark" : "light");
  }, [themeColor]);
  useEffect(() => {
    if (themeColor === "light") {
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.color = "#000";
    } else {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    }
  }, [themeColor]);
  useEffect(() => {
    setThemeIcon(
      theme === true ? (
        <MdWbSunny size={25} color={"#000"} />
      ) : (
        <FaMoon size={25} style={{ color: "#fff" }} />
      )
    );
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(!theme);
    setThemeColor(themeColor === "light" ? "dark" : "light");
    setThemeText(themeText === "Light" ? "Dark" : "Light");
  };
  return (
    <div className="theme-container">
      <div className="theme-toggle" onClick={handleThemeChange}>
        <div className="theme-icon">{themeIcon}</div>
      </div>
    </div>
  );
};

export default Theme;
