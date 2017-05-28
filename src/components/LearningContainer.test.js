import React from 'react'
import ReactDOM from 'react-dom'
import LearningContainer from './LearningContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LearningContainer />, div)
})
