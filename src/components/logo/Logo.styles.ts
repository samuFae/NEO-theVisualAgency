import { colorWhite, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components";

export const LogoWrapper = styled.footer`
    grid-row: logo;
    grid-column: gap/-1;
    position: relative;
    overflow: hidden;
`

export const LogoContainerRelative = styled.div`
    position: relative;
    width: ${pxToRem(50000)};
    height: ${pxToRem(50000)};
`

export const LogoContainerAbsolute = styled.div<{ windowWidth: number }>`
    position: absolute;
    width: ${pxToRem(50000)};
    height: ${pxToRem(50000)};
    left: calc(-50% + ${(props) => pxToRem(props.windowWidth / 2)});
    background-color: ${colorWhite};
    border-radius: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: ${padding(0.5)}
`

export const LogoImg = styled.img`
    width: 270px;
    height: 25px;
`