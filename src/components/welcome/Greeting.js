import './welcome.css'

export default function Greeting() {
  const currentHour = new Date().getHours();
  
  const message = currentHour < 7 ? <h1>Why are you up?</h1>
                : currentHour < 12 ? <h1>Good morning</h1>
                : currentHour < 17 ? <h1>Good afternoon</h1>
                : currentHour < 23 ? <h1>Good evening</h1>
                : <h1>Why are you up?</h1>

  return (
    <>
      {message}
    </>
  )

}