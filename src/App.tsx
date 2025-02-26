import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';
import { SelectOptionProvider } from './store/SelectOptionContext';

function App() {
  return (
    <SelectOptionProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </SelectOptionProvider>
  );
}

export default App;
