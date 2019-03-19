// react and native
import React, { Component } from 'react';
import { View } from 'react-native';

// vendor libs
import firebase from 'firebase';

// environments
import { firebaseConfig } from './src/environments/environment';

// components
import { Header, Button } from './src/components';
import LoginForm from './src/public/components/LoginForm';
import Spinner from "./src/components/Spinner";

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
          <Button>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
