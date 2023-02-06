import React from 'react';
import useAmount from '@/hooks/useAmount';
import type { MenuEntity } from '@/types/restaurant';

export interface Props {
  product: MenuEntity
  amount: number
  decrement: () => void
  increment: () => void
}

export function Component (WrappedComponent: React.ComponentType<Props>) {
  const Counter = (props: any) => {
    const initAmount = props.amount || 0;
    const amountProps = useAmount(initAmount);

    return <WrappedComponent {...props} {...amountProps} />;
  };
  Counter.displayName = 'Counter';

  return Counter;
}
