export default function Player({athlete}) {
  const {firstName, lastName, hobbies, jerseyNumber} = athlete;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>{hobbies}</p>
    </div>
  )
}