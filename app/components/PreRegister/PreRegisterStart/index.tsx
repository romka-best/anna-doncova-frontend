'use client';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import FingerprintIcon from 'public/icons/fingerprint.svg';
import { ACTIVITIES } from 'utils/constants';
import Input from 'ui/Input';
import Dropdown from 'ui/Dropdown';
import Checkbox from 'ui/Checkbox';
import Button from 'ui/Button';
import PhoneInput from 'ui/PhoneInput';
import api from 'services/api';

import Loading from '../../../loading';

interface PreRegisterStartProps {
    toNextPage: () => void;
}

export default function PreRegisterStart({ toNextPage }: PreRegisterStartProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [activities, setActivities] = useState<Array<string>>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const onSubmit = useCallback(
        async (data: any) => {
            if (!isChecked) {
                setHasError(true);
                setErrorText('Необходимо принять условия соглашения');
                return;
            }

            setIsLoading(true);

            try {
                const response = await api.post('/pre_register/', {
                    ...JSON.parse(JSON.stringify(data)),
                    activities,
                });

                if (response.status === 201) {
                    toNextPage();
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
        [activities, isChecked, toNextPage],
    );

    if (isLoading) {
        return (
            <div id="preRegisterForm" className="z-40 flex items-center justify-center rounded-[2.5rem] bg-[#212121] p-12 sm:p-[1.6rem]">
                <Loading isFullScreen={false} />
            </div>
        );
    }

    return (
        <div id="preRegisterForm" className="z-40 flex gap-12 rounded-[2.5rem] bg-[#212121] p-12 lg:flex-col sm:gap-[2.4rem] sm:p-[1.6rem]">
            <div className="flex flex-1 flex-col gap-8 sm:gap-[1.6rem]">
                <h2 className="gradient-white-text text-5xl sm:text-4xl">Предзапись</h2>
                <p className="text-3xl font-semibold text-white sm:text-xl sm:font-semibold">Получите самые выгодные условия участия!</p>
            </div>
            <form className="flex flex-1 flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
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
                        required: 'Никнейм в Telegram обязателен',
                        pattern: {
                            value: /^@[a-zA-Z0-9_]{4,31}$/,
                            message: 'Неверно указан никнейм в Telegram. Пример: @username',
                        },
                    })}
                />
                <Dropdown
                    isMultiply
                    labelText="Деятельность"
                    placeholderText="Выберите из списка"
                    items={ACTIVITIES}
                    selectedItems={activities}
                    onSelect={setActivities}
                />
                <Checkbox
                    className="mt-2"
                    checked={isChecked}
                    label={
                        <p className="text-sm text-[#9D9D9D]">
                            Вы&nbsp;подтверждаете согласие с&nbsp;условиями{' '}
                            <Link href="/offer" className="text-[#FF11E7] underline" target="_blank">
                                Политики конфиденциальности
                            </Link>{' '}
                            и&nbsp;офертой
                        </p>
                    }
                    onChange={(checked) => {
                        setIsChecked(checked);
                        setHasError(!checked);
                        setErrorText('Необходимо принять условия соглашения');
                    }}
                />
                {hasError && <p className="text-xs font-light text-[#FF005C]">{errorText}</p>}
                <Button
                    className="mt-2"
                    iconLeft={
                        <div className="relative h-[3.2rem] w-[3.2rem]">
                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_grey absolute" />
                            <FingerprintIcon className="fingerprint-icon fingerprint-icon_color_white absolute" />
                        </div>
                    }
                    type="submit"
                >
                    Записаться
                </Button>
            </form>
        </div>
    );
}
