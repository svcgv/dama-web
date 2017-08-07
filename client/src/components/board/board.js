import React, { Component } from 'react'
import { render } from 'react-dom'

import User from './user'
import Channel from './channel'
import Contactor from './contactor'
import Extention from './extention'
import Footer from './footer'

export default class Board extends Component {

  style = {
    minWidth: '1px',
    maxWidth: '260px'
  }

  render() {
    return (
      <div className='board' style={this.style}>
        <User />
        <Channel />
        <Contactor />
        <Extention />
        <Footer />
      </div>
    )
  }
}
