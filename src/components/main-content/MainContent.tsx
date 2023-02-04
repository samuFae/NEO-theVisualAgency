import { Graph } from "@components/graph/Graph"
import { Header } from "@components/header/Header"
import { MainContentWrapper } from "./MainContent.styles"

export const MainContent = () => {


    return (
        <MainContentWrapper>
            <Header />
            <Graph />
        </MainContentWrapper>
    )
}
