import { numberOfCircleSizes } from '@styles/shared/shared';
import { ChangeEvent, FC, PropsWithChildren } from 'react';
import { Label, Input, Switch, Tail, SizeEnum } from "./Toggler.styles"

interface IToggler extends PropsWithChildren {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

const Toggler: FC<IToggler> = ({ onChange, checked, children }) => {
    const tailSizes: SizeEnum[] = ["l", "m", "s"];
    return (
        <Label>
            <Input checked={checked} type="checkbox" onChange={onChange} />
            <Switch>
                {[...Array(numberOfCircleSizes)].map((el, i) => <Tail key={tailSizes[i]} size={tailSizes[i]} checked={checked} />)}
            </Switch>
            {children}
        </Label>
    );
};

export default Toggler;
