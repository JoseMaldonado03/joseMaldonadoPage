import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';

export interface ContentProperties {
  title: string;
  image?: string;
  summary: string;
  link: string;
  date: string;
  content: string;
  bookBackgroundColor?: string;
  bookTextColor?: string;
  book?: string;
}

export function getCarpetaContent(carpeta: string) {
  return fs
    .readdirSync(carpeta)
    .filter((archivo) => archivo.endsWith('.md'))
    .map((archivo) => {
      const link = archivo.replace('.md', '');
      const archivoPath = path.join(process.cwd(), carpeta, archivo);
      const { content, data } = matter(fs.readFileSync(archivoPath, 'utf-8'));
      return { link, ...data, content } as ContentProperties;
    })
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
}

export function getContent(archivo: string) {
  if (!fs.existsSync(archivo)) {
    return notFound();
  }

  const { content, data } = matter(fs.readFileSync(archivo, 'utf-8'));
  return { ...data, content } as ContentProperties;
}
