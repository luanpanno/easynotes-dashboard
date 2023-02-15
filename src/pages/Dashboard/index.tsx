import { useEffect, useState } from 'react';

import CollectionFormModal from '@components/modals/CollectionFormModal';

import { useAuth } from '@contexts/AuthContext';
import { useCollections } from '@contexts/CollectionsContext';

const Dashboard = () => {
  const { user } = useAuth();
  const { collections, getCollections } = useCollections();
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
        <div>
          <h1>Dashboard</h1>
          <div>
            <button
              type="button"
              onClick={handleOpenCreateCollection}
            >
              Criar coleção
            </button>
          </div>
        </div>
        <p>Olá, {user?.name ?? 'null'}</p>
      </div>
      <div>
        {collections.map((collection) => (
          <span key={collection.id}>{collection.name}</span>
        ))}
        {collections.length === 0 && <span>Nenhuma coleção</span>}
      </div>
      <CollectionFormModal
        name="Criar coleção"
        show={openCreateCollection}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Dashboard;
