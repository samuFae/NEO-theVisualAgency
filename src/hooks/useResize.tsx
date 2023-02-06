import { useGraphStore } from "@store/hooks";
import { useEffect, useRef, useState } from "react";

export const useResize = () => {
  const { setTailMiddleSize, setCellDimensions, setSizeBreakPoints, sizeBreakPoints } = useGraphStore();
  const [width, setWidth] = useState<number>(0);
  const [circleSizes, setCircleSizes] = useState<number>(0);
  const cell = useRef<HTMLDivElement | null>(null);
  const offsetCell = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dimensionsRef = useRef<any>([]);
  const tailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      setWidth(Infinity);
      return;
    }

    const handleCellDimensions = (cellRect: DOMRect, offsetCellWidth) => {
      setCellDimensions({
        height: cellRect.height,
        width: cellRect.width,
        offset: offsetCellWidth
      });
    };

    const handleWindowResize = () => {
      /* set window width */
      setWidth(window.innerWidth);

      /* set asteroid dimensions scale */
      if (dimensionsRef.current.length > 0) {
        if (dimensionsRef.current[0].getBoundingClientRect().width !== sizeBreakPoints[0]) {
          setSizeBreakPoints(
            dimensionsRef.current.map(circle => {
              return circle.getBoundingClientRect().width;
            })
          );
        }
      }

      /* set sizes of radius legend circle to align label */
      if (circleRef.current) {
        setCircleSizes(circleRef.current!.clientWidth);
      }

      /* set the dimensions of the cells in the storage */
      if (cell.current && offsetCell.current) {
        handleCellDimensions(cell.current.getBoundingClientRect(), offsetCell.current.getBoundingClientRect().width);
      }

      /* set tail size */
      if (tailRef.current) {
        setTailMiddleSize(tailRef.current!.clientWidth);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setCellDimensions, setSizeBreakPoints, setTailMiddleSize, sizeBreakPoints]);

  return { width, cell, offsetCell, circleRef, circleSizes, dimensionsRef, tailRef };
};
