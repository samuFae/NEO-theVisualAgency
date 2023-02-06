import { useResize } from "@hooks/useResize";
import { Circle, Circles, numberOfCircleSizes } from "@styles/shared/shared";
import { DidaSmall } from "@styles/shared/shared";
import { FC } from "react";
import { SizesDescription, SizeWrapper } from "./LegendDimensionSize.styles";

interface ILegendDimensionSize {}

const LegendDimensionSize: FC<ILegendDimensionSize> = () => {
  const { dimensionsRef } = useResize();

  return (
    <SizeWrapper>
      <Circles align='flex-end' justify='center'>
        {[...Array(numberOfCircleSizes)].map((el, i) => (
          <Circle key={i} size={i + 1} ref={circle => (dimensionsRef.current[i] = circle)} />
        ))}
      </Circles>
      <SizesDescription>
        <DidaSmall>10.000m</DidaSmall>
        <DidaSmall>1.000m</DidaSmall>
        <DidaSmall>100m</DidaSmall>
      </SizesDescription>
    </SizeWrapper>
  );
};

export default LegendDimensionSize;
