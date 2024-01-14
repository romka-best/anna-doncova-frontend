import { ReactNode } from 'react';
import cn from 'classnames';

export enum BadgeColor {
    GradientPink = 'GRADIENT_PINK',
    GradientGold = 'GRADIENT_GOLD',
    GradientSilver = 'GRADIENT_SILVER',
}

interface BadgeProps {
    className?: string;
    color?: BadgeColor;
    children: ReactNode;
}

export default function Badge({ color = BadgeColor.GradientPink, className, children }: BadgeProps) {
    return (
        <div
            className={cn(
                'w-max rounded-[3.6rem] px-6 py-4 text-base font-medium text-white sm:text-xs',
                color === BadgeColor.GradientPink && 'bg-gradient-pink',
                color === BadgeColor.GradientGold && 'bg-gradient-gold',
                color === BadgeColor.GradientSilver && 'bg-gradient-silver',
                className,
            )}
        >
            {children}
        </div>
    );
}
