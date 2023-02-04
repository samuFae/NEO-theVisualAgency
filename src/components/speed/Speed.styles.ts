import { padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components";

export const SpeedWrapper = styled.section`
    grid-column: content;
    grid-row: speed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: rgba(55, 55, 55, 0.4);
    backdrop-filter: blur(${pxToRem(5)});
    border-radius: ${pxToRem(15)};
    padding: ${padding(0.5)} ${padding(1)};
`

export const SpeedToggleWrapper = styled.div`
    display: flex;
`
