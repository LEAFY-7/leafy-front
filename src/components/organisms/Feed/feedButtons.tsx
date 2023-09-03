import styled from '@emotion/styled';
import { faComment, faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {}

const FeedButtons = (props: IProps) => {
    return (
        <Container>
            <Wrap>
                <FontAwesomeIcon icon={faComment} color="#727272" />
                <p>999+</p>
            </Wrap>
            <Wrap>
                <FontAwesomeIcon icon={faHeart} color="#DF5555" />
                <p>999+</p>
            </Wrap>
            <Wrap>
                <FontAwesomeIcon icon={faShareSquare} color="#859398" />
            </Wrap>
        </Container>
    );
};

export default FeedButtons;

const Container = styled.div`
    margin: 0;
    margin-left: auto;
    width: 200px;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    & p {
        height: 18px;
    }

    & svg {
        font-size: 20px;
    }
`;
