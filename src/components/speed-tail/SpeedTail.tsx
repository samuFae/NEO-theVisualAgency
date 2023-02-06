import { useDataFactory } from "@hooks/dataFactory";
import { useGraphStore } from "@store/hooks";
import { Circle, legendTailColor, numberOfCircleSizes, numberOfTailCirclesL } from "@styles/shared/shared";
import { FC, useEffect, useState } from "react";
import { SpeedTailWrapper } from "./SpeedTail.styles";

interface ISpeedTail {
  speed?: number;
  innerSize?: number;
  outerSize?: number;
}

const SpeedTail: FC<ISpeedTail> = ({ speed, innerSize, outerSize }) => {
  const [speedSize, setSpeedSize] = useState<number>(0);
  const [numberOfCircles, setNumberOfCircles] = useState<number>(0);

  const { maxSpeed } = useDataFactory();

  const { speedVisual } = useGraphStore();

  useEffect(() => {
    if (speed) {
      setSpeedSize(Math.round(maxSpeed / speed));
      setNumberOfCircles(Math.ceil(numberOfTailCirclesL / (numberOfTailCirclesL - speedSize + 1)));
      console.log(speed, maxSpeed, speedSize, speedVisual);
    }
  }, [maxSpeed, speed, speedVisual]);

  return (
    <>
      {speedVisual && speedSize > 0 && (
        <SpeedTailWrapper>
          test
          {[...Array(numberOfCircles)].map((e, i) => (
            <Circle
              key={i}
              size={(i + 1) / (numberOfCircles / numberOfCircleSizes)}
              background={legendTailColor}
              border='0'
              opacity={(i + 1) / numberOfCircles}
              position='relative'
            />
          ))}
        </SpeedTailWrapper>
      )}
    </>
  );
};

export default SpeedTail;
