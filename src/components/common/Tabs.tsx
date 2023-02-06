import styles from '@/assets/scss/common/tabs.module.scss';
import cn from 'classnames';

interface Props {
  tabs: any[]
  activeTab: any
  onchange: (tab: any) => void
}

export default function Tabs ({ tabs, onchange, activeTab }: Props) {
  const isActive = ({ id }: any) => id === activeTab.id;
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) =>
        <span
            key={tab.id}
            onClick={() => { onchange(tab); }}
            className={cn(styles.tabs__tab, { [styles.active]: isActive(tab) })}
        >
          {tab.name}
        </span>
      )}
    </div>
  );
}