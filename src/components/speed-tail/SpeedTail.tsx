import { useDataFactory } from "@hooks/dataFactory";
import { useGraphStore } from "@store/hooks";
import { Circle, legendTailColor, numberOfTailCirclesL, speedSizes } from "@styles/shared/shared";
import { FC, useCallback, useEffect, useState } from "react";
import { SpeedTailWrapper } from "./SpeedTail.styles";

interface ISpeedTail {
  speed?: number;
  innerSize?: number;
  outerSize?: number;
}

const SpeedTail: FC<ISpeedTail> = ({ speed, innerSize, outerSize }) => {
  const [speedSize, setSpeedSize] = useState<number>(0);
  const [numberOfCircles, setNumberOfCircles] = useState<number>(0);
  const [tailSize, setTailSize] = useState<number>(0);

  const { maxSpeed } = useDataFactory();

  const { speedVisual, tailMiddleSize } = useGraphStore();

  const standardTailSize = useCallback(
    (i: number) => {
      return 40 + (i + 1) * (70 / numberOfCircles);
    },
    [numberOfCircles]
  );

  useEffect(() => {
    if (speed && innerSize && outerSize) {
      for (let i = 0; i < speedSizes; i++) {
        if (speed / maxSpeed < (1 / speedSizes) * (i + 1)) {
          setSpeedSize(i + 1);
          break;
        }
      }
      setNumberOfCircles(Math.ceil(numberOfTailCirclesL / (speedSizes - speedSize + 1)) * 2);
      setTailSize(Math.min(innerSize, outerSize));
    }
  }, [innerSize, maxSpeed, outerSize, speed, speedSize, speedVisual, tailMiddleSize]);

  return (
    <>
      {speedVisual && speedSize > 0 && outerSize && (
        <SpeedTailWrapper tailSize={tailSize}>
          {[...Array(numberOfCircles)].map((e, i) => (
            <Circle
              key={i}
              size={standardTailSize(i)}
              background={legendTailColor}
              border='0'
              opacity={(i + 1) / numberOfCircles}
              position='absolute'
              right={
                -tailSize / 2 -
                outerSize / 2 -
                ((((i + 1) / numberOfCircles - 1) * tailMiddleSize) / 2) * speedSize +
                "px"
              }
              isNotLegend={true}
            />
          ))}
        </SpeedTailWrapper>
      )}
    </>
  );
};

export default SpeedTail;
