import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

interface ButtonCircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: ReactNode;
    onClick: () => void;
    children: ReactNode;
}

export default function ButtonCircle({ className, icon, onClick, children, ...rest }: ButtonCircleProps) {
    return (
        <button
            className={cn('flex h-80 w-80 cursor-pointer flex-col items-center justify-center gap-4 rounded-full sm:h-64 sm:w-64', className)}
            onClick={onClick}
            {...rest}
        >
            <p className="z-10 text-lg font-semibold uppercase text-white sm:text-xs">{children}</p>
            {icon}
        </button>
    );
}
