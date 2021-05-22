import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'

GameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function GameForm({ onSubmit }) {
  return (
    <Form
      aria-label="Create a new game"
      className="GameForm"
      onSubmit={handleSubmit}
    >
      <label>
        Name of game:
        <input
          name="nameOfGame"
          type="text"
          placeholder="e.g. Carcasonne"
          required
        />
      </label>
      <label>
        Player names:
        <input
          name="players"
          type="text"
          placeholder="e.g. John Doe, Jane Doe, …"
          required
        />
      </label>
      <Button>Create game</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameOfGame = form.elements.nameOfGame.value
    const players = form.elements.players.value
    const playersArray = players
      .split(',')
      .map(name => name.trim())
      .filter(Boolean)
    const playersArrObj = playersArray.map(name => ({ player: name, score: 0 }))
    if (playersArrObj.length < 2) {
      return alert('You need to have atleast two players')
    } else if (new Set(playersArray).size !== playersArray.length) {
      return alert('Pleas make sure you have no dublicate names')
    }
    onSubmit(nameOfGame, playersArrObj)
  }
}

const Form = styled.form`
  display: grid;
  gap: 20px;
  input {
    width: 100%;
  }
`
