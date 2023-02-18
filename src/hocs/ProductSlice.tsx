import React from 'react';
import type { ProductEntity } from '@/types/restaurant';
import { addProduct, removeProduct } from '@/store/order/reducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export interface Props {
  product: ProductEntity
  amount: number
  decrease: () => void
  increase: () => void
}

export function ProductSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = ({ product }: { product: ProductEntity }) => {
    const orderedProduct = useAppSelector(({ order }) => order.products[product.id]);
    const amount = orderedProduct?.amount || 0;
    const dispatch = useAppDispatch();

    const decrease = () => dispatch(removeProduct(product));
    const increase = () => dispatch(addProduct(product));

    return <WrappedComponent
        product={product}
        amount={amount}
        decrease={decrease}
        increase={increase}
    />;
  };
  Slice.displayName = 'ProductSlice';

  return Slice;
}
