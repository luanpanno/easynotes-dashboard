import { useNotes } from '@contexts/NotesCollection';

import { NoteCard, NotesListContainer } from './styles';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <NotesListContainer>
      {notes.map((note) => (
        <NoteCard key={note.id}>{note.name}</NoteCard>
      ))}
      {notes.length === 0 && <span>Nenhuma nota</span>}
    </NotesListContainer>
  );
};

export default NotesList;
