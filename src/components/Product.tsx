import * as Counter from '@/hocs/counter';
import Icon from '@/components/common/Icon';
import styles from '@/assets/scss/product.module.scss';
import btnStyles from '@/assets/scss/common/button.module.scss';

function Product ({ product, amount, decrement, increment }: Counter.Props) {
  const ingredients = product.ingredients?.join(', ');

  return (
    <div className={styles.product} data-testid="product">
      <div className={styles.product__content}>
        <div>
          <h4 className={styles.product__content__title}>{product.name}</h4>
          <div className={styles.product__content__description}>{ingredients}</div>
          <div className={styles.product__content__price}>
            ${product.price}
          </div>
        </div>
        <div>
          <div className={styles.product__counter}>
            <div className={styles.product__counter__count} data-testid="amount">
              {amount}
            </div>
            <div className={styles.product__counter__buttons}>
              <button className={btnStyles.button} onClick={decrement} data-testid="decrementBtn">
                <Icon icon={'minus'}/>
              </button>
              <button className={btnStyles.button} onClick={increment} data-testid="incrementBtn">
                <Icon icon={'plus'}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter.Component(Product);
