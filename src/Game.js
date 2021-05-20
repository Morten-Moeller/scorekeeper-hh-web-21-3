import styled from 'styled-components'
import Button from './components/Button'
import Header from './components/Header'
import Player from './components/Player'

export default function Game({
  handleEndGame,
  resetScores,
  gameName,
  players,
  updateScore,
}) {
  return (
    <Wrapper>
      <Header>{gameName}</Header>
      {players.map(({ score, player }, index) => (
        <Player
          key={player}
          onMinus={() => updateScore(index, -1)}
          onPlus={() => updateScore(index, 1)}
          name={player}
          score={score}
        />
      ))}
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={handleEndGame}>End game</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 20px;
`
