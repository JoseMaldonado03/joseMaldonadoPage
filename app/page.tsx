import CardItem from '@/components/CardItem';
import ContentList from '@/components/ContentList';
import Presentacion from '@/components/Presentacion';
import { getCarpetaContent } from '@/services/content';

export default function HomePage() {
  const [pintura] = getCarpetaContent('./public/content/pinturas');
  const [poema] = getCarpetaContent('./public/content/poemas');
  const [tip] = getCarpetaContent('./public/content/tips');

  return (
    <main>
      <Presentacion />
      <ContentList>
        <CardItem
          link={`/poemas/${poema.link}`}
          date={poema.date}
          title={poema.title}
          summary={poema.summary}
        />
        <CardItem
          link={`/pinturas/${pintura.link}`}
          date={pintura.date}
          title={pintura.title}
          image={pintura.image}
        />
        <CardItem
          link={`/tips/${tip.link}`}
          title={tip.title}
          date={tip.date}
          summary={tip.summary}
        />
      </ContentList>
    </main>
  );
}
