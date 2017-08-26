import React, { Component } from 'react'
import { render } from 'react-dom'


export default class Channel extends Component {

  render() {
    return (
      <div className="channel">
        channel:
        <ul style={{ listStyle: 'none' }}>
          <li>general</li>
          <li>random</li>
        </ul>
      </div>
    )
  }
}
