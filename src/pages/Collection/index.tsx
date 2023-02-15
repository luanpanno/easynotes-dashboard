import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingContainer from '@components/LoadingContainer';
import NoteFormModal from '@components/modals/NoteFormModal';
import NotesList from '@components/notes/NotesList';

import { useCollections } from '@contexts/CollectionsContext';
import { useLoading } from '@contexts/LoadingContext';
import { useNotes } from '@contexts/NotesCollection';

import { getParamId } from '@utils/getParamId';

const Collection = () => {
  const { id } = useParams<{ id: string }>();
  const { loading } = useLoading();
  const { selectedCollection, getCollectionById } = useCollections();
  const { getNotes } = useNotes();
  const [openCreateNote, setOpenCreateNote] = useState(false);
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

  return (
    <LoadingContainer loading={loading && !selectedCollection}>
      <div>
        <div>
          <h1>{collection?.name}</h1>
          <button
            type="button"
            onClick={() => setOpenCreateNote(true)}
          >
            Criar nota
          </button>
        </div>
        <NotesList />
      </div>
      <NoteFormModal
        show={openCreateNote}
        closeModal={() => setOpenCreateNote(false)}
        name="Criar nota"
      />
    </LoadingContainer>
  );
};

export default Collection;
