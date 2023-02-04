import { useDatesStore } from "@store/hooks";
import { Body, Link, Spacer } from "@styles/shared/shared"
import { MainHeading, SubHeading, HeaderWrapper, Title, Reference } from "./header.styles"

export const Header = () => {

    const { displayDate } = useDatesStore();

    return (
        <HeaderWrapper>
            <Title>
                <MainHeading>
                    Astro tracker
                </MainHeading>
                <Spacer />
                <SubHeading>
                    {displayDate}
                </SubHeading>
            </Title>
            <Reference>
                <Body>
                    Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti. <Link>nasa.com</Link>
                </Body>
                <Spacer size={1.5} />
                <Body>
                    Image of the day: <Link>Calliope galaxy, James Webb Telescope</Link>
                </Body>
            </Reference>

        </HeaderWrapper >
    )
}
