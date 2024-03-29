import { PropsWithChildren } from 'react';

interface AbstractOfferSectionProps extends PropsWithChildren {
    title: string;
}

const AbstractOfferSection = ({ title, children }: AbstractOfferSectionProps) => {
    return (
        <section>
            <h2 className="text-3xl text-white">{title}</h2>
            <ul className="flex flex-col gap-4">{children}</ul>
        </section>
    );
};

export default AbstractOfferSection;
