// react and native
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// vendor libs
import firebase from 'firebase';

// components
import Header from './components/Header';
import LoginForm from './public/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    // init firebase
    const firebaseConfig = {
      apiKey: 'AIzaSyCGY0qMPfRTfkCXTjU9HWOFracxRKd8tyQ',
      authDomain: 'auth-fbbfd.firebaseapp.com',
      databaseURL: 'https://auth-fbbfd.firebaseio.com',
      projectId: 'auth-fbbfd',
      storageBucket: 'auth-fbbfd.appspot.com',
      messagingSenderId: '135024820295'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
