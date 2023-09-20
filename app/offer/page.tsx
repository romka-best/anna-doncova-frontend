import Link from 'next/link';

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const OFFER_LINKS = [
    {
        href: '/offer/individual-mentoring',
        text: 'Договор оферты на индивидуальное наставничество',
    },
    {
        href: '/offer/group-mentoring',
        text: 'Договор оферты на групповое наставничество',
    },
    {
        href: '/offer/coaching',
        text: 'Договор публичной оферты на оказание коучинговых услуг',
    },
];

export default function Offer() {
    return (
        <>
            <Header />
            <Main>
                <h1 className="mt-8 text-center text-4xl text-white sm:text-3xl">Договор-оферта на&nbsp;услуги Донцовой А.В.</h1>
                <ul className="flex flex-col gap-8">
                    {OFFER_LINKS.map((link, index) => (
                        <li key={index}>
                            <Link className="text-3xl text-[#FF11E7] underline lg:text-2xl sm:text-xl" href={link.href}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Main>
            <Footer />
        </>
    );
}
