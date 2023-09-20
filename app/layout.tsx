import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';

import AnimationWrapper from 'components/AnimationWrapper';

import './globals.css';

const unbounded = Unbounded({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Анна Донцова',
    robots: {
        index: true,
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body className={unbounded.className}>
                <AnimationWrapper>{children}</AnimationWrapper>
            </body>
        </html>
    );
}
