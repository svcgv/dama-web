import React,{Component} from 'react'
import { render } from 'react-dom'
import { withRouter } from 'react-router-dom'

import Button from 'material-ui/Button'



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
        return (
            <div>
                <Button onClick={this.handleClick}>
                    dama 超进化
                </Button>
                <Button onClick={this.fetchData}>
                    dama 究极进化
                </Button>
            </div>
        )
    }
}