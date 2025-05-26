'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './styles.module.css';

interface NavBarItemProps {
  href: string;
}

export default function NavBarItem({
  children,
  href,
}: PropsWithChildren<NavBarItemProps>) {
  const pathname = usePathname();
  const isEnabled = href !== '/' ? pathname.includes(href) : href === pathname;

  return (
    <li className={classes.item} data-enabled={isEnabled}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
