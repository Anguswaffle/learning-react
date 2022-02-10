import Player from './Player'

export default function PlayerList({ data }) {
  return (
    <div>
      {data.map(player => {
        return <Player athlete={player} />
      })}
    </div>
  )
}