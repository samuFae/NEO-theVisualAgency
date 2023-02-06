import { borderSize, breakPointXLarge, colorWhite, numberOfTailCirclesL } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const LegendSpeedTailWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  position: relative;

  @media (min-width: ${breakPointXLarge}px) {
    padding-top: 2rem;
  }
`;

export const TailWrapper = styled.div`
  max-height: 7rem;
  width: 70%;
  display: grid;
  grid-template-columns: [start] 1fr repeat(${numberOfTailCirclesL - 2}, 1fr) 1fr [end];
  grid-template-rows: 1fr 1.5rem;
  justify-items: end;
  align-items: center;
`;

export const SpeedValue = styled.div`
  grid-column: start/end;
  border-top: ${borderSize} solid ${colorWhite};
  width: 100%;
  text-align: right;
`;
