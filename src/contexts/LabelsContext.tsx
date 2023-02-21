import { createContext, useCallback, useContext, useState } from 'react';

import { CreateLabel, Label } from '@models/labels';

import { labelsService } from '@services/labels';

import { notificationError } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  labels: Label[];
  getLabels: () => Promise<Label[]>;
  createLabel: (values: CreateLabel) => Promise<Label>;
  deleteLabel: (id: number) => Promise<void>;
};

export const LabelsContext = createContext<Context>(null as any);

export const LabelsProvider: React.FC<Props> = ({ children }) => {
  const [labels, setLabels] = useState<Label[]>([]);

  const getLabels = useCallback(async () => {
    try {
      const { data } = await labelsService.list();

      setLabels(data);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  }, []);

  const createLabel = async (values: CreateLabel) => {
    try {
      const { data } = await labelsService.create(values);

      setLabels((prevState) => [...prevState, data]);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const deleteLabel = async (id: number) => {
    try {
      await labelsService.delete(id);

      setLabels((prevState) => prevState.filter((label) => label.id !== id));

      return Promise.resolve();
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  return (
    <LabelsContext.Provider
      value={{
        labels,
        getLabels,
        createLabel,
        deleteLabel,
      }}
    >
      {children}
    </LabelsContext.Provider>
  );
};

export const useLabels = () => useContext(LabelsContext);
