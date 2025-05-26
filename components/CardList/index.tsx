import { PropsWithChildren } from 'react';

import classes from './styles.module.css';

export default function CardList({ children }: PropsWithChildren) {
  return <ul className={classes.cardList}>{children}</ul>;
}
