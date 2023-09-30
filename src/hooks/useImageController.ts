import React from 'react';
import useMultipleState from './useMultipleState';
import refController from 'utils/refController';
import previewImage from 'utils/previewImage';

export default function useImageController(
    initialState,
    { deleteHandler = undefined, updateHandler = undefined },
) {
    const [imageState, dispatch, onChange] = useMultipleState(initialState);
    const inputImageRef = React.useRef<HTMLInputElement | null>(null);

    /**
     * 미리보기 이미지 상태관리
     * @param imageUrl 이미지 URL
     */
    const handlePreviewImage = (imageUrl) => {
        dispatch({
            previewImage: imageUrl,
        });
    };

    const handleUpdateImage = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
            const { files } = event.target;
            try {
                if (!files) return; // None Image
                const file = files[0];
                const formData = new FormData();
                formData.append('file', file);
                dispatch({ [name]: formData });
                previewImage(file, handlePreviewImage);
            } catch (error) {
                console.log(error);
            }
        },
        [],
    );

    const handleSaveImage = () => {};

    const handleRemoveImage = (name: string) => {
        const isRef = refController(inputImageRef);
        if (!isRef) return;
        dispatch({ [name]: '' });
        inputImageRef.current.value = '';

        // delete 핸들러가 있을 경우에 실행 (API 요청)
        if (deleteHandler()) {
            deleteHandler();
        }
    };

    return {
        inputImageRef,
        imageState,
        dispatch,
        onChange,
        handleUpdateImage, // 이미지 업데이트
        handleSaveImage, // 이미지 저장
        handleRemoveImage, // 이미지 삭제
    };
}
