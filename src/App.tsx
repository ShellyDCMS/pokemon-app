import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          className="App-logo"
          alt="logo"
        />
        <button>Next</button>
      </header>
    </div>
  );
};

export default App;
