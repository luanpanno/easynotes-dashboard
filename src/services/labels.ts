import { AxiosResponse } from 'axios';

import { CreateLabel, Label, UpdateLabel } from '@models/labels';

import api from './api';

const ENDPOINT = '/labels';

class LabelsService {
  list = (): Promise<AxiosResponse<Label[]>> => api.get<Label[]>(`${ENDPOINT}`);

  getById = (id: number): Promise<AxiosResponse<Label>> =>
    api.get<Label>(`${ENDPOINT}/${id}`);

  create = (values: CreateLabel): Promise<AxiosResponse<Label>> =>
    api.post<Label>(`${ENDPOINT}`, values);

  update = (values: UpdateLabel): Promise<AxiosResponse<Label>> =>
    api.patch<Label>(`${ENDPOINT}`, values);

  delete = (id: number): Promise<AxiosResponse<void>> =>
    api.delete(`${ENDPOINT}/${id}`);
}

export const labelsService = new LabelsService();
