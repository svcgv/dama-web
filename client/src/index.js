import 'whatwg-fetch'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import App from './router'

import Store from './store'

//css for component
import './style/index.scss'
//css reset
import 'normalize.css'
const store = new Store()
// store.start()

const app = document.createElement('div');
document.body.appendChild(app);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    app
  );

render(App);
if (module.hot) module.hot.accept('./router/index.js', () => {
    const NextApp = require('./router/index.js').default;
    render(NextApp)
});