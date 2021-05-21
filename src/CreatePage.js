import styled from 'styled-components'
import GameForm from './components/GameForm'

export default function Play({ handleGame }) {
  return (
    <Wrapper>
      <GameForm onSubmit={onSubmit} />
    </Wrapper>
  )

  function onSubmit(nameOfGame, players) {
    handleGame(nameOfGame, players)
  }
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  gap: 10px;
  align-self: start;
`
