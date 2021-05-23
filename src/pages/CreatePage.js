import styled from 'styled-components'
import GameForm from '../components/GameForm'
import PropTypes from 'prop-types'

CreatePage.propTypes = {
  handleGame: PropTypes.func.isRequired,
}

export default function CreatePage({ handleGame }) {
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
  padding: 20px;
`
