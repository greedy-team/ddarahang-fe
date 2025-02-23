import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import { router } from './router/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
