import { AxiosResponse } from 'axios';

import {
  Collection,
  CreateCollection,
  UpdateCollection,
} from '@models/collections';

import api from './api';

const ENDPOINT = '/collections';

class CollectionsService {
  list = (): Promise<AxiosResponse<Collection[]>> =>
    api.get<Collection[]>(`${ENDPOINT}`);

  getById = (id: number): Promise<AxiosResponse<Collection>> =>
    api.get<Collection>(`${ENDPOINT}/${id}`);

  create = (values: CreateCollection): Promise<AxiosResponse<Collection>> =>
    api.post<Collection>(`${ENDPOINT}`, values);

  update = (values: UpdateCollection): Promise<AxiosResponse<Collection>> =>
    api.patch<Collection>(`${ENDPOINT}`, values);

  delete = (id: number): Promise<AxiosResponse<void>> =>
    api.delete(`${ENDPOINT}/${id}`);
}

export const collectionsService = new CollectionsService();
