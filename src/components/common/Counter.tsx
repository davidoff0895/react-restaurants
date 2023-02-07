import styles from '@/assets/scss/counter.module.scss';
import btnStyles from '@/assets/scss/common/button.module.scss';
import Icon from '@/components/common/Icon';

interface Props {
  amount: number
  decrease: () => void
  increase: () => void
}

export default function Counter ({ decrease, increase, amount }: Props) {
  return (
    <div className={styles.counter}>
      <div className={styles.counter__count} data-testid="amount">
        {amount}
      </div>
      <div className={styles.counter__buttons}>
        <button className={btnStyles.button} onClick={decrease}
                    data-testid="decrementBtn">
          <Icon icon={'minus'}/>
        </button>
        <button className={btnStyles.button} onClick={increase}
                    data-testid="incrementBtn">
          <Icon icon={'plus'}/>
        </button>
      </div>
    </div>
  );
}
