import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/Globalstyle';
import { BrowserRouter } from 'react-router-dom';

import { SelectedPanelProvider } from '../src/store/SelectedPanelContext';
import { SelectOptionProvider } from '../src/store/SelectOptionContext';
import { SortOptionProvider } from '../src/store/SortOptionContext';

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <SortOptionProvider>
        <SelectOptionProvider>
          <SelectedPanelProvider>
            <GlobalStyle />
            <Story />
          </SelectedPanelProvider>
        </SelectOptionProvider>
      </SortOptionProvider>
    </BrowserRouter>
  ),
];
