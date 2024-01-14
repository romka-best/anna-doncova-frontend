import { PropsWithChildren } from 'react';

interface AbstractPrivacySectionItemProps extends PropsWithChildren {
    strongText?: string;
}

export default function AbstractPrivacySectionItem({ strongText, children }: AbstractPrivacySectionItemProps) {
    return (
        <li className="text-base text-white">
            {strongText && <strong>{strongText} </strong>}
            {children}
        </li>
    );
}
