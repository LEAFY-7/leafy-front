import { useState } from 'react';

type Callback = () => void;

const useToggle = (callback?: Callback) => {
    const [isOn, setIsOn] = useState(false);
    const handler = () => {
        setIsOn((prev) => !prev);
        if (typeof callback !== 'undefined') {
            callback();
        }
    };
    return { isOn, setIsOn, handler };
};
export default useToggle;
