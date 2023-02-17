import { createContext, useContext, useState } from 'react';

import { CreateNote, Note, UpdateNote } from '@models/notes';

import { notesService } from '@services/notes';

import { notificationError } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  notes: Note[];
  selectedNote: Note | undefined;
  getNotes: () => Promise<Note[]>;
  getNoteById: (id: number) => Promise<Note>;
  createNote: (values: CreateNote) => Promise<Note>;
  editNote: (id: UpdateNote) => Promise<Note>;
  deleteNote: (id: number) => Promise<void>;
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

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const editNote = async (values: UpdateNote) => {
    try {
      const { data } = await notesService.update(values);

      setNotes((prevState) =>
        prevState.map((note) => (note.id === data.id ? data : note))
      );

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await notesService.delete(id);

      setNotes((prevState) => prevState.filter((note) => note.id !== id));

      return Promise.resolve();
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
        editNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
