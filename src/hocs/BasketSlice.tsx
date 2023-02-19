import React, { useMemo } from 'react';
import { addProduct, removeProduct, clearProduct, asyncSendOrder } from '@/store/order/reducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LoadStatuses } from '@/consts/LoadStatuses';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string
  name: string
  amount: number
  total: number
  url: string
}

export interface Props {
  order: Product[]
  totalSum: number
  orderStatus: LoadStatuses
  decrease: (id: string) => void
  increase: (id: string) => void
  clear: (id: string) => void
  createOrder: () => void
}

export function BasketSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    const navigate = useNavigate();
    const { products, orderStatus } = useAppSelector(({ order }) => order);
    const order = useMemo(() => Object.values(products).map(({ id, name, amount, price, restaurantId }) => ({
      id,
      name,
      amount,
      total: price * amount,
      url: `/restaurants/${restaurantId}/menu`
    })), [products]);
    const totalSum = useMemo(() => order.reduce((sum, { total }) => sum + total, 0), [order]);
    const dispatch = useAppDispatch();

    const decrease = (id: string) => dispatch(removeProduct(products[id]));
    const increase = (id: string) => dispatch(addProduct(products[id]));
    const clear = (id: string) => dispatch(clearProduct(id));
    const createOrder = async () => {
      await dispatch(asyncSendOrder(products));
      navigate('/order-success');
    };

    return <WrappedComponent
        order={order}
        totalSum={totalSum}
        orderStatus={orderStatus}
        decrease={decrease}
        increase={increase}
        clear={clear}
        createOrder={createOrder}
    />;
  };
  Slice.displayName = 'BasketSlice';

  return Slice;
}
