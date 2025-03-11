import { TRAVEL_LABEL } from '../../../../constants';
import { useSelectOptionContext } from '../../../../hooks/context/useSelectOptionContext';
import { SelectOptionType } from '../../../../types';
import LazyImage from '../../Image/LazyImage';
import { LocationLabelWrapper, LocationTypeText, Option } from './SelectOption.style';

interface SelectOptionProps {
  option: SelectOptionType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectOption = ({ option, setIsOpen }: SelectOptionProps) => {
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

    setIsOpen(false);
  };

  return (
    <Option
      role='option'
      data-value={option.locationLabel}
      onClick={() => handleSelectedItem()}
    >
      <LazyImage
        width={'40px'} // 픽셀 명시적 표기 권장
        height={'38px'}
        borderRadius={'8px'} // 별도의 radius 적용
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
