// react and native
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// vendor libs
import firebase from 'firebase';
import { createStore } from 'redux';

// environments
import { firebaseConfig } from './src/environments/environment';

// redux stuff
import reducers from './src/store/reducers';

// components
import { Header, Button, Spinner } from './src/components/shared';
import LoginForm from './src/components/public/LoginForm';
import LibraryList from './src/components/applications/LibraryList';

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
          <View>
            <Button onPress={() => firebase.auth().signOut()}>
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
    const store = createStore(reducers);
    // store.subscribe(() => console.log(store.getState().selectedLibraryId));
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
