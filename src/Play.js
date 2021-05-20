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
  grid-template-rows: auto 100px;
  height: 100vh;
  gap: 10px;
`
