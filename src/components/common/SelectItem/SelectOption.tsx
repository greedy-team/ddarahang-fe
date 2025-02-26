import { CountryType, SelectOptionType } from '../../../types';
import { Image, LocationLabelWrapper, LocationTypeText, Option } from './SelectOption.style';

interface SelectOptionProps {
  option: SelectOptionType;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{ selectedOptionLabel: string; countryName: CountryType; isCountryOption: boolean }>
  >;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectOption = ({ isOpen, option, setSelectedOption, setIsOpen }: SelectOptionProps) => {
  const handleSelectedItem = () => {
    if (option.locationType === '국가') {
      setSelectedOption((prev) => ({
        ...prev,
        countryName: option.countryLabel,
        selectedOptionLabel: '',
      }));
    }

    if (option.locationType !== '국가') {
      setSelectedOption((prev) => ({
        ...prev,
        selectedOptionLabel: option.locationLabel,
      }));
    }

    setIsOpen(false);
    console.log(isOpen);
    console.log(option.locationLabel);
  };

  return (
    <Option
      role='option'
      data-value={option.locationLabel}
      onClick={() => handleSelectedItem()}
    >
      <Image
        width={40}
        height={38}
        src={option.imgUrl}
        alt='지역 대표 사진'
      />
      <LocationLabelWrapper>
        <h4>{option.locationLabel}</h4>
        <LocationTypeText>{option.locationType}</LocationTypeText>
      </LocationLabelWrapper>
    </Option>
  );
};

export default SelectOption;
