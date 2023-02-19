import { NavLink } from 'react-router-dom';
import Counter from '@/components/common/Counter';
import { BasketSlice, Props } from '@/hocs/BasketSlice';
import styles from '@/assets/scss/basket.module.scss';
import Button from '@/components/common/Button';
import { btnColors } from '@/consts/button';
import { LoadStatuses } from '@/consts/LoadStatuses';

function Basket ({ order, totalSum, decrease, increase, clear, createOrder, orderStatus }: Props) {
  if (!totalSum) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.basket__title}>Select a meal from the list</h4>
      </div>
    );
  }
  return (
    <div className={styles.basket}>
      <h4 className={styles.basket__title}>Basket</h4>
      {order.map(({ id, name, amount, total, url }) =>
        <div key={id} className={styles.basket__item}>
          <NavLink key={id} to={url} className={styles.basket__item__name}>{name}</NavLink>
          <Counter
              compact
              total={total}
              decrease={() => { decrease(id); }}
              increase={() => { increase(id); }}
              clear={() => { clear(id); }}
          >
            <div data-testid="amount">
              {amount}
            </div>
          </Counter>
        </div>
      )}
      <hr className={styles.basket__hr} />
      <div className={styles.basket__total}>
        <div className={styles.basket__total__text}>
          <p className={styles.basket__total__text__item}>Total</p>
        </div>
        <div className={styles.info}>
          <p>${totalSum}</p>
        </div>
      </div>
      <div>
        <Button
            block
            disabled={orderStatus === LoadStatuses.PENDING}
            color={btnColors.PRIMARY}
            onClick={createOrder}
        >
          order
        </Button>
      </div>
    </div>
  );
}

export default BasketSlice(Basket);
