import { graphWidth, padding } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const MainContentWrapper = styled.section`
    grid-column: header;
    grid-row: content;
    display: grid;
    grid-template-rows: min-content [gap] minmax(8%, ${padding(2)}) [graph] 1fr;
`

export const InformativeLabel = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: ${graphWidth};
    padding-bottom: ${padding(0.5)};
`



