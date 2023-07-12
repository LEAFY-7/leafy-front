import React, { ReactNode } from 'react';
import Flyout from 'components/atoms/Flyout/headless-flyout';
import useToggle from 'hooks/useToggle';

interface Props {
    header: string | ReactNode;
    options: string[];
}

const DefaultDropdown = ({ header, options }: Props) => {
    const { isOn, setIsOn, handler } = useToggle();

    return (
        <>
            <Flyout open={isOn} toggle={handler}>
                <Flyout.Toggle>토글버튼</Flyout.Toggle>
                <Flyout.List>
                    <Flyout.Item>1</Flyout.Item>
                    <Flyout.Item>2</Flyout.Item>
                    <Flyout.Item>3</Flyout.Item>
                    <Flyout.Item>4</Flyout.Item>
                </Flyout.List>
            </Flyout>
        </>
    );
};

export default DefaultDropdown;
