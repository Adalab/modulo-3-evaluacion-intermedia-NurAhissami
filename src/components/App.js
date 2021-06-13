import React, {useState} from 'react';
import data from '../data/data.json';
import PokeList from './PokeList.js';
import PokemonDetail from './PokemonDetail.js';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.css';

function App() {
  const [pokemons] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [color, setColor] = useState('far fa-heart');

  const renderPokeDetail = (routerProps) => {
    const routerpokeId = routerProps.match.params.pokeId;

    const pokeFound = pokemons.find(
      (pokemon) => pokemon.id === parseInt(routerpokeId)
    );

    if (pokeFound) {
      return <PokemonDetail pokeDetail={pokeFound} />;
    } else {
      return <p>No hay pokemones</p>;
    }
  };
  const favPokemon = (clickedPokemon) => {
    const pokemonFavorited = pokemons.find(
      (pokemon) => pokemon.id === clickedPokemon
    );

    if (!favorites.includes(pokemonFavorited)) {
      setFavorites([...favorites, pokemonFavorited]);
      setColor('fas fa-lg fa-heart');
      return;
    }
    const newFavoriters = favorites.filter(
      (pokemon) => pokemon.id !== clickedPokemon
    );
    setFavorites(newFavoriters);
    setColor('far fa-heart');
  };

  return (
    <>
      {
        <Switch>
          <Route exact path="/">
            <PokeList
              pokemons={data}
              favPokemon={favPokemon}
              favorites={favorites}
              color={color}
            />
            ;
          </Route>

          <Route path="/pokemon/:pokeId" render={renderPokeDetail} />
        </Switch>
      }
    </>
  );
}

export default App;
