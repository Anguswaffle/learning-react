import './App.css';
import PlayerList from './components/PlayerList'
import Greeting from './components/greeting/Greeting'
import FavoritesList from './components/FavoritesList';
import { playerData } from './data/playerData'
import { useState } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])
  const addFavorite = (name) =>
    !favorites.includes(name) ? setFavorites([...favorites, name]) : null
  const reset = () => setFavorites([]);
  return (
    <div className="App">
      <Greeting />
      <h1>Welcome to Spring Training!</h1>
      {favorites.length
        ? <div>
            <FavoritesList favorites={favorites} />
            <button onClick={reset}>Reset Favorites</button>
          </div>
        : <h3>No favorites yet</h3>}
        <PlayerList addFavorite={addFavorite} data={playerData} />
    </div>
  );
}

export default App;
