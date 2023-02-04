import { FC } from 'react';
import { AsteroidWrapper, OuterRadius, InnerRadius } from "./Asteroid.styles"

interface IAsteroid {
    size?: number;
}

const Asteroid: FC<IAsteroid> = () => {

    return (
        <div style={{ display: "flex" }}>
            <AsteroidWrapper>
                <OuterRadius>
                    <InnerRadius>

                    </InnerRadius>
                </OuterRadius>
            </AsteroidWrapper>
        </div>

    )
}

export default Asteroid;
