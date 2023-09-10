import type { CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import Div from 'components/atoms/Div/div';
import Hr from 'components/atoms/Hr/default-hr';
import Typography from 'components/atoms/Typograph/default-typography';

interface WrapperProps {
    as?: 'div' | 'main' | 'nav' | 'section' | 'article' | 'header';
    wrapperHeight?: CSSProperties['height'];
}

interface HeaderProps {
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    headerVariant?: 'H1' | 'H2' | 'H3' | 'BODY1' | 'BODY2' | 'BODY3';
    fontSize?: keyof typeof theme.fontSize;
    lineHeight?: keyof typeof theme.lineHeight;
    color?: keyof typeof theme.colors;
    fontWeight?: keyof typeof theme.fontWeight;
    paddingRight?: number;
    paddingLeft?: number;
    headerHeight: CSSProperties['height'];
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    style?: CSSProperties;
}
interface HeaderLineProps {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

interface BodyProps {
    innerVariant?: 'default' | 'primary' | 'secondary' | 'translucent';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    innerHeight: CSSProperties['height'];
    style?: CSSProperties;
}

type ContainerWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type ContainerHeaderProps = React.PropsWithChildren<HeaderProps>;
type ContainerHeaderLineProps = React.PropsWithChildren<HeaderLineProps> & HTMLAttributes<HTMLHRElement>;
type ContainerBodyProps = React.PropsWithChildren<BodyProps>;

// Wrapper
const ContainerWrapper = ({
    id = '',
    as = 'article',
    wrapperHeight = '540px',
    children,
    ...rest
}: ContainerWrapperProps) => {
    const newWrapperHeight = wrapperHeight === 'number' ? `${wrapperHeight}%` : wrapperHeight;

    return (
        <Wrapper id={`${id}__container`} as={as} height={newWrapperHeight} {...rest}>
            {children}
        </Wrapper>
    );
};

// Header
const ContainerHeader = ({
    justifyContent = 'flex-start',
    alignItems = 'center',
    paddingLeft = 24,
    paddingRight = 24,
    headerVariant = 'BODY1',
    fontSize = 'md',
    lineHeight = 'md',
    fontWeight = 'semiBold',
    headerHeight = '50px',
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    children,
    ...rest
}: ContainerHeaderProps) => {
    const newHeaderHeight = headerHeight === 'number' ? `${headerHeight}%` : headerHeight;
    return (
        <>
            <HeaderWrapper
                width={100}
                height={newHeaderHeight}
                justifyContent={justifyContent}
                alignItems={alignItems}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginTop={marginTop}
                {...rest}
            >
                <Typography
                    variant={headerVariant}
                    fontSize={fontSize}
                    lineHeight={lineHeight}
                    fontWeight={fontWeight}
                >
                    {children}
                </Typography>
            </HeaderWrapper>
        </>
    );
};
const ContainerHeaderLine = ({
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    ...rest
}: ContainerHeaderLineProps) => {
    return (
        <Hr
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
            {...rest}
        />
    );
};

// Inner
const ContainerBody = ({
    innerHeight = 'inherit',
    innerVariant = 'default',
    justifyContent = 'flex-start',
    alignItems = 'center',
    children,
    ...rest
}: ContainerBodyProps) => {
    const newInnerHeight = innerHeight === 'number' ? `${innerHeight}%` : innerHeight;

    return (
        <InnerWrapper
            id="inner_container"
            width={100}
            variant={innerVariant}
            height={newInnerHeight}
            justifyContent={justifyContent}
            alignItems={alignItems}
            {...rest}
        >
            {children}
        </InnerWrapper>
    );
};
const Container = Object.assign(ContainerWrapper, {
    Header: ContainerHeader,
    HeaderLine: ContainerHeaderLine,
    Body: ContainerBody,
});

export default Container;

const Wrapper = styled.div<{ height: string | number }>`
    width: 100%;
    height: ${({ height }) => height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

const HeaderWrapper = styled(Div.Default)`
    ${theme.mediaQuery.xsMobile} {
        padding-left: 0px;
        padding-right: 0px;
    }
    ${theme.mediaQuery.smMobile} {
        padding-left: 12px;
        padding-right: 12px;
    }

    ${theme.mediaQuery.mdMobile} {
        padding-left: 18px;
        padding-right: 18px;
    }

    ${theme.mediaQuery.lgMobile} {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const InnerWrapper = styled(Div.Default)`
    padding: 32px;
    ${theme.mediaQuery.xsMobile} {
        padding-left: 0px;
        padding-right: 0px;
    }
    ${theme.mediaQuery.smMobile} {
        padding-left: 12px;
        padding-right: 12px;
    }

    ${theme.mediaQuery.mdMobile} {
        padding-left: 18px;
        padding-right: 18px;
    }

    ${theme.mediaQuery.lgMobile} {
        padding-left: 24px;
        padding-right: 24px;
    }
`;
