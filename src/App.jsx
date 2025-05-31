import { createContext, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";


export const isDarkModeContext = createContext();


function App(){

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <isDarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Body isDarkMode={isDarkMode}/>
    </isDarkModeContext.Provider>
    </>
  );
}


export default App;