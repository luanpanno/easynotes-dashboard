import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NoteArea from '@components/collections/NoteArea';
import NotesList from '@components/collections/NotesList';
import LoadingContainer from '@components/LoadingContainer';

import { useCollections } from '@contexts/CollectionsContext';
import { useLoading } from '@contexts/LoadingContext';
import { useNotes } from '@contexts/NotesCollection';

import { Collection as CollectionType } from '@models/collections';
import { Note } from '@models/notes';

import { getParamId } from '@utils/getParamId';

import { CollectionContainer } from './styles';

const Collection = () => {
  const { id } = useParams<{ id: string }>();
  const { loading } = useLoading();
  const { getCollectionById } = useCollections();
  const { getNotes } = useNotes();
  const [selectedNote, setSelectedNote] = useState<Note>(null as any);
  const [collection, setCollection] = useState<CollectionType>();
  const collectionId = getParamId(id);

  useEffect(() => {
    if (collection || !collectionId) return;

    getCollectionById(collectionId).then((data) => setCollection(data));
  }, [collection, collectionId, getCollectionById]);

  useEffect(() => {
    if (!collection) return;

    getNotes();
  }, [getNotes, collection]);

  if (!collectionId) return null;

  return (
    <LoadingContainer loading={loading && !collection}>
      <CollectionContainer>
        <div>
          <header className="page-title">
            <h1>{collection?.name}</h1>
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
    </LoadingContainer>
  );
};

export default Collection;
