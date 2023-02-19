import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import styles from '@/assets/scss/order-success.module.scss';

export default function OrderSuccess () {
  const { finishedOrderId } = useAppSelector(({ order }) => order);
  return (
    <div className={styles.orderSuccess}>
      <div>Order #{finishedOrderId} successfully completed</div>
      <NavLink to="/">Go to the main page</NavLink>
    </div>
  );
}
