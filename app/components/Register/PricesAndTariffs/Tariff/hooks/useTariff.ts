import { useMemo } from 'react';

import { TariffType } from 'components/Register/PricesAndTariffs/hooks/usePricesAndTariffs';

import { STANDARD_ADVANTAGES, STANDARD_DISADVANTAGES, VIP_ADVANTAGES, VIP_DISADVANTAGES, PLATINUM_ADVANTAGES, PLATINUM_DISADVANTAGES } from '../constants';

interface UseTariffProps {
    type: TariffType;
}

export default function useTariff({ type }: UseTariffProps) {
    const advantages = useMemo(() => {
        switch (type) {
            case TariffType.Platinum:
                return PLATINUM_ADVANTAGES;
            case TariffType.VIP:
                return VIP_ADVANTAGES;
            case TariffType.Standard:
            default:
                return STANDARD_ADVANTAGES;
        }
    }, [type]);
    const disadvantages = useMemo(() => {
        switch (type) {
            case TariffType.Platinum:
                return PLATINUM_DISADVANTAGES;
            case TariffType.VIP:
                return VIP_DISADVANTAGES;
            case TariffType.Standard:
            default:
                return STANDARD_DISADVANTAGES;
        }
    }, [type]);

    return {
        advantages,
        disadvantages,
    };
}
