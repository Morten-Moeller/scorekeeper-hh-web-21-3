import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Header from '../components/Header'
import Player from '../components/Player'
import PropTypes from 'prop-types'

GamePage.propTypes = {
  onEndGame: PropTypes.func.isRequired,
  resetScores: PropTypes.func.isRequired,
  gameName: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ).isRequired,
  updateScore: PropTypes.func.isRequired,
}

export default function GamePage({
  onEndGame,
  resetScores,
  gameName,
  players,
  updateScore,
}) {
  let history = useHistory()
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
        <Button onClick={handleEndGame}>End game</Button>{' '}
      </FlexContainer>
    </Wrapper>
  )

  function handleEndGame() {
    history.push('/history')
    onEndGame()
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 90vh;
  padding: 20px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`
