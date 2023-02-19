import LabelsList, { LabelsListProps } from '@components/labels/LabelsList';

import Modal from '../Modal';

const LabelsListModal: React.FC<LabelsListProps> = (props) => (
  <Modal {...props}>
    <LabelsList {...props} />
  </Modal>
);

export default LabelsListModal;
