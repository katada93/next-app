import { ParagpaphProps } from './Paragpaph.props';
import styles from './Paragpaph.module.css';

export const Paragpaph = ({
  children,
  size = 'medium',
  ...props
}: ParagpaphProps): JSX.Element => {
  return (
    <p className={styles[size]} {...props}>
      {children}
    </p>
  );
};
