import Book from '@/components/Book';

import { getCarpetaContent, getContent } from '@/services/content';

interface PoemasBooksNombrePageProps {
  params: Promise<{ nombre: string }>;
}

export async function generateMetadata({ params }: PoemasBooksNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/poemas/books/${nombre}.md`;
  const content = getContent(archivo);

  return {
    title: content.title,
    description: content.summary,
  }
}

export default async function PoemasBooksNombrePage({
  params,
}: PoemasBooksNombrePageProps) {
  const { nombre } = await params;
  const archivo = `./public/content/poemas/books/${nombre}.md`;
  const content = getContent(archivo);
  const contents = getCarpetaContent('./public/content/poemas').filter(
    (libro) => libro.book === nombre
  );

  return (
    <Book
      title={content.title!}
      image={content.image}
      content={content.content}
      colors={{
        backgroundColor: content.bookBackgroundColor,
        textColor: content.bookTextColor,
      }}
      index={contents}
    />
  );
}
