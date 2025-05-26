import CardItem from '@/components/CardItem';
import CardList from '@/components/CardList';
import { getCarpetaContent } from '@/services/content';

export default function PoemasPage() {
  const contents = getCarpetaContent('./public/content/poemas');
  return (
    <CardList>
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
    </CardList>
  );
}
