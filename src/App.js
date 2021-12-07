import { React } from "react";
import "./App.css";
import Game from "./Game";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalProvider>
          <Game />
        </GlobalProvider>
      </header>
    </div>
  );
}

export default App;
