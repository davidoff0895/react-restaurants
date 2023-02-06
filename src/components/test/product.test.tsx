import Product from '@/components/Product';
import { act, render, screen } from '@testing-library/react';
import { restaurants } from '@/data/restaurants';

describe('Product.tsx', () => {
  const product = restaurants[0].menu[0];

  it('should render component', () => {
    render(<Product product={product} />);
    expect(screen.getAllByTestId('product').length).toBe(1);
  });
  it('should init from 0 amount', () => {
    render(<Product product={product} />);
    expect(screen.getByTestId('amount').innerHTML).toBe('0');
  });
  it('should increment amount', () => {
    render(<Product product={product} />);
    act(() => { screen.getByTestId('incrementBtn').click(); });
    expect(screen.getByTestId('amount').innerHTML).toBe('1');
  });
  it('should decrement amount', () => {
    render(<Product product={product} amount={10} />);
    act(() => { screen.getByTestId('decrementBtn').click(); });
    expect(screen.getByTestId('amount').innerHTML).toBe('9');
  });
  it('should return 0 when amount is 0', () => {
    render(<Product product={product} amount={0} />);
    act(() => { screen.getByTestId('decrementBtn').click(); });
    expect(screen.getByTestId('amount').innerHTML).toBe('0');
  });
});
