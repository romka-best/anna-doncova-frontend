import { ReactNode } from 'react';
import cn from 'classnames';

interface MainProps {
    className?: string;
    children: ReactNode;
}

export default function Main({ className, children }: MainProps) {
    return <main className={cn('mx-24 flex flex-col gap-y-60 lg:mx-16 lg:gap-y-48 sm:mx-[2.4rem] sm:gap-y-[4.8rem]', className)}>{children}</main>;
}
