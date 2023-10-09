import React from 'react';
import useMultipleState from 'hooks/useMultipleState';
import refController from 'utils/refController';
import previewImage from 'utils/previewImage';

/**
 * 1. 이미지 컨트롤러 커스텀 훅
 *
 * 2. I/O
 * 2.1. Input
 * 1) 삭제 시, API 요청 핸들러
 * 2) 수정 시, API 요청 핸들러
 *
 * 2.2. Output
 * 1) inputImageRef
 * 2) imageState (previewImage, imageFile, imageFormData)
 * 3) dispatch (직접 변경)
 * 4) onChange (onChange 핸들러)
 * 5) handleUpdateImage : 이미지 업데이트
 * 6) handleSaveImage : 이미지 저장
 * 7) handleRemoveImage: 이미지 삭제
 * 8) handleOpenImageUploader : 이미지 업로드 버튼
 */

enum ImageState {
    PREVIEW_IMAGE = 'previewImage',
    IMAGE_FILE = 'imageFile',
    IMAGE_FORM_DATA = 'imageFormData',
}

export default function useImageController({ initialImage = '', deleteHandler = undefined, updateHandler = undefined }) {
    const inputImageRef = React.useRef<HTMLInputElement | null>(null);
    const [imageState, dispatch, onChange] = useMultipleState({
        previewImage: '', // 미리보기 이미지
        imageFile: null, // 이미지 File 인코딩 형태
        imageFormData: null, // 이미지 FormData 형태
    });

    const onUpdateImage = React.useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        try {
            if (!files) return; // None Image
            const file = files[0];
            const formData = new FormData();
            formData.append('file', file);

            await dispatch({
                name: ImageState.IMAGE_FORM_DATA,
                value: formData,
            });
            await previewImage(file, handlePreviewImage);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onSaveImage = () => {};

    const onRemoveImage = () => {
        const isRef = refController(inputImageRef);
        if (!isRef) return;
        dispatch({ name: ImageState.PREVIEW_IMAGE, value: '' });
        inputImageRef.current.value = '';
    };

    /**
     * 이미지 업로드 작동 버튼
     */

    const onOpenImageUploader = () => {
        const isRef = refController(inputImageRef);
        if (!isRef) return;
        inputImageRef.current.click();
    };

    const handlePreviewImage = (imageUrl) => {
        dispatch({
            name: ImageState.PREVIEW_IMAGE,
            value: imageUrl,
        });
    };

    /**
     * 초기에 이미지가 있을 경우
     */
    React.useEffect(() => {
        dispatch({ name: ImageState.PREVIEW_IMAGE, value: initialImage });
    }, [initialImage]);

    console.log('초기 이미지', imageState);
    return {
        inputImageRef,
        imageState,
        dispatch,
        onChange,
        onUpdateImage, // 이미지 업데이트
        onSaveImage, // 이미지 저장
        onRemoveImage, // 이미지 삭제
        onOpenImageUploader, // 이미지 업로더 열기
    };
}
