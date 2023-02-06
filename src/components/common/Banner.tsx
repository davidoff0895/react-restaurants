import styles from '@/assets/scss/common/banner.module.scss';
import banner from '@/assets/img/banner.jpg';

interface Props {
  children: any
  heading: any
}

export default function Banner ({ children, heading }: Props) {
  return (
    <div className={styles.banner}>
      <img src={banner} className={styles.banner__img} alt="banner" />
      <div className={styles.banner__caption}>
        <h2 className={styles.banner__caption__heading}>{heading}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
