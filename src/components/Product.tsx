import * as Counter from '@/hocs/counter';
import Icon from '@/components/common/Icon';
import styles from '@/assets/scss/product.module.scss';
import btnStyles from '@/assets/scss/button.module.scss';

function Product ({ product, amount, decrement, increment }: Counter.Props) {
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <div className={styles.price}>
            ${product.price}
          </div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count}>
              {amount}
            </div>
            <div className={styles.buttons}>
              <button className={btnStyles.button} onClick={decrement}>
                <Icon icon={'minus'} />
              </button>
              <button className={btnStyles.button} onClick={increment}>
                <Icon icon={'plus'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter.Component(Product);
