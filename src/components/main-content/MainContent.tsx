import Graph from "@components/graph/Graph";
import { Header } from "@components/header/Header";
import { useGraphStore } from "@store/hooks";
import { useEffect } from "react";
import { InformativeLabel, MainContentWrapper } from "./MainContent.styles";

export const MainContent = () => {
  const { setGraphRows, setGraphCols, setTimeRange } = useGraphStore();

  const changeParams = function (e: CustomEvent) {
    setGraphRows(e.detail.rows);
    setGraphCols(e.detail.cols);
    setTimeRange(e.detail.timeRange);
  };

  useEffect(() => {
    document.addEventListener<any>("change-graph", changeParams);
    return document.removeEventListener<any>("change-graph", changeParams);
  });

  return (
    <MainContentWrapper>
      <Header />
      <InformativeLabel>
        <h4>Time since it passed by</h4>
      </InformativeLabel>

      <Graph />
    </MainContentWrapper>
  );
};
