import React, { Component } from 'react'
import './App.css'
import { levels } from './levels'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: '',
      level: 0
    }
  }

  handleNext = event => {
    this.setState({level: this.state.level++})
  }

  handleClick = type => event => {
    this.setState({playing: type})
  }

  render() {
    const { playing, level } = this.state

    return (
      <div className="App">
        { !playing
            ? <div>
                <div className="App-header">
                  <h1>Learn to build grid systems from scratch.</h1>
                </div>
                <button onClick={this.handleClick('flex')} className='App-button'>
                  LEARN FLEXBOX
                </button>
                <button onClick={this.handleClick('grid')} className='App-button'>
                  LEARN CSS GRID
                </button>
              </div>

            : levels[playing][level]
        }
      </div>
    )
  }
}

export default App
