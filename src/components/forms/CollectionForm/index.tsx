import { FormEvent, useState } from 'react';

import { ModalProps } from '@components/modals/Modal';

import { useCollections } from '@contexts/CollectionsContext';

export type CollectionFormProps = ModalProps;

const CollectionForm: React.FC<CollectionFormProps> = ({ closeModal }) => {
  const { createCollection } = useCollections();
  const [name, setName] = useState('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    createCollection({ name });

    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da coleção"
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

export default CollectionForm;
