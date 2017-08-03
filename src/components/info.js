import React from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
// import Button from 'material-ui/Button';

import Menu from './menu'
import Talk from './talk'
import Tools from './tools'


@withRouter
@inject('store')
@observer
export default class Info extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        // this.props.store.start()
    }

    render() {
        return (
        <div className = "box">
            <div className="navigation">
                <Menu />
            </div>
            <div className="box1">
                <div>
                    <Tools />
                </div>
                <div>
                    <Talk />
                </div>
            </div>
        </div>
        )
    }
}