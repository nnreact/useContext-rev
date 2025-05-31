// import { isDarkModeContext } from "../App";
// import { useContext } from "react";
import { useTheme } from "../state/useTheme";

function Hero() {
  // const {isDarkMode} = useContext(isDarkModeContext);
  const {isDarkMode} = useTheme();
  return (
    <div className={`hero ${isDarkMode ? "dark-hero-bg" : "light-hero-bg"}`}>
      <h1 className={isDarkMode ? "light-text" : "dark-text"}>Title</h1>
      <p className={isDarkMode ? "light-text" : "dark-text"}>Description</p>
      <button className={isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}>Shop Now</button>
    </div>
  )
}

export default Hero
