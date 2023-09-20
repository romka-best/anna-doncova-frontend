import { ChangeEvent, ReactNode, useCallback } from 'react';
import cn from 'classnames';

import CheckIcon from 'public/icons/check.svg';

interface CheckboxProps {
    className?: string;
    checked: boolean;
    label: ReactNode;
    onChange: (checked: boolean) => void;
}

export default function Checkbox({ className, checked, label, onChange }: CheckboxProps) {
    const change = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.checked);
        },
        [onChange],
    );

    return (
        <label className={cn('flex cursor-pointer gap-4', className)}>
            <input className="hidden" type="checkbox" checked={checked} onChange={change} />
            <div className={cn('flex h-[2rem] min-w-[2rem] items-center justify-center rounded-lg', checked ? 'bg-gradient-pink' : 'border border-white')}>
                {checked && <CheckIcon />}
            </div>
            {label}
        </label>
    );
}
