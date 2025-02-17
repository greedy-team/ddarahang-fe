import { Image, LocationLabelWrapper, LocationTypeText, Option } from './SelectOption.style';

interface SelectOptionProps {
  isCountryOption: boolean;
  imgUrl: string;
  locationLabel: string;
  locationType: string;
}

const SelectOption = ({
  isCountryOption = true,
  imgUrl = './image/korea.jpg',
  locationLabel = '대한민국',
  locationType = '국가',
}: SelectOptionProps) => {
  return (
    <Option
      isCountryOption={isCountryOption}
      role='option'
    >
      <Image
        width={40}
        height={38}
        src={imgUrl}
        alt='지역 대표 사진'
      />
      <LocationLabelWrapper>
        <h4>{locationLabel}</h4>
        <LocationTypeText>{locationType}</LocationTypeText>
      </LocationLabelWrapper>
    </Option>
  );
};

export default SelectOption;
