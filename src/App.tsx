import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';
import { SelectOptionProvider } from './store/SelectOptionContext';
import { SelectedPanelProvider } from './store/SelectedPanelContext';

function App() {
  return (
    <SelectOptionProvider>
      <SelectedPanelProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </SelectedPanelProvider>
    </SelectOptionProvider>
  );
}

export default App;
