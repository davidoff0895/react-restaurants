import Product from '@/components/Product';
import type { MenuEntity } from '@/types/restaurant';

interface Props {
  menu: MenuEntity[]
}

export default function Menu ({ menu }: Props) {
  return (
    <div>
      {menu.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}
