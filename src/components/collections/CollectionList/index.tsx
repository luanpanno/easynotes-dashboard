import { Link } from 'react-router-dom';

import { useCollections } from '@contexts/CollectionsContext';

import { CollectionCard, CollectionListContainer } from './styles';

const CollectionList = () => {
  const { collections, deleteCollection } = useCollections();

  return (
    <CollectionListContainer>
      {collections.map((collection) => (
        <CollectionCard key={collection.id}>
          <Link to={`/dashboard/collections/${collection.id}`}>
            {collection.name}
          </Link>
          <button
            type="button"
            onClick={() => deleteCollection(collection.id)}
          >
            Deletar
          </button>
        </CollectionCard>
      ))}
      {collections.length === 0 && <span>Nenhuma coleção</span>}
    </CollectionListContainer>
  );
};

export default CollectionList;
