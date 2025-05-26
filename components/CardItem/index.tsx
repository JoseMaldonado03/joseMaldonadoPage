import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import classes from './styles.module.css';

interface CardItemProps {
  title?: string;
  summary?: string;
  image?: string;
  date?: string;
  link: string;
}

export default function CardItem(props: CardItemProps) {
  return (
    <Link href={props.link} className={classes.cardItem}>
      {props.image && (
        <Image
          fill
          src={props.image}
          alt={props.title ?? ''}
          className={classes.image}
        />
      )}
      <h2 className={classes.title}>{props.title}</h2>
      {/* {props.summary.split('<br />').map((s) => <p>{s}</p>)} */}
      {props.summary && (
        <div
          className={classes.summary}
          dangerouslySetInnerHTML={{ __html: props.summary }}
        />
      )}
      {props.date && (
        <p className={classes.date}>
          {new Date(props.date).toLocaleDateString('es', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </p>
      )}
      <div className={classes.arrow}>
        <BsArrowRight />
      </div>
    </Link>
  );
}
