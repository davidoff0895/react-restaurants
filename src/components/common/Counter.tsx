import styles from '@/assets/scss/counter.module.scss';
import Button from '@/components/common/Button';
import { btnColors } from '@/consts/button';
import cn from 'classnames';

interface Props {
  decrease: () => void
  increase: () => void
  total?: number
  clear?: () => void
  compact?: boolean
  amount?: number
  children?: any
}

export default function Counter ({
  decrease,
  increase,
  amount,
  compact = false,
  children,
  clear,
  total
}: Props) {
  const btnColor = compact ? btnColors.SECONDARY : btnColors.DEFAULT;
  return (
    <div className={cn(styles.counter, { [styles.compact]: compact })}>
      {!clear && <div className={styles.counter__count} data-testid="amount">
        {amount}
      </div>}
      <div className={styles.counter__buttons}>
        <div className={styles.counter__buttons__group}>
          <Button onClick={decrease} data-testid="decrementBtn" icon="minus" small={compact} color={btnColor} />
          {children}
          <Button onClick={increase} data-testid="incrementBtn" icon="plus" small={compact} color={btnColor} />
        </div>
        {clear && <div className={styles.counter__buttons__total}>
          ${total}
          <Button onClick={clear} data-testid="clear" icon="delete" small={compact} color={btnColors.RED} />
        </div>}
      </div>
    </div>
  );
}
