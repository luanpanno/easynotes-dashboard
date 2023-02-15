import { createContext, useContext, useEffect, useState } from 'react';

import api from '@services/api';
import Loading from '@components/Loading';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<Context>(null as any);

export const LoadingProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    api.interceptors.request.use(
      (req) => {
        setLoading(true);

        return req;
      },
      (error) => {
        setLoading(false);

        return Promise.reject(error);
      },
    );

    api.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          setLoading(false);
        }, 200);

        return res;
      },
      (error) => {
        setLoading(false);

        return Promise.reject(error);
      },
    );
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading.Global loading={true} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
