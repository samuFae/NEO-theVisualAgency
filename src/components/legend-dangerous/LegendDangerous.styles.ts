import { breakPointXLarge, DidaSmall, padding } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const LegendDangerousWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 15rem;
`;

export const ExampleAsteroidsWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: ${padding(0.2)} 0 ${padding(1)};

  @media (min-width: ${breakPointXLarge}px) {
    padding-top: 2rem;
  }
`;

export const SafeAsteroid = styled.div`
  display: flex;
  align-items: flex-end;

  ${DidaSmall} {
    padding-left: ${padding(1)};
  }
`;

export const DangerAsteroid = styled(SafeAsteroid)``;
