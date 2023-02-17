import Product from '@/components/Product';
import { act, render, screen } from '@testing-library/react';
import { restaurants } from 'simple_api/api/mock';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('Product.tsx', () => {
  const product = restaurants[0].menu[0];
  const runComponent = () => {
    render(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    );
    return {
      getProductsCount: () => screen.getAllByTestId('product').length,
      getAmount: () => screen.getByTestId('amount').innerHTML,
      callDecrement: () => {
        act(() => { screen.getByTestId('decrementBtn').click(); });
      },
      callIncrement: () => { act(() => { screen.getByTestId('incrementBtn').click(); }); }
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
  it('should return 0 when amount is 0', () => {
    const testKit = runComponent();
    testKit.callDecrement();
    expect(testKit.getAmount()).toBe('0');
  });
});
