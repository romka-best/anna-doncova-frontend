import { ReactNode } from 'react';
import type { Metadata } from 'next';

import AnimationWrapper from 'app/components/Common/AnimationWrapper';

export const metadata: Metadata = {
    title: 'Договор-оферта на услуги Донцовой А.В.',
    robots: {
        index: true,
    },
};

export default function OfferLayout({ children }: { children: ReactNode }) {
    return <AnimationWrapper>{children}</AnimationWrapper>;
}
