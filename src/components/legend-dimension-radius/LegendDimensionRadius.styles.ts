import { borderRadiusRound, breakPointMedium, Circle } from "@styles/shared/shared";
import { borderSize, colorBlack, colorWhite, DidaSmall, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

const radiusDescriptionPadding = 1.5;
const radiusWordWidth = 30;

export const RadiusWrapper = styled.div<{ circleSizes: number }>`
    display: flex;
    width: 100%;
    ${Circle} {
        background: radial-gradient(rgba(177,177,177,0.3) 59%,rgba(46, 46, 46, 0.1) 78%);;
    }
    ${DidaSmall}{
        position: relative;
        &:after{
            content: "";
            display: inline-block;
            width: ${props => pxToRem(props.circleSizes / 2 + 16 * radiusDescriptionPadding / 2 + radiusWordWidth)};
            position: absolute;
            border-bottom: 1px dashed white;
            bottom: -${pxToRem(1)};
            right: calc(100% - ${pxToRem(radiusWordWidth)});
            @media (min-width: ${breakPointMedium}px) {
                width: ${props => pxToRem(props.circleSizes / 2 + 16 * radiusDescriptionPadding + radiusWordWidth)};
            }
        }
    }

    .offset{
        position: absolute;
        bottom: ${props => pxToRem(props.circleSizes / 4 * 3 + 1)};
    }
`

export const CircleFull = styled.div`
    border: ${borderSize} solid ${colorWhite};
    background-color: ${colorWhite};
    border-radius: ${borderRadiusRound};
    height: 50%;
    aspect-ratio: 1;
    position: absolute;
    box-shadow: 0px 0px 5px 0px ${colorBlack};
`

export const RadiusDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: ${padding(radiusDescriptionPadding / 2)};
    word-spacing: 100vw;
    @media (min-width: ${breakPointMedium}px) {
        padding-left: ${padding(radiusDescriptionPadding)}
    }
`
