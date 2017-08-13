import React, { Component } from 'react'
import { render } from 'react-dom'

import Stat from './stat'
import ChatBody from './chat-body'

export default class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Stat/>
        <ChatBody/>
      </div>
    )
  }
}
