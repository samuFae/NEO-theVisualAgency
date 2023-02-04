import { Circle, Circles, numberOfCircleSizes } from '@styles/shared/shared';
import { DidaSmall } from '@styles/shared/shared';
import { FC, useRef, useState, useEffect } from 'react';
import { CircleFull, RadiusDescription, RadiusWrapper } from './LegendDimensionRadius.styles';

interface ILegendDimensionRadius { }

const LegendDimensionRadius: FC<ILegendDimensionRadius> = () => {
    const [circleSizes, setCircleSizes] = useState<number>(0);

    const circleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleWindowResize() {
            setCircleSizes(circleRef.current!.clientWidth);
        }
        handleWindowResize()

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <RadiusWrapper circleSizes={circleSizes}>
            <Circles align="center" justify="center">
                <Circle size={numberOfCircleSizes} ref={circleRef} />
                <CircleFull />
            </Circles>
            <RadiusDescription>
                <DidaSmall className="offset">
                    Min Radius
                </DidaSmall>
                <DidaSmall>
                    Max Radius
                </DidaSmall>
            </RadiusDescription>
        </RadiusWrapper>
    )
}

export default LegendDimensionRadius;
