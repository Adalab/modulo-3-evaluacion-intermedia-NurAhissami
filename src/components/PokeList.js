import pokemons from '../data/pokemons.json';
import Pokemon from './Pokemon';

function PokeList() {
  return (
    <ul>
      {pokemons.map((pokemon, idx) => (
        <li key={idx}>
          <Pokemon
            image={pokemon.url}
            name={pokemon.name}
            types={pokemon.types}
          ></Pokemon>
        </li>
      ))}
    </ul>
  );
}

export default PokeList;
