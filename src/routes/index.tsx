import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes = () => (
  <Switch>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='*' element={<Navigate to='/login' replace />} />
  </Switch>
);

export default Routes;
