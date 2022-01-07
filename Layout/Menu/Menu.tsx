import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const toggleSecondLevel = (category: string): void => {
    setMenu &&
      setMenu(
        menu.map((item) => {
          if (item._id.secondCategory === category) {
            item.isOpened = !item.isOpened;
          }

          return item;
        })
      );
  };

  const buildFirstLevel = () => (
    <ul>
      {firstLevelMenu.map((item) => (
        <li className={styles.firstLevelItem} key={item.route}>
          <Link href={'/' + item.route}>
            <a
              className={cn(styles.firstLevelLink, {
                [styles.firstLevelActive]: item.id === firstCategory,
              })}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          </Link>
          {item.id === firstCategory && buildSecondLevel(item.route)}
        </li>
      ))}
    </ul>
  );

  const buildSecondLevel = (route: string) => (
    <ul className={styles.secondLevel}>
      {menu.map((item) => {
        if (
          item.pages
            .map((page) => page.alias)
            .includes(router.asPath.split('/')[2])
        ) {
          item.isOpened = true;
        }
        return (
          <li className={styles.secondLevelItem} key={item._id.secondCategory}>
            <span onClick={() => toggleSecondLevel(item._id.secondCategory)}>
              {item._id.secondCategory}
            </span>
            <ul
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelOpened]: item.isOpened,
              })}
            >
              {buildThirdLevel(item.pages, route)}
            </ul>
          </li>
        );
      })}
    </ul>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) =>
    pages.map((item) => (
      <li key={item._id}>
        <Link href={`/${route}/${item.alias}`}>
          <a
            className={cn(styles.thirdLevelLink, {
              [styles.thirdLevelActive]:
                `/${route}/${item.alias}` === router.asPath,
            })}
          >
            {item.category}
          </a>
        </Link>
      </li>
    ));

  return <nav>{buildFirstLevel()}</nav>;
};
