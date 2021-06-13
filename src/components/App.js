import React, {useState, useEffect} from 'react';
import data from '../data/data.json';
import PokeList from './PokeList.js';
import PokemonDetail from './PokemonDetail.js';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.css';

function App() {
  const [pokemons] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [color, setColor] = useState('far fa-heart');
  const [favoriteslocal, setFavoriteslocal] = useState(
    window.localStorage.getItem('favorites' || '')
  );

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favoriteslocal));
  });

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
      setFavoriteslocal([...favorites, pokemonFavorited]);

      return;
    }
    const newFavoriters = favorites.filter(
      (pokemon) => pokemon.id !== clickedPokemon
    );
    setFavorites(newFavoriters);
    setColor('far fa-heart');
    setFavoriteslocal(newFavoriters);
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
              localFav={favoriteslocal}
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
