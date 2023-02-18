import Icon from '@/components/common/Icon';
import styles from '@/assets/scss/common/header.module.scss';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Icon icon={'logo'} />
      </Link>
    </header>
  );
}
