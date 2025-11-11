import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';
import { SelectOptionProvider } from './store/SelectOptionContext';
import { SelectedPanelProvider } from './store/SelectedPanelContext';
import { SortOptionProvider } from './store/SortOptionContext';
import { AddFavoriteProvider } from './store/AddFavoriteContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SortOptionProvider>
        <SelectOptionProvider>
          <SelectedPanelProvider>
            <AddFavoriteProvider>
              <GlobalStyle />
              <RouterProvider router={router} />
            </AddFavoriteProvider>
          </SelectedPanelProvider>
        </SelectOptionProvider>
      </SortOptionProvider>
    </QueryClientProvider>
  );
}

export default App;
