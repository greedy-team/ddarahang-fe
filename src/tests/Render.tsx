import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const rtlRender = (ui: any, options?: any) => {
  const Wrapper = ({ children }: any) => <MemoryRouter>{children}</MemoryRouter>;
  return render(ui, { wrapper: Wrapper, ...options });
};

export default rtlRender;
