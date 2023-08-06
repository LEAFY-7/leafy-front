import styled from '@emotion/styled';
import Button from 'components/atoms/Button/button';
import { MouseEventHandler, ReactElement } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
interface Props {
    length: number;
    limit: number;
    // onClick: MouseEventHandler;
}
/** length: 데이터 총 길이, limit: 한 페이지에 보여줄 리스트 길이, onClick: 페이지 이동**/
const PageButton = ({ length, limit }: Props): ReactElement => {
    const handleClickButton = (e) => {
        const id = e.currentTarget.dataset;
    };
    const perPageList = Math.ceil(length / limit);
    const countArray = [...Array(perPageList)].map((e, i) => (e = i + 1));
    return (
        <PageButtonContainer>
            <Button
                variant="basic"
                state="default"
                type="button"
                condition={true}
                size="s"
                text="prev"
                showText={false}
                showIcon={true}
                leftIcon={<IoIosArrowBack />}
            />
            {countArray.map((e) => {
                return (
                    <p data-id={e} onClick={handleClickButton}>
                        {e}
                    </p>
                );
            })}
            <Button
                variant="basic"
                state="default"
                type="button"
                condition={true}
                size="s"
                text="next"
                showText={false}
                showIcon={true}
                leftIcon={<IoIosArrowForward />}
            />
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
`;
