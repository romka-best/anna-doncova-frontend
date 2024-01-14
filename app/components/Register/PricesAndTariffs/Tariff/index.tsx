import SilverStarIcon from 'public/icons/silver-star.svg';
import SilverGrayStarIcon from 'public/icons/silver-gray-star.svg';
import FingerprintIcon from 'public/icons/fingerprint.svg';

import Badge from 'ui/Badge';
import Button from 'ui/Button';

import { TariffInfo, TariffType } from '../hooks/usePricesAndTariffs';
import useTariff from 'components/Register/PricesAndTariffs/Tariff/hooks/useTariff';

interface TariffProps {
    type: TariffType;
    info: TariffInfo[TariffType];
    highPrice: {
        USD: number;
        RUB: number;
    };
    prices: {
        USD: number;
        RUB: number;
    };
    onButtonClick: (type: TariffType) => () => void;
}

export default function Tariff({ type, info, highPrice, prices, onButtonClick }: TariffProps) {
    const { advantages, disadvantages } = useTariff({ type });

    return (
        <div className="rounded-[2.5rem] bg-[#212121] p-12 sm:p-[1.6rem]">
            <Badge color={info.badge.color} className="mb-6">
                {info.badge.text}
            </Badge>
            <div className="flex flex-col gap-8 sm:gap-[1.6rem]">
                <h3 className="text-3xl font-semibold text-white">{type}</h3>
                <ul className="flex flex-col gap-[1.6rem]">
                    {advantages.map((advantage, index) => {
                        return (
                            <li key={index} className="flex gap-4">
                                <SilverStarIcon className="h-8 min-w-8" />
                                <p className="text-base font-normal text-white">{advantage}</p>
                            </li>
                        );
                    })}
                    {disadvantages.map((disadvantage, index) => {
                        return (
                            <li key={index} className="flex gap-4">
                                <SilverGrayStarIcon className="h-8 min-w-8" />
                                <p className="text-base font-normal text-[#9D9D9D] line-through">{disadvantage}</p>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex flex-col gap-4">
                    <p className="text-base font-bold text-white">{info.placesLeft}</p>
                    {highPrice.RUB === prices.RUB && highPrice.USD === prices.USD ? (
                        <>
                            <p className="text-base font-normal text-[#9D9D9D]">{'\u00A0'}</p>
                            <p className="text-3xl font-semibold text-white">
                                {Number(prices.RUB).toLocaleString('ru-RU')}₽&nbsp;/ ${Number(prices.USD).toLocaleString('en-US')}
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-base font-normal text-[#9D9D9D] line-through">
                                {Number(highPrice.RUB).toLocaleString('ru-RU')}₽&nbsp;/ ${Number(highPrice.USD).toLocaleString('en-US')}
                            </p>
                            <p className="text-3xl font-semibold text-white">
                                {Number(prices.RUB).toLocaleString('ru-RU')}₽&nbsp;/ ${Number(prices.USD).toLocaleString('en-US')}
                            </p>
                        </>
                    )}
                </div>
                <Button
                    color={info.button.color}
                    iconLeft={
                        <div className="relative h-[3.2rem] w-[3.2rem]">
                            {type === TariffType.Standard && <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />}
                            {type === TariffType.VIP && <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_gold absolute" />}
                            {type === TariffType.Platinum && <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_silver absolute" />}
                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                        </div>
                    }
                    type="button"
                    onClick={onButtonClick(type)}
                >
                    Приобрести
                </Button>
            </div>
        </div>
    );
}
