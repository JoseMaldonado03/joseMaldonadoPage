import ContentPage from '@/components/ContentPage';
import { getContent } from '@/services/content';

interface TipsNombrePageProps {
  params: Promise<{ nombre: string }>;
}

export async function generateMetadata({ params }: TipsNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/tips/${nombre}.md`;
  const content = getContent(archivo);

  return {
    title: content.title,
    description: content.summary,
  }
}

export default async function TipsNombrePage({ params }: TipsNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/tips/${nombre}.md`;
  const content = getContent(archivo);

  return <ContentPage {...content} />;
}
