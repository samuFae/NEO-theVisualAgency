import { useGetNasaQuery } from '@services/asteroids.endpoint';
import { useDatesStore, useGraphStore } from '@store/hooks';
import { useCallback, useEffect, useState } from 'react';

export const useDataFactory = () => {
  const { graphRows } = useGraphStore();
  const { apiDate, resetDates } = useDatesStore();
  const { data: nasaData, isLoading } = useGetNasaQuery(apiDate);
  const [maxDistance, setMaxDistance] = useState<number>(0);
  const [breakPoints, setBreakPoints] = useState<string[]>([]);

  const getDistances = useCallback(() => {
    if (nasaData) {
      const maxDistanceString = Math.trunc(
        Math.max(...nasaData.map((asteroid) => +asteroid.distanceKm))
      ).toString()
        .split("")
        .fill("0", 1);

      let highRoundedNumber = +[+maxDistanceString[0] + 1, ...Array(maxDistanceString.length - 1).fill(0)].join("");
      setMaxDistance(highRoundedNumber);

      let breakPointsArray = Array(graphRows - 1).fill(0);

      breakPointsArray = breakPointsArray.map((e, i) => {
        let rawSection = highRoundedNumber / (graphRows - 1) * (i + 1);
        let stringNumber = Math.trunc(rawSection).toString();
        return +[stringNumber.slice(0, 2), ...Array(stringNumber.length - 2).fill(0)].join("");
      })
      setBreakPoints([0, ...breakPointsArray].reverse().map((e) => e + "Km"));
    }
  }, [graphRows, nasaData])

  useEffect(() => {
    resetDates();
  }, []);

  useEffect(() => {
    getDistances();
  }, [nasaData, graphRows]);

  return { nasaData, isLoading, maxDistance, breakPoints };
};
