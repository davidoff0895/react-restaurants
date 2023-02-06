import * as Counter from '@/hocs/counter';
import styles from '@/assets/scss/product.module.scss';
import Icon from '@/components/common/Icon';

function Product ({ product, amount, decrement, increment }: Counter.Props) {
  return (
    <div className={styles.product}>
      <p className={styles.product__name}>{product.name}</p>
      <p>$ {product.price}</p>
      <button onClick={decrement}><Icon icon={'minus'} /></button>
      <span>{amount}</span>
      <button onClick={increment}><Icon icon={'plus'} /></button>
    </div>
  );
}

export default Counter.Component(Product);
