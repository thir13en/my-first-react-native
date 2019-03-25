// react
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from '../components/public/LoginForm';
import EmployeeList from '../components/applications/EmployeeList/EmployeeList';
import EmployeeCreate from '../components/applications/EmployeeCreate/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main" initial>
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Crate Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
