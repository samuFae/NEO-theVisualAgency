import LegendDimensionRadius from '@components/legend-dimension-radius/LegendDimensionRadius';
import LegendDimensionSize from '@components/legend-dimension-size/LegendDimensionSize';
import { Spacer } from '@styles/shared/shared';
import { FC } from 'react';
import { LegendDimensionsWrapper, DimensionsContainer } from "./LegendDimensions.styles"

interface ILegendDimensions { }

const LegendDimensions: FC<ILegendDimensions> = () => {

    return (
        <LegendDimensionsWrapper>
            <h4>
                How big is it?
            </h4>
            <Spacer size={0.5} />
            <DimensionsContainer>
                <LegendDimensionSize />
                <LegendDimensionRadius />
            </DimensionsContainer>
            <Spacer size={0.8} />
        </LegendDimensionsWrapper>
    )
}

export default LegendDimensions;
