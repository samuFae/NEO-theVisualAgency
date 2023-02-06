import { breakPointMedium, padding } from "@styles/shared/shared";
import styled from "styled-components/macro";

export const SizeWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const SizesDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: ${padding(0.7)};
    @media (min-width: ${breakPointMedium}px) {
        padding-left: ${padding(1.5)};
    }
`