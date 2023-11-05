import { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface AbstractInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    hasError?: boolean;
}

const AbstractInput = forwardRef<HTMLInputElement, AbstractInputProps>(({ className, type = 'text', hasError = false, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(
                'border-b bg-transparent py-4 text-lg text-white outline-none hover:border-[#FF11E7] focus:border-[#FF11E7]',
                hasError ? 'border-[#FF005C]' : 'border-white',
                className,
            )}
            type={type}
            {...props}
        />
    );
});

AbstractInput.displayName = 'AbstractInput';

export default AbstractInput;
