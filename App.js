// react and native
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// set up
import configureStore from './src/store/configureStore';
import firebaseApp from './src/firebase';

// components
import { Header, Button, Spinner } from './src/components/shared';
import LoginForm from './src/components/public/LoginForm';
import LibraryList from './src/components/applications/LibraryList/LibraryList';

// init redux store
const store = configureStore();

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <View style={{ flex: 1 }}>
            <Button onPress={() => firebaseApp.auth().signOut()}>
              Log Out
            </Button>
            <LibraryList />
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.loaderContainerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Header headerText="Tech Stack" />
          {this.renderContent()}
        </View>
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
