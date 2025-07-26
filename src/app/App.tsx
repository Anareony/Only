import React from "react";
import { MainPage } from "pages/MainPage";
import { historicDates } from "shared/consts/historicDates";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <MainPage historicDates={historicDates} />
    </div>
  );
}

export default App;
