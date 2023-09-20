'use client';
import Link from 'next/link';

import Logo from 'public/logo.svg';

export default function Header() {
    return (
        <header className="max-w-screen-2xl sticky top-0 z-50 flex items-center justify-between bg-header px-24 py-12 backdrop-blur-md lg:px-16 sm:px-[2.4rem] sm:pb-[2.4rem] sm:pt-[4.8rem]">
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul className="flex items-center gap-12">
                    <li className="underline-short relative text-[#FF11E7]">
                        <Link href="/">Главная</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
