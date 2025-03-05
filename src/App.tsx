import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';
import { SelectOptionProvider } from './store/SelectOptionContext';
import { SelectedPanelProvider } from './store/SelectedPanelContext';
import { SortOptionProvider } from './store/SortOptionContext';

function App() {
  return (
    <SortOptionProvider>
      <SelectOptionProvider>
        <SelectedPanelProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </SelectedPanelProvider>
      </SelectOptionProvider>
    </SortOptionProvider>
  );
}

export default App;
