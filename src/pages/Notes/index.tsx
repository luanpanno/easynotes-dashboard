import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NoteArea from '@components/collections/NoteArea';
import LoadingContainer from '@components/LoadingContainer';

import { useLoading } from '@contexts/LoadingContext';
import { useNotes } from '@contexts/NotesCollection';

import { Note } from '@models/notes';

import { getParamId } from '@utils/getParamId';

import { CollectionContainer } from './styles';

const Notes = () => {
  const { id } = useParams<{ id: string }>();
  const { loading } = useLoading();
  const { getNoteById } = useNotes();
  const [note, setNote] = useState<Note>();
  const noteId = getParamId(id);

  useEffect(() => {
    if (!noteId) return;

    getNoteById(noteId).then((data) => setNote(data));
  }, [noteId, getNoteById]);

  return (
    <LoadingContainer loading={loading && !note}>
      <CollectionContainer>
        <div>
          <header className="page-title">
            <h1>{note?.name}</h1>
          </header>
          <div className="notes-container">
            <NoteArea selectedNote={note} />
          </div>
        </div>
      </CollectionContainer>
    </LoadingContainer>
  );
};

export default Notes;
