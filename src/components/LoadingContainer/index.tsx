import Loading from '@components/Loading';

import { useLoading } from '@contexts/LoadingContext';

import { ChildrenProp } from '@models/index';

import { LoadingConditionalContainer } from './styles';

const LoadingContainer: React.FC<ChildrenProp> = ({ children }) => {
  const { loading } = useLoading();

  if (loading)
    return (
      <LoadingConditionalContainer>
        <Loading.Spinner loading={loading} />
      </LoadingConditionalContainer>
    );

  return <>{children}</>;
};

export default LoadingContainer;
