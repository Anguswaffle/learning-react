export default function Hobby({enjoyment}) {
  return (
    <ol>
      {enjoyment.map((pastime, index) => {
        return <li key={index}>{pastime}</li>
      })}
    </ol>
  )
}