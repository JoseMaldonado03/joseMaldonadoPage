import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { ContentProperties } from '@/services/content';

import classes from './styles.module.css';
import Link from 'next/link';

interface BookProps {
  title: string;
  image?: string;
  content?: string;
  colors?: { backgroundColor?: string; textColor?: string };
  index: Array<Partial<ContentProperties>>;
}

export default function Book(props: BookProps) {
  return (
    <div
      className={classes.book}
      style={{
        backgroundColor: props.colors?.backgroundColor,
        color: props.colors?.textColor,
      }}
    >
      <h2 className={classes.title}>{props.title}</h2>
      {props.image && (
        <Image
          fill
          src={props.image}
          className={classes.cover}
          alt={props.title}
        />
      )}
      {props.content && (
        <div className={classes.content}>
          <MDXRemote source={props.content} />
        </div>
      )}
      {props.index && (
        <>
          <h3 className={classes.indexTitle}>Índice</h3>
          <ol className={classes.indexList}>
            {props.index.map((item, i) => (
              <li
                key={`book-index-${i}`}
                className={classes.indexItem}
                style={{ borderBottomColor: props.colors?.textColor }}
              >
                <Link href={`/poemas/${item.link}`}>{i+1}. {item.title}</Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
