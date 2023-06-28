import { useState } from "react";
import './App.css';
import Gamma from "./components/Gamma.js"
import Flavanoids from './components/Flavanoids';
import wineJsonFile from "./data/Wine-Data.json";
import { addGammaInJson } from "./utils/data-parser";

function App() {

  const [wineJson, setWineJson] = useState(wineJsonFile);

  const addGamma = () => {
    addGammaInJson(wineJson);
    console.log(wineJson);
    setWineJson([...wineJson]);
  }

  return (
    <div className="App">
      <h1> Mean, Median, Mode of Flavanoids:</h1>
      <Flavanoids wineJson={wineJson}></Flavanoids>
      <h1> Mean, Median, Mode of Gamma:</h1>
      <Gamma wineJson={wineJson} addGamma={addGamma}></Gamma>
    </div>
  );
}

export default App;
