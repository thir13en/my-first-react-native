// react
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { EmailChanged, PasswordChanged, LoginUser } from '../../store/actions';

import {
  Input,
  Button,
  Card,
  CardSection,
  Spinner
} from '../shared';

class LoginForm extends Component {
  onEmailChange(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChange(psswd) {
    const { passwordChanged } = this.props;
    passwordChanged(psswd);
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props;
    loginUser(email, password);
  }

  renderError() {
    const { errorTextStyle } = styles;
    const { error } = this.props;
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={errorTextStyle}>{error}</Text>
      </View>
    );
  }

  renderButton() {
    const { loading } = this.props;
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
    const { email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="ex: user@domain.com"
            label="Email"
            value={email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        {this.renderError()}
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

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});
const mapActionsToProps = {
  emailChanged: EmailChanged,
  passwordChanged: PasswordChanged,
  loginUser: LoginUser
};

export default connect(mapStateToProps, mapActionsToProps)(LoginForm);
