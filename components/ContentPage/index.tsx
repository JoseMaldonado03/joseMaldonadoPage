import Image from 'next/image';
import { highlight } from 'sugar-high';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { ContentProperties } from '@/services/content';

import classes from './styles.module.css';

function CodeContent({ children }: { children: string }) {
  return (
    <code
      className={classes.code}
      dangerouslySetInnerHTML={{ __html: highlight(children) }}
    />
  );
}

export default function ContentPage(props: Partial<ContentProperties>) {
  return (
    <div className={classes.page}>
      {props.image && (
        <Image
          fill
          src={props.image}
          alt={props.title ?? ''}
          className={classes.image}
        />
      )}
      <article className={classes.article}>
        <h2 className={classes.title}>{props.title}</h2>
        {props.date && (
          <span className={classes.date}>
            {new Date(props.date).toLocaleDateString('es', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </span>
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
    </div>
  );
}
