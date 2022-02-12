export default function FavoritesList({favorites}) {
  return(
    <ol>
      {favorites.map((favorite, index) => {
        return <li id={index}>{favorite}</li>
      })}
    </ol>
  )
}