import Counter from '@/components/common/Counter';
import { BasketSlice, Props } from '@/hocs/BasketSlice';

function Basket ({ order, totalSum, decrease, increase, clear }: Props) {
  return (
    <>
      Basket:
      {order.map(({ id, name, amount }) =>
        <div key={id}>
          <div>{name}</div>
          <button onClick={() => { clear(id); }}>X</button>
          <Counter amount={amount} decrease={() => { decrease(id); }} increase={() => { increase(id); }} />
        </div>
      )}
      <div>Total: ${totalSum}</div>
    </>
  );
}

export default BasketSlice(Basket);
