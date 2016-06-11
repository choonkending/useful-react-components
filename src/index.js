import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';

const rootEl = document.getElementById('root');

if (module.hot) {
  const { AppContainer } = require('react-hot-loader');
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl);
   module.hot.accept('./routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./routes').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
} else {
  ReactDOM.render(<App />, rootEl);
}

