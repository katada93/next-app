import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import GoodsIcon from './icons/goods.svg';
import { TopLevelCategory } from '../interfaces/toppage.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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
    icon: <GoodsIcon />,
    name: 'Товары',
    id: TopLevelCategory.Products,
  },
];
