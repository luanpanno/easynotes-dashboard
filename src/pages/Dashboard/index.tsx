import { useEffect, useState } from 'react';

import CollectionList from '@components/collections/CollectionList';
import CollectionFormModal from '@components/modals/CollectionFormModal';
import LabelsListModal from '@components/modals/LabelsListModal';
import NotesList from '@components/notes/NotesList';

import { useCollections } from '@contexts/CollectionsContext';
import { useDashboard } from '@contexts/DashboardContext';

import Sidebar from './Sidebar';
import { DashboardContainer } from './styles';

function Dashboard() {
  const { view, showLabels, closeShowLabelsModal } = useDashboard();
  const { getCollections } = useCollections();
  const [openCreateCollection, setOpenCreateCollection] = useState(false);

  useEffect(() => {
    getCollections();
  }, [getCollections]);

  const handleOpenCreateCollection = () => {
    setOpenCreateCollection(true);
  };

  const closeModal = () => {
    closeShowLabelsModal();
    setOpenCreateCollection(false);
  };

  return (
    <DashboardContainer>
      <header className="page-title">
        <h1>Dashboard</h1>
        <button
          type="button"
          onClick={handleOpenCreateCollection}
        >
          Criar coleção
        </button>
      </header>
      <div className="main">
        <Sidebar />
        {view === 'collections' && <CollectionList />}
        {view === 'notes' && <NotesList />}
      </div>
      <CollectionFormModal
        name="Criar coleção"
        show={openCreateCollection}
        closeModal={closeModal}
      />
      <LabelsListModal
        name="Marcadores"
        closeModal={closeModal}
        show={showLabels}
      />
    </DashboardContainer>
  );
}

export default Dashboard;
