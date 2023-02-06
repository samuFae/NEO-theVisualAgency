import { breakPointXLarge, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const LegendDimensionsWrapper = styled.section<{isMobile: boolean}>`
    min-height: ${props=> props.isMobile ? padding(7) : pxToRem(90)};
    max-height: 13rem;
    display: flex;
    flex-direction: column;
    @media (min-width: ${breakPointXLarge}px) {
        padding-top: 2rem;        
    }
`

export const DimensionsContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
`




