import type { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

interface TableProps {}
interface TheadProps {}
interface TBodyProps {}
interface TFooterProps {}
interface TrProps {}
interface ThProps {}
interface TdProps {}

type TableWrapperProps = PropsWithChildren<TableProps> & HTMLAttributes<HTMLTableElement>;
type TableTHeadProps = PropsWithChildren<TheadProps> & HTMLAttributes<HTMLTableSectionElement>;
type TableTBodyProps = PropsWithChildren<TBodyProps> & HTMLAttributes<HTMLTableSectionElement>;
type TableTFootProps = PropsWithChildren<TFooterProps> & HTMLAttributes<HTMLTableSectionElement>;
type TableTrProps = PropsWithChildren<TrProps> & HTMLAttributes<HTMLTableRowElement>;
type TableThProps = PropsWithChildren<ThProps> & HTMLAttributes<HTMLTableCellElement>;
type TableTdProp = PropsWithChildren<TdProps> & HTMLAttributes<HTMLTableCellElement>;

const TableWrapper = ({ children, ...rest }: TableWrapperProps) => {
    return <StyledTable {...rest}>{children}</StyledTable>;
};
const TableHead = ({ children, ...rest }: TableTHeadProps) => {
    return <StyledThead {...rest}>{children}</StyledThead>;
};
const TableBody = ({ children, ...rest }: TableTBodyProps) => {
    return <StyledTbody {...rest}>{children}</StyledTbody>;
};
const TableFooter = ({ children, ...rest }: TableTFootProps) => {
    return <StyledTFooter {...rest}>{children}</StyledTFooter>;
};
const TableTr = ({ children, ...rest }: TableTrProps) => {
    return <StyledTRow {...rest}>{children}</StyledTRow>;
};
const TableTh = ({ children, ...rest }: TableThProps) => {
    return <StyledTh {...rest}>{children}</StyledTh>;
};
const TableTd = ({ children, ...rest }: TableTdProp) => {
    return <StyledTd {...rest}>{children}</StyledTd>;
};
const Table = Object.assign(TableWrapper, {
    Head: TableHead,
    Body: TableBody,
    Foot: TableFooter,
    Tr: TableTr,
    Th: TableTh,
    Td: TableTd,
});

export default Table;

const StyledTable = styled.table`
    width: 100%;
`;
const StyledThead = styled.thead``;
const StyledTbody = styled.tbody``;
const StyledTFooter = styled.tfoot``;

const StyledTRow = styled.tr`
    width: 100%;
    display: flex;
    padding: 8px;
`;

const StyledTh = styled.th`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledTd = styled.td`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
