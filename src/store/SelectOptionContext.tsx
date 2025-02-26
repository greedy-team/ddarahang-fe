import React, { createContext, useState } from 'react';
import { CountryType } from '../types';

interface SelectOptionValueProps {
  isCountryOption: boolean;
  countryName: CountryType;
  selectedOptionLabel: string;
}

interface SelectedOptionContextProps {
  selectedOption: SelectOptionValueProps;
  setSelectedOption: React.Dispatch<React.SetStateAction<SelectOptionValueProps>>;
}

const defaultValue = {
  selectedOption: {
    isCountryOption: true,
    countryName: '' as CountryType,
    selectedOptionLabel: '',
  },
  setSelectedOption: () => {},
};

export const SelectedOptionContext = createContext<SelectedOptionContextProps>(defaultValue);

export const SelectOptionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionValueProps>({
    isCountryOption: true,
    countryName: '대한민국',
    selectedOptionLabel: '',
  });

  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};
