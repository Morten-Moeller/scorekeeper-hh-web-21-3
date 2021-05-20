import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Game from './Game'
import History from './Histroy'
import Play from './Play'

function App() {
  const [players, setPlayers] = useState([{}])
  const [gameName, setGameName] = useState('')
  const [history, setHistory] = useState(null)

  const pages = [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ]
  const [currentPageId, setCurrentPageId] = useState('play')

  return (
    <div className="App">
      {currentPageId === 'play' && <Play handleGame={handleGame}></Play>}
      {currentPageId === 'game' && (
        <Game
          players={players}
          gameName={gameName}
          updateScore={updateScore}
          resetScores={resetScores}
          handleEndGame={handleEndGame}
        ></Game>
      )}
      {currentPageId === 'history' && (
        <History gameName={gameName} players={players} />
      )}
      {currentPageId !== 'game' && (
        <Navigation
          onNavigate={onNavigate}
          pages={pages}
          currentPageId={currentPageId}
        ></Navigation>
      )}
    </div>
  )

  function handleEndGame() {
    setCurrentPageId('history')
  }

  function onNavigate(id) {
    setCurrentPageId(id)
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    const newScore = { ...playerToUpdate, score: playerToUpdate.score + value }
    const updateScore = [
      ...players.slice(0, index),
      newScore,
      ...players.slice(index + 1),
    ]
    setPlayers(updateScore)
  }

  function handleGame(nameOfGame, players) {
    setPlayers(players)
    setGameName(nameOfGame)
    setCurrentPageId('game')
  }
}

export default App
