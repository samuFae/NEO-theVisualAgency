import styled from "styled-components/macro";

export const colorWhite = "#FFFFFF";
export const colorBlack = "#000000";

export const darkGrey = "#333333";
export const mediumGrey = "#666666";
export const lightGrey = "#999999";

export const darkWhite = "#EFEFEF";
export const mediumWhite = "#F5F5F5";

export const dangerDark = "#911A1A";
export const dangerLight = "#FFC4C4";
export const dangerGradient = "radial-gradient(50% 50% at 50% 50%, #FFC4C4 49.14%, rgba(55, 15, 15, 0.11) 100%)";

export const safeDark = "#3967DE";
export const safeLight = "#CADCFF";
export const safeGradient = "radial-gradient(50% 50% at 50% 50%, #7995DF 48.96%, rgba(13, 41, 96, 0) 100%)";

export const legendTailColor = "#D9D9D9";

export const breakPointXLarge = 1700;

export const breakPointMedium = 1000;

export const breakPointSmall = 768;

export const cardBackground = "rgba(55, 55, 55, 0.4)";

export const basePadding = 1;

export const borderSize = "1px";

export const borderRadiusStandard = "15px";

export const borderRadiusSmall = "10px";

export const borderRadiusRound = "50%";

export const numberOfCircleSizes = 3;

export const numberOfTailCirclesL = 22;

export const numberOfTailCirclesM = 11;

export const numberOfTailCirclesS = 7;

export const speedSizes = 3;

export const graphWidth = "95%";

export const staticMobileBreakPoints = [25, 47, 70];

export const padding = (size = basePadding) => size * basePadding + "rem";

export const pxToRem = (pxValue: number) => {
  const ratio = 16;
  return pxValue / ratio + "rem";
};

export const fancyFont = "MuseoModerno, serif";
export const standardFont = "Inter, sans-serif";

export const backgroundFilter = "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(47, 47, 47, 0.8) 100%)";

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Spacer = styled.div<{ size: number | 1 }>`
  width: 100%;
  padding-top: ${props => padding(props.size)};
`;
Spacer.defaultProps = {
  size: 1
};

export const Body = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;
export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration: underline;
  font-style: italic;
`;
export const DidaMedium = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const DidaSmall = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  @media (min-width: ${breakPointXLarge}px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Circle = styled.div<{
  size: number;
  background?: string;
  opacity?: number;
  border?: string;
  position?: string;
}>`
  border: ${props => props.border ?? borderSize} solid ${colorWhite};
  border-radius: ${borderRadiusRound};
  height: ${props => (100 / numberOfCircleSizes) * props.size}%;
  aspect-ratio: 1;
  position: ${props => props.position ?? "absolute"};
  background: ${props => props.background ?? "transparent"};
  opacity: ${props => props.opacity ?? 1};
`;

export const Circles = styled.div<{ align: string; justify: string }>`
  aspect-ratio: 1;
  position: relative;
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;
