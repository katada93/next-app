import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  href?: string;
  size?: 'small' | 'medium';
  color?: 'ghost' | 'grey' | 'success' | 'warning' | 'primary';
}
