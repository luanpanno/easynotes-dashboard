import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingContainer from '@components/LoadingContainer';

import { useCollections } from '@contexts/CollectionsContext';

import { getParamId } from '@utils/getParamId';

const Collection = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedCollection, getCollectionById } = useCollections();

  useEffect(() => {
    if (!id) return;

    getCollectionById(getParamId(id));
  }, []);

  return (
    <LoadingContainer>
      <div>
        <h1>{selectedCollection?.name}</h1>
      </div>
    </LoadingContainer>
  );
};

export default Collection;
