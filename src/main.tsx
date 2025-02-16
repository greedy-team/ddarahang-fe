import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { worker } from './mocks/browser.ts';
import App from './App.tsx';

worker.start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
