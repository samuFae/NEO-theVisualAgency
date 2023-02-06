import InfoBox from "@components/info-box/InfoBox";
import { useModal } from "@hooks/modal.hook";
import { useResize } from "@hooks/useResize";
import { useDatesStore } from "@store/hooks";
import { Body, breakPointSmall, Link, Spacer } from "@styles/shared/shared"
import { MainHeading, SubHeading, HeaderWrapper, Title, Reference, SubHeadingContainer } from "./header.styles"

export const Header = () => {

    const { displayDate } = useDatesStore();
    const { width } = useResize();
    const { openModal } = useModal();

    const handleInfo = () => {
        openModal(<Body>Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.</Body>, {
            title: "Info"
        })
    }

    return (
        <HeaderWrapper>
            <Title>
                <MainHeading>
                    Astro tracker
                </MainHeading>
                <Spacer size={1} />
                <SubHeadingContainer>
                    <SubHeading>
                        {displayDate}
                    </SubHeading>
                    {width < breakPointSmall && <InfoBox label={"Info"} onClick={handleInfo} />}
                </SubHeadingContainer>

            </Title>
            <Reference>
                <Body>
                    Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti. <Link>nasa.com</Link>
                </Body>
                <Spacer size={1.5} />
                {width > breakPointSmall && <Body>
                    Image of the day: <Link>Calliope galaxy, James Webb Telescope</Link>
                </Body>}
            </Reference>

        </HeaderWrapper >
    )
}
