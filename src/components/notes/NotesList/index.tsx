import { useState } from 'react';

import { useNotes } from '@contexts/NotesCollection';

import { Note } from '@models/notes';

import { NoteCard, NotesListContainer } from './styles';

type NotesListProps = {
  collectionId: number;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note>>;
};

const NotesList: React.FC<NotesListProps> = ({
  collectionId,
  setSelectedNote,
}) => {
  const { createNote, deleteNote, notesByCollection } = useNotes();
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
      {notesByCollection[collectionId]?.map((note) => (
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
            onClick={() => setSelectedNote(note)}
          >
            Editar
          </button>
        </NoteCard>
      ))}
      {notesByCollection[collectionId]?.length === 0 && (
        <NoteCard>Nenhuma nota</NoteCard>
      )}
    </NotesListContainer>
  );
};

export default NotesList;
