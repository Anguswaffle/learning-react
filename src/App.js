import './App.css';
// import Player from './components/Player'
import PlayerList from './components/PlayerList'
import { playerData } from './data/playerData'

function App() {
  return (
    <div className="App">
      <h2>Welcome to Spring Training</h2>
      <PlayerList data={playerData} />
    </div>
  );
}

export default App;
