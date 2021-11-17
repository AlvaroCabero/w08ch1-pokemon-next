import axios from "axios";
// import Image from "next/image";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  // const [gifPokemons, setGifPokemons] = useState([]);

  const urlPokeAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=09";
  // const urlPokemon =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif";

  const getPokemons = async () => {
    const { data: pokemonList } = await axios.get(urlPokeAPI);

    setPokemons(pokemonList.results);
  };

  // const getPokemon = async () => {
  //   const newGifPokemons = await axios.get(urlPokemon);

  //   setGifPokemons(newGifPokemons);
  // };
  useEffect(() => {
    getPokemons();
  }, []);
  // useEffect(() => {
  //   getPokemon();
  // }, []);

  return (
    <>
      <h1>Pokemon CSR</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <h3>{pokemon.name}</h3>
            {/* <Image
              src={pokemon.sprites.other.dream_world.front_default}"
              alt={`Pokemon ${pokemon.name} image`}
              width="200px"
              height="200px"
              placeholder="empty"
            /> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
