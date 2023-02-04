import LegendSpeedTail from '@components/legend-speed-tail/LegendSpeedTail';
import { Spacer } from '@styles/shared/shared';
import { FC } from 'react';
import { LegendSpeedWrapper } from "./LegendSpeed.styles"

interface ILegendSpeed { }

const LegendSpeed: FC<ILegendSpeed> = () => {

    return (
        <LegendSpeedWrapper>
            <h4>
                Relative Speed
            </h4>
            <LegendSpeedTail />
            <Spacer size={0.5} />
        </LegendSpeedWrapper>
    )
}

export default LegendSpeed;
