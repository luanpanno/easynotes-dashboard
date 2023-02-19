import { useEffect, useState } from 'react';

import CollectionList from '@components/collections/CollectionList';
import CollectionFormModal from '@components/modals/CollectionFormModal';
import LabelsListModal from '@components/modals/LabelsListModal';
import NotesList from '@components/notes/NotesList';

import { useCollections } from '@contexts/CollectionsContext';

import Sidebar from './Sidebar';
import { DashboardContainer } from './styles';

export type View = 'collections' | 'notes' | 'labels';

function Dashboard() {
  const { getCollections } = useCollections();
  const [openCreateCollection, setOpenCreateCollection] = useState(false);
  const [view, setView] = useState<View>('collections');
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    getCollections();
  }, [getCollections]);

  const handleOpenCreateCollection = () => {
    setOpenCreateCollection(true);
  };

  const closeModal = () => {
    setShowLabels(false);
    setOpenCreateCollection(false);
  };

  const handleView = (view: View) =>
    view === 'labels' ? setShowLabels(true) : setView(view);

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
        <Sidebar handleView={handleView} />
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
