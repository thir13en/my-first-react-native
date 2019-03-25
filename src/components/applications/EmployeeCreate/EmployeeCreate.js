import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Card from '../../shared/Card';
import CardSection from '../../shared/CardSection';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>
        <CardSection>
          <Button />
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
