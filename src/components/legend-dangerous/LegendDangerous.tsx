import Asteroid from "@components/asteroid/Asteroid";
import { useResize } from "@hooks/useResize";
import { breakPointSmall, DidaSmall, staticMobileBreakPoints } from "@styles/shared/shared";
import { FC } from "react";
import {
  LegendDangerousWrapper,
  ExampleAsteroidsWrapper,
  SafeAsteroid,
  DangerAsteroid
} from "./LegendDangerous.styles";

interface ILegendDangerous {}

const LegendDangerous: FC<ILegendDangerous> = () => {
  const { width } = useResize();

  return (
    <LegendDangerousWrapper>
      <h4>Is it dangerous?</h4>
      <ExampleAsteroidsWrapper>
        <SafeAsteroid>
          <Asteroid
            isDangerous={false}
            innerSize={width < breakPointSmall ? staticMobileBreakPoints[1] : undefined}
            outerSize={width < breakPointSmall ? staticMobileBreakPoints[2] : undefined}
            isLegend={true}
          />
          <DidaSmall>
            Asteroid is
            <br />
            not a treat
          </DidaSmall>
        </SafeAsteroid>
        <DangerAsteroid>
          <Asteroid
            isDangerous={true}
            innerSize={width < breakPointSmall ? staticMobileBreakPoints[1] : undefined}
            outerSize={width < breakPointSmall ? staticMobileBreakPoints[2] : undefined}
            isLegend={true}
          />
          <DidaSmall>
            Asteroid may
            <br />
            be dangerous
          </DidaSmall>
        </DangerAsteroid>
      </ExampleAsteroidsWrapper>
    </LegendDangerousWrapper>
  );
};

export default LegendDangerous;
