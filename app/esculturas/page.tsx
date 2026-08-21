import { Metadata } from 'next';

import CardItem from '@/components/CardItem';
import ContentList from '@/components/ContentList';
import { getCarpetaContent } from '@/services/content';

export const metadata: Metadata = {
  title: 'Esculturas',
};

export default function ProgramacionPage() {
  const contents = getCarpetaContent('./public/content/esculturas');
  return (
    <ContentList>
      {contents.map((content, index) => (
        <CardItem
          key={`esculturas-${index}`}
          title={content.title}
          summary={content.summary}
          image={content.image}
          date={content.date}
          link={`/esculturas/${content.link}`}
        />
      ))}
    </ContentList>
  );
}
