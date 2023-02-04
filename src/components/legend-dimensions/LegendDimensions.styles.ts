import { pxToRem } from "@styles/shared/shared";
import styled from "styled-components";

export const LegendDimensionsWrapper = styled.section`
    min-height: ${pxToRem(90)};
    display: flex;
    flex-direction: column;
`

export const DimensionsContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
`




