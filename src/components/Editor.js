import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Editor.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    const {value} = event.target
    this.setState({value})
  }

  render() {
    const { code } = this.props.editor
    // JS hack for making an array from a range of numbers via index
    const lineNumbers = Array(15).fill().map((_, idx) => idx + 1)

    return (
      <div className='Editor'>
        <div className='line-numbers'>
          <ul>
            {lineNumbers.map((num, idx) => <li key={idx}>{num}</li>)}
          </ul>
        </div>
        <div className='code'>
          <p className='before'>{code.before}</p>
          {code.middle && code.middle.map((line, i) => (
            <p className='middle' key={i}>{line}</p>
          ))}
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className='entry'
          />
          <p className='after'>{code.after}</p>
        </div>
        <NavLink to={this.props.next}>
          <button className='next-button'>Next</button>
        </NavLink>
      </div>
    )
  }
}