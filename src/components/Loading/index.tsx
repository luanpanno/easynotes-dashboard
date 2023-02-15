import BarLoader from 'react-spinners/BarLoader';
import MoonLoader from 'react-spinners/MoonLoader';

const Loading = {
  Global: ({ loading }: { loading: boolean }) => (
    <BarLoader
      loading={loading}
      width="100vw"
    />
  ),
  Spinner: ({ loading }: { loading: boolean }) => (
    <MoonLoader loading={loading} />
  ),
};

export default Loading;
