import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import { ReactElement, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

/** page: 한 페이지에 보여줄 리스트 길이, totalPageCount: 데이터 총 길이, onClick: viewModel 클릭이벤트**/
const PageButton = ({ page, totalPageCount, onClick }): ReactElement => {
    return (
        <PageButtonContainer>
            <ArrowButton type="button" disabled={onClick} onClick={onClick}>
                <MdKeyboardDoubleArrowLeft />
            </ArrowButton>
            <ArrowButton type="button" disabled={page === 1} onClick={onClick}>
                <IoIosArrowBack />
            </ArrowButton>
            {[...Array(totalPageCount)].map((e) => {
                return (
                    <p
                        data-id={e}
                        onClick={onClick}
                        style={
                            //현재 페이지는 굵게 표시
                            e === page ? { fontWeight: `700` } : { fontWeight: `500` }
                        }
                    >
                        {e}
                    </p>
                );
            })}
            <ArrowButton type="button" disabled={page === onClick} onClick={onClick}>
                <IoIosArrowForward />
            </ArrowButton>
            <ArrowButton type="button" disabled={onClick} onClick={onClick}>
                <MdKeyboardDoubleArrowRight />
            </ArrowButton>
        </PageButtonContainer>
    );
};

export default PageButton;

const PageButtonContainer = styled.div`
    display: flex;
    flex-basis: 3em;
    min-width: 0;
    flex-shrink: 0;
    flex-grow: 0;
    gap: 1em;
    align-items: center;
    margin-top: 1em;
`;

const ArrowButton = styled.button`
    border-radius: 50%;
    background: ${theme.colors.white};
    padding: 0.5em;
`;
