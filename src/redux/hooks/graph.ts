import { useAppSelector, useAppDispatch } from "./store";
import {
  setGraphRows,
  setGraphCols,
  setCellDimensions,
  ICellDimensions,
  setSizeBreakPoints,
  toggleSpeedVisual,
  setTailMiddleSize,
  setTimeRange
} from "../reducers/graph";

export function useGraphStore() {
  const graph = useAppSelector(store => store.graph);
  const dispatch = useAppDispatch();

  return {
    graph,
    ...graph,
    setGraphRows: (value: number) => dispatch(setGraphRows(value)),
    setGraphCols: (value: number) => dispatch(setGraphCols(value)),
    setTimeRange: (value: number) => dispatch(setTimeRange(value)),
    setCellDimensions: (value: ICellDimensions) => dispatch(setCellDimensions(value)),
    setSizeBreakPoints: (value: number[]) => dispatch(setSizeBreakPoints(value)),
    toggleSpeedVisual: () => dispatch(toggleSpeedVisual()),
    setTailMiddleSize: (value: number) => dispatch(setTailMiddleSize(value))
  };
}
