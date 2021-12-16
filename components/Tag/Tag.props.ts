import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  href?: string;
  size?: 'small' | 'medium';
  color?: 'ghost' | 'grey' | 'success' | 'warning' | 'primary';
}
