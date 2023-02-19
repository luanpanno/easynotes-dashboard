import { createContext, useCallback, useContext, useState } from 'react';

import { Collection, CreateCollection } from '@models/collections';

import { collectionsService } from '@services/collections';

import { notificationError, notificationSuccess } from '@utils/notifications';

type SelectedColletion = {
  [id: number]: Collection;
};

type Props = {
  children?: React.ReactNode;
};

type Context = {
  collections: Collection[];
  selectedCollection: SelectedColletion | undefined;
  getCollections: () => Promise<Collection[]>;
  getCollectionById: (id: number) => Promise<Collection>;
  createCollection: (values: CreateCollection) => Promise<Collection>;
  setSelectedCollection: React.Dispatch<
    React.SetStateAction<SelectedColletion | undefined>
  >;
};

export const CollectionsContext = createContext<Context>(null as any);

export const CollectionsProvider: React.FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] =
    useState<SelectedColletion>();

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

  const getCollectionById = async (id: number) => {
    try {
      const { data } = await collectionsService.getById(id);

      setSelectedCollection((prevState) => ({ ...prevState, [id]: data }));

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
      value={{
        collections,
        getCollections,
        getCollectionById,
        createCollection,
        selectedCollection,
        setSelectedCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => useContext(CollectionsContext);
