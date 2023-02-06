import { breakPointSmall } from "@styles/shared/shared";
import styled from "styled-components/macro";
import { IPositions } from "./GraphElement";

export const GraphElementWrapper = styled.div<{ positions: IPositions }>`
  @media (min-width: ${breakPointSmall}px) {
    position: absolute;
    ${props => `
        bottom: ${props.positions.bottom}px;
        left: ${props.positions.left}px;
    `}
  }
`;
