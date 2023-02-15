import { Outlet } from 'react-router-dom';

import DefaultPfp from '@assets/imgs/default-user-image.png';

import { useAuth } from '@contexts/AuthContext';

import { LayoutContainer } from './styles';

const Layout = () => {
  const { logout } = useAuth();

  return (
    <LayoutContainer>
      <nav>
        <div>
          <span>Easynotes</span>
        </div>
        <div className="user">
          <img src={DefaultPfp} />
          <button
            type="button"
            onClick={logout}
          >
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
