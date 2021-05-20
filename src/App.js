import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Game from './Game'
import History from './Histroy'
import Play from './Play'

function App() {
  const [game, setGame] = useState({})

  const pages = [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ]
  const [currentPageId, setCurrentPageId] = useState('play')

  return (
    <div className="App">
      {currentPageId === 'play' && (
        <Play
          handleGame={handleGame}
          pages={pages}
          currentPageId={currentPageId}
          onNavigate={onNavigate}
        ></Play>
      )}
      {currentPageId === 'game' && (
        <Game
          game={game}
          updateScore={updateScore}
          resetScores={resetScores}
          handleEndGame={handleEndGame}
        ></Game>
      )}
      {currentPageId === 'history' && (
        <History
          game={game}
          pages={pages}
          currentPageId={currentPageId}
          onNavigate={onNavigate}
        />
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
    setGame({
      name: game.name,
      players: game.players.map(player => ({ ...player, score: 0 })),
    })
  }

  function updateScore(index, value) {
    const playerToUpdate = game.players[index]
    console.log(playerToUpdate)
    const newScore = { ...playerToUpdate, score: playerToUpdate.score + value }
    console.log(game.players)
    const updateScore = [
      ...game.players.slice(0, index),
      newScore,
      ...game.players.slice(index + 1),
    ]
    setGame({ name: game.name, players: updateScore })
  }

  function handleGame(nameOfGame, players) {
    setGame({ name: nameOfGame, players: players })
    setCurrentPageId('game')
  }
}

export default App
