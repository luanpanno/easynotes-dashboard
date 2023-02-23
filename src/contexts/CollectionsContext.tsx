import { createContext, useCallback, useContext, useState } from 'react';

import { Collection, CreateCollection } from '@models/collections';

import { collectionsService } from '@services/collections';

import { notificationError, notificationSuccess } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  collections: Collection[];
  getCollections: () => Promise<Collection[]>;
  getCollectionById: (id: number) => Promise<Collection>;
  createCollection: (values: CreateCollection) => Promise<Collection>;
  deleteCollection: (id: number) => Promise<void>;
};

export const CollectionsContext = createContext<Context>(null as any);

export const CollectionsProvider: React.FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<Collection[]>([]);

  const getCollections = useCallback(async () => {
    try {
      const { data } = await collectionsService.list();

      setCollections(data);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  }, []);

  const getCollectionById = useCallback(async (id: number) => {
    try {
      const { data } = await collectionsService.getById(id);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  }, []);

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

  const deleteCollection = async (id: number) => {
    try {
      await collectionsService.delete(id);

      setCollections((prevState) =>
        prevState.filter((collection) => collection.id !== id)
      );

      return Promise.resolve();
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        getCollections,
        getCollectionById,
        createCollection,
        deleteCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => useContext(CollectionsContext);
