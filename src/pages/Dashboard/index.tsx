import { useEffect, useState } from 'react';

import CollectionList from '@components/collections/CollectionList';
import CollectionFormModal from '@components/modals/CollectionFormModal';

import { useCollections } from '@contexts/CollectionsContext';

const Dashboard = () => {
  const { getCollections } = useCollections();
  const [openCreateCollection, setOpenCreateCollection] = useState(false);

  useEffect(() => {
    getCollections();
  }, []);

  const handleOpenCreateCollection = () => {
    setOpenCreateCollection(true);
  };

  const closeModal = () => {
    setOpenCreateCollection(false);
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <button
          type="button"
          onClick={handleOpenCreateCollection}
        >
          Criar coleção
        </button>
      </div>
      <CollectionList />
      <CollectionFormModal
        name="Criar coleção"
        show={openCreateCollection}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Dashboard;
