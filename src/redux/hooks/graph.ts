import { useAppSelector, useAppDispatch } from "./store";
import { setGraphRows, setGraphCols, setCellDimensions, ICellDimensions, setSizeBreakPoints, toggleSpeedVisual } from "../reducers/graph";

export function useGraphStore() {
  const graph = useAppSelector((store) => store.graph);
  const dispatch = useAppDispatch();

  return {
    graph,
    ...graph,
    setGraphRows: (value: number) => dispatch(setGraphRows(value)),
    setGraphCols: (value: number) => dispatch(setGraphCols(value)),
    setCellDimensions: (value: ICellDimensions) => dispatch(setCellDimensions(value)),
    setSizeBreakPoints: (value: number[]) => dispatch(setSizeBreakPoints(value)),
    toggleSpeedVisual: () => dispatch(toggleSpeedVisual()),
  };
}
