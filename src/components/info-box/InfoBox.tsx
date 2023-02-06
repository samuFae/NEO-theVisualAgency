import { FC } from 'react';
import { InfoBoxWrapper, InfoIcon } from "./InfoBox.styles"

interface IInfoBox {
    label: string;
    positionFixed?: boolean;
    onClick: () => void;
}

const InfoBox: FC<IInfoBox> = ({ label, positionFixed, onClick }) => {

    return (
        <InfoBoxWrapper positionFixed={positionFixed} onClick={onClick}>
            <h4>
                {label}
            </h4>
            <InfoIcon fill="white" x="0px" y="0px" viewBox="0 0 128 128">
                <g>
                    <path d="M64,122c32,0,58-26,58-58S96,6,64,6S6,32,6,64S32,122,64,122z M64,12c28.7,0,52,23.3,52,52s-23.3,52-52,52S12,92.7,12,64
		S35.3,12,64,12z"/>
                    <circle cx="64" cy="39" r="9" />
                    <path d="M64,101c5,0,9-4,9-9V68c0-5-4-9-9-9s-9,4-9,9v24C55,97,59,101,64,101z" />
                </g>
            </InfoIcon >
        </InfoBoxWrapper>
    )
}

export default InfoBox;
