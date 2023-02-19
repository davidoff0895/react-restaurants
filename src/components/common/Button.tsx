import { btnColors } from '@/consts/button';
import styles from '@/assets/scss/common/button.module.scss';
import cn from 'classnames';
import Icon from '@/components/common/Icon';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

interface Props {
  children?: any
  small?: boolean
  block?: boolean
  icon?: string
  color?: btnColors
}

export default function Button ({
  icon,
  children,
  block,
  color = btnColors.DEFAULT,
  small = false,
  ...props
}: Props & ButtonHTMLAttributes<any> & HTMLAttributes<any>) {
  return (
    <button
        className={cn(styles.button, styles[color], {
          [styles.small]: small,
          [styles.block]: block
        })}
        {...props}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}
