import React, { Component } from 'react'
import { render } from 'react-dom'


export default class User extends Component {

  style = {
    flexBasis: '61px',
    flexShrink: 0,
    padding: '0 16px'
  }
  render() {
    return (
      <div style={this.style}>
        dama
      </div>
    )
  }
}
