import { Outlet } from 'react-router-dom';

import DefaultPfp from '@assets/imgs/default-user-image.png';

import { LayoutContainer } from './styles';
import { useAuth } from '@contexts/AuthContext';

const Layout = () => {
  const { logout } = useAuth();

  return (
    <LayoutContainer>
      <nav>
        <div>
          <span>Easynotes</span>
        </div>
        <div className='user'>
          <img src={DefaultPfp} />
          <button type='button' onClick={logout}>
            Sair
          </button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;
