import CardList from '@/components/CardList';
import CardItem from '@/components/CardItem';
import { getCarpetaContent } from '@/services/content';

export default function PinturasPage() {
  const contents = getCarpetaContent('./public/content/pinturas');
  return (
    <CardList>
      {contents.map((content, index) => (
        <CardItem
          key={`pinturas-${index}`}
          title={content.title}
          summary={content.summary}
          image={content.image}
          date={content.date}
          link={`/pinturas/${content.link}`}
        />
      ))}
    </CardList>
  );
}
