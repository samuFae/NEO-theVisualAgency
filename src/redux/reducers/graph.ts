import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IGraph {
  graphRows: number;
  graphCols: number;
  visibleGraphRows: number;
  visibleGraphCols: number;
  graphCells: number;
  visibleGraphCells: number;
  cellWidth: number;
  cellHeight: number;
  cellOffset: number;
  timeRange: number;
  sizeBreakPoints: number[];
  speedVisual: boolean;
  tailMiddleSize: number;
}

const initialState: IGraph = {
  graphRows: 4,
  graphCols: 7,
  visibleGraphRows: 5,
  visibleGraphCols: 9,
  graphCells: 32,
  visibleGraphCells: 45,
  cellWidth: 0,
  cellHeight: 0,
  cellOffset: 0,
  timeRange: 14,
  sizeBreakPoints: [],
  speedVisual: false,
  tailMiddleSize: 0
};

export interface ICellDimensions {
  width: number;
  height: number;
  offset: number;
}

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setGraphRows: (state, action: PayloadAction<number>) => {
      state.graphRows = action.payload;
      state.visibleGraphRows = state.graphRows + 1;
      state.graphCells = state.graphRows * state.graphCols;
      state.visibleGraphCells = state.visibleGraphRows * state.visibleGraphCols;
    },
    setGraphCols: (state, action: PayloadAction<number>) => {
      state.graphCols = action.payload;
      state.visibleGraphCols = state.graphCols + 2;
      state.graphCells = state.graphRows * state.graphCols;
      state.visibleGraphCells = state.visibleGraphRows * state.visibleGraphCols;
    },
    setCellDimensions: (state, action: PayloadAction<ICellDimensions>) => {
      state.cellHeight = action.payload.height;
      state.cellWidth = action.payload.width;
      state.cellOffset = action.payload.offset;
    },
    setSizeBreakPoints: (state, action: PayloadAction<number[]>) => {
      state.sizeBreakPoints = [...action.payload];
    },
    setTimeRange: (state, action: PayloadAction<number>) => {
      state.timeRange = action.payload;
    },
    toggleSpeedVisual: state => {
      state.speedVisual = !state.speedVisual;
    },
    setTailMiddleSize: (state, action: PayloadAction<number>) => {
      state.tailMiddleSize = action.payload;
    }
  }
});

export const {
  setGraphRows,
  setGraphCols,
  setCellDimensions,
  setSizeBreakPoints,
  toggleSpeedVisual,
  setTailMiddleSize,
  setTimeRange
} = graphSlice.actions;

export default graphSlice.reducer;
