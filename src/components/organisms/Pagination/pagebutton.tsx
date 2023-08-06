import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import { MouseEventHandler, ReactElement } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
interface Props {
    target: number;
    limit: number;
    // onClick: MouseEventHandler;
}
/** limit: 데이터 총 길이, target: 한 페이지에 보여줄 리스트 길이, onClick: 페이지 이동**/
const PageButton = ({ target, limit }: Props): ReactElement => {
    const handleClickButton = (e) => {
        const id = e.currentTarget.dataset;
    };
    const perPageList = Math.ceil(limit / target);
    const countArray = [...Array(perPageList)].map((e, i) => (e = i + 1));
    return (
        <PageButtonContainer>
            <ArrowButton type="button">
                <IoIosArrowBack />
            </ArrowButton>
            {countArray.map((e) => {
                return <p data-id={e}>{e}</p>;
            })}
            <ArrowButton type="button">
                <IoIosArrowForward />
            </ArrowButton>
        </PageButtonContainer>
    );
};

export default PageButton;

const PageButtonContainer = styled.div`
    display: flex;
    flex-basis: 2em;
    min-width: 0;
    flex-shrink: 0;
    flex-grow: 1;
    gap: 1.5em;
    align-items: center;
    margin-top: 1em;
`;

const ArrowButton = styled.button`
    border-radius: 50%;
    background: ${theme.colors.white};
    padding: 0.5em;
`;
