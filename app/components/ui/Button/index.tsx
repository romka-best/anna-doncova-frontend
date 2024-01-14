import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

export enum ButtonColor {
    Transparent = 'TRANSPARENT',
    Secondary = 'SECONDARY',
    GradientPink = 'GRADIENT_PINK',
    GradientGold = 'GRADIENT_GOLD',
    GradientSilver = 'GRADIENT_SILVER',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    color?: ButtonColor;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    children?: ReactNode;
}

export default function Button({ className, color = ButtonColor.GradientPink, iconLeft, iconRight, children, type = 'button', ...rest }: ButtonProps) {
    return (
        <button
            className={cn(
                'button flex cursor-pointer items-center justify-center gap-4 rounded-2xl py-4 text-lg font-semibold uppercase text-white lg:py-3',
                color === ButtonColor.Transparent && 'bg-transparent hover:opacity-50',
                color === ButtonColor.Secondary && 'bg-[#212121] hover:opacity-50',
                color === ButtonColor.GradientPink && 'bg-gradient-pink hover:bg-gradient-pink-hover',
                color === ButtonColor.GradientGold && 'bg-gradient-gold hover:bg-gradient-gold-hover',
                color === ButtonColor.GradientSilver && 'bg-gradient-silver hover:bg-gradient-silver-hover',
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
