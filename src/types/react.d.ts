import { ReactNode } from 'react';

declare global {
  interface HasChildrenProps {
    children?: ReactNode;
  }
  interface HasClassNameProps {
    className?: string;
  }
}
