import { useDashboard } from '@contexts/DashboardContext';

import { SidebarContainer } from './styles';

const Sidebar = () => {
  const { view, handleView } = useDashboard();

  return (
    <SidebarContainer>
      <button
        type="button"
        className={view === 'collections' ? 'active' : ''}
        onClick={() => handleView('collections')}
      >
        Coleções
      </button>
      <button
        type="button"
        className={view === 'notes' ? 'active' : ''}
        onClick={() => handleView('notes')}
      >
        Notas
      </button>
      <button
        type="button"
        className={view === 'labels' ? 'active' : ''}
        onClick={() => handleView('labels')}
      >
        Marcadores
      </button>
    </SidebarContainer>
  );
};

export default Sidebar;
