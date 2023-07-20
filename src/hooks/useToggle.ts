import { useState } from 'react';

interface ToggleProps {
    callback?: () => void; // 추가: callback prop
}
const useToggle = ({ callback = undefined }: ToggleProps) => {
    const [isOpen, toggle] = useState(false);

    const handler = () => {
        toggle((prev) => !prev);
        if (callback) {
            callback();
        }
    };
    return { isOpen, toggle, handler };
};
export default useToggle;
