// react and native
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// vendor libs
import firebase from 'firebase';
import { createStore } from 'redux';

// environments
import { firebaseConfig } from './src/environments/environment';

// components
import { Header, Button, Spinner } from './src/components';
import LoginForm from './src/public/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // init firebase
    const fbConfig = {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId
    };
    firebase.initializeApp(fbConfig);

    firebase.auth().onAuthStateChanged((user) => {
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
          <View style={{ height: 44 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
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
      <Provider store={createStore}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Header headerText="Authentication" />
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
