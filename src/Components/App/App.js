import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import About from "../About/About"
import ViewTeams from "../ViewTeams/ViewTeams"
import ViewRoster from "../ViewRoster/ViewRoster"
import MyCards from "../MyCards/MyCards"

function App() {
  const [teamLogo, setLogo] = useState("");
  const [savedCards, setCards] = useState([{}])

  const currentLogo = (logo) => {
    setLogo(logo)
  }

  const saveCard = (player) => {
    setCards([...savedCards, player])
    console.log(savedCards)
  }



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<ViewTeams currentLogo={currentLogo}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/roster/:id" element={<ViewRoster teamLogo={teamLogo} saveCard={saveCard}/>} />
      <Route path="/my-cards" element={<MyCards myCards={savedCards}/>} />
    </Routes>
  )
}

export default App;