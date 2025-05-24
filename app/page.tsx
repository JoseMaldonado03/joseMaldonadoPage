import CardItem from "@/components/CardItem";
import CardList from "@/components/CardList";
import Presentacion from "@/components/Presentacion";

import previewImage from '@/public/assets/preview.png';

export default function HomePage() {
  return (
    <main>
        <Presentacion />
        <CardList>
          <CardItem title="Poemas" summary="Un soplo de viento <br />La luna en el silencio <br />Todo es efimero" />
          <CardItem title="Pinturas" image={previewImage} />
          <CardItem title="Tips de Programacion" summary="```js console.log('Hello World');```" />
        </CardList>
    </main>
  );
}
