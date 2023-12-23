import React from "react";
import "./App.css";

const App: React.FC = () => {
  const [index, setIndex] = React.useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          className="App-logo"
          alt="logo"
        />
        <button onClick={() => setIndex(index + 1)}>Next</button>
        <button>Prev</button>
      </header>
    </div>
  );
};

export default App;
