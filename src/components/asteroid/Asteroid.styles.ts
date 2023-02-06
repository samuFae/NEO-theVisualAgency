import styled from "styled-components/macro";
import {
  borderSize,
  safeLight,
  safeGradient,
  safeDark,
  dangerGradient,
  dangerLight,
  dangerDark,
  pxToRem,
  padding,
  cardBackground,
  breakPointSmall,
  borderRadiusSmall,
  borderRadiusRound
} from "@styles/shared/shared";

export const dangerouslyStyle = (isDangerous: boolean) =>
  isDangerous
    ? `border: ${borderSize} solid ${dangerLight};
        background: ${dangerGradient};
        ${InnerRadius} {
            background-color: ${dangerDark};
        }`
    : `border: ${borderSize} solid ${safeLight};
        background: ${safeGradient};
        ${InnerRadius} {
            background-color: ${safeDark};
        }`;

export const AsteroidWrapper = styled.div`
  display: flex;
  aspect-ratio: auto;
  height: 100%;
  position: relative;
  align-items: center;
  @media (min-width: ${breakPointSmall}px) {
    aspect-ratio: 1;
  }
`;

export const AsteroidCard = styled.div<{ outerSize?: number; visible: boolean; id?: string }>`
    position: relative;
    left 0;
    display: grid;
    grid-template-columns: 38% [content] 1fr;
    pointer-events: none;
    padding: ${padding(1)} 0;
    min-height: calc(2rem + ${props => pxToRem(Math.floor(props?.outerSize || 0))});
    white-space: nowrap;
    z-index: 99;
    background: ${cardBackground};
    backdrop-filter: blur(2px);
    border-radius: ${borderRadiusSmall};
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: opacity 350ms 50ms ease-in-out, z-index 700ms 100ms linear;
    width: 100%;
    margin-bottom: ${padding(0.5)};

    @media (min-width: ${breakPointSmall}px) {
       position: absolute;
       width: auto;
       left: -1rem;
       grid-template-columns: calc(2rem + ${props => pxToRem(Math.floor(props?.outerSize || 0))}) [content] 1fr 1rem;
    }
`;

export const AsteroidCardContent = styled.div`
  grid-column: content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AsteroidTime = styled.div``;

export const AsteroidDistance = styled.div``;

export const CardUnit = styled.div`
  display: flex;
  align-items: center;
  gap: ${padding(0.5)};
`;

export const OuterRadius = styled.div<{
  isDangerous: boolean;
  outerSize?: number;
  visible: boolean;
  isLegend?: boolean;
}>`
  ${props => !props.isLegend && "position: absolute;"}
  left: calc(17% - ${props => pxToRem((props?.outerSize || 0) / 2)});
  pointer-events: none;
  aspect-ratio: 1;
  border-radius: ${borderRadiusRound};
  border: 1px solid white;
  width: ${props => {
    if (props.outerSize) {
      return props.outerSize + "px";
    } else {
      return "100%";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => dangerouslyStyle(props.isDangerous)};
  z-index: ${props => (props.visible ? 500 : 3)};
  transition: z-index 300ms linear;
  @media (min-width: ${breakPointSmall}px) {
    position: static;
    left: 0;
  }
`;
export const InnerRadius = styled.div<{ innerSize?: number }>`
  aspect-ratio: 1;
  border-radius: ${borderRadiusRound};
  width: ${props => {
    if (props.innerSize) {
      return props.innerSize + "px";
    } else {
      return "70%";
    }
  }};
`;
