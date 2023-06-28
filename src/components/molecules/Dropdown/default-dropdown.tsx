import React, { ReactNode } from 'react';

import useToggle from '@hooks/useToggle';

import RectangleButton from '@components/atoms/Button/rectangle-button';
import Div from '@components/atoms/Div/default-div';
import DropdownMenu from './dropdown-menu';

interface Props {
    header: string | ReactNode;
    options: string[];
}

const DefaultDropdown = ({ header, options }: Props) => {
    const { isOn, setIsOn, handler } = useToggle();

    const handleOptionClick = () => {
        console.log(`Selected option: ${options}`);
        setIsOn(false);
    };

    return (
        <Div id="dropdown" direction="column">
            <RectangleButton variant="default" onClick={handler}>
                {header}
            </RectangleButton>
            {isOn && <DropdownMenu options={options} />}
        </Div>
    );
};

export default DefaultDropdown;
