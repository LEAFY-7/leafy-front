import type { HTMLAttributes, FormEventHandler, ChangeEvent } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { FcAddImage as ImageIcon } from 'react-icons/fc';
import { theme } from 'configs/ui.config';

import Flex from 'components/atoms/Group/flex';
import RoundButton from 'components/atoms/Button/round-button';
import Div from 'components/atoms/Div/div';
import axios from 'axios';
import tokenModule from 'modules/token.module';
import { UserDto } from 'dto/user/user.dto';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import { Alert } from 'modules/alert.module';
import useImageController from 'hooks/useImageController';

const publicURL = process.env.PUBLIC_URL;

interface ContainerProps {
    userDto: UserResponseDataDto;
    handlePostMyImageFile: (imageFile: FormData) => void;
    handleSaveImage: (imageFile: File) => void;
    handleDeleteMyImage?: () => void;
}

type Props = React.PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;

/**
 * 1. make Multiple's state about image or custom hooks
 * 2. make image-container as reuseable Components
 * 3.
 */

const DEFAULT_IMAGE_URL = `${publicURL}/image/default/default-user-img.svg`;
const ImageContainer = ({ userDto, handleSaveImage, handlePostMyImageFile, handleDeleteMyImage }: Props) => {
    const { inputImageRef, imageState, handleRemoveImage } = useImageController(
        {
            previewImage: '',
            imageFile: null,
            imageFormData: null,
        },
        {
            deleteHandler: handleDeleteMyImage,
        },
    );

    // 없음
    const [imageFormData, setImageFormData] = React.useState<FormData>(null);
    // 없음

    const [imageFile, setImageFile] = React.useState<File>(null);
    const [image, setImage] = React.useState<string>('');
    let inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleUpdateImage = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (!e.target.files) return;
            const { files } = e.target;
            const file = files[0];

            const formData: any = new FormData();
            formData.append('file', file);
            setImageFile(formData);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result !== 'string') return;
                setImage(reader.result);
                setImageFile(file);
            };
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleSave = () => {
        if (!imageFormData) {
            Alert.alert('이미지 파일이 없습니다. ');
        }
        handlePostMyImageFile(imageFormData);
    };
    const handleDeleteImage = () => {
        if (!inputRef.current) return;
        setImage('');
        inputRef.current.value = '';
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(imageFile);
                handleSaveImage(imageFile);
            }}
        >
            <Flex.Default
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ width: '100%' }}
            >
                <input type="file" accept="image/*" ref={inputRef} onChange={handleUpdateImage} />
                <button onClick={() => handleRemoveImage('previewImage')}>삭제</button>
                {/* 유저 이미지가 없을 경우  */}
                {!userDto.profileImage && <Image src={image ? image : DEFAULT_IMAGE_URL} />}
                {/* 유저 이미지가 없을 경우 */}
                {/* 유저 이미지가 있을 경우 */}
                {userDto.profileImage && <Image src={userDto.profileImage} />}
                {/* 유저 이미지가 있을 경우 */}
                <ImageBubbleButton size="xxs" onClick={handleSave}>
                    <ImageIcon />
                </ImageBubbleButton>
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

const ImageBubbleButton = styled(Div.Drop)`
    position: absolute;
    transform: translate(160%, 160%);
    cursor: pointer;

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: block;
    }
`;
