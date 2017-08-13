import React, { Component } from 'react'
import { render } from 'react-dom'


export default class Channel extends Component {

  style = {
    margin: '8px 0 32px 0',
    padding: '0 16px',
    minWidth: '200px'
  }
  render() {
    return (
      <div style={this.style}>
        channel:
        <ul style={{ listStyle: 'none' }}>
          <li>general</li>
          <li>random</li>
        </ul>
      </div>
    )
  }
}
