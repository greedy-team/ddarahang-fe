import { useSelectOptionContext } from '../context/useSelectOptionContext';
import useTravelVideoList from '../quries/useGetTravelVideoList';
import { TRAVEL_LABEL } from '../../constants';

const useSubmitOption = () => {
  const { selectedOption } = useSelectOptionContext();

  const { videoList, loading, error, getTravelVideoList } = useTravelVideoList({
    filter: 'default',
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
  });

  const handleSubmitOption = () => {
    if (selectedOption.selectedOptionLabel === `${TRAVEL_LABEL.COUNTRY} 검색`) {
      getTravelVideoList({ filter: 'default', countryName: selectedOption.countryName, regionName: '' });
    } else {
      getTravelVideoList({
        filter: 'default',
        countryName: selectedOption.countryName,
        regionName: selectedOption.selectedOptionLabel,
      });
    }
  };

  return {
    videoList,
    loading,
    error,
    handleSubmitOption,
    getTravelVideoList,
  };
};

export default useSubmitOption;
