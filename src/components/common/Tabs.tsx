import styles from '@/assets/scss/common/tabs.module.scss';
import { NavLink } from 'react-router-dom';

interface Tab { label: string, url: string }

interface Props {
  tabs: Tab[]
}

export default function Tabs ({ tabs }: Props) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ label, url }) =>
        <NavLink
              to={url}
              key={label}
              className={({ isActive }) =>
                isActive ? `${styles.tabs__tab} ${styles.active}` : styles.tabs__tab
              }
          >
          {label}
        </NavLink>
      )}
    </div>
  );
}
