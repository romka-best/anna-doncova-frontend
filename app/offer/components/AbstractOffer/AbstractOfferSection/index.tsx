import { PropsWithChildren } from 'react';

interface AbstractOfferSectionProps extends PropsWithChildren {
    title: string;
}

export default function ({ title, children }: AbstractOfferSectionProps) {
    return (
        <div>
            <h2 className="text-3xl text-white">{title}</h2>
            <ul className="flex flex-col gap-4">{children}</ul>
        </div>
    );
}
