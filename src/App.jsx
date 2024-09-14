import React, { useState } from "react"
import { useEffect } from "react";


function Welcome(props) {
  return (<h1>hey sexy ,!! its  {props.name} | and im {props.gender}</h1>)
}

function Counter() {
  const [coun, setCount] = useState(0);
  const [nextvar, setNextVar] = useState(0);

  // useEffect compo
  useEffect(() => {
    console.log('Counter mount');

  }, [nextvar])

  function myfun() {
    setNextVar(nextvar + 1);
  }



  function Increases() {
    setCount(coun + 1)
  }
  function Decreases() {
    setCount(coun - 1);
  }
  return (
    <div style={{ backgroundColor: "teal", color: "#ff0046", textAlign: "center" }}>
      <h1> The counted val : {coun}</h1>
      <button style={{ backgroundColor: "green" }} onClick={Increases} onMouseEnter={() => {
        console.log("mouse is entered")
      }}>INCREASE</button>
      &nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{ backgroundColor: "red" }} onClick={Decreases}>DECREASE</button>&nbsp;&nbsp;&nbsp;&nbsp;

      <button onClick={myfun}>click me = {nextvar}

      </button>
    </div>
  )
}

function Counainer() {
  const [name, setName] = useState();
  const [premiumUser, setPremiumUser] = useState(false);

  return (
    <div style={{ backgroundColor: "teal", color: "#ff0046", textAlign: "center" }}>
      <br />
      <br />
      <br />
      <h1>This is form</h1>

      <button onClick={() => { setPremiumUser(!premiumUser) }}> find you</button>


      {premiumUser ? (<h1>Enjyou ur premiumUser time</h1>) : <h1>U better shut the fuck off</h1>}


      <h2>First name is : {name || "N/A"}</h2>


      <form method="" action="">
        <label htmlFor="firstName"> FirstName</label>
        <input id="firstName" type="text" value={name} onChange={(e) => {
          console.log('input change', e.target.value)
          setName(e.target.value)
        }} />

      </form>
    </div>
  )

}

function GameList() {
  const [games, setGames] = useState(["football", "volleyball", "cricket"]);
  return (
    <div >
      <h1>This is game list</h1>
      <ul>
        {games.map((game, index) => { return <li key={index} >{game} </li> })}
      </ul>

      {games.map((game, index) => { return <Game key={index} title={game} /> })}
    </div>
  )
}

function Game(props) {
  return (
    <div style={{ backgroundColor: "teal", width: "50%", marginLeft: "22%", color: "#ff0046", textAlign: "center", borderRadius: "10px" }} >
      <hr />
      <h1>{props.title}</h1>
      <hr />
    </div>
  )
}


function App() {
  const per_name = "james khadka"
  return (
    <div>
      <h1 style={{ marginLeft: "35%" }}>HERE I COME TO YOU</h1>
      <img style={{ height: "500px", width: "500px", marginLeft: "30%" }} src="src/assets/discord.png" alt=""></img>
      <div style={{ backgroundColor: "cyan" }}>
        <div>
          <div>
            <Welcome name={per_name} gender="male" />
          </div>
          <Counter />
          <Counainer />
          <GameList />

        </div>

      </div>
    </div>
  )
}

export default App
