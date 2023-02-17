import { useEffect, useState } from 'react';

import { useNotes } from '@contexts/NotesCollection';

import { Note, UpdateNote } from '@models/notes';

import { NoteAreaContainer } from './styles';

type NoteAreaProps = {
  selectedNote: Note;
};

const NoteArea: React.FC<NoteAreaProps> = ({ selectedNote }) => {
  const { editNote } = useNotes();
  const [formValues, setFormValues] = useState<UpdateNote>({
    name: selectedNote?.name ?? '',
    content: selectedNote?.content ?? '',
  });

  useEffect(() => {
    if (selectedNote) {
      setFormValues({ name: selectedNote.name, content: selectedNote.content });
    }
  }, [selectedNote]);

  const handleChange = (params: UpdateNote) => {
    editNote(selectedNote.id, { ...formValues, ...params });
    setFormValues((prevState) => ({ ...prevState, ...params }));
  };

  return (
    <NoteAreaContainer>
      <input
        type="text"
        placeholder="Nome"
        value={formValues.name ?? ''}
        onChange={(ev) => handleChange({ name: ev.target.value })}
      />
      <textarea
        name="content"
        placeholder="Escreva sua nota aqui"
        value={formValues.content ?? ''}
        onChange={(ev) => handleChange({ content: ev.target.value })}
      />
    </NoteAreaContainer>
  );
};

export default NoteArea;
