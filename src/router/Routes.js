import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FacilitiesPage from '../pages/Facilities.js';
import FacilityPage from '../pages/Facility.js';
import AuthPage from '../pages/Auth.js';
import PrivateRoute from './PrivateRoute.js';

const Routes = () => (
  <>
    <Switch>
      <PrivateRoute exact path='/' component={FacilitiesPage} />
      <Route exact path='/auth' component={AuthPage} />
      <PrivateRoute exact path='/facility/:code' component={FacilityPage} />
    </Switch>
  </>
);

export default Routes;