import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import AbstractInput from 'ui/AbstractInput';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    hasError?: boolean;
    errorText?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({ className, hasError = false, errorText, onChange, ...props }, ref) => {
    const onChangeHandler = (value: string) => {
        const event = {
            target: {
                name: props.name,
                value,
            },
        } as ChangeEvent<HTMLInputElement>;

        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className={cn('relative flex flex-col gap-4', className)}>
            <label className="text-base text-white">Номер телефона</label>
            <PhoneInputWithCountrySelect
                // @ts-ignore
                ref={ref}
                className={'text-lg text-white'}
                inputComponent={AbstractInput as any}
                type="tel"
                placeholder="Введите номер телефона"
                hasError={hasError}
                onChange={onChangeHandler}
                {...props}
            />
            {hasError && errorText && <p className="mt-2 text-xs font-light text-[#FF005C]">{errorText}</p>}
        </div>
    );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
