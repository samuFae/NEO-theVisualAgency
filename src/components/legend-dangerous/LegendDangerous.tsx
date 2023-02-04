import Asteroid from '@components/asteroid/Asteroid';
import { FC } from 'react';
import { LegendDangerousWrapper, ExampleAsteroidsWrapper } from "./LegendDangerous.styles"

interface ILegendDangerous { }

const LegendDangerous: FC<ILegendDangerous> = () => {

    return (
        <LegendDangerousWrapper>
            <h4>
                Is it dangerous?
            </h4>
            <ExampleAsteroidsWrapper>
                <Asteroid />
                <Asteroid />
            </ExampleAsteroidsWrapper>
        </LegendDangerousWrapper>
    )
}

export default LegendDangerous;
