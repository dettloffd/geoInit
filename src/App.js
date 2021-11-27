import { React, useState } from "react";
import './App.css';
import Game from "./Game";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <GlobalProvider>
        <Game></Game>

        </GlobalProvider>


      </header>
    </div>
  );
}

export default App;
