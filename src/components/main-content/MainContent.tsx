import Graph from "@components/graph/Graph"
import { Header } from "@components/header/Header"
import { InformativeLabel, MainContentWrapper } from "./MainContent.styles"

export const MainContent = () => {

   /* const { setGraphRows, setGraphCols } = useGraphStore();

         useEffect(() => {
            document.addEventListener("add-rows", (e) => {
                setGraphRows(+e.detail);
            })
            document.addEventListener("add-cols", (e) => {
                setGraphCols(+e.detail);
            })
        }) */


    return (
        <MainContentWrapper>
            <Header />
            <InformativeLabel>
                <h4>
                    Time since it passed by
                </h4>
            </InformativeLabel>

            <Graph />
        </MainContentWrapper>
    )
}
