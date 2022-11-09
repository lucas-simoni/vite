import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'app';
import { BrowserRouter } from 'react-router-dom';

describe('Simple working test', () => {
  it('the title is visible', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await waitFor(() =>
      expect(screen.getByText(/Vite \+ React \+ TS/i)).toBeInTheDocument()
    );
  });

  it('should increment count on click', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole('button'));
    await waitFor(async () =>
      expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
    );
  });
});
