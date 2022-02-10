import './App.css';
// import Player from './components/Player'
import PlayerList from './components/PlayerList'
import Greeting from './components/welcome/Greeting'
import { playerData } from './data/playerData'

function App() {
  return (
    <div className="App">
      <Greeting />
      <PlayerList data={playerData} />
    </div>
  );
}

export default App;
