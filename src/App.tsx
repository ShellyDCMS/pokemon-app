import React, { useEffect } from "react";
import "./App.css";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const App: React.FC = () => {
  const [index, setIndex] = React.useState(1);
  const [pokemons, setPokemons] = React.useState<PokemonList>();

  const fetchPokemons = async () =>
    await (await fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000")).json();
  const initPokemonsList = async () => {
    setPokemons(await fetchPokemons());
  };

  useEffect(() => {
    initPokemonsList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{pokemons?.results[index - 1].name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          className="App-logo"
          alt="logo"
        />
        <button onClick={() => setIndex(index + 1)}>Next</button>
        <button onClick={() => setIndex(index - 1)}>Prev</button>
      </header>
    </div>
  );
};

export default App;
