import { useGraphStore } from '@store/hooks';
import { useEffect, useRef, useState } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState<number>(Infinity);
  const cell = useRef<HTMLDivElement | null>(null);
  const offsetCell = useRef<HTMLDivElement | null>(null);
  const { setCellDimensions, setSizeBreakPoints, sizeBreakPoints } = useGraphStore();
  const [circleSizes, setCircleSizes] = useState<number>(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dimensionsRef = useRef<any>([])

  const handleCellDimensions = (cellRect: DOMRect, offsetCellWidth) => {
    setCellDimensions({
      height: cellRect.height,
      width: cellRect.width,
      offset: offsetCellWidth
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleWindowResize = () => {
      /* set window width */
      setWidth(window.innerWidth);

      /* set asteroid dimensions scale */
      if (dimensionsRef.current.length > 0) {
        if (dimensionsRef.current[0].getBoundingClientRect().width !== sizeBreakPoints[0]) {
          setSizeBreakPoints(dimensionsRef.current.map((circle) => {
            return circle.getBoundingClientRect().width;
          }))
        }

      }

      /* set sizes of radius legend circle to align label */
      if (circleRef.current) {
        setCircleSizes(circleRef.current!.clientWidth);
      }

      /* set the dimensions of the cells in the storage */
      if (cell.current && offsetCell.current) {
        handleCellDimensions(
          cell.current.getBoundingClientRect(),
          offsetCell.current.getBoundingClientRect().width
        );
      }
    }
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, cell, offsetCell, circleRef, circleSizes, dimensionsRef };
};
