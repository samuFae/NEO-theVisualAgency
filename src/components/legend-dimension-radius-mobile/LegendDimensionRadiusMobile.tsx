import { Circle, Circles, DidaSmall, numberOfCircleSizes } from '@styles/shared/shared';
import { FC } from 'react';
import { CircleFull, LegendDimensionsRadiusMobileWrapper, RadiusMobileDescription, RadiusMobileExample, ExampleCircle } from "./LegendDimensionRadiusMobile.styles"

interface ILegendDimensionRadiusMobile { }

const LegendDimensionRadiusMobile: FC<ILegendDimensionRadiusMobile> = () => {

    return (
        <LegendDimensionsRadiusMobileWrapper>
            <Circles align="center" justify="center">
                <Circle size={numberOfCircleSizes} />
                <CircleFull />
            </Circles>
            <RadiusMobileDescription>
                <RadiusMobileExample>
                    <ExampleCircle />
                    <DidaSmall>
                        Min Radius
                    </DidaSmall>
                </RadiusMobileExample>
                <RadiusMobileExample>
                    <ExampleCircle isWhite={true} />
                    <DidaSmall>
                        Max Radius
                    </DidaSmall>
                </RadiusMobileExample>
            </RadiusMobileDescription>
        </LegendDimensionsRadiusMobileWrapper>
    )
}

export default LegendDimensionRadiusMobile;
