import type { HTMLAttributes, FormEventHandler, ChangeEvent } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { FcAddImage as ImageIcon } from 'react-icons/fc';
import { AiOutlineDelete as CancelIcon } from 'react-icons/ai';
import { theme } from 'configs/ui.config';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import useImageController from 'hooks/useImageController';
import { publicUrlConstants } from 'constants/constants';

import Flex from 'components/atoms/Group/flex';
import RoundButton from 'components/atoms/Button/round-button';
import Div from 'components/atoms/Div/div';

interface ContainerProps {
    userImageDto: UserResponseDataDto['profileImage'];
    handlePostMyImageFile: (imageFile: FormData) => void;
    handleSaveImage: (imageFile: File) => void;
    handleDeleteMyImage?: () => void;
}

type Props = React.PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;

const DEFAULT_IMAGE_URL = `${publicUrlConstants.default}/default-user-img.svg`;
const ImageContainer = ({ userImageDto, handleSaveImage, handlePostMyImageFile, handleDeleteMyImage }: Props) => {
    const {
        inputImageRef,
        imageState: { previewImage, imageFile, imageFormData },
        onRemoveImage,
        onUpdateImage,
        onOpenImageUploader,
    } = useImageController({
        initialImage: userImageDto,
        deleteHandler: handleDeleteMyImage, // 삭제 API 요청
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handlePostMyImageFile(imageFormData);
            }}
            style={{ position: 'relative' }}
        >
            <Flex.Default direction="column" justifyContent="center" alignItems="center" style={{ width: '100%' }}>
                {/* 유저 이미지가 없을 경우  */}
                {!userImageDto && <Image src={previewImage ? previewImage : DEFAULT_IMAGE_URL} />}
                {/* 유저 이미지가 없을 경우 */}

                {/* 유저 이미지가 있을 경우 */}
                {userImageDto && <Image src={previewImage ? previewImage : userImageDto} />}
                {/* 유저 이미지가 있을 경우 */}

                {/* 이미지 업로드 */}
                <input type="file" accept="image/*" ref={inputImageRef} multiple onChange={onUpdateImage} style={{ display: 'none' }} />
                {/* 이미지 업로드 */}

                <ImageAddButton size="xxs" onClick={onOpenImageUploader}>
                    <ImageIcon />
                </ImageAddButton>
                {/* 삭제 버튼 */}
                <ImageDeleteButton size="xxs" onClick={onRemoveImage}>
                    <CancelIcon />
                </ImageDeleteButton>
                {/* 삭제 버튼 */}

                <RoundButton variant="default" isBorder type="submit">
                    사진 저장
                </RoundButton>
            </Flex.Default>
        </form>
    );
};

export default ImageContainer;

const Image = styled.img`
    border: 1px solid ${theme.colors.grey};
    border-radius: 50%;
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
        height: 100%;
    }

    ${theme.mediaQuery.smMobile} {
        width: 250px;
        height: 250px;
    }
`;
const DefaultIconButton = styled(Div.Drop)`
    position: absolute;
    cursor: pointer;
`;

const ImageAddButton = styled(DefaultIconButton)`
    transform: translate(190%, 170%);

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: block;
    }
`;

const ImageDeleteButton = styled(DefaultIconButton)`
    right: 10%;
    top: 5%;
`;
