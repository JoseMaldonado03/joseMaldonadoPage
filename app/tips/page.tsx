import CardItem from '@/components/CardItem';
import CardList from '@/components/CardList';
import { getCarpetaContent } from '@/services/content';

export default function ProgramacionPage() {
  const contents = getCarpetaContent('./public/content/tips');
  return (
    <CardList>
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
    </CardList>
  );
}
