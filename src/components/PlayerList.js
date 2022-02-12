import Player from './Player'
import './playerlist.css'

export default function PlayerList({ data, addFavorite }) {

  return (
    <div class="row">
      {data.map((player, index) => {
        return <Player addFavorite={addFavorite} key={index} athlete={player} />
      })}
    </div>
  )
}