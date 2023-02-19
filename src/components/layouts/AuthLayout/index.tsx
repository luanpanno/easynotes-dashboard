import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer } from './styles';

const AuthLayout = () => (
  <AuthLayoutContainer>
    <main>
      <Outlet />
    </main>
  </AuthLayoutContainer>
);

export default AuthLayout;
