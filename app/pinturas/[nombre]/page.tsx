import ContentPage from '@/components/ContentPage';
import { getContent } from '@/services/content';

interface PinturasNombrePageProps {
  params: Promise<{ nombre: string }>;
}

export default async function PinturasNombrePage({
  params,
}: PinturasNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/pinturas/${nombre}.md`;
  const content = getContent(archivo);

  return <ContentPage {...content} />;
}
