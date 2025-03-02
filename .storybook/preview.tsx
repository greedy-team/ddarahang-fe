import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/Globalstyle';
import { BrowserRouter } from 'react-router-dom';

import { SelectedPanelProvider } from '../src/store/SelectedPanelContext';
import { SelectOptionProvider } from '../src/store/SelectOptionContext';

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
      <SelectOptionProvider>
        <SelectedPanelProvider>
          <GlobalStyle />
          <Story />
        </SelectedPanelProvider>
      </SelectOptionProvider>
    </BrowserRouter>
  ),
];
