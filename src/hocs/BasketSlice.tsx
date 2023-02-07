import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { addProduct, removeProduct, clearProduct } from '@/store/order/reducer';

interface Product {
  id: string
  name: string
  amount: number
  total: number
}

export interface Props {
  order: Product[]
  totalSum: number
  decrease: (id: string) => void
  increase: (id: string) => void
  clear: (id: string) => void
}

export function BasketSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    const products = useSelector(({ order }: RootState) => order.products);
    const order = useMemo(() => Object.values(products).map(({ id, name, amount, price }) => ({
      id,
      name,
      amount,
      total: price * amount
    })), [products]);
    const totalSum = useMemo(() => order.reduce((sum, { total }) => sum + total, 0), [order]);
    const dispatch = useDispatch();

    const decrease = (id: string) => dispatch(removeProduct(products[id]));
    const increase = (id: string) => dispatch(addProduct(products[id]));
    const clear = (id: string) => dispatch(clearProduct(id));

    return <WrappedComponent
        order={order}
        totalSum={totalSum}
        decrease={decrease}
        increase={increase}
        clear={clear}
    />;
  };
  Slice.displayName = 'ProductSlice';

  return Slice;
}
