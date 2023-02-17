import Product from '@/components/Product';
import styles from '@/assets/scss/menu.module.scss';
import Basket from '@/components/Basket';
import React from 'react';
import { activeRestaurant } from '@/store/restaurants/selector';
import { useAppSelector } from '@/store/hooks';

export default function Menu () {
  const { menu } = useAppSelector(activeRestaurant);
  return (
    <div className={styles.menu}>
      <div>
        {menu.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Basket />
    </div>
  );
}
