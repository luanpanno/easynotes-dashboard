import { useNavigate } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';

import { authService } from '@services/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, handleUser } = useAuth();

  const handleLogout = () => {
    authService.logout();
    handleUser(null as any);
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Olá, {user?.name ?? 'null'}</p>
      <button
        type='button'
        style={{ height: '50px', width: '100px' }}
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
