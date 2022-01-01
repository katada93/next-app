import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p className={styles.copywriting}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <a className={styles.use} href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a className={styles.policy} href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
