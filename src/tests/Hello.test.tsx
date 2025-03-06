import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hello from './Hello';

describe('Hello Component', () => {
  it('renders Hello, world! text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
