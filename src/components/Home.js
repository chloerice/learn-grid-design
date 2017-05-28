import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

const Home = props => (
  <div>
    <div className="App-header">
      <h1>Learn to build grid systems from scratch.</h1>
    </div>
    <NavLink to='/flexbox/level/0'>
      <button className='App-button'>LEARN FLEXBOX</button>
    </NavLink>
    <NavLink to='/grid/level/0'>
      <button className='App-button'>LEARN CSS GRID</button>
    </NavLink>
  </div>
)

export default Home
