import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DefaultPfp from '@assets/imgs/default-user-image.png';

import { useAuth } from '@contexts/AuthContext';

import { LayoutContainer } from './styles';

const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <LayoutContainer>
      <nav>
        <div>
          <Link to="/dashboard">Easynotes</Link>
        </div>
        <div className="user">
          <div>
            <p>Olá, {user?.name ?? 'null'}</p>
            <img src={DefaultPfp} />
          </div>
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
