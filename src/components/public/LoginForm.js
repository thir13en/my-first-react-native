// react
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// vendor
import firebase from 'firebase';

import { EmailChanged } from '../../store/actions';

import {
  Input,
  Button,
  Card,
  CardSection,
  Spinner
} from '../shared';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onEmailChange(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess.bind(this))
          .catch(() => this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({ loading: false, email: '', password: '' });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false });
  }

  renderButton() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Spinner size="small" />
      );
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="ex: user@domain.com"
            label="Email"
            value={this.state.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(null, { emailChanged: EmailChanged })(LoginForm);
