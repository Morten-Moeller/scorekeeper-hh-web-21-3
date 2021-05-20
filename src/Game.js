import styled from 'styled-components'
import Button from './components/Button'
import Header from './components/Header'
import Player from './components/Player'

export default function Game({
  handleEndGame,
  resetScores,
  game,
  updateScore,
}) {
  console.log(resetScores)
  return (
    <Wrapper>
      <Header>{game.name}</Header>
      {game.players.map((player, index) => (
        <Player
          onMinus={() => updateScore(index, -1)}
          onPlus={() => updateScore(index, 1)}
          name={player.player}
          score={player.score}
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
