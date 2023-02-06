import { useDataFactory } from "@hooks/dataFactory";
import { useResize } from "@hooks/useResize";
import { Circle, DidaSmall, legendTailColor, numberOfCircleSizes, numberOfTailCirclesL } from "@styles/shared/shared";
import { FC } from "react";
import { LegendSpeedTailWrapper, SpeedValue, TailWrapper } from "./LegendSpeedTail.styles";

interface ILegendSpeedTail {}

const LegendSpeedTail: FC<ILegendSpeedTail> = () => {
  const { maxSpeed } = useDataFactory();
  const { tailRef } = useResize();

  return (
    <LegendSpeedTailWrapper>
      <TailWrapper ref={tailRef}>
        {[...Array(numberOfTailCirclesL)].map((e, i) => (
          <Circle
            key={i}
            size={(i + 1) / (numberOfTailCirclesL / numberOfCircleSizes)}
            background={legendTailColor}
            border='0'
            opacity={(i + 1) / numberOfTailCirclesL}
            position='relative'
          />
        ))}
        <SpeedValue>
          <DidaSmall>{!!maxSpeed && maxSpeed} km/h</DidaSmall>
        </SpeedValue>
      </TailWrapper>
    </LegendSpeedTailWrapper>
  );
};

export default LegendSpeedTail;
