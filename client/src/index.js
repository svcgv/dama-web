import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';

const app = document.createElement('div');

document.body.appendChild(app);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    app,
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', render);
}
