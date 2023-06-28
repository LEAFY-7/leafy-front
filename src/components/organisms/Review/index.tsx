import React from 'react';
import { BsFillSendFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { setReviewList } from '@redux/feature/userSlice';
import * as Styled from './index.styles';

import TextAvatar from '@components/atoms/Avatar/text-avatar';
import Box from '@components/atoms/Box/default-box';
import Button from '@components/atoms/Button/rectangle-button';
import Flex from '@components/atoms/Group/flex';
import Image from '@components/atoms/Image';
import Textarea from '@components/atoms/Textarea';
import Typography from '@components/atoms/Typograph/default-typography';
import useAutoResizeTextarea from '@hooks/useAutoResizeTextarea';

type HeaderProps = {
    imgUrl?: string;
    _imgUrl?: string;
    displayName?: string;
};
interface ReviewWrite {
    handleSubmit: (value: string) => void;
}
interface ReviewItem {
    review?: string;
}

interface ReviewProps extends ReviewItem {
    id?: string;
    author: HeaderProps;
    variant: 'me' | 'people';
    desc?: string;
}

const Review: React.FC<ReviewProps> = ({
    id,
    author: { imgUrl, displayName, _imgUrl },
    variant,
    review = '',
    desc = '',
}) => {
    const dispatch = useDispatch();

    const handleSubmit = (value: string) => {
        dispatch(
            setReviewList({
                id,
                author: { _imgUrl, imgUrl, displayName },
                imgUrl,
                desc: value,
            }),
        );
    };

    return (
        <Box>
            <ReviewHeader imgUrl={imgUrl || _imgUrl} displayName={displayName} />
            {variant === 'me' && <ReviewWrite handleSubmit={handleSubmit} />}
            {variant === 'people' && <ReviewItem review={review || desc} />}
        </Box>
    );
};

export default Review;

const ReviewHeader: React.FC<HeaderProps> = ({ imgUrl, displayName }) => {
    return (
        <Styled.Header>
            <Box width={100} display="flex" justifyContent="left" alignItems="center">
                {!imgUrl ? (
                    <TextAvatar text="tk" />
                ) : (
                    <Image src={imgUrl} alt="프로필 아이콘" variant={'icon_md'} />
                )}
                <Typography variant="BODY3" marginLeft={20}>
                    {displayName}
                </Typography>
            </Box>
        </Styled.Header>
    );
};

const ReviewWrite: React.FC<ReviewWrite> = ({ handleSubmit }) => {
    const { value, textareaRef, handleChange } = useAutoResizeTextarea();

    const onSubmit = async () => {
        await handleSubmit(value);
        if (!textareaRef.current?.value) return;
        textareaRef.current.value = '';
    };

    return (
        <Flex direction="column" justifyContent="center" alignContent="center">
            <Textarea
                name="review"
                value={value}
                ref={textareaRef}
                onChange={handleChange}
                width={100}
                height={100}
                placeholder="댓글을 입력해주세요."
                paddingLeft={30}
                paddingRight={30}
                paddingTop={30}
                paddingBottom={30}
            />
            <Box width={100} display="flex" justifyContent="right">
                <Button variant="red" size="md" onClick={onSubmit} leftIcon={<BsFillSendFill />}>
                    입력
                </Button>
            </Box>
        </Flex>
    );
};

const ReviewItem: React.FC<ReviewItem> = ({ review = '' }) => {
    return (
        <Box paddingLeft={60} paddingTop={10} paddingRight={10} paddingBottom={40}>
            <Typography variant="BODY3">{review}</Typography>
        </Box>
    );
};
