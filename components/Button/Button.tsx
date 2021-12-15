import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export const Button = ({
  appereance,
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: appereance === 'primary',
        [styles.ghost]: appereance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
