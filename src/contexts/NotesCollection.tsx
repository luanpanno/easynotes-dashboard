import { createContext, useCallback, useContext, useState } from 'react';

import { CreateNote, Note, NotesByCollection, UpdateNote } from '@models/notes';

import { notesService } from '@services/notes';

import { notificationError } from '@utils/notifications';

type Props = {
  children?: React.ReactNode;
};

type Context = {
  notes: Note[];
  getNotes: () => Promise<Note[]>;
  getNoteById: (id: number) => Promise<Note>;
  createNote: (values: CreateNote) => Promise<Note>;
  editNote: (id: number, values: UpdateNote) => Promise<Note>;
  deleteNote: (id: number) => Promise<void>;
  notesByCollection: NotesByCollection;
};

export const NotesContext = createContext<Context>(null as any);

export const NotesProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [notesByCollection, setNotesByCollection] = useState<NotesByCollection>(
    {}
  );

  const getNotes = useCallback(async () => {
    try {
      const { data } = await notesService.list();
      const byCollection = Object.assign(
        {},
        ...data
          .map((note) => note.collectionId)
          .map((collectionId) => ({
            [collectionId ?? 0]: data.filter(
              (note) => note.collectionId === collectionId
            ),
          }))
      );

      setNotes(data);
      setNotesByCollection(byCollection);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  }, []);

  const getNoteById = useCallback(async (id: number) => {
    try {
      const { data } = await notesService.getById(id);

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  }, []);

  const createNote = async (values: CreateNote) => {
    try {
      const { data } = await notesService.create(values);

      setNotes((prevState) => [...prevState, data]);

      if (values.collectionId) {
        setNotesByCollection((prevState) => ({
          ...prevState,
          [values.collectionId ?? 0]: [
            ...prevState[values.collectionId ?? 0],
            data,
          ],
        }));
      }

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const editNote = async (id: number, values: UpdateNote) => {
    try {
      const { data } = await notesService.update(id, values);

      setNotes((prevState) =>
        prevState.map((note) => (note.id === data.id ? data : note))
      );

      if (values.collectionId) {
        setNotesByCollection((prevState) => ({
          ...prevState,
          [values.collectionId ?? 0]: prevState[values.collectionId ?? 0].map(
            (note) => (note.id === data.id ? data : note)
          ),
        }));
      }

      return data;
    } catch (error: any) {
      notificationError(error.message);

      return Promise.reject();
    }
  };

  const deleteNote = async (id: number) => {
    try {
      const note = notes.find((note) => note.id === id);
      await notesService.delete(id);

      setNotes((prevState) => prevState.filter((note) => note.id !== id));

      if (note?.collectionId) {
        setNotesByCollection((prevState) => ({
          ...prevState,
          [note.collectionId ?? 0]: prevState[note.collectionId ?? 0].filter(
            (note) => note.id !== id
          ),
        }));
      }

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
        editNote,
        deleteNote,
        notesByCollection,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
