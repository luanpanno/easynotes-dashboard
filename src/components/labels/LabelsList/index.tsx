import { ModalProps } from '@components/modals/Modal';

import { LabelsListContainer } from './styles';

export type LabelsListProps = ModalProps;

const LabelsList: React.FC<LabelsListProps> = () => (
  <LabelsListContainer>
    <span>Nenhum marcador</span>
  </LabelsListContainer>
);

export default LabelsList;
