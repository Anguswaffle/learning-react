import Player from './Player'

export default function PlayerList({ data }) {
  return (
    <div>
      {data.map((player, index) => {
        return <Player key={index} athlete={player} />
      })}
    </div>
  )
}