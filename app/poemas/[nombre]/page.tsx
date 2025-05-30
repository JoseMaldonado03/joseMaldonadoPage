import ContentPage from '@/components/ContentPage';
import { getContent } from '@/services/content';

interface PoemasNombrePageProps {
  params: Promise<{ nombre: string }>;
}

export async function generateMetadata({ params }: PoemasNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/poemas/${nombre}.md`;
  const content = getContent(archivo);

  return {
    title: content.title,
    description: content.summary,
  }
}

export default async function PoemasNombrePage({
  params,
}: PoemasNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/poemas/${nombre}.md`;
  const content = getContent(archivo);

  return <ContentPage {...content} />;
}
