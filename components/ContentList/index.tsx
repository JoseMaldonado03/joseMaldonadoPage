import { PropsWithChildren } from 'react';

import classes from './styles.module.css';

export default function ContentList({ children }: PropsWithChildren) {
  return <div className={classes.list}>{children}</div>;
}
