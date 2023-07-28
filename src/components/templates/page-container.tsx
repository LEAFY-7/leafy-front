import styled from '@emotion/styled';
import { CSSProperties, ReactElement } from 'react';

interface IProps {
    children: ReactElement | ReactElement[] | string | string[] | number | number[];
    style?: CSSProperties;
}

export default function PageContainer(props: IProps) {
    const { children, style } = props;

    return <Container style={style}>{children}</Container>;
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 16px;
    position: static;
    direction: row;
    overflow-x: hidden;
`;
