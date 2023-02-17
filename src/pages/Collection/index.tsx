import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingContainer from '@components/LoadingContainer';
import NoteFormModal from '@components/modals/NoteFormModal';
import NoteArea from '@components/notes/NoteArea';
import NotesList from '@components/notes/NotesList';

import { useCollections } from '@contexts/CollectionsContext';
import { useLoading } from '@contexts/LoadingContext';
import { useNotes } from '@contexts/NotesCollection';

import { Note } from '@models/notes';

import { getParamId } from '@utils/getParamId';

import { CollectionContainer } from './styles';

const Collection = () => {
  const { id } = useParams<{ id: string }>();
  const { loading } = useLoading();
  const { selectedCollection, getCollectionById } = useCollections();
  const { getNotes } = useNotes();
  const [openCreateNote, setOpenCreateNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note>(null as any);
  const collectionId = getParamId(id);
  const collection =
    selectedCollection && collectionId
      ? selectedCollection[collectionId]
      : null;

  useEffect(() => {
    if (collection || !collectionId) return;

    getCollectionById(collectionId);
  }, []);

  useEffect(() => {
    if (!selectedCollection) return;

    getNotes();
  }, []);

  if (!collectionId) return null;

  return (
    <LoadingContainer loading={loading && !selectedCollection}>
      <CollectionContainer>
        <div>
          <header className="page-title">
            <h1>{collection?.name}</h1>
            <button
              type="button"
              onClick={() => setOpenCreateNote(true)}
            >
              Criar nota
            </button>
          </header>
          <div className="notes-container">
            <NotesList
              collectionId={collectionId}
              setSelectedNote={setSelectedNote}
            />
            <NoteArea selectedNote={selectedNote} />
          </div>
        </div>
      </CollectionContainer>
      <NoteFormModal
        show={openCreateNote}
        closeModal={() => setOpenCreateNote(false)}
        name="Criar nota"
      />
    </LoadingContainer>
  );
};

export default Collection;
