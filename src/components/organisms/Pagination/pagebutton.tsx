import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import { ReactElement, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
interface Props {
    target: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

/** target: 데이터 총 길이, limit: 한 페이지에 보여줄 리스트 길이, onClick: 페이지 이동**/
const PageButton = ({ limit = 1, target = 0, page, setPage }: Props): ReactElement => {
    const [offset, setOffset] = useState<number>(0);

    //한번에 보여줄 페이지네이션 개수
    const visiblePageCount: number = 8;

    // 페이지네이션 마지막 페이지 숫자
    const totalPageCount: number = Math.ceil(target / limit);

    //페이지네이션 범위만큼 숫자 생성
    const totalNavArray: number[] = [...Array(totalPageCount)].map((e, i) => (e = i + 1));

    //한번에 보여줄 페이지네이션 개수만큼 보여주는 배열
    const navNumbersArray = totalNavArray.slice(offset, offset + visiblePageCount);
    return (
        <PageButtonContainer>
            <ArrowButton
                type="button"
                disabled={offset === 0}
                onClick={() => {
                    //visiblePageCount 단위로 넘기는 버튼
                    if (offset > 1) {
                        setOffset(offset - visiblePageCount);
                    }
                    setPage(offset);
                }}
            >
                <MdKeyboardDoubleArrowLeft />
            </ArrowButton>
            <ArrowButton
                type="button"
                disabled={page === 1}
                onClick={() => {
                    //개별 page 단위로 넘기는 버튼
                    setPage(page - 1);
                    if (page < offset + visiblePageCount && offset > 0) {
                        setOffset(offset - visiblePageCount);
                    }
                }}
            >
                <IoIosArrowBack />
            </ArrowButton>
            {navNumbersArray.map((e) => {
                return (
                    <p
                        data-id={e}
                        onClick={() => {
                            setPage(e);
                        }}
                        style={
                            //현재 페이지는 굵게 표시
                            e === page ? { fontWeight: `700` } : { fontWeight: `500` }
                        }
                    >
                        {e}
                    </p>
                );
            })}
            <ArrowButton
                type="button"
                disabled={page === totalPageCount}
                onClick={() => {
                    //개별 page 단위로 넘기는 버튼
                    setPage(page + 1);
                    if (page >= offset + visiblePageCount) {
                        setOffset(offset + visiblePageCount);
                    }
                }}
            >
                <IoIosArrowForward />
            </ArrowButton>
            <ArrowButton
                type="button"
                disabled={offset >= totalPageCount - visiblePageCount}
                onClick={() => {
                    //visiblePageCount 단위로 넘기는 버튼
                    if (offset < totalPageCount - visiblePageCount) {
                        setOffset(offset + visiblePageCount);
                    }
                    setPage(offset + visiblePageCount + 1);
                    console.log(page, offset);
                }}
            >
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
