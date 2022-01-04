import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import GoodsIcon from './icons/goods.svg';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import Link from 'next/link';

const FirstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    icon: <CoursesIcon />,
    name: 'Курсы',
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    icon: <ServicesIcon />,
    name: 'Сервисы',
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    icon: <BooksIcon />,
    name: 'Книги',
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    icon: <CoursesIcon />,
    name: 'Товары',
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => (
    <ul>
      {FirstLevelMenu.map((item) => (
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
      {menu.map((item) => (
        <li className={styles.secondLevelItem} key={item._id.secondCategory}>
          <span>{item._id.secondCategory}</span>
          <ul
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelOpened]: item.isOpened,
            })}
          >
            {buildThirdLevel(item.pages, route)}
          </ul>
        </li>
      ))}
    </ul>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) =>
    pages.map((item) => (
      <li key={item._id}>
        <Link href={`/${route}/${item.alias}`}>
          <a
            className={cn(styles.thirdLevelLink, {
              [styles.thirdLevelActive]: false,
            })}
          >
            {item.category}
          </a>
        </Link>
      </li>
    ));

  return <div>{buildFirstLevel()}</div>;
};
