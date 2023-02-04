import { padding } from "@styles/shared/shared";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: fit-content;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: ${padding(1)};
`

export const MainHeading = styled.h1`
`

export const SubHeading = styled.h3`
`

export const Reference = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: ${padding(1)};
`