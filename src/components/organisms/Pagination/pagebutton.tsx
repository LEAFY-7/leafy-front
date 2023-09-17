import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import { PageNationCount } from 'constants/constants';
import { ReactElement } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

/**
 * 페이지네이션 공통 컴포넌트
 * @param page 현재 페이지
 * @param totalPageCount 총 페이지 갯수
 * @param onClick 페이지 이동 마우스 이벤트
 * @returns
 */
const PageButton = ({ page, totalPageCount, onClick }): ReactElement => {
    const pageCount = [...Array(Math.ceil(totalPageCount / PageNationCount.NOTICE))].map(
        (value, index: number) => index + 1,
    );

    return (
        <PageButtonContainer>
            <ArrowButton type="button" onClick={onClick} data-name={'prevEnd'}>
                <MdKeyboardDoubleArrowLeft />
            </ArrowButton>
            <ArrowButton type="button" onClick={onClick} data-name={'prev'}>
                <IoIosArrowBack />
            </ArrowButton>
            {pageCount.map((count: number) => {
                return (
                    <p
                        data-id={count}
                        data-name={'page'}
                        onClick={onClick}
                        style={
                            //현재 페이지는 굵게 표시
                            count === page ? { fontWeight: `700` } : { fontWeight: `500` }
                        }
                        key={`pagenation_button_${count}`}
                    >
                        {count}
                    </p>
                );
            })}
            <ArrowButton type="button" onClick={onClick} data-name={'next'}>
                <IoIosArrowForward />
            </ArrowButton>
            <ArrowButton type="button" onClick={onClick} data-name={'nextEnd'}>
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
