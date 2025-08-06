import * as React from 'react';
import { useState, useEffect } from "react";
import Card from './components/Card/Card';
import Button from './components/Button';
import config from './utils/Settings';
import { useFetch } from './utils/hooks/useFetch';
import generateRandomId from './utils/generateRandomId';

const App: React.FC = () => {
  // fields
  const pokeApiUrl = config?.pokeApiUrl;

  // state
  const [pokemonId, setPokemonId] = useState<number>(1);

  // fetch pokemon data
  const { data, error, isLoading, refetch } = useFetch(`${pokeApiUrl}${pokemonId}`, {}, true);

  useEffect(() => {
    if(pokemonId > 0) {
      refetch();
    }
  }, [pokemonId, refetch]);

  const getPokemonId = () => {
    let pokemonId: number = generateRandomId();
    setPokemonId(pokemonId);
  };

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Error: {error}</div>;

  return (
    <main className="flex">
      <h1>Hello, Pokémon Trainer</h1>
      <article className="card">
        <Card pokemonData={data} />
      </article>
      <Button onClick={getPokemonId}>Click to see your pokedex!</Button>
    </main>
  );
}

export default App;