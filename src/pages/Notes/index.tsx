import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NoteArea from '@components/collections/NoteArea';
import LoadingContainer from '@components/LoadingContainer';

import { useLoading } from '@contexts/LoadingContext';
import { useNotes } from '@contexts/NotesCollection';

import { getParamId } from '@utils/getParamId';

import { CollectionContainer } from './styles';

const Notes = () => {
  const { id } = useParams<{ id: string }>();
  const { loading } = useLoading();
  const { getNoteById, selectedNote } = useNotes();
  const noteId = getParamId(id);

  useEffect(() => {
    if (!noteId) return;

    getNoteById(noteId);
  }, [noteId, getNoteById]);

  if (!noteId || !selectedNote) return null;

  return (
    <LoadingContainer loading={loading && !selectedNote}>
      <CollectionContainer>
        <div>
          <header className="page-title">
            <h1>{selectedNote?.name}</h1>
          </header>
          <div className="notes-container">
            <NoteArea selectedNote={selectedNote} />
          </div>
        </div>
      </CollectionContainer>
    </LoadingContainer>
  );
};

export default Notes;
