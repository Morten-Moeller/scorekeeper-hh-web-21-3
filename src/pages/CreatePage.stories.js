import React from 'react'
import CreatePage from './CreatePage'

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
}

const Template = args => <CreatePage {...args} />

export const DefaultCreatePage = Template.bind({})

DefaultCreatePage.args = {}
