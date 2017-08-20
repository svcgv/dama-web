import React, { Component } from 'react'
import { render } from 'react-dom'
import { withRouter } from 'react-router-dom'
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Button from 'material-ui/Button'

import Login from './login'

const styleSheet = createStyleSheet(theme => ({
    
}));

@withStyles(styleSheet)
@withRouter
export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        // console.log(this.props)
        this.props.history.push("/info")
        // this.props.router.push("/info")
        // this.props.push('/info')
    }

    fetchData = () => {
        fetch('/api').then(function (response) {
            console.log(response.json())
        })
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.outWrapper}>
                <div>
                    <Button onClick={this.handleClick}>
                        dama 超进化
                    </Button>
                    <Button onClick={this.fetchData}>
                        dama 究极进化
                    </Button>
                </div>
                <Login />
            </div>
        )
    }
}
