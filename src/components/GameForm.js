import styled from 'styled-components'
import PropTypes from 'prop-types'

GameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function GameForm({ onSubmit }) {
  return (
    <Form className="GameForm" onSubmit={handleSubmit}>
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
      <button>Create game</button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    const form = event.target
    const nameOfGame = form.elements.nameOfGame.value
    const players = form.elements.players.value
    const playersArray = players.split(',').map(el => el.trim())
    const playersArrObj = playersArray.map(el => ({ player: el, score: 0 }))
    console.log(playersArrObj)
    onSubmit(nameOfGame, playersArrObj)
  }
}

const Form = styled.form`
  display: grid;
  gap: 20px;
`
