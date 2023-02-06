import GraphBackground from '@components/graph-background/GraphBackground';
import GraphElement from '@components/graph-element/GraphElement';
import { useDataFactory } from '@hooks/dataFactory';
import { FC } from 'react';
import { GraphWrapper } from './Graph.styles';

interface IGraph { }

const Graph: FC<IGraph> = () => {

    const { nasaData } = useDataFactory();


    return (
        <GraphWrapper>
            <GraphBackground />
            {nasaData?.map((nasaObject) => <GraphElement key={nasaObject.id} data={nasaObject} />)}
        </GraphWrapper>
    )
}

export default Graph;
