import Toggler from '@components/toggler/Toggler';
import { Body } from '@styles/shared/shared';
import { ChangeEvent, FC, useState } from 'react';
import { SpeedToggleWrapper, SpeedWrapper } from "./Speed.styles"

interface ISpeed { }

const Speed: FC<ISpeed> = () => {
    const [toggleValue, setToggleValue] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setToggleValue((prev) => !prev);

    return (
        <SpeedWrapper>
            <h2>
                Speed
            </h2>
            <Body>
                Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.
            </Body>
            <SpeedToggleWrapper>
                <Toggler onChange={handleChange} checked={toggleValue}>
                    <h3>Activate speed visual</h3>
                </Toggler>
            </SpeedToggleWrapper>

        </SpeedWrapper>
    )
}

export default Speed;
