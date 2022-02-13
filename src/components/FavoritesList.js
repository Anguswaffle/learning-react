export default function FavoritesList({favorites}) {
  return(
    <ol>
      {favorites.map((favorite, index) => {
        return <li key={index}>{favorite}</li>
      })}
    </ol>
  )
}