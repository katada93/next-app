import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  children,
  href,
  size = 'small',
  color = 'ghost',
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <span
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.grey]: color === 'grey',
        [styles.success]: color === 'success',
        [styles.warning]: color === 'warning',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </span>
  );
};
