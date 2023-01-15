import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import ViewTeams from "../ViewTeams/ViewTeams"
import ViewRoster from "../ViewRoster/ViewRoster"
import MyCards from "../MyCards/MyCards"

function App() {
  const [teamLogo, setLogo] = useState("");
  const [savedCards, setCards] = useState([])

  const currentLogo = (logo) => {
    setLogo(logo)
  }

  const saveCard = (player) => {
    setCards(cards => [...cards, player])
  }

  const deleteCard = (player) => {
    let newSaved = savedCards.filter(card => {
      return player.id !== card.id
    })
    setCards(newSaved)
  }



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<ViewTeams currentLogo={currentLogo} />} />
      <Route path="/roster/:id" element={<ViewRoster teamLogo={teamLogo} saveCard={saveCard} savedCards={savedCards} />} />
      <Route path="/my-cards" element={<MyCards myCards={savedCards} deleteCard={deleteCard} />} />
    </Routes>
  )
}

export default App;