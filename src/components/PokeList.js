import pokemons from '../data/pokemons.json';
import Pokemon from './Pokemon';

function PokeList() {
  return (
    <ul className="ulList">
      {pokemons.map((pokemon, idx) => (
        <li className="ListPokemon" key={idx}>
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
