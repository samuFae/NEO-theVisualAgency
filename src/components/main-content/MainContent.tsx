import Graph from "@components/graph/Graph";
import { Header } from "@components/header/Header";
import { useGraphStore } from "@store/hooks";
import { useEffect } from "react";
import { InformativeLabel, MainContentWrapper } from "./MainContent.styles";

export const MainContent = () => {
    const { setGraphRows, setGraphCols, setTimeRange } = useGraphStore();

    useEffect(() => {
        document.addEventListener<any>("change-graph", function changeParams(e: CustomEvent) {
            console.log("qui")
            setGraphRows(e.detail.rows);
            setGraphCols(e.detail.cols);
            setTimeRange(e.detail.timeRange);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
