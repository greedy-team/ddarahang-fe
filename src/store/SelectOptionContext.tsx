import React, { createContext, useEffect, useState } from 'react';
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
  const savedSelectedOption = localStorage.getItem('selectedOption');
  const parsedSelectedOption = savedSelectedOption ? JSON.parse(savedSelectedOption) : null;

  const [selectedOption, setSelectedOption] = useState<SelectOptionValueProps>(
    parsedSelectedOption || {
      isCountryOption: true,
      countryName: '대한민국',
      selectedOptionLabel: '',
    },
  );

  useEffect(() => {
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
  }, [selectedOption]);

  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};
