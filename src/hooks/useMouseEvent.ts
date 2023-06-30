import { useState } from 'react';

const useMouseEvent = () => {
    const [isShow, setIsShow] = useState(false);

    const handleShow = () => {
        setIsShow(true);
    };

    const handleMouseEnter = () => {
        setIsShow(true);
    };
    const handleMouseLeave = () => {
        setIsShow(false);
    };

    return {
        isShow,
        setIsShow,
        handleShow,
        handleMouseEnter,
        handleMouseLeave,
    };
};
export default useMouseEvent;
