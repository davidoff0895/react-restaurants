import Product from '@/components/Product';
import styles from '@/assets/scss/menu.module.scss';
import Basket from '@/components/Basket';
import getActiveRestaurant from '@/hoocs/activeRestaurant';
import { ProductEntity } from '@/types/restaurant';

export default function Menu () {
  const { menu, id } = getActiveRestaurant();
  const products: ProductEntity[] = menu.map((m) => ({ ...m, restaurantId: id }));
  return (
    <div className={styles.menu}>
      <div>
        {products.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Basket />
    </div>
  );
}
