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
        <ul className='line-numbers'>
          {lineNumbers.map((num, idx) => <li key={idx}>{num}</li>)}
        </ul>
        <div className='codeWrapper'>
          <p className='code before'>{code.before}</p>
          {code.middle && code.middle.map((line, i) => (
            <p className='code middle' key={i}>{line}</p>
          ))}
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className='entry'
          />
        <p className='code after'>{code.after}</p>
        </div>
        <NavLink to={this.props.next}>
          <button className='next-button'>Next</button>
        </NavLink>
      </div>
    )
  }
}
