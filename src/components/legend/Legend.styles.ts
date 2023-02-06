import { borderRadiusStandard, cardBackground, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const LegendWrapper = styled.section`
    grid-column: content;
    grid-row: legend;
    display: grid;
    grid-template-rows: ${pxToRem(60)} 1fr 1fr 1fr;
    background: ${cardBackground};
    backdrop-filter: blur(${pxToRem(5)});
    border-radius: ${borderRadiusStandard};
    padding: ${padding(0.5)} ${padding(1)};
`