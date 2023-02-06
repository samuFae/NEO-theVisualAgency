import LegendDangerous from '@components/legend-dangerous/LegendDangerous';
import LegendDimensions from '@components/legend-dimensions/LegendDimensions';
import { FC } from 'react';
import { LegendMobileWrapper } from "./LegendMobile.styles"

interface ILegendMobile { }

const LegendMobile: FC<ILegendMobile> = () => {

    return (
        <LegendMobileWrapper>
            <LegendDimensions />
            <LegendDangerous />
        </LegendMobileWrapper>
    )
}

export default LegendMobile;
