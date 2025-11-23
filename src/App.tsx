import { useState } from 'react'
import i18n from "./utils/i18n";

import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language: string) => {
    i18n.locale = language;
    setCurrentLanguage(language);
  };
  console.error(currentLanguage);

  return (
    <>
      <h1>{i18n.t("hello")}</h1>
      <div>
        <button onClick={() => changeLanguage("en")}>English!</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
      </div>
    </>
  )
}

export default App;
