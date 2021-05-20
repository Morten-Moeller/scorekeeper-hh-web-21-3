import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm({ onSubmit, children, placeholder, name }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        {children}
        <input name={name} type="text" placeholder={placeholder} />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements[name]
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}
