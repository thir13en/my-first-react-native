// react and native
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// set up
import configureStore from './src/store/configureStore';

// components
import Router from './src/core/Router';

// init redux store
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  loaderContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
