import { FormEvent, useState } from 'react';

import { ModalProps } from '@components/modals/Modal';

import { useNotes } from '@contexts/NotesCollection';

export type NoteFormProps = ModalProps;

const NoteForm: React.FC<NoteFormProps> = ({ closeModal }) => {
  const { createNote } = useNotes();
  const [name, setName] = useState('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    createNote({ name });

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da nota"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <div className="form-buttons">
        <button
          type="button"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button type="submit">Criar</button>
      </div>
    </form>
  );
};

export default NoteForm;
