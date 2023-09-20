import { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import AbstractInput from 'ui/AbstractInput';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    labelText: string;
    hasError?: boolean;
    errorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, labelText, type = 'text', hasError = false, errorText, ...props }, ref) => {
    return (
        <div className={cn('relative flex flex-col gap-4', className)}>
            <label className="text-base text-white">{labelText}</label>
            <AbstractInput ref={ref} type={type} hasError={hasError} {...props} />
            {hasError && errorText && <p className="mt-2 text-xs font-light text-[#FF005C]">{errorText}</p>}
        </div>
    );
});

export default Input;
