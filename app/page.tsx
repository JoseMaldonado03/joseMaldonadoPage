import CardItem from '@/components/CardItem';
import CardList from '@/components/CardList';
import Presentacion from '@/components/Presentacion';
import { getCarpetaContent } from '@/services/content';

export default function HomePage() {
  const [pintura] = getCarpetaContent('./public/content/pinturas');
  const [poema] = getCarpetaContent('./public/content/poemas');
  const [tip] = getCarpetaContent('./public/content/tips');

  return (
    <main>
      <Presentacion />
      <CardList>
        <CardItem
          link={`/poemas/${poema.link}`}
          data={poema.date}
          title={poema.title}
          summary={poema.summary}
        />
        <CardItem
          link={`/pinturas/${pintura.link}`}
          data={pintura.date}
          title={pintura.title}
          image={pintura.image}
        />
        <CardItem
          link={`/tips/${tip.link}`}
          title={tip.title}
          data={tip.date}
          summary={tip.summary}
        />
      </CardList>
    </main>
  );
}
