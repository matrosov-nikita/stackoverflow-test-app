import React from 'react';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers';

const configureStore = initialState => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    ),
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}