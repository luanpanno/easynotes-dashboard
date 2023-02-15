import CollectionForm, {
  CollectionFormProps,
} from '@components/forms/CollectionForm';

import Modal from '../Modal';

const CollectionFormModal: React.FC<CollectionFormProps> = (props) => (
  <Modal {...props}>
    <CollectionForm {...props} />
  </Modal>
);

export default CollectionFormModal;
