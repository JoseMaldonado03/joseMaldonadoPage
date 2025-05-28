import { Metadata } from 'next';

import CardItem from '@/components/CardItem';
import ContentList from '@/components/ContentList';
import { getCarpetaContent } from '@/services/content';

export const metadata: Metadata = {
  title: 'Tips de Programacíon'
}

export default function ProgramacionPage() {
  const contents = getCarpetaContent('./public/content/tips');
  return (
    <ContentList>
      {contents.map((content, index) => (
        <CardItem
          key={`tips-${index}`}
          title={content.title}
          summary={content.summary}
          image={content.image}
          date={content.date}
          link={`/tips/${content.link}`}
        />
      ))}
    </ContentList>
  );
}
