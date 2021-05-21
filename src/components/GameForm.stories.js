import React from 'react'
import GameForm from './GameForm'

export default {
  title: 'GameForm',
  component: GameForm,
}

export const DefaultForm = args => <GameForm {...args} />
