import Icons from '@components/Icons';

import { PropsWithChildren } from '@models/index';

import { ModalContainer, ModalContent } from './styles';

export type ModalProps = {
  show?: boolean;
  name: string;
  closeModal: () => void;
};

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  show,
  name,
  closeModal,
  children,
}) =>
  show ? (
    <ModalContainer>
      <ModalContent>
        <header>
          <h2>{name}</h2>
          <button
            type="button"
            onClick={closeModal}
            title="Fechar"
          >
            <Icons.Close />
          </button>
        </header>
        <main>{children}</main>
      </ModalContent>
    </ModalContainer>
  ) : null;

export default Modal;
