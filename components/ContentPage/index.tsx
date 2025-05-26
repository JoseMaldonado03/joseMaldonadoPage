import Image from 'next/image';
import { highlight } from 'sugar-high';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { ContentProperties } from '@/services/content';

import classes from './styles.module.css';

function CodeContent({ children }: { children: string }) {
  const html = highlight(children);

  return (
    <code className={classes.code} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default function ContentPage(props: Partial<ContentProperties>) {
  return (
    <article className={classes.article}>
      <h2 className={classes.title}>{props.title}</h2>
      <span className={classes.date}>{props.date}</span>
      {props.image && (
        <Image
          fill
          src={props.image}
          alt={props.title ?? ''}
          className={classes.image}
        />
      )}
      {props.content && (
        <div className={classes.content}>
          <MDXRemote
            source={props.content}
            components={{ code: CodeContent }}
          />
        </div>
      )}
    </article>
  );
}
