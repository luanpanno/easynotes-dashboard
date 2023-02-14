import { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@models/auth/user';

import { authService } from '@services/auth';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  user: User;
  handleUser: (user: User) => void;
};

export const AuthContext = createContext<Context>(null as any);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(authService.getStorageUser());

  useEffect(() => {
    const storageUser = authService.getStorageUser();

    if (!user && storageUser) {
      setUser(storageUser);
    }
  }, [user]);

  const handleUser = (user: User) => setUser(user);

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
