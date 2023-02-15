import { createContext, useContext, useState } from 'react';

import { Collection, CreateCollection } from '@models/collections';

import { collectionsService } from '@services/collections';

import { notificationError, notificationSuccess } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  collections: Collection[];
  getCollections: () => Promise<Collection[]>;
  createCollection: (values: CreateCollection) => Promise<Collection>;
};

export const CollectionsContext = createContext<Context>(null as any);

export const CollectionsProvider: React.FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<Collection[]>([]);

  const getCollections = async () => {
    try {
      const { data } = await collectionsService.list();

      setCollections(data);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const createCollection = async (values: CreateCollection) => {
    try {
      const { data } = await collectionsService.create(values);

      setCollections((prevState) => [...prevState, data]);

      notificationSuccess('Coleção criada com sucesso');

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  return (
    <CollectionsContext.Provider
      value={{ collections, getCollections, createCollection }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => useContext(CollectionsContext);
