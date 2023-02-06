import { borderRadiusStandard, cardBackground, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const SpeedWrapper = styled.section`
  grid-column: content;
  grid-row: speed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${cardBackground};
  backdrop-filter: blur(${pxToRem(5)});
  border-radius: ${borderRadiusStandard};
  padding: ${padding(0.5)} ${padding(1)};
`;

export const SpeedToggleWrapper = styled.div`
  display: flex;
`;
