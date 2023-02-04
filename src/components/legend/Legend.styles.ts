import { padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components";

export const LegendWrapper = styled.section`
    grid-column: content;
    grid-row: legend;
    display: grid;
    grid-template-rows: ${pxToRem(60)} 1fr 1fr 1fr;
    background: rgba(55, 55, 55, 0.4);
    backdrop-filter: blur(${pxToRem(5)});
    border-radius: ${pxToRem(15)};
    padding: ${padding(0.5)} ${padding(1)};
`