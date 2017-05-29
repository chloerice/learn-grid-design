import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'
import Home from './Home'
import LearningContainer from './LearningContainer'
import { levels } from '../levels'

const App = () => (
  <Router>
    <Route render={({ location }) => (
      <div className="App">
        <Route exact path='/' render={() => <Home />} />
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Route
            location={location}
            key={location.key}
            path={'/:learning/level/:level'}
            render={({ match: {params} }) => {
              const { learning, level } = params
              return (
                <LearningContainer
                  params={params}
                  level={levels[`${learning}`][`${level}`]}
                />
          )}} />
        </ReactCSSTransitionGroup>
      </div>
    )} />
  </Router>
)

export default App
