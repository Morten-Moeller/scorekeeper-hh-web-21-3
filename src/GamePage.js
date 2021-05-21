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

      <FlexContainer>
        <Button onClick={resetScores}>Reset scores</Button>
        <Button onClick={handleEndGame}>End game</Button>
      </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 90vh;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`
