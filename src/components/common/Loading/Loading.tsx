import ClipLoader from 'react-spinners/ClipLoader';
import { LoadingLayout } from './Loading.style';
import { colors, size } from '../../../styles/Theme';

const Loading = ({ loading }: any) => {
  if (!loading) return null;

  return (
    <LoadingLayout>
      <ClipLoader
        color={colors.PRIMARY}
        loading={loading}
        size={size.SIZE_016}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </LoadingLayout>
  );
};

export default Loading;
