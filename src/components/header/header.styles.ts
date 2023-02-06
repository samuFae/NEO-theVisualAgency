import { breakPointSmall, padding, Spacer } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-template-columns: 40% 50% [gap] 1fr;
    align-items: center;
    height: fit-content;
    position: relative;
    z-index: 1;
    gap: ${padding(2)};

    @media (min-width: ${breakPointSmall}px) {
        display: grid;
        gap: 0;
    }
`

export const Title = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    padding-right: ${padding(0)};

    ${Spacer} {
        display: none;
    }

    @media (min-width: ${breakPointSmall}px) {
        display: flex;
        flex-direction: column;
        padding-right: ${padding(1)};
        ${Spacer} {
            display: unset;
        }
    }
`

export const MainHeading = styled.h1`
`

export const SubHeadingContainer = styled.div`
    width: 100%;
    margin-top: auto;
    @media (min-width: ${breakPointSmall}px) {
        width: auto;
        margin: 0;
    }
`

export const SubHeading = styled.h3`
    text-align: center;
    width: 100%;
    @media (min-width: ${breakPointSmall}px) {
        text-align: left;
    }
`

export const Reference = styled.div`
    display: flex;
    flex-direction: column;
`