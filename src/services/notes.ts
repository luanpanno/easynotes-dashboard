import { AxiosResponse } from 'axios';

import { CreateNote, Note, UpdateNote } from '@models/notes';

import api from './api';

const ENDPOINT = '/notes';

class NotesService {
  list = (): Promise<AxiosResponse<Note[]>> => api.get<Note[]>(`${ENDPOINT}`);

  getById = (id: number): Promise<AxiosResponse<Note>> =>
    api.get<Note>(`${ENDPOINT}/${id}`);

  create = (values: CreateNote): Promise<AxiosResponse<Note>> =>
    api.post<Note>(`${ENDPOINT}`, values);

  update = (values: UpdateNote): Promise<AxiosResponse<Note>> =>
    api.patch<Note>(`${ENDPOINT}`, values);

  delete = (id: number): Promise<AxiosResponse<void>> =>
    api.delete(`${ENDPOINT}/${id}`);
}

export const notesService = new NotesService();
