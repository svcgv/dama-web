import React, { Component } from 'react'
import { render } from 'react-dom'

import User from './user'
import Channel from './channel'
import Contactor from './contactor'
import Extention from './extention'
import Footer from './footer'

export default class Board extends Component {

  render() {
    return (
      <div className='board'>
        <User />
        <Channel />
        <Contactor />
        <Extention />
        <Footer />
      </div>
    )
  }
}
