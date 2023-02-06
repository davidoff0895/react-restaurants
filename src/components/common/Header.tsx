import Icon from '@/components/common/Icon';
import styles from '@/assets/scss/common/header.module.scss';

export default function Header () {
  return (
    <header className={styles.header}>
      <Icon icon={'logo'} />
    </header>
  );
}
