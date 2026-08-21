'use client';

import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './styles.module.css';

export default function NavBarItem({
  children,
  href,
  onClick,
}: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();
  const isEnabled =
    href !== '/' ? pathname.includes(href.toString()) : href === pathname;

  return (
    <li className={classes.item} data-enabled={isEnabled}>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
