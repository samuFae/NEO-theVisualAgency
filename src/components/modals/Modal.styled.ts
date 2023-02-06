import { borderRadiusStandard, mediumGrey, padding, colorBlack, colorWhite } from "@styles/shared/shared";
import styled from "styled-components";

export const ModalWrapper = styled.div<{ hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${props =>
    props.hide &&
    `
  z-index: -10;
  visibility: hidden;
  opacity: 0;
  `}
`;
export const ModalBody = styled.div`
  position: relative;
  width: calc(100% - ${padding(6)});
  z-index: 1000;
  background: ${mediumGrey};
  border-radius: ${borderRadiusStandard};
  overflow: hidden;
  padding: ${padding(1.5)};
`;

export const ModalHeading = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${padding(1)};
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colorBlack};
  opacity: 0.5;
`;

export const XIcon = styled.svg`
  fill: ${colorWhite};
  width: 1rem;
  height: 1rem;
`;
