import { useAuth } from '@contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Olá, {user?.name ?? 'null'}</p>
      <button
        type='button'
        style={{ height: '50px', width: '100px' }}
        onClick={logout}
      >
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
