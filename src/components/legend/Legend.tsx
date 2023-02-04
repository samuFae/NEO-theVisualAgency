import LegendDangerous from '@components/legend-dangerous/LegendDangerous';
import LegendSpeed from '@components/legend-speed/LegendSpeed';
import LegendDimensions from '@components/legend-dimensions/LegendDimensions';
import { FC } from 'react';
import { LegendWrapper } from "./Legend.styles"

interface ILegend { }

const Legend: FC<ILegend> = () => {

    return (
        <LegendWrapper>
            <h2>
                Legend
            </h2>
            <LegendDimensions />
            <LegendSpeed />
            <LegendDangerous />
        </LegendWrapper>
    )
}

export default Legend;
