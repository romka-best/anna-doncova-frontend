import { PropsWithChildren } from 'react';

interface AbstractOfferProps extends PropsWithChildren {
    title: string;
}

export default function AbstractOffer({ title, children }: AbstractOfferProps) {
    return (
        <>
            <h1 className="mt-8 text-center text-4xl text-white sm:text-3xl">{title}</h1>
            <div>
                <p className="text-base text-white">Редакция действительна с&nbsp;21.03.2022 года</p>
                <p className="text-base text-white">г. Москва, РФ</p>
                <p className="mt-24 text-base text-white">
                    Индивидуальный предприниматель Донцова Анна Владимировна (ИНН 026206137309), действующая от&nbsp;собственного имени, именуемая
                    в&nbsp;дальнейшем &ldquo;Исполнитель&rdquo;, настоящей публичной офертой предлагает любому дееспособному, совершеннолетнему физическому лицу
                    (далее&nbsp;&mdash; &ldquo;Заказчик&rdquo;), заключить Договор по&nbsp;оказанию услуг, указанных в&nbsp;п.&nbsp;3.1. настоящего Договора,
                    в&nbsp;соответствии с&nbsp;предметом и&nbsp;условиями, указанными ниже (далее&nbsp;&mdash; Договор).
                </p>
                <div className="mt-12 flex flex-col gap-12">{children}</div>
            </div>
        </>
    );
}
