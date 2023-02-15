import { Outlet } from 'react-router-dom';

import DefaultPfp from '@assets/imgs/default-user-image.png';

import { AuthLayoutContainer } from './styles';
import { useAuth } from '@contexts/AuthContext';

const AuthLayout = () => {
  const { logout } = useAuth();

  return (
    <AuthLayoutContainer>
      <main>
        <Outlet />
      </main>
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
