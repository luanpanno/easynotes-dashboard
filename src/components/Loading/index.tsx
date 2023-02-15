import BarLoader from 'react-spinners/BarLoader';
import MoonLoader from 'react-spinners/MoonLoader';

const Loading = {
  Global: ({ loading }: { loading: boolean }) => (
    <BarLoader
      loading={loading}
      cssOverride={{
        position: 'fixed',
        top: '0',
        left: '0',
        height: '5px',
        width: '100vw',
      }}
    />
  ),
  Spinner: ({ loading }: { loading: boolean }) => (
    <MoonLoader loading={loading} />
  ),
};

export default Loading;
