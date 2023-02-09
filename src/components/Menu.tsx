import Product from '@/components/Product';
import styles from '@/assets/scss/menu.module.scss';
import Basket from '@/components/Basket';
import React from 'react';
import { useSelector } from 'react-redux';
import { activeRestaurant } from '@/store/restaurants/selector';

export default function Menu () {
  const { menu } = useSelector(activeRestaurant);
  return (
    <div className={styles.menu}>
      <div>
        {menu.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Basket />
    </div>
  );
}
