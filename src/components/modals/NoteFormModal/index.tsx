import NoteForm, { NoteFormProps } from '@components/forms/NoteForm';

import Modal from '../Modal';

const NoteFormModal: React.FC<NoteFormProps> = (props) => (
  <Modal {...props}>
    <NoteForm {...props} />
  </Modal>
);

export default NoteFormModal;
