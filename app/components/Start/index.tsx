'use client';

import Lines from 'public/common/lines.svg';
import PinkEllipseLeft from 'public/common/pink-ellipse-start-left.svg';
import PinkEllipseRight from 'public/common/pink-ellipse-start-right.svg';
import PurpleEllipse from 'public/common/purple-ellipse-start.svg';
import SilverStarIcon from 'public/icons/silver-star.svg';
import FingerprintIcon from 'public/icons/fingerprint.svg';
import ButtonCircle from 'ui/ButtonCircle';
import { useGlobalWindowSize } from 'providers/WindowSizeProvider';
import scrollToForm from 'utils/scrollToForm';

export default function Start() {
    const size = useGlobalWindowSize();

    if (size.width < 640) {
        return (
            <div className="relative mt-10">
                <div className="flex flex-col gap-10">
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex w-max items-center gap-2 rounded-[2.5rem] border px-6 py-4">
                            <SilverStarIcon />
                            <p className="text-sm font-normal text-white">Контент сгенерирован&nbsp;ИИ</p>
                        </div>
                        <div className="flex w-max items-center rounded-[2.5rem] border px-6 py-4">
                            <p className="text-sm font-normal text-white">Эксперт Анна Донцова</p>
                        </div>
                    </div>
                    <h1 className="relative z-10">
                        <span className="text-5xl uppercase text-white">мастер-класс</span>
                        <br />
                        <span className="gradient-white-text text-4xl uppercase">нейросети</span>
                        <br />
                        <span className="gradient-pink-text text-3xl uppercase">в&nbsp;жизни и&nbsp;бизнесе</span>
                    </h1>
                    <ButtonCircle
                        className="button button_type_circle relative z-10 m-auto bg-gradient-pink hover:bg-gradient-pink-hover"
                        icon={
                            <div className="relative h-20 w-20">
                                <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_grey absolute" />
                                <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                            </div>
                        }
                        onClick={scrollToForm}
                    >
                        Записаться
                    </ButtonCircle>
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
                <div className="flex items-center justify-between">
                    <div>
                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="flex w-max items-center gap-2 rounded-[2.5rem] border px-6 py-4">
                                <SilverStarIcon />
                                <p className="text-sm font-normal text-white">Контент сгенерирован&nbsp;ИИ</p>
                            </div>
                            <div className="flex w-max items-center rounded-[2.5rem] border px-6 py-4">
                                <p className="text-sm font-normal text-white">Эксперт Анна Донцова</p>
                            </div>
                        </div>
                        <h1 className="relative z-10 mt-12">
                            <span className="text-5xl uppercase text-white">мастер-класс</span>
                            <br />
                            <span className="gradient-white-text text-4xl uppercase">нейросети</span>
                            <br />
                            <span className="gradient-pink-text text-3xl uppercase">в&nbsp;жизни и&nbsp;бизнесе</span>
                        </h1>
                    </div>
                    <div>
                        <ButtonCircle
                            className="button button_type_circle relative z-10 m-auto bg-gradient-pink hover:bg-gradient-pink-hover"
                            icon={
                                <div className="relative h-20 w-20">
                                    <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_grey absolute" />
                                    <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                                </div>
                            }
                            onClick={scrollToForm}
                        >
                            Записаться
                        </ButtonCircle>
                    </div>
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
                <span className="text-8xl uppercase text-white">мастер-класс</span>
                <br />
                <span className="gradient-white-text text-7xl uppercase">нейросети</span>
                <br />
                <span className="gradient-pink-text text-6xl uppercase">в&nbsp;жизни и&nbsp;бизнесе</span>
            </h1>
            <PinkEllipseLeft className="absolute left-[-14rem] top-[-12rem]" />
            <PurpleEllipse className="absolute right-64 top-[-14rem]" />
            <PinkEllipseRight className="absolute right-[-6rem] top-[-14rem]" />
            <div className="absolute left-[-6rem] top-0 w-screen overflow-x-hidden">
                <Lines className="translate-x-[-36rem]" />
            </div>
            <img className="absolute left-[-26rem] top-[-13rem] h-[58rem] w-[58rem]" src="/images/sphere.png" alt="Сфера" />
            <img className="absolute right-0 top-[-10rem] h-[58rem] w-[38rem]" src="/images/polotno.png" alt="Полотно" />
            <ButtonCircle
                className="button button_type_circle m-auto mt-4 bg-gradient-pink hover:bg-gradient-pink-hover"
                icon={
                    <div className="relative h-20 w-20">
                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_grey absolute" />
                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                    </div>
                }
                onClick={scrollToForm}
            >
                Записаться
            </ButtonCircle>
        </div>
    );
}
