import SpeedTail from "@components/speed-tail/SpeedTail";
import { AsteroidData } from "@services/asteroids.endpoint";
import { useDatesStore } from "@store/hooks";
import { DidaSmall } from "@styles/shared/shared";
import { FC, useEffect, useState } from "react";
import {
  AsteroidWrapper,
  OuterRadius,
  InnerRadius,
  AsteroidCard,
  AsteroidCardContent,
  AsteroidTime,
  AsteroidDistance,
  CardUnit
} from "./Asteroid.styles";

interface IAsteroid {
  innerSize?: number;
  outerSize?: number;
  isDangerous: boolean;
  data?: AsteroidData;
  isMobile?: boolean;
  isLegend?: boolean;
}

const Asteroid: FC<IAsteroid> = ({ isDangerous, innerSize, outerSize, data, isMobile, isLegend }) => {
  const { displayDate } = useDatesStore();

  const [displayHour, setDisplayHour] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      let date = new Date(data.lastApproach);
      setDisplayHour(date.toISOString().split("T")[1].split(".")[0]);
    }
  }, [data]);

  const handleHover = () => {
    setVisible(prev => !prev);
  };

  return (
    <AsteroidWrapper onMouseOver={handleHover} onMouseOut={handleHover}>
      {!!data && (
        <AsteroidCard outerSize={outerSize} visible={isMobile ? true : visible} id={data?.id}>
          <AsteroidCardContent>
            <h3>{data?.name.replace(/([()])/g, "")}</h3>
            <AsteroidTime>
              <DidaSmall>TIME OF CLOSE CONTACT</DidaSmall>
              <CardUnit>
                <h4>{displayDate}</h4>
                <DidaSmall>{displayHour}</DidaSmall>
              </CardUnit>
            </AsteroidTime>
            <AsteroidDistance>
              <DidaSmall>DISTANCE</DidaSmall>
              <CardUnit>
                <h4>{data.distanceKm}</h4>
                <DidaSmall>Km</DidaSmall>
              </CardUnit>
            </AsteroidDistance>
          </AsteroidCardContent>
        </AsteroidCard>
      )}
      <OuterRadius
        isDangerous={isDangerous}
        outerSize={outerSize}
        visible={isMobile ? true : visible}
        isLegend={isLegend}
      >
        <InnerRadius innerSize={innerSize}>
          <SpeedTail speed={data?.speedKmH} outerSize={outerSize} innerSize={innerSize} />
        </InnerRadius>
      </OuterRadius>
    </AsteroidWrapper>
  );
};

export default Asteroid;
