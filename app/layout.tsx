import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Merriweather, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.css';

import Container from '@/components/Container';
import NavBar from '@/components/NavBar';
import NavBarItem from '@/components/NavBarItem';
import ThemeButton from '@/components/ThemeButton';
import Footer from '@/components/Footer';

const merriweatherFont = Merriweather({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const playfairDisplayFont = Playfair_Display({
  variable: '--font-subtitle',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: { default: "José Maldonado", template: "%s | José Maldonado" },
  description: 'Una fusión de arte y código',
  authors: {
    url: 'https://josemaldonado.vercel.app',
    name: 'José Maldonado',
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweatherFont.variable} ${playfairDisplayFont.variable}`}
      >
        <ThemeProvider>
          <Container>
            <NavBar>
              <NavBarItem href="/">Inicio</NavBarItem>
              <NavBarItem href="/poemas">Poemas</NavBarItem>
              <NavBarItem href="/pinturas">Pinturas</NavBarItem>
              <NavBarItem href="/tips">Tips de programación</NavBarItem>
              <ThemeButton />
            </NavBar>
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
