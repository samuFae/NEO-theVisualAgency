import { borderRadiusRound, colorWhite, darkGrey, mediumGrey, pxToRem } from "@styles/shared/shared";
import styled from "styled-components/macro";

const toggleDimension = 20;

export type SizeEnum = "s" | "m" | "l";

const sizeSwitch = {
  s: 6,
  m: 9,
  l: 14
};

const delaySwitch = {
  s: 60,
  m: 40,
  l: 20
};

const opacitySwitch = {
  s: 0.3,
  m: 0.5,
  l: 0.8
};

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: ${pxToRem(60)};
  height: ${pxToRem(25)};
  background: ${colorWhite};
  border-radius: ${pxToRem(28.5)};

  &:before {
    transition: 400ms all cubic-bezier(0.575, -0.18, 0.42, 1.195);
    content: "";
    position: absolute;
    width: ${toggleDimension}px;
    height: ${toggleDimension}px;
    border-radius: ${pxToRem(35)};
    top: 50%;
    left: ${pxToRem(2)};
    background-color: ${mediumGrey};
    box-shadow: 0px 0px ${pxToRem(5)} rgba(0, 0, 0, 0.8);
    border-radius: ${borderRadiusRound};
    transform: translate(0, -50%);
  }
`;

export const Tail = styled.div<{ size: SizeEnum; checked: boolean }>`
  transition: 400ms ${props => delaySwitch[props.size] * 2}ms all cubic-bezier(0.575, -0.18, 0.42, 1.195);
  content: "";
  position: absolute;
  width: ${props => pxToRem(sizeSwitch[props.size])};
  height: ${props => pxToRem(sizeSwitch[props.size])};
  border-radius: 35px;
  top: 50%;
  left: 2px;
  background-color: ${props => (props.checked ? darkGrey : mediumGrey)};
  border-radius: ${borderRadiusRound};
  opacity: ${props => opacitySwitch[props.size]};
  transform: ${props =>
    props.checked
      ? `translate(${pxToRem(34 + toggleDimension - sizeSwitch[props.size])}, -50%)`
      : `translate(${pxToRem(1)}, -50%)`};
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    &:before {
      transform: translate(${pxToRem(36)}, -50%);
      background-color: ${darkGrey};
    }
  }
`;
