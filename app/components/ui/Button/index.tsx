import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

enum ButtonColor {
    GradientPink = 'GRADIENT_PINK',
    GradientGold = 'GRADIENT_GOLD',
    GradientPlatinum = 'GRADIENT_PLATINUM',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    color?: ButtonColor;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    children: ReactNode;
}

export default function Button({ className, color = ButtonColor.GradientPink, iconLeft, iconRight, children, type = 'button', ...rest }: ButtonProps) {
    return (
        <button
            className={cn(
                'button flex cursor-pointer items-center justify-center gap-4 rounded-2xl py-4 text-lg font-semibold text-white lg:py-3',
                color === ButtonColor.GradientPink && 'bg-gradient-pink hover:bg-gradient-pink-hover',
                className,
            )}
            type={type}
            {...rest}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    );
}
