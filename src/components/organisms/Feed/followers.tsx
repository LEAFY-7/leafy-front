import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import { UserDto } from 'dto/user/user.dto';

interface IProps {
    list: UserDto[];
}

const Followers = ({ list }: IProps) => {
    return (
        <Container>
            {list.map((user: UserDto, key: number) => {
                return (
                    <LazyImage
                        src={user.profileImage}
                        alt={`follower_profile_${key}`}
                        key={`follower_profile_${key}`}
                        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                );
            })}
        </Container>
    );
};

export default Followers;

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;

    & img {
        border: 4px solid #00927a;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;
