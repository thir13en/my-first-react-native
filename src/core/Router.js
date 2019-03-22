// react
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from '../components/public/LoginForm';
import EmployeeList from '../components/applications/EmployeeList/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main" initial>
          <Scene
            rigthTitle="Add"
            onRight={() => console.log('right')}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
