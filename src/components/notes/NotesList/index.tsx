import { useState } from 'react';

import { useNotes } from '@contexts/NotesCollection';

import { NoteCard, NotesListContainer } from './styles';

type NotesListProps = {
  collectionId: number;
};

const NotesList: React.FC<NotesListProps> = ({ collectionId }) => {
  const { notes, createNote, deleteNote } = useNotes();
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');

  const handleAddClick = () => {
    setIsCreate(true);
  };

  const closeCreation = () => {
    setName('');
    setIsCreate(false);
  };

  const handleSubmit = async () => {
    await createNote({ name, collectionId });

    closeCreation();
  };

  return (
    <NotesListContainer>
      <button
        type="button"
        onClick={handleAddClick}
      >
        Adicionar nota
      </button>
      {isCreate && (
        <NoteCard>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            onKeyDown={(ev) => (ev.key === 'Enter' ? handleSubmit() : null)}
            autoFocus={isCreate}
          />
          <button
            type="button"
            onClick={closeCreation}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSubmit}
          >
            Criar
          </button>
        </NoteCard>
      )}
      {notes.map((note) => (
        <NoteCard key={note.id}>
          <span>{note.name}</span>
          <button
            type="button"
            onClick={() => deleteNote(note.id)}
          >
            Deletar
          </button>
          <button
            type="button"
            onClick={() => deleteNote(note.id)}
          >
            Editar
          </button>
        </NoteCard>
      ))}
      {notes.length === 0 && <NoteCard>Nenhuma nota</NoteCard>}
    </NotesListContainer>
  );
};

export default NotesList;
