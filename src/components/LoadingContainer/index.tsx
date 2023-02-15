import { PropsWithChildren } from 'react';

import Loading from '@components/Loading';

import { LoadingConditionalContainer } from './styles';

type LoadingContainerProps = {
  loading: boolean;
};

const LoadingContainer: React.FC<PropsWithChildren<LoadingContainerProps>> = ({
  loading,
  children,
}) => {
  if (loading)
    return (
      <LoadingConditionalContainer>
        <Loading.Spinner loading={loading} />
      </LoadingConditionalContainer>
    );

  return <>{children}</>;
};

export default LoadingContainer;
