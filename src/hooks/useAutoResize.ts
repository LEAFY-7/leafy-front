import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

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

    useEffect(() => {
        if (value && textRef.current) {
            adjustTextareaHeight();
        }

        if (value && inputRef.current) {
            adjustInputWidth();
        }
    }, [value]);

    const adjustInputWidth = () => {
        if (inputRef.current) {
            inputRef.current.style.width = typeof width === undefined ? 'auto' : width + 'px';
            inputRef.current.style.width = `${Math.min(inputRef.current.scrollWidth, maximumWidth)}px`;
        }
    };
    const adjustTextareaHeight = () => {
        if (textRef.current) {
            textRef.current.style.height = typeof height === undefined ? 'auto' : height + 'px';
            textRef.current.style.height = `${Math.min(textRef.current.scrollHeight, maximumHeight)}px`;
        }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        inputRef,
        textRef,
        handleChange,
    };
};
export default useAutoResize;
