import { render, screen } from '@testing-library/react';
import App from './App';

test('displays transaction data', async () => {
  const transactions = [
    { id: 1, description: 'Deposit', amount: 100 },
    { id: 2, description: 'Withdrawal', amount: -50 },
  ];

  jest.spyOn(window, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ transactions }),
    })
  );

  render(<App />);

  const depositRow = await screen.findByText('Deposit');
  expect(depositRow).toBeInTheDocument();

  const withdrawalRow = await screen.findByText('Withdrawal');
  expect(withdrawalRow).toBeInTheDocument();

  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('$-50')).toBeInTheDocument();
});
