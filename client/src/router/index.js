import React from 'react';
import {render} from 'react-dom';
import { inject, observer } from 'mobx-react';
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from '../components/home'
import Info from '../components/info'

// @inject("store")
// @observer
export default class App extends React.Component{
    render() {
        return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/info" component={Info} />
                    <Route render={() =>  <p> 404 Page </p>} />
                </Switch>
            </BrowserRouter>
        </div>
        );
    }
}