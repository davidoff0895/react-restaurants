import Product from '@/components/Product';
import { act, render, screen } from '@testing-library/react';
import { restaurants } from '@/data/restaurants';

describe('Product.tsx', () => {
  const product = restaurants[0].menu[0];
  const runComponent = (initAmount = 0) => {
    render(<Product product={product} amount={initAmount} />);
    return {
      getProductsCount: () => screen.getAllByTestId('product').length,
      getAmount: () => screen.getByTestId('amount').innerHTML,
      callIncrement: () => { act(() => { screen.getByTestId('incrementBtn').click(); }); },
      callDecrement: () => { act(() => { screen.getByTestId('decrementBtn').click(); }); }
    };
  };

  it('should render component', () => {
    const testKit = runComponent();
    expect(testKit.getProductsCount()).toBe(1);
  });
  it('should init from 0 amount', () => {
    const testKit = runComponent();
    expect(testKit.getAmount()).toBe('0');
  });
  it('should increment amount', () => {
    const testKit = runComponent();
    testKit.callIncrement();
    expect(testKit.getAmount()).toBe('1');
  });
  it('should decrement amount', () => {
    const testKit = runComponent(10);
    testKit.callDecrement();
    expect(testKit.getAmount()).toBe('9');
  });
  it('should return 0 when amount is 0', () => {
    const testKit = runComponent(0);
    testKit.callDecrement();
    expect(testKit.getAmount()).toBe('0');
  });
});
