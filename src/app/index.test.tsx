import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'app';
import { BrowserRouter } from 'react-router-dom';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Vite \+ React \+ TS/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
