'use client';
import { useMemo } from 'react';
import cn from 'classnames';

import Lines from 'public/common/lines.svg';
import PinkEllipseLeft from 'public/common/pink-ellipse-start-left.svg';
import PinkEllipseRight from 'public/common/pink-ellipse-start-right.svg';
import PurpleEllipse from 'public/common/purple-ellipse-start.svg';
import SilverStarIcon from 'public/icons/silver-star.svg';
import FingerprintIcon from 'public/icons/fingerprint.svg';

import ButtonCircle from 'ui/ButtonCircle';
import { useGlobalWindowSize } from 'providers/WindowSizeProvider';
import scrollToForm from 'utils/scrollToForm';

interface StartProps {
    isPreRegister: boolean;
}

export default function Start({ isPreRegister }: StartProps) {
    const size = useGlobalWindowSize();
    const firstText = useMemo(() => {
        return isPreRegister ? 'мастер-класс' : 'курс';
    }, [isPreRegister]);
    const secondText = 'нейросети';
    const thirdText = 'в\u00A0жизни и\u00A0бизнесе';

    if (size.width < 640) {
        return (
            <div className="relative mt-10">
                <div className="flex flex-col gap-10">
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex w-max items-center gap-2 rounded-[2.5rem] border px-6 py-4">
                            <SilverStarIcon className="h-[1.6rem] min-w-[1.6rem]" />
                            <p className="text-sm font-normal text-white">Контент сгенерирован&nbsp;ИИ</p>
                        </div>
                        <div className="flex w-max items-center rounded-[2.5rem] border px-6 py-4">
                            <p className="text-sm font-normal text-white">Эксперт Анна Донцова</p>
                        </div>
                    </div>
                    <h1 className="relative z-10">
                        <span className="text-5xl uppercase text-white">{firstText}</span>
                        <br />
                        <span className="gradient-white-text text-4xl uppercase">{secondText}</span>
                        <br />
                        <span className="gradient-pink-text text-3xl uppercase">{thirdText}</span>
                    </h1>
                    <div className={cn('z-40 flex-wrap justify-between', !isPreRegister && 'flex gap-[1.6rem]')}>
                        <ButtonCircle
                            className={cn('button button_type_circle relative z-10 bg-gradient-pink hover:bg-gradient-pink-hover', isPreRegister && 'm-auto')}
                            icon={
                                <div className="relative h-20 w-20">
                                    <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />
                                    <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                                </div>
                            }
                            onClick={scrollToForm}
                        >
                            Записаться
                        </ButtonCircle>
                        {!isPreRegister && (
                            <div className="flex flex-col justify-end gap-[1.6rem]">
                                <div className="flex flex-col gap-3.5">
                                    <h2 className="text-xs font-normal text-[#989898]">Старт ближайшего потока</h2>
                                    <p className="text-3xl font-normal text-white">1&nbsp;февраля</p>
                                </div>
                                <div className="flex flex-col gap-3.5">
                                    <h2 className="text-base font-normal text-[#989898]">Продолжительность</h2>
                                    <p className="text-3xl font-normal text-white">14&nbsp;дней</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="absolute left-[-2.4rem] top-[-12rem] w-screen overflow-x-hidden">
                    <PinkEllipseLeft className="h-[69rem] w-[93rem] translate-x-[-24rem]" />
                </div>
                <div className="absolute left-[-2.4rem] top-[-7.2rem] w-screen overflow-x-hidden">
                    <Lines className="translate-x-[-90rem]" />
                </div>
            </div>
        );
    } else if (size.width < 1024) {
        return (
            <div className="relative mt-8">
                <div className={cn('flex justify-between', !isPreRegister && 'items-start', isPreRegister && 'items-center')}>
                    <div>
                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="flex w-max items-center gap-2 rounded-[2.5rem] border px-6 py-4">
                                <SilverStarIcon className="h-[1.6rem] min-w-[1.6rem]" />
                                <p className="text-sm font-normal text-white">Контент сгенерирован&nbsp;ИИ</p>
                            </div>
                            <div className="flex w-max items-center rounded-[2.5rem] border px-6 py-4">
                                <p className="text-sm font-normal text-white">Эксперт Анна Донцова</p>
                            </div>
                        </div>
                        <h1 className="relative z-10 mt-12">
                            <span className="text-5xl uppercase text-white">{firstText}</span>
                            <br />
                            <span className="gradient-white-text text-4xl uppercase">{secondText}</span>
                            <br />
                            <span className="gradient-pink-text text-3xl uppercase">{thirdText}</span>
                        </h1>
                        {!isPreRegister && (
                            <ButtonCircle
                                className="button button_type_circle relative z-10 mt-12 bg-gradient-pink hover:bg-gradient-pink-hover"
                                icon={
                                    <div className="relative h-20 w-20">
                                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />
                                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                                    </div>
                                }
                                onClick={scrollToForm}
                            >
                                Записаться
                            </ButtonCircle>
                        )}
                    </div>
                    {isPreRegister && (
                        <div>
                            <ButtonCircle
                                className="button button_type_circle relative z-10 ml-auto bg-gradient-pink hover:bg-gradient-pink-hover"
                                icon={
                                    <div className="relative h-20 w-20">
                                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />
                                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                                    </div>
                                }
                                onClick={scrollToForm}
                            >
                                Записаться
                            </ButtonCircle>
                        </div>
                    )}
                    {!isPreRegister && (
                        <div className="relative z-40 mt-12 flex flex-wrap justify-end gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base font-normal text-[#989898]">Старт ближайшего потока</h2>
                                <p className="text-4xl font-normal text-white">1&nbsp;февраля</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base font-normal text-[#989898]">Продолжительность</h2>
                                <p className="text-4xl font-normal text-white">14&nbsp;дней</p>
                            </div>
                        </div>
                    )}
                </div>
                <PinkEllipseLeft className="absolute left-[-10rem] top-64 h-[36.9rem] w-[49.8rem]" />
                <PurpleEllipse className="absolute right-[24rem] top-[-8rem] h-[38.3rem] w-[38.3rem]" />
                <PinkEllipseRight className="absolute right-[-4rem] top-[-8rem] h-[43.8rem] w-[43.8rem]" />
                <div className="absolute right-[-4rem] top-[-7.2rem] w-screen overflow-x-hidden">
                    <Lines className="translate-x-[-80rem]" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative mt-24">
            <h1 className="relative z-10">
                <span className="text-8xl uppercase text-white">{firstText}</span>
                <br />
                <span className="gradient-white-text text-7xl uppercase">{secondText}</span>
                <br />
                <span className="gradient-pink-text text-6xl uppercase">{thirdText}</span>
            </h1>
            {!isPreRegister && (
                <div className="absolute left-[45rem] top-12 z-10 flex flex-col gap-6">
                    <div className="flex w-max items-center gap-2 rounded-[2.5rem] border px-6 py-4">
                        <SilverStarIcon className="h-[1.6rem] min-w-[1.6rem]" />
                        <p className="text-lg font-normal text-white">Контент сгенерирован&nbsp;ИИ</p>
                    </div>
                    <div className="flex w-max items-center rounded-[2.5rem] border px-6 py-4">
                        <p className="text-lg font-normal text-white">Эксперт Анна Донцова</p>
                    </div>
                </div>
            )}
            <PinkEllipseLeft className="absolute left-[-14rem] top-[-12rem]" />
            <PurpleEllipse className="absolute right-64 top-[-14rem]" />
            <PinkEllipseRight className="absolute right-[-6rem] top-[-14rem]" />
            <div className="absolute left-[-6rem] top-0 w-screen overflow-x-hidden">
                <Lines className="translate-x-[-36rem]" />
            </div>
            <img className="absolute left-[-26rem] top-[-13rem] h-[58rem] w-[58rem]" src="/images/sphere.png" alt="Сфера" />
            <img className="absolute right-0 top-[-10rem] h-[58rem] w-[38rem]" src="/images/polotno.png" alt="Полотно" />
            <div className="flex flex-row items-end">
                {!isPreRegister && (
                    <div className="relative z-40 flex gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-base font-normal text-[#989898]">Старт ближайшего потока</h2>
                            <p className="text-4xl font-normal text-white">1&nbsp;февраля</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-base font-normal text-[#989898]">Продолжительность</h2>
                            <p className="text-4xl font-normal text-white">14&nbsp;дней</p>
                        </div>
                    </div>
                )}
                <ButtonCircle
                    className="button button_type_circle mx-auto mt-4 bg-gradient-pink hover:bg-gradient-pink-hover"
                    icon={
                        <div className="relative h-20 w-20">
                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />
                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                        </div>
                    }
                    onClick={scrollToForm}
                >
                    Записаться
                </ButtonCircle>
            </div>
        </div>
    );
}
