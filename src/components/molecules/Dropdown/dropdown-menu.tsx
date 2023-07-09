import React from 'react';
import Box from 'components/atoms/Box/default-box';
import Div from 'components/atoms/Div/default-div';

interface Props {
    options: string[];
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'primary' | 'secondary';
}

const DropdownMenu = ({ options, variant = 'default', size = 'md', ...rest }: Props) => {
    return (
        <Box as="ul" id="dropdown_menu">
            {options.map((option, index) => (
                <Div
                    key={`${option}-${index}`}
                    id={`menu_item_${option}`}
                    variant={variant}
                    size={size}
                    {...rest}
                >
                    {option}
                </Div>
            ))}
        </Box>
    );
};

export default DropdownMenu;
