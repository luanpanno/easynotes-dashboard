import axios from 'axios';

import { env } from '@config/env';

export const TOKEN_KEY = 'auth';

const api = axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use((req: any) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) {
    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return req;
});

api.interceptors.response.use(
  (response: any) => response,
  (error) => {
    const message =
      error?.response?.data?.message ??
      'Has ocurred an unexpected error, please try again';

    redirectToAuth(error);

    return Promise.reject(new Error(message));
  }
);

function redirectToAuth(error: any) {
  const token = localStorage.getItem(TOKEN_KEY);
  const win: Window = window;

  if (error.response?.status === 401 && token) {
    localStorage.removeItem(TOKEN_KEY);

    win.location = '/';
  }
}

export default api;
