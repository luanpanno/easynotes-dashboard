import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNotes } from '@contexts/NotesCollection';

import { NotesCard, NotesListContainer } from './styles';

const NotesList = () => {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <NotesListContainer>
      {notes.map((collection) => (
        <NotesCard key={collection.id}>
          <Link to={`/dashboard/${collection.id}`}>{collection.name}</Link>
        </NotesCard>
      ))}
      {notes.length === 0 && <span>Nenhuma nota</span>}
    </NotesListContainer>
  );
};

export default NotesList;
