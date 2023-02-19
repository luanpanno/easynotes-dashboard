import { View } from '../index';
import { SidebarContainer } from './styles';

type SidebarProps = {
  handleView: (view: View) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ handleView }) => (
  <SidebarContainer>
    <button
      type="button"
      onClick={() => handleView('collections')}
    >
      Coleções
    </button>
    <button
      type="button"
      onClick={() => handleView('notes')}
    >
      Notas
    </button>
    <button
      type="button"
      onClick={() => handleView('labels')}
    >
      Marcadores
    </button>
  </SidebarContainer>
);

export default Sidebar;
