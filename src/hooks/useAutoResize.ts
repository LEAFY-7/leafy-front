import React, { useState, useRef, useEffect, useCallback, ChangeEvent } from 'react';

interface Props {
    height?: number;
    width?: number;
    maximumWidth?: number;
    maximumHeight?: number;
}

const useAutoResize = ({ height, width, maximumWidth = 100, maximumHeight = 100 }: Props) => {
    const [value, setValue] = useState('');
    const textRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const adjustInputWidth = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.style.width = !width ? 'auto' : width + 'px';
            inputRef.current.style.width = `${Math.min(inputRef.current.scrollWidth, maximumWidth)}px`;
        }
    }, [width, maximumWidth]);

    const adjustTextareaHeight = useCallback(() => {
        if (textRef.current) {
            textRef.current.style.height = !height ? 'auto' : height + 'px';

            const maxHeight = Math.min(textRef.current.scrollHeight, maximumHeight);
            if (textRef.current.value && textRef.current.offsetHeight < maxHeight) {
                textRef.current.style.height = `${maxHeight}px`;
            }
        }
    }, [height, maximumHeight]);

    const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    useEffect(() => {
        if (value && textRef.current) {
            adjustTextareaHeight();
        }

        if (value && inputRef.current) {
            adjustInputWidth();
        }
    }, [value, adjustTextareaHeight, adjustInputWidth]);

    return {
        value,
        inputRef,
        textRef,
        handleChange,
    };
};

export default useAutoResize;
