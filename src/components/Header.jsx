import { isDarkModeContext } from "../App";
import { useContext } from "react";

function Header() {

    const {isDarkMode, setIsDarkMode} = useContext(isDarkModeContext);

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }


    return (
        <header className={isDarkMode ? "dark-bg" : "light-bg"}>

            <h1 className={isDarkMode ? "light-text" : "dark-text"}>Logo</h1>

            <button className={`toggle-theme-btn ${isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}`} onClick={handleToggleTheme}>Toggle Theme</button>

            <ul>
                <li><a className={isDarkMode ? "light-text" : "dark-text"} href="">Home</a></li>
                <li><a className={isDarkMode ? "light-text" : "dark-text"} href="">Shop</a></li>
                <li><a className={isDarkMode ? "light-text" : "dark-text"} href="">About</a></li>
                <li><a className={isDarkMode ? "light-text" : "dark-text"} href="">Contact</a></li>
            </ul>

        </header>
    )
}

export default Header
