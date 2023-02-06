import { borderSize, breakPointSmall, DidaMedium, mediumGrey, mediumWhite } from "@styles/shared/shared";
import { IGraph } from "redux/reducers/graph";
import styled from "styled-components/macro";

const borderLight = (where: string) => `border-${where}: ${borderSize} solid ${mediumGrey};`;
let borderHeavy = (where: string) => `border-${where}: ${borderSize} solid ${mediumWhite};`;

export const GraphBackgroundWrapper = styled.div<{ graph: IGraph }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.graph.graphCols + 1}, 1fr) [empty-col] min-content;
  grid-template-rows: repeat(${props => props.graph.graphRows}, 1fr) [empty-row] 1fr;
  white-space: nowrap;

  @media (min-width: ${breakPointSmall}px) {
    z-index: -2;
    position: relative;
  }
`;

// adds borders based on number of rows and columns and the index of the item parsing
export const SpaceOccupier = styled.div<{ index: number; graph: IGraph }>`
  ${DidaMedium} {
    padding-left: 0.3rem;
    white-space: normal;
  }
  ${({ index, graph: { visibleGraphCols, graphRows } }) => {
    let style = "";
    switch (true) {
      case index % visibleGraphCols === 0:
        style += borderHeavy("left");
        return style;
      case index > visibleGraphCols * graphRows:
        style = borderHeavy("top");
        break;
      case index > visibleGraphCols:
        style = borderLight("top");
        break;
    }
    switch (true) {
      case index % visibleGraphCols === 2:
        style += borderHeavy("left");
        break;
      case index % visibleGraphCols !== 1:
        style += borderLight("left");
        break;
    }
    if (index === 1 || index > visibleGraphCols) {
      style += "display: flex;align-items: flex-end;";
    }
    if (index === visibleGraphCols * graphRows + 1) {
      if (graphRows > 5) {
        style += `
                justify-content: flex-end;
                padding-right: 0.5rem;
                `;
      } else {
        style += `${DidaMedium}{
                    writing-mode: vertical-lr;
                    transform: rotate(180deg);
                    width: 100%;
                    align-self: flex-start;
                    padding: 0 0 0.5rem 0.5rem;
                }`;
      }
    }
    return style;
  }}
`;
