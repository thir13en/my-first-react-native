// react and native
import React, { Component } from 'react';
import { View } from 'react-native';

// vendor libs
import firebase from 'firebase';

// environments
import { firebaseConfig } from './src/environments/environment';

// components
import Header from './src/components/Header';
import LoginForm from './src/public/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: false };

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

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
