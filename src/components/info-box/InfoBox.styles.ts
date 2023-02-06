import { borderRadiusStandard, colorWhite, mediumGrey, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const InfoBoxWrapper = styled.div<{ positionFixed?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${mediumGrey};
  max-width: calc(${pxToRem(130)} - ${padding(1)});
  border-radius: ${borderRadiusStandard};
  margin-left: auto;
  padding: ${padding(0.3)} ${padding(0.5)};
  margin-top: ${padding(0.5)};

  ${props =>
    props.positionFixed &&
    `
        position: fixed;
        bottom: 1rem;
        left: calc(50% - ${pxToRem(114 / 2)});
        width: ${pxToRem(114)};
        z-index: 999;
    `}
`;

export const InfoIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: ${colorWhite};
`;
