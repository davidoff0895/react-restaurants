import Product from '@/components/Product';
import styles from '@/assets/scss/menu.module.scss';
import Basket from '@/components/Basket';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Menu () {
  const { menu } = useSelector(({ restaurants }: RootState) => restaurants.activeRestaurant);
  return (
    <div className={styles.menu}>
      <div>
        {menu.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Basket />
    </div>
  );
}
