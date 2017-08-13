import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
// import Button from 'material-ui/Button'


import Board from './board/board'
import Header from './header'
import Content from './content/content'
import Offset from './offset/offset'

@withRouter
@inject('store')
@observer
export default class Info extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        // this.props.store.start()
    }

    render() {
        return (
            <div className='client'>
                <div className='left'>
                    <Board/>
                </div>
                <div className='right'>
                    <div className='right-top'>
                        <Header/>
                        </div>
                    <div className='right-bottom'>
                        <Content/>
                        <Offset/>
                    </div>
                </div>
            </div>
        )
    }
}