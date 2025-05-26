import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export interface ContentProperties {
  title: string;
  image?: string;
  summary: string;
  link: string;
  date: string;
  content: string;
}

export function getFrontmatter(contenido: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(contenido);
  const frontMatterBlock = match![1];

  const content = contenido.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');

  const metadata: Partial<ContentProperties> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof ContentProperties] = value;
  });

  return { ...metadata, content };
}

export function getCarpetaContent(carpeta: string) {
  return fs
    .readdirSync(carpeta)
    .filter((archivo) => archivo.endsWith('.md'))
    .map((archivo) => {
      const link = archivo.replace('.md', '');
      const archivoPath = path.join(process.cwd(), carpeta, archivo);
      const content = fs.readFileSync(archivoPath, 'utf-8');
      return { link, ...getFrontmatter(content) };
    })
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
}

export function getContent(archivo: string) {

  if (!fs.existsSync(archivo)) {
    return notFound();
  }

  const content = fs.readFileSync(archivo, 'utf-8');

  return getFrontmatter(content);
}
