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
