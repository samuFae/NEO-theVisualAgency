import { useResize } from "@hooks/useResize";
import { Circle, Circles, numberOfCircleSizes } from "@styles/shared/shared";
import { DidaSmall } from "@styles/shared/shared";
import { FC } from "react";
import { CircleFull, RadiusDescription, RadiusWrapper } from "./LegendDimensionRadius.styles";

interface ILegendDimensionRadius {}

const LegendDimensionRadius: FC<ILegendDimensionRadius> = () => {
  const { circleSizes, circleRef } = useResize();

  return (
    <RadiusWrapper circleSizes={circleSizes}>
      <Circles align='center' justify='center'>
        <Circle size={numberOfCircleSizes} ref={circleRef} />
        <CircleFull />
      </Circles>
      <RadiusDescription>
        <DidaSmall className='offset'>Min Radius</DidaSmall>
        <DidaSmall>Max Radius</DidaSmall>
      </RadiusDescription>
    </RadiusWrapper>
  );
};

export default LegendDimensionRadius;
