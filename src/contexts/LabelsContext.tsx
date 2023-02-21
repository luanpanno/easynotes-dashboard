import { createContext, useCallback, useContext, useState } from 'react';

import { CreateLabel, Label } from '@models/labels';

import { labelsService } from '@services/labels';

import { notificationError, notificationSuccess } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  labels: Label[];
  getLabels: () => Promise<Label[]>;
  createLabel: (values: CreateLabel) => Promise<Label>;
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

      notificationSuccess('Marcador criado com sucesso');

      return data;
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
      }}
    >
      {children}
    </LabelsContext.Provider>
  );
};

export const useLabels = () => useContext(LabelsContext);
