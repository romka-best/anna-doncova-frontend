import { PropsWithChildren } from 'react';

interface AbstractPrivacySectionProps extends PropsWithChildren {
    title: string;
}

const AbstractPrivacySection = ({ title, children }: AbstractPrivacySectionProps) => {
    return (
        <section>
            <h2 className="text-3xl text-white">{title}</h2>
            <ul className="flex flex-col gap-4">{children}</ul>
        </section>
    );
};

export default AbstractPrivacySection;
