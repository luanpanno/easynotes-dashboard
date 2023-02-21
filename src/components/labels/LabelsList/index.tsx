import { useEffect } from 'react';

import LabelForm from '@components/forms/LabelForm';
import { ModalProps } from '@components/modals/Modal';

import { useLabels } from '@contexts/LabelsContext';

import { LabelsListContainer } from './styles';

export type LabelsListProps = ModalProps;

const LabelsList: React.FC<LabelsListProps> = () => {
  const { labels, getLabels } = useLabels();

  useEffect(() => {
    getLabels();
  }, [getLabels]);

  return (
    <LabelsListContainer>
      <LabelForm />
      {labels.map((label) => (
        <span key={label.id}>{label.name}</span>
      ))}
      {labels.length === 0 && <span>Nenhum marcador</span>}
    </LabelsListContainer>
  );
};

export default LabelsList;
