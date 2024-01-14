import { PropsWithChildren, useMemo } from 'react';
import SilverStarIcon from 'public/icons/silver-star.svg';
import GoldStarIcon from 'public/icons/gold-star.svg';

export enum TargetBlockStarType {
    Silver = 'SILVER',
    Gold = 'GOLD',
}

interface TargetBlockProps extends PropsWithChildren {
    title: string;
    starType: TargetBlockStarType;
}

export default function TargetBlock({ title, children, starType }: TargetBlockProps) {
    const star = useMemo(() => {
        switch (starType) {
            case TargetBlockStarType.Gold:
                return <GoldStarIcon className="h-12 min-w-12" />;
            case TargetBlockStarType.Silver:
            default:
                return <SilverStarIcon className="h-12 min-w-12" />;
        }
    }, [starType]);
    return (
        <div className="flex flex-col gap-8 sm:gap-[1.6rem]">
            <div className="flex items-center gap-6">
                {star}
                <h3 className="text-3xl font-medium uppercase text-white">{title}</h3>
            </div>
            {children}
        </div>
    );
}
