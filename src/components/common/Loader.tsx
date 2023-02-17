import styles from '@/assets/scss/loader.module.scss';

export default function Loader () {
  return (
    <div className={styles.loader}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
    </div>
  );
}
