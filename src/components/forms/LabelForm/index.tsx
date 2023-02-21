import { FormEvent, useState } from 'react';

import { useLabels } from '@contexts/LabelsContext';

import { LabelFormContainer } from './styles';

const LabelForm = () => {
  const { createLabel } = useLabels();
  const [name, setName] = useState('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    createLabel({ name });

    setName('');
  };

  return (
    <LabelFormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do marcador"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <button type="submit">Criar</button>
    </LabelFormContainer>
  );
};

export default LabelForm;
