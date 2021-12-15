import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ParagpaphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'large' | 'medium' | 'small';
}
