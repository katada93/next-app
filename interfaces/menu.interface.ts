import { TopLevelCategory } from './toppage.interface';

export interface PageItem {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpened?: boolean;
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
