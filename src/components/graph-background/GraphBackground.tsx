import { useDataFactory } from '@hooks/dataFactory';
import { useResize } from '@hooks/useResize';
import { useDatesStore, useGraphStore } from '@store/hooks';
import { DidaMedium, DidaSmall } from '@styles/shared/shared';
import { FC, useEffect } from 'react';
import { GraphBackgroundWrapper, SpaceOccupier } from "./GraphBackground.styles"

interface IGraphBackground { }

const GraphBackground: FC<IGraphBackground> = () => {
    const { breakPoints } = useDataFactory();
    const { offsetHours } = useDatesStore();
    const {
        graphRows,
        graphCols,
        visibleGraphRows,
        visibleGraphCols,
        visibleGraphCells,
        graph,
        timeRange,
    } = useGraphStore();
    const { cell, offsetCell } = useResize();

    return (
        <GraphBackgroundWrapper graph={graph}>
            {[...Array(visibleGraphCells)].map((el, i) => {
                i++;
                let timeSinceString = ""
                if (i <= visibleGraphCols) {

                    let breakPointTime = ((timeRange / graphCols * (visibleGraphCols - i)) + offsetHours);
                    if (breakPointTime === 24) {
                        timeSinceString = "1 Day";
                    } else if (breakPointTime.toFixed(1).replace(/.?0+$/, "") === "0") {
                        timeSinceString = "Now";
                    } else {
                        timeSinceString = breakPointTime > 24 ?
                            "1 Day " + (breakPointTime - timeRange).toFixed(1).replace(/.?0+$/, "") :
                            (breakPointTime).toFixed(1).replace(/.?0+$/, "");
                        timeSinceString += "h";
                    }
                }


                return (
                    <SpaceOccupier
                        key={i}
                        index={i}
                        graph={graph}
                        ref={i === 1 ?
                            offsetCell :
                            i === 2 ?
                                cell :
                                null}
                    >
                        {/* print hours from now */}
                        {(i === visibleGraphCols ||
                            (i < visibleGraphCols &&
                                i !== 1)) &&
                            <DidaMedium>
                                {timeSinceString}
                            </DidaMedium>
                        }
                        {/* print KMs breakpoints */}
                        {i % visibleGraphCols === 1 &&
                            i % visibleGraphCols !== visibleGraphRows &&
                            <DidaSmall>
                                {breakPoints[Math.round(i / visibleGraphCols)]}
                            </DidaSmall>
                        }
                        {/* print Distance*/}
                        {i === visibleGraphCols * graphRows + 1 &&
                            <DidaMedium>
                                Distance
                            </DidaMedium>
                        }
                    </SpaceOccupier>)
            })}
        </GraphBackgroundWrapper>
    )
}

export default GraphBackground;
