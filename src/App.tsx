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
  const [pokemon, setPokemon] = React.useState<PokemonList>();

  const fetchNext = async () =>
    pokemon &&
    pokemon.next &&
    setPokemon(await (await fetch(pokemon.next)).json());

  const fetchPrev = async () =>
    pokemon &&
    pokemon.previous &&
    setPokemon(await (await fetch(pokemon.previous)).json());

  useEffect(() => {
    const getFirstPokemon = async () =>
      setPokemon(
        await (await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1")).json()
      );
    getFirstPokemon();
  }, []);

  const getPokemonIndex = () =>
    pokemon?.results[0].url
      .split("/")
      .filter((element) => element)
      .pop();
  const getPokemonName = () => pokemon?.results[0].name;
  const getPokemonImage = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIndex()}.png`;
  return (
    <div className="App">
      <header className="App-header">
        {pokemon && (
          <>
            <h1> {getPokemonName()}</h1>
            <img src={getPokemonImage()} className="App-logo" alt="pokemon" />
            <button onClick={fetchNext} disabled={!(pokemon && pokemon.next)}>
              Next
            </button>
            <button
              onClick={fetchPrev}
              disabled={!(pokemon && pokemon.previous)}
            >
              Prev
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
