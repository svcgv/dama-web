import React from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router-dom';

import Button from 'material-ui/Button';

import Login from './login'

@withRouter
export default class Home extends React.Component{
	constructor(props) {
        super(props)
    }

    handleClick() {
        // console.log(this.props)
        this.props.history.push("/info")
        // this.props.router.push("/info")
        // this.props.push('/info')
    }

    fetchData(){
        fetch('/api').then(function(response) {
            console.log(response.json())
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick.bind(this)}>
                    dama 超进化
                </Button>
                <Button onClick={this.fetchData.bind(this)}>
                    dama 救急进化
                </Button>
								<Login />

            </div>
        )
    }
}
