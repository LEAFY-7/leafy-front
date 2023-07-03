/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { AiOutlineMore } from 'react-icons/ai';

import Div from 'components/atoms/Div/default-div';
import Image from 'components/atoms/Image';
import { theme } from 'configs/style.config';
import Typography from 'components/atoms/Typograph/default-typography';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import DefaultDropdown from 'components/molecules/Dropdown/default-dropdown';

interface Props {
    imgUrl?: string;
    displayName?: string;
}

const FeedHeader = ({ imgUrl, displayName }: Props) => {
    const feedHeaderStyle = css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    `;

    const empty = css`
        width: ${theme.imgSize.sm};
        height: ${theme.imgSize.sm};
        border-radius: 50%;
        background-color: ${theme.colors.gray};
    `;
    return (
        <div css={feedHeaderStyle}>
            <Div id="feed_header" width={100}>
                {!imgUrl ? (
                    <div css={empty}></div>
                ) : (
                    <Image src={imgUrl} alt="프로필 아이콘" variant={'icon_md'} />
                )}
                <Typography variant="BODY3" to={`/user/${displayName}`} marginLeft={20}>
                    {displayName}
                </Typography>

                <DefaultDropdown header={<AiOutlineMore />} options={['하하', '호호']} />
            </Div>
        </div>
    );
};

export default FeedHeader;
