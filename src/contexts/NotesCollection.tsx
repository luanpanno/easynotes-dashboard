import { createContext, useContext, useState } from 'react';

import { CreateNote, Note } from '@models/notes';

import { notesService } from '@services/notes';

import { notificationError, notificationSuccess } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  notes: Note[];
  selectedNote: Note | undefined;
  getNotes: () => Promise<Note[]>;
  getNoteById: (id: number) => Promise<Note>;
  createNote: (values: CreateNote) => Promise<Note>;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
};

export const NotesContext = createContext<Context>(null as any);

export const NotesProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note>();

  const getNotes = async () => {
    try {
      const { data } = await notesService.list();

      setNotes(data);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const getNoteById = async (id: number) => {
    try {
      const { data } = await notesService.getById(id);

      setSelectedNote(data);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const createNote = async (values: CreateNote) => {
    try {
      const { data } = await notesService.create(values);

      setNotes((prevState) => [...prevState, data]);

      notificationSuccess('Coleção criada com sucesso');

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        getNotes,
        getNoteById,
        createNote,
        selectedNote,
        setSelectedNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
