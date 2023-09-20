import { PropsWithChildren } from 'react';

interface AbstractOfferSectionItemProps extends PropsWithChildren {
    strongText?: string;
}

export default function AbstractOfferSectionItem({ strongText, children }: AbstractOfferSectionItemProps) {
    return (
        <li className="text-base text-white">
            {strongText && <strong>{strongText} </strong>}
            {children}
        </li>
    );
}
