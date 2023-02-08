import Product from '@/components/Product';
import type { MenuEntity } from '@/types/restaurant';
import styles from '@/assets/scss/menu.module.scss';
import Basket from '@/components/Basket';
import React from 'react';

interface Props {
  menu: MenuEntity[]
}

export default function Menu ({ menu }: Props) {
  return (
    <div className={styles.menu}>
      <div>
        {menu.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Basket />
    </div>
  );
}
