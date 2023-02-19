import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import AuthLayout from '@components/AuthLayout';
import Layout from '@components/Layout';

import Collection from '@pages/Collection';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Notes from '@pages/Notes';
import Signup from '@pages/Signup';

import PublicRoute from '@routes/PublicRoute';

import PrivateRoute from '../PrivateRoute';

const Routes = () => (
  <Switch>
    <Route element={<AuthLayout />}>
      <Route element={<PublicRoute />}>
        <Route
          path="/login"
          element={<Login />}
        />
      </Route>
    </Route>
    <Route element={<AuthLayout />}>
      <Route element={<PublicRoute />}>
        <Route element={<Signup />} />
      </Route>
    </Route>

    <Route element={<Layout />}>
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Route>
    </Route>

    <Route element={<Layout />}>
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard/collections/:id"
          element={<Collection />}
        />
      </Route>
    </Route>

    <Route element={<Layout />}>
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard/notes/:id"
          element={<Notes />}
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
