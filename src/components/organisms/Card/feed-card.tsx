import type { PropsWithChildren, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface ContextProps {}
interface WrapperProps {}
interface HeaderProps {}
interface BodyProps {}
interface FooterProps {}

type CardProviderProps = PropsWithChildren<ContextProps>;
type CardWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type CardHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
type CardBodyProps = PropsWithChildren<BodyProps> & HTMLAttributes<HTMLElement>;
type CardFooterProps = PropsWithChildren<FooterProps> & HTMLAttributes<HTMLElement>;

const CardContext = React.createContext<ContextProps>({});
const useCardContext = () => React.useContext(CardContext);

const CardProvider = ({ children, ...rest }) => {
    return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
};

const CardWrapper = ({ children, ...rest }: CardWrapperProps) => {
    return <div {...rest}>{children}</div>;
};
const CardHeader = ({ children, ...rest }: CardHeaderProps) => {
    return <div {...rest}>{children}</div>;
};
const CardBody = ({ children, ...rest }: CardBodyProps) => {
    return <div {...rest}>{children}</div>;
};
const CardFooter = ({ children, ...rest }: CardFooterProps) => {
    return <div {...rest}>{children}</div>;
};

const Card = Object.assign(CardProvider, {
    Wrapper: CardWrapper,
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
export default Card;
