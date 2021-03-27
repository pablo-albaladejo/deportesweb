import React from 'react';
import { Switch, Route, /*Redirect*/ } from 'react-router-dom';

import FacilitiesPage from './Facilities.js';
import FacilityPage from './Facility.js';

//import ErrorPage from '../error';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={FacilitiesPage} />
      <Route exact path='/facility/:code' component={FacilityPage} />
      {/*
        <Route exact path='/error' component={ErrorPage} />
        <Redirect to="/error" />
      */}
    </Switch>
  
);

export default Routes;