import '../stylesheets/App.css';
import PokeList from './PokeList';
import data from '../data/pokemons.json';

function App() {
  return (
    <div className="App">
      <h2 className="Title">Pokemon List</h2>
      <PokeList pokemons={data} />
    </div>
  );
}
export default App;
