'use client';

import { type PropsWithChildren, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import NavBarItem from '../NavBarItem';
import ThemeButton from '../ThemeButton';

import classes from './styles.module.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className={classes.hamburguesa}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
      <nav data-mobile-open={menuOpen} className={classes.navBar}>
        <NavBarItem href="/" onClick={() => setMenuOpen(false)}>
          Inicio
        </NavBarItem>
        <NavBarItem href="/poemas" onClick={() => setMenuOpen(false)}>
          Poemas
        </NavBarItem>
        <NavBarItem href="/pinturas" onClick={() => setMenuOpen(false)}>
          Pinturas
        </NavBarItem>
        <NavBarItem href="/esculturas" onClick={() => setMenuOpen(false)}>
          Esculturas
        </NavBarItem>
        <ThemeButton />
      </nav>
    </>
  );
}
