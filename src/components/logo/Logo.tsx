import { useViewport } from '@hooks/useViewport';
import { FC } from 'react';
import { LogoContainerAbsolute, LogoContainerRelative, LogoImg, LogoWrapper } from "./Logo.styles"

interface ILogo { }

const Logo: FC<ILogo> = () => {
    const { width } = useViewport();
    console.log(width)

    return (
        <LogoWrapper>
            <LogoContainerRelative>
                <LogoContainerAbsolute windowWidth={width}>
                    <LogoImg src="logo.jpg" alt="The Visual Agency" />
                </LogoContainerAbsolute>
            </LogoContainerRelative>
        </LogoWrapper>
    )
}

export default Logo;
