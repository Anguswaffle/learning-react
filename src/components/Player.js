import Hobby from './Hobby'

export default function Player({athlete}) {
  const {firstName, lastName, hobbies, jerseyNumber} = athlete;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Jersey Number: {jerseyNumber}</p>
      { hobbies.length ? <Hobby enjoyment={hobbies} /> : <p>No hobbies listed</p>}
    </div>
  )
}