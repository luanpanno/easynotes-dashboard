import { Link } from 'react-router-dom';

import { useCollections } from '@contexts/CollectionsContext';

import { CollectionCard, CollectionListContainer } from './styles';

const CollectionList = () => {
  const { collections } = useCollections();

  return (
    <CollectionListContainer>
      {collections.map((collection) => (
        <CollectionCard key={collection.id}>
          <Link to={`/dashboard/${collection.id}`}>{collection.name}</Link>
        </CollectionCard>
      ))}
      {collections.length === 0 && <span>Nenhuma coleção</span>}
    </CollectionListContainer>
  );
};

export default CollectionList;
