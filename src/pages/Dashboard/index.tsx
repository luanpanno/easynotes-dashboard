import { useAuth } from '@contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Olá, {user?.name ?? 'null'}</p>
    </div>
  );
};

export default Dashboard;
