import { ProductSlice, Props } from '@/hocs/ProductSlice';
import Icon from '@/components/common/Icon';
import styles from '@/assets/scss/product.module.scss';
import btnStyles from '@/assets/scss/common/button.module.scss';
import Counter from '@/components/common/Counter';

function Product ({ product, amount, increase, decrease }: Props) {
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
        <div><Counter amount={amount} decrease={decrease} increase={increase} /></div>
      </div>
    </div>
  );
}

export default ProductSlice(Product);
