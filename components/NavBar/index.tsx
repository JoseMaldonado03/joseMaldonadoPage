import { type PropsWithChildren } from 'react';

import classes from './styles.module.css';

export default function NavBar({ children }: PropsWithChildren) {
  return <nav className={classes.navBar}>{children}</nav>;
}
