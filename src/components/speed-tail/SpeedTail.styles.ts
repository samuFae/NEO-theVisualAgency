import styled from "styled-components/macro";

export const SpeedTailWrapper = styled.div<{ tailSize: number }>`
  position: absolute;
  height: ${props => props.tailSize}px;
  display: flex;
  align-items: center;
  z-index: -1;
`;
