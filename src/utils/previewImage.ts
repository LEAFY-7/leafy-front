export default function previewImage(file: File, callback) {
    try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result !== 'string') return;
            callback(reader.result);
        };
    } catch (error) {
        console.error('이미지가 없습니다.');
    }
}
