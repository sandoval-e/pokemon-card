import * as React from 'react';
import { useState, useEffect } from "react";
import config from './utils/Settings';
import Card from './components/Card/Card';
import Button from './components/Button';
import type { PokemonData } from './types';

const App: React.FC = () => {
  let min = 1;
  let max = 150;
  let pokemonImgUrl = config?.pokemonImgUrl;
  let pokeApiUrl = config?.pokeApiUrl;

  const [pokemonId, setPokemonId] = useState<number>(1);
  const [pokemonData, setPokemonData] = useState<PokemonData>({} as PokemonData);
  const [pokemonImageUrl, setPokemonImageUrl] = useState<string>(pokemonImgUrl);

  useEffect(() => {
    getPokemonData();
  }, [pokemonId]);

  const getPokemonId = () => {
    let pokemonId: number = Math.floor(Math.random() * (max - min + 1)) + min;
    setPokemonId(pokemonId);
  };

  const getPokemonData = () => {
    fetch(`${pokeApiUrl}${pokemonId}`)
      .then((response) => {
        return response.json();
      })
      .then((response: PokemonData) => {
        console.log("response", response);
        setPokemonImageUrl(`${pokemonImgUrl}${pokemonId.toString()}.svg`);
        setPokemonData(response);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  };

  return (
    <main className="flex">
      <h1>Hello, Pokémon Trainer</h1>
      <article className="card">
        <Card pokemonImgUrl={pokemonImageUrl} pokemonData={pokemonData} />
      </article>
      <Button onClick={getPokemonId}>Click to see your pokedex!</Button>
    </main>
  );
}

export default App;