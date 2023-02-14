import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';

const PublicRoute = () => {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default PublicRoute;
