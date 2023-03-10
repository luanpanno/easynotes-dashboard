import JwtDecode from 'jwt-decode';

import {
  DecodedToken,
  LoginFields,
  LoginResponse,
  SignupFields,
  User,
} from '@models/user';

import { notificationError } from '@utils/notifications';

import api, { TOKEN_KEY } from './api';

class AuthService {
  login = async (values: LoginFields): Promise<User> => {
    try {
      const { data } = await api.post<LoginResponse>('/sign-in', values);

      localStorage.setItem(TOKEN_KEY, data.token);

      return data;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  signup = (values: SignupFields): Promise<void> =>
    api.post('/sign-up', values);

  logout = (): void => localStorage.removeItem(TOKEN_KEY);

  getStorageUser = (): User => {
    try {
      const token = localStorage.getItem(TOKEN_KEY);

      if (!token) return null as any;

      const decoded: DecodedToken = JwtDecode(token);

      if (this.isExpired(decoded.exp)) return null as any;

      return decoded.user;
    } catch {
      notificationError('Erro ao recuperar usuário');

      return null as any;
    }
  };

  private isExpired = (exp: number) => {
    const now = new Date().getTime() / 1000;

    return now > exp;
  };
}

export const authService = new AuthService();
