// react
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../../../store/actions';
import { Card, CardSection, Input, Button } from '../../shared';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, EmployeeUpdate } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={name}
            onChangeText={value => EmployeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => EmployeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Button />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { EmployeeUpdate: employeeUpdate })(EmployeeCreate);
