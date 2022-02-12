import Hobby from './Hobby'

export default function Player({athlete, addFavorite}) {
  const {firstName, lastName, hobbies, jerseyNumber} = athlete;
  const name = `${firstName} ${lastName}`

  return (
    <div>
      <h2>{name}</h2>
      <p>Jersey Number: {jerseyNumber}</p>
      { hobbies.length ? <Hobby enjoyment={hobbies} /> : <p>No hobbies listed</p>}
      <button onClick={() => addFavorite(name)}>Add to Favorites</button>
    </div>
  )
}