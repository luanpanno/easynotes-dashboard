import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginFields, User } from '@models/user';

import { authService } from '@services/auth';

import { notificationError, notificationSuccess } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  user: User;
  handleUser: (user: User) => void;
  login: (values: LoginFields) => Promise<User>;
  logout: () => void;
};

export const AuthContext = createContext<Context>(null as any);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(authService.getStorageUser());

  useEffect(() => {
    const storageUser = authService.getStorageUser();

    if (!user && storageUser) {
      setUser(storageUser);
    }
  }, [user]);

  const handleUser = (user: User) => setUser(user);

  const login = async (values: LoginFields) => {
    try {
      const user = await authService.login(values);

      notificationSuccess('Usuário autenticado com sucesso');

      handleUser(user);

      navigate('/dashboard');

      return user;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const logout = () => {
    authService.logout();

    handleUser(null as any);

    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, handleUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
