import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getValue } from 'firebase/remote-config';

import rcDefaultsJson from 'remote_config_defaults.json';
import { remoteConfig } from 'services/firebase';
import { BadgeColor } from 'ui/Badge';
import { ButtonColor } from 'ui/Button';
import api from 'services/api';

export enum ModalStatus {
    Form = 'FORM',
    Success = 'SUCCESS',
}

export enum TariffType {
    Standard = 'STANDARD',
    VIP = 'VIP',
    Platinum = 'PLATINUM',
}

export enum PaymentMethod {
    YooKassa = 'ЮKassa (₽)',
    PayPal = 'PayPal ($)',
}

export enum PaymentType {
    Prepayment = 'PREPAYMENT',
    FullPayment = 'FULL_PAYMENT',
}

export type TariffInfo = {
    [key in TariffType]: {
        badge: {
            text: string;
            color: BadgeColor;
        };
        placesLeft: string;
        button: {
            color: ButtonColor;
        };
    };
};

export default function usePricesAndTariffs() {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalStatus, setModalStatus] = useState(ModalStatus.Form);
    const [tariffType, setTariffType] = useState(TariffType.Standard);
    const [redirectLink, setRedirectLink] = useState('');

    const [activities, setActivities] = useState<Array<string>>([]);
    const [paymentMethod, setPaymentMethod] = useState<Array<PaymentMethod>>([PaymentMethod.YooKassa]);
    const [isChecked, setIsChecked] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const {
        register,
        reset,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });
    const telegramValue = watch('telegram');

    const tariffInfo: TariffInfo = {
        [TariffType.Standard]: {
            badge: {
                text: '1\u00A0тариф',
                color: BadgeColor.GradientPink,
            },
            placesLeft: '\u00A0',
            button: {
                color: ButtonColor.GradientPink,
            },
        },
        [TariffType.VIP]: {
            badge: {
                text: '2\u00A0тариф',
                color: BadgeColor.GradientGold,
            },
            placesLeft: 'Количество мест: Ограниченно',
            button: {
                color: ButtonColor.GradientGold,
            },
        },
        [TariffType.Platinum]: {
            badge: {
                text: '3\u00A0тариф',
                color: BadgeColor.GradientSilver,
            },
            placesLeft: 'Мест всего: 10',
            button: {
                color: ButtonColor.GradientSilver,
            },
        },
    };
    const [standardHighPrice, setStandardHighPrice] = useState(rcDefaultsJson.standard_price_high);
    const [standardPrices, setStandardPrices] = useState(rcDefaultsJson.standard_prices_actual);

    const [vipHighPrice, setVipHighPrice] = useState(rcDefaultsJson.vip_price_high);
    const [vipPrices, setVipPrices] = useState(rcDefaultsJson.vip_prices_actual);

    const [platinumHighPrice, setPlatinumHighPrice] = useState(rcDefaultsJson.platinum_price_high);
    const [platinumPrices, setPlatinumPrices] = useState(rcDefaultsJson.platinum_prices_actual);

    const openModal = useCallback(
        (type: TariffType) => () => {
            setIsModalOpened(true);
            setTariffType(type);
        },
        [],
    );
    const closeModal = useCallback(() => {
        setIsModalOpened(false);
        setTariffType(TariffType.Standard);
        reset();
    }, [reset]);
    const onSubmit = useCallback(
        async (data: any) => {
            if (!isChecked) {
                setHasError(true);
                setErrorText('Необходимо принять условия соглашения');
                return;
            }

            const chosenPaymentMethod = paymentMethod[0] === PaymentMethod.PayPal ? 'PAYPAL' : 'YOOKASSA';
            const tariff = tariffType;
            const tariffPrices = tariffType === TariffType.VIP ? vipPrices : tariffType === TariffType.Platinum ? platinumPrices : standardPrices;
            const tariffPrice = paymentMethod[0] === PaymentMethod.PayPal ? tariffPrices.USD : tariffPrices.RUB;
            const prepaymentPrice = paymentMethod[0] === PaymentMethod.PayPal ? 30 : 3000;
            const price = data.payment_type === PaymentType.Prepayment ? prepaymentPrice : tariffPrice;
            const { telegram, ...otherData } = data;
            const payload = {
                ...otherData,
                ...(telegram ? { telegram } : {}),
                price,
                activity: activities[0],
                payment_method: chosenPaymentMethod,
                tariff,
            };

            setIsLoading(true);

            try {
                const response = await api.post('/register/', payload);

                if (response.status === 201) {
                    setModalStatus(ModalStatus.Success);
                    const redirectUrl =
                        paymentMethod[0] === PaymentMethod.PayPal ? `https://www.paypal.com/paypalme/AnnaDontcova/${price}` : response.data.confirmation_url;
                    setRedirectLink(redirectUrl);
                    location.href = redirectUrl;
                } else {
                    setHasError(true);
                    setErrorText('Произошла неизвестная ошибка');
                }
            } catch (error) {
                setHasError(true);
                setErrorText('Произошла неизвестная ошибка');
            } finally {
                setIsLoading(false);
            }
        },
        [activities, isChecked, paymentMethod, platinumPrices, standardPrices, tariffType, vipPrices],
    );

    useEffect(() => {
        setStandardHighPrice(JSON.parse(getValue(remoteConfig, 'standard_price_high').asString()));
        setStandardPrices(JSON.parse(getValue(remoteConfig, 'standard_prices_actual').asString()));

        setVipHighPrice(JSON.parse(getValue(remoteConfig, 'vip_price_high').asString()));
        setVipPrices(JSON.parse(getValue(remoteConfig, 'vip_prices_actual').asString()));

        setPlatinumHighPrice(JSON.parse(getValue(remoteConfig, 'platinum_price_high').asString()));
        setPlatinumPrices(JSON.parse(getValue(remoteConfig, 'platinum_prices_actual').asString()));
    }, []);
    useEffect(() => {
        if (telegramValue && !telegramValue.startsWith('@')) {
            setValue('telegram', `@${telegramValue}`, { shouldValidate: true });
        }
    }, [telegramValue, setValue]);

    return {
        isLoading,
        standardHighPrice,
        standardPrices,
        vipHighPrice,
        vipPrices,
        platinumHighPrice,
        platinumPrices,
        isModalOpened,
        modalStatus,
        openModal,
        closeModal,
        tariffType,
        redirectLink,
        tariffInfo,
        activities,
        setActivities,
        paymentMethod,
        setPaymentMethod,
        isChecked,
        setIsChecked,
        hasError,
        setHasError,
        errorText,
        setErrorText,
        register,
        setValue,
        handleSubmit,
        errors,
        onSubmit,
    };
}
