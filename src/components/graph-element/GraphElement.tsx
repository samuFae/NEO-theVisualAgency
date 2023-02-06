import Asteroid from "@components/asteroid/Asteroid";
import { useDataFactory } from "@hooks/dataFactory";
import { AsteroidData } from "@services/asteroids.endpoint";
import { useGraphStore } from "@store/hooks";
import { staticMobileBreakPoints } from "@styles/shared/shared";
import React, { FC, useCallback, useEffect, useState } from "react";
import { GraphElementWrapper } from "./GraphElement.styles";

interface IGraphElement {
  data: AsteroidData;
  isMobile?: boolean;
}

export interface IPositions {
  bottom: number;
  left: number;
}

const GraphElement: FC<IGraphElement> = ({ data, isMobile }) => {
  const [positions, setPositions] = useState<IPositions>({
    bottom: 0,
    left: 0
  });
  const [asteroidInnerSize, setAsteroidInnerSize] = useState<number>(0);
  const [asteroidOuterSize, setAsteroidOuterSize] = useState<number>(0);
  const { cellWidth, cellHeight, cellOffset, graphCols, graphRows, timeRange, sizeBreakPoints } = useGraphStore();
  const { maxDistance } = useDataFactory();

  const calculateDimensions = useCallback(
    (breakPoints: number[]) => {
      switch (true) {
        case data.diameterM.min < 100:
          setAsteroidInnerSize((data.diameterM.min / 100) * breakPoints[0]);
          break;
        case data.diameterM.min < 1000:
          /* takes diameter in meters and does a proportion based on the current scale, then adds the previous breakpoint proportionally less based on how big is the difference between the top of the next breakpoint and the meters size */
          setAsteroidInnerSize(
            (data.diameterM.min / 1000) * breakPoints[0] +
              ((data.diameterM.min - breakPoints[0]) / 1000) * breakPoints[1]
          );
          break;
        default:
          let comparePrevious = (data.diameterM.min / 10000) * breakPoints[1];
          setAsteroidInnerSize(
            comparePrevious > 1
              ? (1 / comparePrevious) * breakPoints[1]
              : (data.diameterM.min / 10000) * breakPoints[1] +
                  ((data.diameterM.min - breakPoints[1]) / 10000) * breakPoints[2]
          );
      }
      switch (true) {
        case data.diameterM.max < 100:
          setAsteroidOuterSize((data.diameterM.max / 100) * breakPoints[0]);
          break;
        case data.diameterM.max < 1000:
          setAsteroidOuterSize(
            (data.diameterM.max / 1000) * breakPoints[0] +
              ((data.diameterM.max - breakPoints[0]) / 1000) * breakPoints[1]
          );
          break;
        default:
          /* if the multiplicator for the previous breakpoint is higher than 1 it proportionally decrese its value */
          let comparePrevious = (data.diameterM.max / 10000) * breakPoints[1];
          setAsteroidOuterSize(
            comparePrevious > 1
              ? (1 / comparePrevious) * breakPoints[1]
              : (data.diameterM.max / 10000) * breakPoints[1] +
                  ((data.diameterM.max - breakPoints[1]) / 10000) * breakPoints[2]
          );
      }
    },
    [data.diameterM.max, data.diameterM.min]
  );

  useEffect(() => {
    if (isMobile) {
      calculateDimensions(staticMobileBreakPoints);
    } else {
      calculateDimensions(sizeBreakPoints);
    }
  }, [calculateDimensions, data.diameterM.max, data.diameterM.min, isMobile, sizeBreakPoints]);

  useEffect(() => {
    if (!isMobile) {
      if (!!cellWidth && !!cellHeight && !!cellOffset && !!maxDistance) {
        let bottom = cellHeight + (data.distanceKm / maxDistance) * cellHeight * (graphRows - 1);

        const approachDate = new Date(data.lastApproach);
        const approachHour = +approachDate.toISOString().split("T")[1].split(":")[0];
        const approachMinutes = +approachDate.toISOString().split("T")[1].split(":")[1];
        let left =
          cellOffset + ((approachHour + approachMinutes / 60 - (24 - timeRange)) / timeRange) * cellWidth * graphCols;
        if (approachHour + approachMinutes / 60 < 24 - timeRange) {
          left = -1;
        }
        setPositions({
          bottom: Math.round(bottom - asteroidOuterSize / 2),
          left: Math.round(left - asteroidOuterSize / 2)
        });
      }
    }
  }, [
    asteroidOuterSize,
    cellHeight,
    cellOffset,
    cellWidth,
    data.distanceKm,
    data.lastApproach,
    graphCols,
    graphRows,
    isMobile,
    maxDistance,
    timeRange
  ]);

  return (
    <React.Fragment>
      {((positions.bottom !== 0 && positions.left > -1) || isMobile) && (
        <GraphElementWrapper positions={positions}>
          <Asteroid
            data={data}
            isDangerous={data.isDangerous}
            innerSize={isMobile ? Math.round(asteroidInnerSize) : Math.round(asteroidInnerSize)}
            outerSize={isMobile ? Math.round(asteroidOuterSize) : Math.round(asteroidOuterSize)}
            isMobile={isMobile}
          />
        </GraphElementWrapper>
      )}
    </React.Fragment>
  );
};

export default GraphElement;
