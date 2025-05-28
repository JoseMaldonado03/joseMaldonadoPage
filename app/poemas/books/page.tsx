import ContentList from '@/components/ContentList';
import CardItem from '@/components/CardItem';
import { getCarpetaContent } from '@/services/content';

export default function PoemasBooksPage() {
  const contents = getCarpetaContent('./public/content/poemas/books');
  return (
    <ContentList>
      {contents.map((content, index) => (
        <CardItem
          key={`poemas-${index}`}
          title={content.title}
          summary={content.summary}
          image={content.image}
          link={`/poemas/books/${content.link}`}
        />
      ))}
    </ContentList>
  );
}
