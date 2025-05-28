'use client';

import { type PropsWithChildren, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './styles.module.css';

export default function NavBar({ children }: PropsWithChildren) {
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
        {children}
      </nav>
    </>
  );
}
