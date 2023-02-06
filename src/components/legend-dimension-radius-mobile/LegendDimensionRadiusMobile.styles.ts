import { borderRadiusRound, Circle, darkGrey, borderSize, colorBlack, padding, pxToRem, legendTailColor } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const LegendDimensionsRadiusMobileWrapper = styled.div`
    display: flex;
    width: 100%;
    
    ${Circle} {
        background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 48.96%, rgba(255, 255, 255, 0) 100%);
    }
`

export const CircleFull = styled.div`
    border: ${borderSize} solid ${darkGrey};
    background-color: ${darkGrey};
    border-radius: ${borderRadiusRound};
    height: 70%;
    aspect-ratio: 1;
    box-shadow: 0px 0px 5px 0px ${colorBlack};
    z-index: 1;
`

export const ExampleCircle = styled.div<{ isWhite?: boolean }>`
    border: ${borderSize} solid ${props => props.isWhite ? legendTailColor : darkGrey};
    background-color: ${props => props.isWhite ? legendTailColor : darkGrey};
    border-radius: ${borderRadiusRound};
    height: ${pxToRem(25)};
    aspect-ratio: 1;
`

export const RadiusMobileDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: ${padding(1)};
    word-spacing: 100vw;
    justify-content: space-between;
`
export const RadiusMobileExample = styled.div`
    display: flex;
    align-items: flex-end;
    gap: ${padding(0.25)};
`