import styled from '@emotion/styled';

export const ThumbImage = styled.img`
    width: 350px;
    height: 206px;
    object-fit: cover;
`;

export const UserProfileImage = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    border: 50%;
`;

export const TitleBox = styled.div`
    padding: 0 16px;
    min-height: 18px;
    & p {
        max-width: 318px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const AuthorBox = styled.div`
    padding: 0 16px;
    display: flex;
    gap: 2px;
`;

export const TagBox = styled.div`
    padding: 0 16px;
    display: flex;
    gap: 8px;
`;
