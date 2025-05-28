import { Metadata } from 'next';

import CardItem from '@/components/CardItem';
import ContentList from '@/components/ContentList';
import { getCarpetaContent } from '@/services/content';

export const metadata: Metadata = {
  title: 'Poemas'
}

export default function PoemasPage() {
  const contents = getCarpetaContent('./public/content/poemas');
  const booksContents = getCarpetaContent('./public/content/poemas/books');

  return (
    <>
      <ContentList>
        {booksContents.map((content, index) => (
          <CardItem
            key={`poemas-${index}`}
            title={content.title}
            summary={content.summary}
            image={content.image}
            link={`/poemas/books/${content.link}`}
          />
        ))}
        {contents.map((content, index) => (
          <CardItem
            key={`poemas-${index}`}
            title={content.title}
            summary={content.summary}
            image={content.image}
            date={content.date}
            link={`/poemas/${content.link}`}
          />
        ))}
      </ContentList>
    </>
  );
}
