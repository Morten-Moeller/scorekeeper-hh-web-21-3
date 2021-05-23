import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistroyPage'
import CreatePage from './pages/CreatePage'
import { saveToLocal, loadFromLocal } from './utils/toLocal'
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router'

function App() {
  const [players, setPlayers] = useState([{}])
  const [gameName, setGameName] = useState('')
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  const pages = [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ]
  const [currentPageId, setCurrentPageId] = useState('play')

  return (
    <Wrapper className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${currentPageId}`} />
        </Route>
        <Route exact path="/play">
          <CreatePage handleGame={handleGame}></CreatePage>

          <Navigation
            onNavigate={onNavigate}
            pages={pages}
            currentPageId={currentPageId}
          ></Navigation>
        </Route>

        <Route path="/game">
          <GamePage
            players={players}
            gameName={gameName}
            updateScore={updateScore}
            resetScores={resetScores}
            onEndGame={handleEndGame}
          ></GamePage>
        </Route>

        <Route path="/history">
          <HistoryWrapper>
            <HistoryPage props={history} />
          </HistoryWrapper>

          <Navigation
            onNavigate={onNavigate}
            pages={pages}
            currentPageId={currentPageId}
          ></Navigation>
        </Route>
      </Switch>
    </Wrapper>
  )

  function handleEndGame() {
    const date = new Date().toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    setHistory([...history, { gameName, players, date }])
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

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: absolute;
  padding: 0;
  padding-top: 20px;
`
const HistoryWrapper = styled.div`
  height: 80vh;
  overflow-y: auto;
`

export default App
