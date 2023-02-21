import { useEffect } from 'react';

import LabelForm from '@components/forms/LabelForm';
import { ModalProps } from '@components/modals/Modal';

import { useLabels } from '@contexts/LabelsContext';

import { LabelsListContainer } from './styles';

export type LabelsListProps = ModalProps;

const LabelsList: React.FC<LabelsListProps> = () => {
  const { labels, getLabels, deleteLabel } = useLabels();

  useEffect(() => {
    getLabels();
  }, [getLabels]);

  return (
    <LabelsListContainer>
      <LabelForm />
      {labels.map((label) => (
        <div key={label.id}>
          <button
            type="button"
            onClick={() => deleteLabel(label.id)}
          >
            Deletar
          </button>
          <span>{label.name}</span>
        </div>
      ))}
      {labels.length === 0 && <span>Nenhum marcador</span>}
    </LabelsListContainer>
  );
};

export default LabelsList;
