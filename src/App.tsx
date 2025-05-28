import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';
import { SelectOptionProvider } from './store/SelectOptionContext';
import { SelectedPanelProvider } from './store/SelectedPanelContext';
import { SortOptionProvider } from './store/SortOptionContext';
import { SelectFavoriteListProvider } from './store/SelectFavoriteListContext';

function App() {
  return (
    <SortOptionProvider>
      <SelectOptionProvider>
        <SelectedPanelProvider>
          <SelectFavoriteListProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
          </SelectFavoriteListProvider>
        </SelectedPanelProvider>
      </SelectOptionProvider>
    </SortOptionProvider>
  );
}

export default App;
