import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '@routes/PublicRoute';

const Routes = () => (
  <Switch>
    <Route path='/login' element={<PublicRoute />}>
      <Route path='/login' element={<Login />} />
    </Route>
    <Route path='/signup' element={<PublicRoute />}>
      <Route path='/signup' element={<Signup />} />
    </Route>

    <Route path='/dashboard' element={<PrivateRoute />}>
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
    <Route path='*' element={<Navigate to='/login' replace />} />
  </Switch>
);

export default Routes;
