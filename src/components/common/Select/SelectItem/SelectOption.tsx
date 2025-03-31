import { TRAVEL_LABEL } from '../../../../constants/label';
import { useSelectOptionContext } from '../../../../hooks/context/useSelectOptionContext';
import { SelectOptionType } from '../../../../types';
import LazyImage from '../../Image/LazyImage';
import { LocationLabelWrapper, LocationTypeText, Option } from './SelectOption.style';

interface SelectOptionProps {
  option: SelectOptionType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPageNumber: (currentPageNumber: number) => void;
}

const SelectOption = ({ option, setIsOpen, setCurrentPageNumber }: SelectOptionProps) => {
  const { setSelectedOption } = useSelectOptionContext();

  const handleSelectedItem = () => {
    if (option.locationType === '국가') {
      setSelectedOption((prev) => ({
        ...prev,
        countryName: option.countryLabel,
        selectedOptionLabel: TRAVEL_LABEL.REGION + ' 검색',
      }));
    }

    if (option.locationType !== '국가') {
      setSelectedOption((prev) => ({
        ...prev,
        selectedOptionLabel: option.locationLabel,
      }));
    }

    setCurrentPageNumber(1);
    setIsOpen(false);
  };

  return (
    <Option
      role='option'
      data-value={option.locationLabel}
      onClick={() => handleSelectedItem()}
    >
      <LazyImage
        width={'40px'}
        height={'38px'}
        borderRadius={'8px'}
        alt='지역 대표 사진'
        src={option.imgUrl}
      />
      <LocationLabelWrapper>
        <h4>{option.locationLabel}</h4>
        <LocationTypeText>{option.locationType}</LocationTypeText>
      </LocationLabelWrapper>
    </Option>
  );
};

export default SelectOption;
