import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
// import Button from 'material-ui/Button'

import Menu from './menu'
import Talk from './talk'
import Tools from './tools'
import channelContainer from './channel/channel-container'

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
            <div className="all">
               <channelContainer />
                <div className="left">
                    <div className="self">self</div>
                    <div className="group">group</div>
                    <div className="menu"><Menu /></div>
                    <div className="tools"><Tools /></div>
                </div>
                <div className="right">
                    <div className="header">header</div>
                    <div className="section-wraper">
                        <div className="content-wraper">
                            <div className="stat">stat</div>
                            <div className="talk"><Talk /></div>
                        </div>
                        <div className="offset">offset</div>
                    </div>
                </div>
            </div>
        )
    }
}