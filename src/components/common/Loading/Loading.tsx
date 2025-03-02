import { colors } from '../../../styles/Theme';
import { LoadingLayout } from './Loading.style';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ loading }: any) => {
  if (!loading) return null;

  return (
    <LoadingLayout>
      <ClipLoader
        color={colors.PRIMARY}
        loading={loading}
        size={40}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </LoadingLayout>
  );
};

export default Loading;
