import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

const render = (Component) => {
  ReactDOM.render(

        <Component/>
  ,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
