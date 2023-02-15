import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import AuthLayout from '@components/AuthLayout';
import Layout from '@components/Layout';

import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

import PublicRoute from '@routes/PublicRoute';

import PrivateRoute from '../PrivateRoute';

const Routes = () => (
  <Switch>
    <Route element={<AuthLayout />}>
      <Route
        path="/login"
        element={<PublicRoute />}
      >
        <Route
          path="/login"
          element={<Login />}
        />
      </Route>
    </Route>
    <Route element={<AuthLayout />}>
      <Route
        path="/signup"
        element={<PublicRoute />}
      >
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Route>
    </Route>

    <Route element={<Layout />}>
      <Route
        path="/dashboard"
        element={<PrivateRoute />}
      >
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Route>
    </Route>
    <Route
      path="*"
      element={
        <Navigate
          to="/login"
          replace
        />
      }
    />
  </Switch>
);

export default Routes;
