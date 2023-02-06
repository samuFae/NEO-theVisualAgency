import Toggler from "@components/toggler/Toggler";
import { useGraphStore } from "@store/hooks";
import { Body } from "@styles/shared/shared";
import { FC } from "react";
import { SpeedToggleWrapper, SpeedWrapper } from "./Speed.styles";

interface ISpeed {}

const Speed: FC<ISpeed> = () => {
  const { speedVisual, toggleSpeedVisual } = useGraphStore();

  return (
    <SpeedWrapper>
      <h2>Speed</h2>
      <Body>
        Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e
        tipografi a modo riempitivo per bozzetti e prove grafiche.
      </Body>
      <SpeedToggleWrapper>
        <Toggler onChange={() => toggleSpeedVisual()} checked={speedVisual}>
          <h3>Activate speed visual</h3>
        </Toggler>
      </SpeedToggleWrapper>
    </SpeedWrapper>
  );
};

export default Speed;
