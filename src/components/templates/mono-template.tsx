/** @jsxImportSource @emotion/react */
import type { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/react';
import Box from 'components/atoms/Box/default-box';

interface Props {
    mainSection: ReactNode;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    margin?: CSSProperties['margin'];
    padding?: CSSProperties['padding'];
    display?: 'none' | 'flex' | 'visible' | 'inline-flex';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    direction?: 'row' | 'column';
    position?: CSSProperties['position'];
}

const MonoTemplate = ({
    mainSection,
    width = '100%',
    height = '100vh',
    display = 'flex',
    alignItems = 'center',
    justifyContent = 'center',
    margin,
    padding = '3rem',
    position = 'static',
    children,
    ...rest
}: React.PropsWithChildren<Props>) => {
    return (
        <Box
            as="main"
            width={width}
            height={height}
            minHeight="100vh"
            display={display}
            justifyContent={justifyContent}
            alignItems={alignItems}
            padding={padding}
            margin={margin}
            position={position}
            radius={0}
            direction="column"
            {...rest}
        >
            {mainSection}
        </Box>
    );
};

export default MonoTemplate;
