import React, { Component } from 'react'
import { render } from 'react-dom'
import { inject, observer } from 'mobx-react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from '../component/home'
import Info from '../component/info'

// @inject("store")
// @observer
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/info" component={Info} />
                    <Route render={() => <p> 404 Page </p>} />
                </Switch>
            </BrowserRouter>
        )
    }
}