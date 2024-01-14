'use client';
import { useMemo } from 'react';
import Link from 'next/link';

import FingerprintIcon from 'public/icons/fingerprint.svg';
import Tariff from 'components/Register/PricesAndTariffs/Tariff';
import usePricesAndTariffs, { ModalStatus, PaymentMethod, PaymentType, TariffType } from 'components/Register/PricesAndTariffs/hooks/usePricesAndTariffs';
import Modal from 'ui/Modal';
import Badge from 'ui/Badge';
import Input from 'ui/Input';
import PhoneInput from 'ui/PhoneInput';
import Dropdown from 'ui/Dropdown';
import Checkbox from 'ui/Checkbox';
import Button, { ButtonColor } from 'ui/Button';
import { ACTIVITIES } from 'utils/constants';
import Loading from '../../../loading';

export default function PricesAndTariffs() {
    const {
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
    } = usePricesAndTariffs();

    const modal = useMemo(() => {
        if (isLoading) {
            return (
                <Modal className="relative p-96 sm:p-[12rem]" isOpen={isModalOpened} showCloseButton={false} onClose={closeModal}>
                    <Loading className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" isFullScreen={false} />
                </Modal>
            );
        } else if (modalStatus === ModalStatus.Success) {
            return (
                <Modal className="pb-[7.4rem]" isOpen={isModalOpened} onClose={closeModal}>
                    <h2 className="gradient-white-text text-center text-5xl sm:text-4xl">Вы&nbsp;успешно записались!</h2>
                    <p className="text-center text-3xl font-semibold text-white sm:text-xl sm:font-semibold">
                        Вас должны были перенаправить на&nbsp;страницу оплаты. Если этого не&nbsp;произошло, перейдите, пожалуйста, вручную по&nbsp;
                        <Link className="text-[#FF11E7] underline" href={redirectLink}>
                            ссылке
                        </Link>
                    </p>
                </Modal>
            );
        } else {
            const highPrice = tariffType === TariffType.VIP ? vipHighPrice : tariffType === TariffType.Platinum ? platinumHighPrice : standardHighPrice;
            const prices = tariffType === TariffType.VIP ? vipPrices : tariffType === TariffType.Platinum ? platinumPrices : standardPrices;

            return (
                <Modal isOpen={isModalOpened} onClose={closeModal} title={`Приобрести курс тариф \u201C${tariffType}\u201D`}>
                    <Badge color={tariffInfo[tariffType].badge.color} className="mt-6 sm:mt-[1.6rem]">
                        {tariffInfo[tariffType].badge.text}
                    </Badge>
                    <form className="mt-12 flex flex-col gap-10 sm:mt-[2.4rem] sm:gap-[2.4rem]" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            labelText="Имя"
                            placeholder="Введите имя"
                            hasError={Boolean(errors.name)}
                            errorText={String(errors.name?.message)}
                            {...register('name', {
                                required: 'Имя обязательно',
                                minLength: { value: 2, message: 'Имя должно содержать минимум 2 символа' },
                                maxLength: { value: 50, message: 'Имя должно быть не больше 50 символов' },
                            })}
                        />
                        <PhoneInput
                            hasError={Boolean(errors.phone)}
                            errorText={String(errors.phone?.message)}
                            {...register('phone', {
                                required: 'Номер телефона обязателен',
                            })}
                        />
                        <Input
                            labelText="Почта"
                            placeholder="Введите Email"
                            type="email"
                            hasError={Boolean(errors.email)}
                            errorText={String(errors.email?.message)}
                            {...register('email', {
                                required: 'Почта обязательна',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Неверный адрес электронной почты',
                                },
                            })}
                        />
                        <Input
                            labelText="Никнейм в Telegram"
                            placeholder="@username"
                            type="text"
                            hasError={Boolean(errors.telegram)}
                            errorText={String(errors.telegram?.message)}
                            {...register('telegram', {
                                pattern: {
                                    value: /^@[a-zA-Z0-9_]{5,32}$/,
                                    message: 'Неверно указан никнейм в Telegram. Пример: @username',
                                },
                            })}
                        />
                        <Dropdown
                            isMultiply={false}
                            labelText="Деятельность"
                            placeholderText="Выберите из списка"
                            items={ACTIVITIES}
                            selectedItems={activities}
                            onSelect={setActivities}
                        />
                        <Dropdown
                            isMultiply={false}
                            labelText="Способ оплаты"
                            placeholderText="Выберите из списка"
                            items={Object.values(PaymentMethod)}
                            selectedItems={paymentMethod}
                            onSelect={setPaymentMethod}
                        />
                        <Checkbox
                            className="mt-2 sm:mt-0"
                            checked={isChecked}
                            label={
                                <p className="text-sm text-[#9D9D9D]">
                                    Вы&nbsp;подтверждаете согласие с&nbsp;условиями{' '}
                                    <Link href="/privacy" className="text-[#FF11E7] underline" target="_blank">
                                        политики конфиденциальности
                                    </Link>{' '}
                                    и&nbsp;
                                    <Link href="/offer" className="text-[#FF11E7] underline" target="_blank">
                                        офертой
                                    </Link>
                                </p>
                            }
                            onChange={(checked) => {
                                setIsChecked(checked);
                                setHasError(!checked);
                                setErrorText('Необходимо принять условия соглашения');
                            }}
                        />
                        <div className="flex flex-col gap-4">
                            <p className="text-base font-bold text-white">{tariffInfo[tariffType].placesLeft}</p>
                            {highPrice.RUB === prices.RUB && highPrice.USD === prices.USD ? (
                                <p className="text-3xl font-semibold text-white">
                                    {paymentMethod[0] === PaymentMethod.PayPal
                                        ? `$${Number(prices.USD).toLocaleString('en-US')}`
                                        : `${Number(prices.RUB).toLocaleString('ru-RU')}₽`}
                                </p>
                            ) : (
                                <>
                                    {paymentMethod[0] === PaymentMethod.PayPal ? (
                                        <>
                                            <p className="text-base font-normal text-[#9D9D9D] line-through">
                                                ${Number(highPrice.USD).toLocaleString('en-US')}
                                            </p>
                                            <p className="text-3xl font-semibold text-white">${Number(prices.USD).toLocaleString('en-US')}</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-base font-normal text-[#9D9D9D] line-through">
                                                {Number(highPrice.RUB).toLocaleString('ru-RU')}₽
                                            </p>
                                            <p className="text-3xl font-semibold text-white">{Number(prices.RUB).toLocaleString('ru-RU')}₽</p>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        {hasError && <p className="text-xs font-light text-[#FF005C]">{errorText}</p>}
                        <div className="sticky bottom-0 mt-2 flex gap-12 sm:mt-0 sm:flex-col-reverse">
                            <input type="hidden" {...register('payment_type')} />
                            <Button
                                className="h-20 px-6 py-4"
                                color={ButtonColor.Secondary}
                                type="submit"
                                onClick={() => setValue('payment_type', PaymentType.Prepayment)}
                            >
                                Предоплата
                            </Button>
                            <Button
                                className="w-full"
                                color={tariffInfo[tariffType].button.color}
                                iconLeft={
                                    <div className="relative h-[3.2rem] w-[3.2rem]">
                                        {tariffType === TariffType.Standard && (
                                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_pink absolute" />
                                        )}
                                        {tariffType === TariffType.VIP && <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_gold absolute" />}
                                        {tariffType === TariffType.Platinum && (
                                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_silver absolute" />
                                        )}
                                        <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                                    </div>
                                }
                                type="submit"
                                onClick={() => setValue('payment_type', PaymentType.FullPayment)}
                            >
                                Перейти к&nbsp;оплате
                            </Button>
                        </div>
                    </form>
                </Modal>
            );
        }
    }, [
        activities,
        closeModal,
        errorText,
        errors.email,
        errors.name,
        errors.phone,
        errors.telegram,
        handleSubmit,
        hasError,
        isChecked,
        isLoading,
        isModalOpened,
        modalStatus,
        onSubmit,
        paymentMethod,
        platinumHighPrice,
        platinumPrices,
        redirectLink,
        register,
        setActivities,
        setErrorText,
        setHasError,
        setIsChecked,
        setPaymentMethod,
        setValue,
        standardHighPrice,
        standardPrices,
        tariffInfo,
        tariffType,
        vipHighPrice,
        vipPrices,
    ]);

    return (
        <>
            <section id="form" className="z-40 flex flex-col gap-16">
                <h2 className="gradient-white-text text-5xl sm:text-4xl">Цены и&nbsp;тарифы</h2>
                <ul className="grid grid-cols-3 gap-12 xl:flex xl:flex-col sm:gap-[1.6rem]">
                    <li>
                        <Tariff
                            type={TariffType.Standard}
                            info={tariffInfo[TariffType.Standard]}
                            highPrice={standardHighPrice}
                            prices={standardPrices}
                            onButtonClick={openModal}
                        />
                    </li>
                    <li>
                        <Tariff type={TariffType.VIP} info={tariffInfo[TariffType.VIP]} highPrice={vipHighPrice} prices={vipPrices} onButtonClick={openModal} />
                    </li>
                    <li>
                        <Tariff
                            type={TariffType.Platinum}
                            info={tariffInfo[TariffType.Platinum]}
                            highPrice={platinumHighPrice}
                            prices={platinumPrices}
                            onButtonClick={openModal}
                        />
                    </li>
                </ul>
            </section>
            {modal}
        </>
    );
}
