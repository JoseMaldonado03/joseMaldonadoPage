import { PropsWithChildren } from 'react';
import Link from 'next/link';

import classes from './styles.module.css';

interface NavBarItemProps {
    href: string;
}

export default function NavBarItem({ children, href }: PropsWithChildren<NavBarItemProps>) {
    return (
        <li className={classes.item}>
            <Link href={href}>{children}</Link>
        </li>)
    ;
}